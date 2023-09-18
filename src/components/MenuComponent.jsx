import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
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
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../css/media.css"
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
  listOrCard,
}) => {
  const isLoggedIn = useSelector(
    (bigPieBigState) => bigPieBigState.authSlice.isLoggedIn
  );
  const [amount, setaAmount] = useState(1);
  const [isFilled, setIsFilled] = useState(false);

  const handleAddToOrder = async () => {
    setIsFilled(!isFilled);
    try {
      await axios.patch("/orders/menuOrder/" + orderId, {
        card_id: id,
        amount: amount,
      });
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  const handlePlos = () => {
    setaAmount((amount) => amount + 1);
  };
  const handleMinoc = () => {
    if (amount == 1) {
      return;
    }
    setaAmount((amount) => amount - 1);
  };

  useEffect(() => {
    handleDes();
  }, []);

  const handleDes = async () => {
    try {
      const orderdis = await axios.get("/orders/" + orderId);
      const foundItem = orderdis.data.OrderMenu.find((item) => item[1] === id);
      if (foundItem) {
        const foundItemId = foundItem[0];
        setaAmount(foundItemId);
        setIsFilled(!isFilled);
      }
    } catch (err) {
      // console.log(err.response.data);
      toast.error(err.response.data);
    }
  };
  const handelButtenDelete = () => {
    onDelet(id);
  };
  const handeleBtnEdit = () => {
    onEdit(id);
  };
  return (
    <Container>

        <Form.Group className="alert">
          <ListGroup >
            <div className="product-list">
              <div key={id} className="product-item">
                <ImagePopup imageUrl={imageUrl} alt={alt} />
                <div className="product-details">
                  <h3>{title}</h3>
                  <h6>{description}</h6>
                  <h5>
                    {price}
                    <BsCurrencyDollar />
                  </h5>
                </div>
              </div>
            </div>
            <div className="buttons-wrappera">
              <div className="buttons-wrapper">
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
                  >
                    {amount}
                  </Button>
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
              </div>
              <div className="buttons-wrapper">
                {canAdd ? (
                  <Button
                    variant="warning"
                    onClick={handleAddToOrder}
                    className={isFilled ? "alertlink filled" : "alertlink"}
                  >
                    {isFilled ? "Added to order" : "Add to order"}
                  </Button>
                ) : (
                  ""
                )}
              </div>

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
            </div>
            <div>
              . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              . . . .
            </div>
          </ListGroup>
        </Form.Group>
   
    </Container>
  );
};
export default MenuComponent;
