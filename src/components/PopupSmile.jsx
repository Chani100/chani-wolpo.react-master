import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validateOrders from "../validation/orderValidtion";
import ROUTES from "../routes/ROUTES";
import useLoggedIn from "../hooks/useLoggedIn";
import PopupComponents from "./PopupComponent";
import { useSelector } from "react-redux";

const PopupSmile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="warning" onClick={handleShow} className="buttonhome">
        Click to order
      </Button>

      <Modal className="divPopupSmile" show={show} onHide={handleClose}>
        <div className="animationContainer">
          <Image
            className="imgPopupSmile"
            src="../image/smileImge.jpg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default PopupSmile;
