import { Col, FloatingLabel, Form } from "react-bootstrap";

const EditComponent = ({ item, inputState, onChange, inputsErrorState }) => {
  
  if (item === inputState.bizNumber) return;
  
  return (
    <Col xs={12} md={6}>
      <Form.Group as={Col} controlid={item.bizNumber}/>
      <Form.Group as={Col} controlid={item}>

        <FloatingLabel
          controlid="floatingInput"
          label={item + "*"}
          className="mb-3"
        >
          <Form.Control
            name={item}
            id={item}
            type={item}
            className="colinput"
            value={inputState ? inputState[item] : ""}
            onChange={onChange}
            isInvalid={inputsErrorState && inputsErrorState[item]}
          />
          {inputsErrorState && inputsErrorState[item] && (
            <Form.Control.Feedback tooltip type="invalid">
              {inputsErrorState[item].map((item) => (
                <div key={"{item}-errors" + item}>{item}</div>
              ))}
            </Form.Control.Feedback>
          )}
        </FloatingLabel>
      </Form.Group>
    </Col>
  );
};

export default EditComponent;
