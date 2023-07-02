import { Form, InputGroup } from "react-bootstrap";

const PopupComponents = ({ item, inputState, onChange, inputsErrorState }) => {
    if (item === "takeAway") return;
  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Text>{item}</InputGroup.Text>
      <Form.Control
        required
        size="sm"
        id={item}
        label={item}
        name={item}
        className="colinput"
        autoComplete={item}
        value={inputState[item]}
        onChange={onChange}
        isInvalid={inputsErrorState && inputsErrorState[item]}
      />
      {inputsErrorState && inputsErrorState[item] && (
        <Form.Control.Feedback type="invalid">
          {inputsErrorState[item].map((item) => (
            <div key={"{item}-errors" + item}>{item}</div>
          ))}
        </Form.Control.Feedback>
      )}
    </InputGroup>
  );
};

export default PopupComponents;
