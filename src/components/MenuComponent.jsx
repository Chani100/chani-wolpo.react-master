import { Button, Col, Form, ListGroup } from "react-bootstrap";
import ImagePopup from "./ImagePopup";
import { BsCurrencyDollar, BsPencilFill, BsTrashFill } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";

const MenuComponent = ({
  id,
  orderId,
  imageUrl,
  alt,
  title,
  description,
  price,
  onDelet,
}) => {
  const handleAddToOrder = async () => {
    try {
      await axios.patch("/orders/menuOrder/" + orderId, { card_id: id });
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const handelButtenDelete = () => {
    onDelet(id);
  };
  return (
    <Col xs={12} md={6}>
      <Form.Group as={Col}>
        <ListGroup className="alert">
          <ImagePopup imageUrl={imageUrl} alt={alt} />
          <h3>{title}</h3>
          <h6>{description}</h6>
          <h5>
            {price}
            <BsCurrencyDollar />
          </h5>
          <Button
            variant="warning"
            className="alertlink"
            onClick={handleAddToOrder}
          >
            Add to order
          </Button>
          <Button
            variant="warning"
            className="alertlink"
            onClick={handelButtenDelete}
          >
            <BsTrashFill />
          </Button>
          <Button
            variant="warning"
            className="alertlink"
            onClick={handelButtenDelete}
          >
            <BsPencilFill />
          </Button>
          
        </ListGroup>
      </Form.Group>
    </Col>
  );
};
export default MenuComponent;
