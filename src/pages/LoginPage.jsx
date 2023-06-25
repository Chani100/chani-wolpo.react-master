import { Container, FloatingLabel } from "react-bootstrap";
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
import useLoggedIn from "../hooks/useLoggedIn";
import validateLoginSchema from "../validation/loginValidation";
import { toast } from "react-toastify";
const LoginPage = () => {
  const [inputState, setInputState] = useState({
    email: "",
    password: "",
  });
  const [inputsErrorState, setInputsErrorsState] = useState(null);
  const loggedIn = useLoggedIn();
  const navigate = useNavigate();
  const joiResponse = validateLoginSchema(inputState);
  const handeleBtnClick = async (ev) => {
    try {
      setInputsErrorsState(joiResponse);
      if (joiResponse) {
        toast.error("Invalid user information");
        return;
      }
      const { data } = await axios.post("/users/login", inputState);
      localStorage.setItem("token", data.token);
      loggedIn();
      navigate(ROUTES.HOME);
    } catch (err) {
      toast.error("Unregistered user");
    }
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const newjoiResponse = validateLoginSchema(newInputState);
    setInputsErrorsState(newjoiResponse);
  };
  const shabmit = () => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState = {
      email: "",
      password: "",
    };
    setInputState(newInputState);
    const joiResponse = validateLoginSchema(inputState);
    if (!joiResponse) {
      return;
    }
    let newjoiResponse = JSON.parse(JSON.stringify(joiResponse));
    Object.keys(newjoiResponse).forEach((index) => {
      newjoiResponse[index] = "";
      inputsErrorState(newjoiResponse);
    });
  };
  const cancel = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <Container component="main" maxWidth="xs">
      <h1>login</h1>
      <Form>
        <Col xs={12} md={6}>
          <Form.Group as={Col} controlid="email">
            <FloatingLabel
              controlid="floatingInput"
              label={"email" + "*"}
              className="mb-3"
            >
              {/* <Form.Control type={item} placeholder={item} /> */}
              <Form.Control
                name="email"
                id="email"
                type="email"
                value={inputState ? inputState : ""}
                onChange={handleInputChange}
                isValid={inputState}
                isInvalid={inputsErrorState && inputsErrorState}
              />
              {inputsErrorState && inputsErrorState && (
                <Form.Control.Feedback type="invalid">
                  {inputsErrorState.email.map((item) => (
                    <div key={"email-errors" + item}>{item}</div>
                  ))}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlid="password">
            <FloatingLabel
              controlid="floatingInput"
              label={"password" + "*"}
              className="mb-3"
            >
              {/* <Form.Control type="password" placeholder="password" /> */}
              <Form.Control
                name="password"
                id="password"
                type="password"
                value={inputState ? inputState : ""}
                onChange={handleInputChange}
                isValid={inputState}
                isInvalid={inputsErrorState && inputsErrorState}
              />
              {inputsErrorState && inputsErrorState && (
                <Form.Control.Feedback type="invalid">
                  {inputsErrorState.password.map((item) => (
                    <div key={"password-errors" + item}>"password"</div>
                  ))}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Form.Group>

          <Row className="mb-3">
            <Button variant="primary" type="submit" onClick={cancel}>
              CANCEL
            </Button>
          </Row>
          <Row className="mb-3">
            <Button
              variant="primary"
              /*   type="submit" */
              onClick={handeleBtnClick}
              disabled={inputsErrorState !== null}
            >
              Login
            </Button>
          </Row>
        </Col>
      </Form>
    </Container>
  );
};

export default LoginPage;
