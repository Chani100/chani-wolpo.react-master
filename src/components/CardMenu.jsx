import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
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
import "../css/media.css";
const CardMenu = ({
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
  console.log(orderId);
  return (
   
    <Col xs={12} md={6}>
      <Card className="cardMenu" as={Col}>
        <Image src={imageUrl} className="img_title" roundedCircle />
        <Card.Body className="cardBody">
          <Card.Title className="card_title">{title}</Card.Title>
          <Card.Text className="card_text">{description}</Card.Text>
          <h5 className="card_price">
            {price} <BsCurrencyDollar />
          </h5>
          <div className="button_admin_menu">
            {canDelete && (
              <Button
                variant="warning"
                onClick={handelButtenDelete}
                className="buttenDelEdiMenu"
              >
                <BsTrashFill />
              </Button>
            )}
            {canEdit && (
              <Button
                variant="warning"
                onClick={handeleBtnEdit}
                className="buttenDelEdiMenu"
              >
                <BsPencilFill />
              </Button>
            )}
          </div>
          {canAdd ? (
            <Button
              variant="warning"
              className="buttenAddMenu cardButten"
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
              className="buttenAddMenu cardButten"
              onClick={handleAddToOrder}
            >
              {amount}
            </Button>
          ) : (
            ""
          )}
          {canAdd ? (
            <Button
              variant="warning"
              className="buttenAddMenu cardButten"
              onClick={handleMinoc}
            >
              <BsFillCaretDownFill />
            </Button>
          ) : (
            ""
          )}
          {canAdd && (
            <Button
              variant="warning"
              onClick={handleAddToOrder}
              className={isFilled ? "alertlink filled" : "alertlink"}
              id="cardButten"
              href="#"
            >
              {isFilled ? "Added to order" : "Add to order"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardMenu;