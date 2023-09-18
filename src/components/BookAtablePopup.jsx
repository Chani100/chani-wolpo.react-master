import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validatebookAtable from "../validation/bookAtableValidation";
import ROUTES from "../routes/ROUTES";
import useLoggedIn from "../hooks/useLoggedIn";
import"../css/popup.css"
import { useSelector } from "react-redux";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import PopupComponents from "./PopupComponent";

const PopupBook = () => {
   const isLoggedIn = useSelector(
     (bigPieBigState) => bigPieBigState.authSlice.isLoggedIn
   );
  const [inputState, setInputState] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    numOfPeople: "",
  });
  const [from, setFrom] = useState(false);

  const [inputsErrorState, setInputsErrorState] = useState(null);
  
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  let OrderNumber;

  const handeleBtnContinued = () => {
    setFrom(!from);
  };

  const handeleBtnClick = async (ev) => {
    try {
      const joiResponse = validatebookAtable(inputState);
      setInputsErrorState(joiResponse);

      if (joiResponse) {
        toast.error("Invalid user information");
        return;
      }

      await axios.post("/bookAtable", inputState);
      toast.success("The registration was done successfully");
      handleClose();
      setInputState({
        name: "",
        phone: "",
        date: "",
        time: "",
        numOfPeople: "",
      });
      setFrom(!from);
      navigate(ROUTES.HOME);
    } catch (err) {
      toast.error("Invalid user information");
    }
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const joiResponse = validatebookAtable(newInputState);
    setInputsErrorState(joiResponse);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const dayOfWeek = today.getDay();
    const currentDate = `${year}-${month}-${day}`;

    if (dayOfWeek === 5 || dayOfWeek === 6) {
      return "";
    } else {
      return currentDate;
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlButtenOrder = () => {
    if (!payload) {
      toast.warning(
        "Note that registration and login are required to place an order"
      );
      return;
    }
    setShow(true);
  };
 const generateTimeOptions = () => {
    const selectedDate = new Date(inputState.date);
    const currentDate = new Date();

    let startHour = 11;
    let endHour = 23;

    
    if (
      selectedDate.getDate() === currentDate.getDate() &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear() 
    ) {
      const currentHour = currentDate.getHours();
      startHour = currentHour < 11 ? 11 : currentHour;
    }

    const options = [];

    for (let hour = startHour; hour <= endHour; hour++) {
      const formattedHour = String(hour).padStart(2, "0");
      options.push(
        <option
          key={formattedHour}
          /* value={formattedHour} */ value={`${formattedHour}:00`}
        >
          {formattedHour}:00
        </option>
      );
    }

    return options;
  }; 

  const formatTime = (hour) => {
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour > 12 ? hour - 12 : hour;
    return `${formattedHour}:00 ${ampm}`;
  };

  /* const keys = Object.keys(inputState); */
  const keys = ["name", "phone"];
  return (
    <div>
      {isLoggedIn ? (
        <Button
          variant="warning"
          onClick={handlButtenOrder}
          className="buttonhome"
        >
          Book a table
        </Button>
      ) : (
        ""
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="colinput">
          <Modal.Title> Book a table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <BookTable /> */}
          <div className="table-page">
            <Form>
              <Row className="mb-3">
                <Col xs={12} md={4}>
                  <Form.Group /* controlId="formDate" */>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      id="date"
                      min={getCurrentDate()}
                      /*  max={getCurrentDate()} */
                      value={inputState.date}
                      onChange={
                        /* (e) => setDate(e.target.value) */ handleInputChange
                      }
                      required
                      className="inputBookTable"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                  <Form.Group /* controlId="formTime" */>
                    <Form.Label>Time</Form.Label>
                    <Form.Select
                      type="time"
                      id="time"
                      as="select"
                      value={inputState.time }
                      onChange={
                        handleInputChange
                      } /*{(e) => setTime(e.target.value)} */
                      required
                      className="inputBookTable"
                    >
                      <option value="">Time</option>
                      {generateTimeOptions()}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                  <Form.Group /* controlId="formNumOfPeople" */>
                    <Form.Label>Number of People</Form.Label>
                    <Form.Select
                      id="numOfPeople"
                      as="select"
                      value={inputState.numOfPeople}
                      onChange={
                        /* (e) => setNumOfPeople(e.target.value) */ handleInputChange
                      }
                      required
                      className="inputBookTable"
                      //   style={{ height: '120px', overflowY: 'auto' }}
                    >
                      {Array.from({ length: 10 }, (v, i) => i + 1).map(
                        (num) => (
                          <option key={num} value={num}>
                            {num} Guests
                          </option>
                        )
                      )}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Col md={{ span: 6, offset: 4 }} xs={12}>
              <Button
                variant="warning"
                onClick={handeleBtnContinued}
                className="colinput"
              >
                <BsArrowRightShort />
                <BsArrowRightShort />
                Continued
                <BsArrowLeftShort />
                <BsArrowLeftShort />
              </Button>
            </Col>
          </div>
          {from ? (
            <Form>
              {keys.map((item) => (
                <PopupComponents
                  key={item}
                  item={item}
                  inputState={inputState}
                  onChange={handleInputChange}
                  inputsErrorState={inputsErrorState}
                />
              ))}
            </Form>
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={handeleBtnClick}
            className="colinput"
          >
            Book A Table
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
