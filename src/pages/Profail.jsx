import { useNavigate, useParams } from "react-router-dom";

import ROUTES from "../routes/ROUTES";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";

import RegisterCom from "../components/RegisterCom";
import validateProfailSchema from "../validation/profailValidat";

const Profail = () => {
  const id = jwt_decode(localStorage.token)._id;

  const [inputState, setInputState] = useState(null);
  const [inputsErrorState, setinputsErrorState] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/users/" + id);
        let newInputState = {
          ...data,
        };
       delete newInputState.recommendations;
        delete newInputState.isAdmin;
        delete newInputState.password;
        delete newInputState._id;
        delete newInputState.createdAt;
        delete newInputState.__v;
        setInputState(newInputState);
      } catch (err) {}
    })();
  }, [id]);
  const handeleBtnClick = async (ev) => {
    try {
      const joiResponse = validateProfailSchema(inputState);
      setinputsErrorState(joiResponse);
      if (!joiResponse){
        await axios.put("/users/" + id, inputState);

        toast.success("The change was successfully saved");
        navigate(ROUTES.LOGIN);
      }
    } catch (err) {
  
      toast.error("There is an error," + "" + err.response.data.message);
    }
  };
  const handleChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const joiResponse = validateProfailSchema(newInputState);
    setinputsErrorState(joiResponse);
  };
  if (!inputState) {
    return <Spinner animation="grow" variant="warning" />;
  }
  const cancel = () => {
    navigate(ROUTES.HOME);
  };
  const keys = Object.keys(inputState);
  return (
    <Container>
      <h1 className="title">profail</h1>
      <Form>
        <Col md={{ span: 6, offset: 3 }} xs={12}>
          <Row className="mb-3">
            {keys.map((item) => (
              <RegisterCom
                key={item}
                item={item}
                inputState={inputState}
                onChange={handleChange}
                inputsErrorState={inputsErrorState}
              />
            ))}
          </Row>
        </Col>
      </Form>
      <Row className="mb-3">
        <Button
          className="colinput"
          variant="warning"
          onClick={handeleBtnClick}
        >
          save
        </Button>
      </Row>
      <Row className="mb-3">
        <Button
          variant="warning"
          type="submit"
          onClick={cancel}
          className="colinput"
        >
          cancel
        </Button>
      </Row>
    </Container>
  );
};

export default Profail;
