import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import TableOrder from "./TablaOrderCom";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import ROUTES from "../routes/ROUTES";
const CompletionOfAnOrder = ({ orderId }) => {
  const [show, setShow] = useState(false);
  const [totalSum, setTotalSum] = useState(0);
  const [cardsArr, setCardsArr] = useState(null);
  const [orderIdMenu, setOrderIdMenu] = useState();
  const [cardrIdMenu, setCardIdMenu] = useState({});
  const navigate = useNavigate();
  let qparams = useQueryParams();
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  const id = jwt_decode(localStorage.token)._id;
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const completionOrderMenu = async () => {
    try {
      const orders = await axios.get("/orders/" + orderId);
      const completion = orders.data.OrderMenu;
      return completion;
    } catch (err) {
      toast.error(err.response._id);
    }
  };

  const getOrderData = async () => {
    const orderArr = await completionOrderMenu();
    if (!orderArr) {
      return;
    }
    const firstElements = orderArr.map((array) => array[0]);
    const tElements = orderArr.map((array) => array[1]);
    let card = [];
    try {
      const cards = await axios.get("/cards");
      orderArr &&
        orderArr.map((item) => {
          const matchedCard = cards.data.find((card) => card._id === item[1]);
          if (matchedCard) {
            card.push({ ...matchedCard, amount: item[0] });
          }
        });
      setCardsArr(card);
    } catch (err) {
    }
  };
  useEffect(() => {
    getOrderData();
  }, [show]);
  useEffect(() => {
    const calculateTotalSum = () => {
      let sum = 0;
      if (cardsArr) {
        cardsArr.forEach((item) => {
          sum += item.price * item.amount;
        });
      }
      setTotalSum(sum);
    };

    calculateTotalSum();
  }, [cardsArr]);
  const cancel = () => {
    handleClose();
    navigate(ROUTES.MENU);
  };
  const sowPopapOpen = () => {
    if (cardsArr && cardsArr.length !== 0) {
      handleShow();
    }
    if (cardsArr && cardsArr.length === 0) {
      toast.error("ppppp");
      handleShow();
    }
  };
  const btnPayment = () => {
    navigate(ROUTES.PAYMENT);
  };
  return (
    <Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Order summary</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>img</th>
                <th>product</th>
                <th>Amount</th>
                <th>price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cardsArr &&
                cardsArr.map((item) => (
                  <TableOrder
                    key={item._id + Date.now()}
                    idCardsArr={item._id}
                    imageUrl={item.imageUrl}
                    alt={item.alt}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                    total={item.price * item.amount}
                  />
                ))}
              <tr>
                <td colSpan={3}>Total Sum:</td>
                <td>{totalSum + "$"}</td>
              </tr>
            </tbody>
            <Button
              variant="warning"
              type="submit"
              onClick={cancel}
              className="colinput"
            >
              cancel
            </Button>
          </Table>
          <Button
            variant="warning"
            type="submit"
            onClick={btnPayment}
            className="colinput"
          >
            for payment
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
      <div>
        <Button
          variant="warning"
          onClick={sowPopapOpen}
          className="buttenCompletionOfAnOrder"
        >
          Completion of an order
        </Button>
      </div>
    </Container>
  );
};

export default CompletionOfAnOrder;
