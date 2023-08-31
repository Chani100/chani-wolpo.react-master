import { Button, Card, Col, Container, Form, Image, ListGroup, Row } from "react-bootstrap";
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
  listOrCard
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
      console.log(orderId);
      const menuid =
        orderdis && orderdis.data.OrderMenu.find((item) => item[1] === id);
      if (menuid) {
        setIsFilled(!isFilled);
      }
    } catch (err) {
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
    <Row>
      {listOrCard ? (
        <Form.Group as={Col}>
          <ListGroup className="alert">
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
                    /*  href="#" */
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
      ) : (
        
          <Col md={6} lg={4}>
            <Card className="cardMenu">
              <Image src={imageUrl} className="img_title" roundedCircle />
              <Card.Body className="cardBody">
                <Card.Title className="card_title">{title}</Card.Title>
                <Card.Text className="card_text">{description}</Card.Text>
                <h5 className="card_price">
                  {price} <BsCurrencyDollar />
                </h5>
                {/* <Row className="mb-3"> */}
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
                {/* </Row> */}
              </Card.Body>
            </Card>
          </Col>
      
      )}
    </Row>
  );
};
export default MenuComponent;
