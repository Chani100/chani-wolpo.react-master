import { Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import RegisterCom from "../components/RegisterCom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validateRegisterSchema from "../validation/registerValidation";
import axios from "axios";
import ROUTES from "../routes/ROUTES";
import { toast } from "react-toastify";
import "../css/pages.css"

const RegisterPage = () => {
  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    imageUrl: "",
    imageAlt: "",
    phone: "",
    email: "",
    password: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    biz: false,
  });
  const [inputsErrorState, setinputsErrorState] = useState([]);
  const navigate = useNavigate();
  const handeleBtnClick = async (ev) => {
    try {
      const joiResponse = validateRegisterSchema(inputState);
      setinputsErrorState(joiResponse);
 toast.error("Invalid user information");
      if (joiResponse) {
        return;
      }
      if (inputState.imageUrl == "") {
        inputState.imageUrl =
          "https://cdn.pixabay.com/photo/2020/04/07/17/01/chicks-5014152_960_720.jpg";
      }
      if (inputState.imageAlt == "") {
        inputState.imageAlt = "yellow fluffy chickens";
      }
      await axios.post("/users", {
       firstName: inputState.firstName,
        lastName: inputState.lastName,
        phone: inputState.phone,
        email: inputState.email,
        password: inputState.password,
        imageUrl: inputState.imageUrl,
        imageAlt: inputState.imageAlt,
        city: inputState.city,
        street: inputState.street,
        houseNumber: inputState.houseNumber,
        zipCode: inputState.zipCode,
        biz: inputState.biz,
         
      });
  navigate(ROUTES.LOGIN); 
    } catch (err) {


    }
 
  };
   const cancel = () => {
     navigate(ROUTES.HOME);
   };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const joiResponse = validateRegisterSchema(newInputState);
    setinputsErrorState(joiResponse);
  };
  const handleBizChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState["biz"] = ev.target.checked;
    setInputState(newInputState);
  };
  
  const keys = Object.keys(inputState);

  return (
    <Container>
      <h1 className="title">register</h1>
      <Form>
        <Col md={{ span: 6, offset: 3 }} xs={12}>
          <Row className="mb-3">
            {keys.map((item) => (
              <RegisterCom
                key={item}
                item={item}
                inputState={inputState}
                onChange={handleInputChange}
                inputsErrorState={inputsErrorState}
              />
            ))}
          </Row>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              id="biz"
              className="biz"
              label="I want to receive updates and exclusive offers, plus a 5% discount on every order"
              onClick={handleBizChange}
            />
          </Form.Group>
          <Row className="mb-3">
            <Button
              variant="warning"
              type="submit"
              onClick={cancel}
              className="colinput"
            >
              CANCEL
            </Button>
          </Row>
          <Row className="mb-3">
            <Button
              className="colinput"
              variant="warning"
              onClick={handeleBtnClick}
              /* disabled={inputsErrorState !== null}  */
            >
              Sign Up
            </Button>
          </Row>
        </Col>
      </Form>
    </Container>
  );
};

export default RegisterPage;
