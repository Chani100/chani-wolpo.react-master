import { Col, FloatingLabel, Form } from "react-bootstrap";
import "../css/myOrder.css";
const OneMyOrder = ({ item, order }) => {
  if (item === "orderStatus") return;
  if (item === "takeAway") return;
  return (
    <Col xs={12} md={6}>
      <Form.Group as={Col} controlid={item}>
        <Form.Label
          className="textMyOrder"
          controlid="floatingInput"
          label={item + ":"}
        >
          {item + " " + ":"}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            name={item}
            id={item}
            type={item}
            className={`inputMyOrder transparent-background white-text`}
            value={order ? order[item] : ""}
            readOnly
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default OneMyOrder;
