import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import ImagePopup from "./ImagePopup";
import {
  BsCurrencyDollar,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsPencilFill,
  BsTrashFill,
} from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const MenuComponent = ({
  id,
  orderId,
  imageUrl,
  alt,
  title,
  description,
  price,
  onDelet,
  onEdit,
  canDelete,
  canEdit,
  canAdd,
}) => {
  const [amount, setaAmount] = useState(1);
  const handleAddToOrder = async () => {
    try {
      await axios.patch("/orders/menuOrder/" + orderId, { card_id: id });
    } catch (err) {
      toast.error(err.response.data);
    }
  };
const handlePlos = () => {
  setaAmount(amount + 1);
};
const handleMinoc = () => {
  if (amount == 1) {
    return;
  }
  setaAmount(amount - 1);
};
  const handelButtenDelete = () => {
    onDelet(id);
  };
  const handeleBtnEdit = () => {
    onEdit(id);
  };
  return (
    <Col xs={12} md={6}>
      <Form.Group as={Col}>
        <ListGroup className="alert">
          <Row>
            <ImagePopup imageUrl={imageUrl} alt={alt} />
            <h3>{title}</h3>
            <h6>{description}</h6>
            <h5>
              {price}
              <BsCurrencyDollar />
            </h5>
            {canAdd ? (
              <Button
                variant="warning"
                className="buttenAddMenu"
                onClick={handlePlos}
              >
                <BsFillCaretUpFill />
              </Button>
            ) : (
              ""
            )}
            {canAdd ? (
              <Button
                variant="warning"
                className="buttenAddMenu"
                /* onClick={handleAddToOrder} */
                
              >{amount}</Button>
            ) : (
              ""
            )}

            {canAdd ? (
              <Button
                variant="warning"
                className="buttenAddMenu"
                onClick={handleMinoc}
              >
                <BsFillCaretDownFill />
              </Button>
            ) : (
              ""
            )}
          </Row>
          <Row>
            {canDelete ? (
              <Button
                variant="warning"
                className="buttenDelEdiMenu"
                onClick={handelButtenDelete}
              >
                <BsTrashFill />
              </Button>
            ) : (
              ""
            )}
            {canEdit ? (
              <Button
                variant="warning"
                className="buttenDelEdiMenu"
                onClick={handeleBtnEdit}
              >
                <BsPencilFill />
              </Button>
            ) : (
              ""
            )}
          </Row>
        </ListGroup>
      </Form.Group>
    </Col>
  );
};
export default MenuComponent;
