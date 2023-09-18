import { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import validateCreateSchema from "../validation/createValidation";
import axios from "axios";
import { toast } from "react-toastify";
import CreatCardMenuCom from "../components/CreatCardMenuCom";
import ButtonCreatCom from "../components/ButtenCraetCom";

const CraetCardMenu = () => {
  const [inputState, setInputState] = useState({
    imageUrl: "",
    imageAlt: "",
    title: "",
    description: "",
    price: "",
    category:"",
  });
  const [inputsErrorsState, setInputsErrorsState] = useState([]);
  const navigate = useNavigate();

  const handleSaveBtnClick = async (ev) => {
    try {
      const joiResponse = validateCreateSchema(inputState);
      setInputsErrorsState(joiResponse);
      if (!joiResponse) {
        await axios.post("/cards/", inputState);
        toast.success("A new business card has been created");
        navigate(ROUTES.MENU);
      }
    } catch (err) {
      toast.error("The operation failed");
    }
  };

  const handleCancelBtnClick = (ev) => {
    navigate(ROUTES.HOME);
  };

  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    const joiResponse = validateCreateSchema(newInputState);
    setInputsErrorsState(joiResponse);
  };

  const keys = Object.keys(inputState);
  return (
    <Container>
      <h1 className="title">Create card</h1>
      <Form>
        <Col className="containercreat">
          <Image
            className="imagecreat"
            rounded
            alt={inputState.alt ? inputState.alt : ""}
            src={
              inputState.imageUrl
                ? inputState.imageUrl
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </Col>
        {/* <Form.Group controlId="formFile" >
          <Form.Label className="text_file">to select from the file folder</Form.Label>
          <Form.Control type="file" className="colinput input_category" />
        </Form.Group> */}
        <Col md={{ span: 6, offset: 3 }} xs={12}>
          <Row className="mb-3">
            {keys.map((item) => (
              <CreatCardMenuCom
                key={item}
                item={item}
                inputState={inputState}
                onChange={handleInputChange}
                inputsErrorState={inputsErrorsState}
              />
            ))}
          </Row>
          <Col>
            <Row className="mb-3">
              <Button
                variant="warning"
                type="submit"
                onClick={handleCancelBtnClick}
                className="colinput"
              >
                CANCEL
              </Button>
            </Row>
            <Row className="mb-3">
              <Button
                className="colinput"
                variant="warning"
                onClick={handleSaveBtnClick}
              >
                SEVE
              </Button>
            </Row>
          </Col>
        </Col>
      </Form>
    </Container>
  );
};

export default CraetCardMenu;
