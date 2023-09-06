import axios from "axios";
import"../css/popup.css"
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import validaterecommendationschema from "../validation/validetContact";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import Smile from "./PopupSmile";
import PopupSmile from "./PopupSmile";

const Recommendation = () => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [name, setname] = useState("");
  const [inputState, setInputState] = useState({
    recommendations: "",
  });
  const [inputsErrorState, setInputsErrorState] = useState(null);
  const navigate = useNavigate;
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  const id = jwt_decode(localStorage.token)._id;
 
  useEffect(() => {
    (async () => {
      
      try {
        const { data } = await axios.get("/users/" + id);
        const userid = { ...data };
        const nameUser = userid.firstName + " " + userid.lastName;
        setname(nameUser);
      } catch (err) {
        toast.error("There is an error," + "" + err.response.data);
      }
    })();
  }, []);
  const AddRecommendation = async () => {
    try {
      await axios.patch("/users/contact/" + id, inputState);
      /*    handleClose();  */
      setTimeout(handleClose, 5000);
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  /*  const handelRecommendationsSave = () => {
    AddRecommendation();
   
  }; */
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const newjoiResponse = validaterecommendationschema(newInputState);
    setInputsErrorState(newjoiResponse);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  return (
    <div>
      <Button variant="warning" className="buttonhome" onClick={handleShow}>
        We were ranked
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="colinput">
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              {/* <Form.Control type="Name" autoFocus /> */}
              <Form.Control type="text" value={name} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <label htmlFor="rating">Rate the restaurant:</label>
              <ReactStars
                count={5}
                onChange={handleRatingChange}
                size={24}
                activeColor="red"
                value={rating}
              />
              <Form.Label>My Recommendation</Form.Label>
              <Form.Control
                id="recommendations"
                as="textarea"
                // value={inputState.recommendations}
                onChange={handleInputChange}
                rows={3}
                placeholder="my recommendation"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose} className="colinput">
            Close
          </Button>

           <Link
          
            onClick={AddRecommendation}
         
          
          > 
            <PopupSmile />
         </Link> 
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Recommendation;
