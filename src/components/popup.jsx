import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validateOrders from "../validation/orderValidtion";
import ROUTES from "../routes/ROUTES";

const PopupExample = () => {
  const [inputState, setInputState] = useState({
    name: "",
    phone: "",
    city: "",
    street: "",
    houseNumber: "",
    takeAway: false,
    isBusiness: false,
  });
  console.log(inputState);
  const [inputsErrorState, setInputsErrorState] = useState(null);
  console.log(inputsErrorState);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handeleBtnClick = async (ev) => {
    try {
      const joiResponse = validateOrders(inputState);
      setInputsErrorState(joiResponse);

      if (joiResponse) {
        toast.error("Invalid user information");
        return;
      }
      if (inputState.isBusiness === "") {
        inputState.isBusiness = false;
      }
      if (inputState.takeAway === "") {
        inputState.takeAway = false;
      }
      await axios.post("/orders", {
        name: inputState.name,
        phone: inputState.phone,
        city: inputState.city,
        street: inputState.street,
        houseNumber: inputState.houseNumber,
        isBusiness: inputState.isBusiness,
        takeAway: inputState.takeAway,
      });
      toast.success("The registration was done successfully");
      handleClose();
    } catch (err) {
      toast.error("Invalid user information");
    }
  };
  const handleInputChange = (ev) => {
    console.log(ev.target.value);
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const joiResponse = validateOrders(newInputState);
    setInputsErrorState(joiResponse);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       
      <Button variant="warning" onClick={handleShow} className="buttonhome">
        Click to order
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="colinput">
          <Modal.Title>my order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control
              required
              size="sm"
              id="name"
              label="Name"
              name="name"
              className="colinput"
              autoComplete="name"
              value={inputState.name}
              onChange={handleInputChange}
              /*  isValid={inputState.name}*/
              isInvalid={inputsErrorState && inputsErrorState.name}
            />
            {inputsErrorState && inputsErrorState.name && (
              <Form.Control.Feedback type="invalid">
                {inputsErrorState.name.map((item) => (
                  <div key={"name-errors" + item}>{item}</div>
                ))}
              </Form.Control.Feedback>
            )}
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text>phone</InputGroup.Text>
            <Form.Control
              required
              size="sm"
              id="phone"
              className="colinput"
              autoComplete="phone"
              value={inputState.phone}
              onChange={handleInputChange}
              /*  isValid={inputState.phone} */
              isInvalid={inputsErrorState && inputsErrorState.phone}
            />
            {inputsErrorState && inputsErrorState.phone && (
              <Form.Control.Feedback type="invalid">
                {inputsErrorState.phone.map((item) => (
                  <div key={"phone-errors" + item}>{item}</div>
                ))}
              </Form.Control.Feedback>
            )}
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text>city</InputGroup.Text>
            <Form.Control
              required
              size="sm"
              id="city"
              className="colinput"
              autoComplete="city"
              value={inputState.city}
              onChange={handleInputChange}
              /*  isValid={inputState.city} */
              isInvalid={inputsErrorState && inputsErrorState.city}
            />
            {inputsErrorState && inputsErrorState.city && (
              <Form.Control.Feedback type="invalid">
                {inputsErrorState.city.map((item) => (
                  <div key={"city-errors" + item}>{item}</div>
                ))}
              </Form.Control.Feedback>
            )}
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text>street</InputGroup.Text>
            <Form.Control
              required
              size="sm"
              id="street"
              className="colinput"
              autoComplete="street"
              value={inputState.street}
              onChange={handleInputChange}
              /* isValid={inputState.street} */
              isInvalid={inputsErrorState && inputsErrorState.street}
            />
            {inputsErrorState && inputsErrorState.street && (
              <Form.Control.Feedback type="invalid">
                {inputsErrorState.street.map((item) => (
                  <div key={"street-errors" + item}>{item}</div>
                ))}
              </Form.Control.Feedback>
            )}
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text>houseNumber</InputGroup.Text>
            <Form.Control
              required
              size="sm"
              id="houseNumber"
              className="colinput"
              autoComplete="houseNumber"
              value={inputState.houseNumber}
              onChange={handleInputChange}
              /*   isValid={inputState.houseNumber} */
              isInvalid={inputsErrorState && inputsErrorState.houseNumber}
            />
            {inputsErrorState && inputsErrorState.houseNumber && (
              <Form.Control.Feedback type="invalid">
                {inputsErrorState.houseNumber.map((item) => (
                  <div key={"houseNumber-errors" + item}>{item}</div>
                ))}
              </Form.Control.Feedback>
            )}
          </InputGroup>

          <Button variant="warning" onClick={handleClose} className="colinput">
            Save Changes
          </Button>

          <Button variant="warning" onClick={handleClose} className="colinput">
            Save Changes
          </Button>
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

export default PopupExample;
