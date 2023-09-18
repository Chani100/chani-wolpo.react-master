import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import ROUTES from "../routes/ROUTES";

import axios from "axios";
import atom from "../logo.svg";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";
import EditComponent from "../components/EditCardCommponent";
import validateEditSchema, {
  validateEditCardParamsSchema,
} from "../validation/editValidationCardMenu";

const EditMenuPage = () => {
  const { id } = useParams();

  const [inputState, setInputState] = useState(null);
  const [inputsErrorState, setinputsErrorState] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const errors = validateEditCardParamsSchema({ id });
        if (errors) {
          navigate("*");
          return;
        }
        const { data } = await axios.get("/cards/" + id);
        let newInputState = {
          ...data,
        };
        delete newInputState.bizNumber;
        delete newInputState.menuOrder;
        delete newInputState.likes;
        delete newInputState.user_id;
        delete newInputState.image;
        delete newInputState._id;
        delete newInputState.createdAt;
        delete newInputState.__v;
        setInputState(newInputState);
      } catch (err) {}
    })();
  }, [id]);
  const handeleBtnClick = async (ev) => {
    try {
      const joiResponse = validateEditSchema(inputState);
      setinputsErrorState(joiResponse);
      if (!joiResponse) {
        await axios.put("/cards/" + id, inputState);

        toast.success("The change was successfully saved");
        navigate(ROUTES.MENU);
      }
    } catch (err) {
      toast.error("There is an error," + "" + err.response.data.message);
    }
  };
  const handleChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const joiResponse = validateEditSchema(newInputState);
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
      <h1 className="title">edit</h1>
      <Form>
        <Col md={{ span: 6, offset: 3 }} xs={12}>
          <Row className="mb-3">
            {keys.map((item) => (
              <EditComponent
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

export default EditMenuPage;
