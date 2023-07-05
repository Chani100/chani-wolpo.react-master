import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validateBook from "../validation/bookAtableValidation";
import ROUTES from "../routes/ROUTES";
import useLoggedIn from "../hooks/useLoggedIn";
import PopupComponents from "./PopupComponent";

const PopupBook = () => {
  const [inputState, setInputState] = useState({
    name: "",
    phone: "",
    email: "",
    isBusiness: false,
  });
  const [inputsErrorState, setInputsErrorState] = useState(null);
  const [show, setShow] = useState(false);
  /*  const logdin = useLoggedIn; */
  const navigate = useNavigate();
  const handeleBtnClick = async (ev) => {
    try {
      const joiResponse = validateBook(inputState);
      setInputsErrorState(joiResponse);
      console.log(joiResponse);
      if (joiResponse) {
        toast.error("Invalid user information");
        return;
      }

      await axios.post("/bookAtable", {
        name: inputState.name,
        phone: inputState.phone,
        email: inputState.email,
        isBusiness: inputState.isBusiness,
      });
      toast.success("The registration was done successfully");
      handleClose();
       navigate(ROUTES.MENU);
    } catch (err) {
      console.log("err", err);
      toast.error("Invalid user information");
    }
  };
  const handleIsBusinessChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState["isBusiness"] = ev.target.checked;
    setInputState(newInputState);
  };
  const handleInputChange = (ev) => {
    console.log(ev.target.value);
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const joiResponse = validateBook(newInputState);
    setInputsErrorState(joiResponse);
  };
  const keys = Object.keys(inputState);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="warning" onClick={handleShow} className="buttonhome">
        Book A Table
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="colinput">
          <Modal.Title>Book A Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {keys.map((item) => (
            <PopupComponents
              key={item}
              item={item}
              inputState={inputState}
              onChange={handleInputChange}
              inputsErrorState={inputsErrorState}
            />
          ))}
          <Form.Group className="mb-3" id="isBusiness">
            <Form.Check
              type="checkbox"
              label="isBusiness"
              value={inputState.isBusiness}
              color="warning"
              onClick={handleIsBusinessChange}
            />
          </Form.Group>
          {/* <Button variant="warning" onClick={handleClose} className="colinput">
            Save Changes
          </Button>

          <Button variant="warning" onClick={handleClose} className="colinput">
            Save Changes
          </Button> */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={handeleBtnClick}
            className="colinput"
          >
            orders
          </Button>
          <Button
            variant="warning"
            type="submit"
            onClick={handleClose}
            className="colinput"
          >
            Cansel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PopupBook;
