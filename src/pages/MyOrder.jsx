import { Container, FloatingLabel, Spinner, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ROUTES from "../routes/ROUTES";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import OneMyOrder from "../components/OneMyOrder";
import TableOrder from "../components/TablaOrderCom";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const MyOrder = () => {
  const [menuOrder, setMenuOrder] = useState(null);
  const [cardsArr, setCardsArr] = useState(null);
  const [totalSum, setTotalSum] = useState(0);
  const [from, setFrom] = useState(false);
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  //   const [keys, setkeys] = useState(null);
  const navigate = useNavigate();
  /* const id = jwt_decode(localStorage.token)._id; */

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("orders/" + id);
        const menuOrderMyOrder = data.OrderMenu;
        setMenuOrder(menuOrderMyOrder);
        let order = {
          ...data,
        };
        delete order._id;
        delete order.user_id;
        delete order.__v;
        delete order.OrderMenu;
        setOrder(order);
      } catch (err) {
        toast.error(err.response._id);
      }
    })();
  }, [id]);
  useEffect(() => {
    const getOrderData = async () => {
      if (!menuOrder) {
        return;
      }
      let card = [];
      try {
        const cards = await axios.get("/cards");
        menuOrder &&
          menuOrder.map((item) => {
            const matchedCard = cards.data.find((card) => card._id === item[1]);
            if (matchedCard) {
              card.push({ ...matchedCard, amount: item[0] });
            }
          });
        setCardsArr(card);
      } catch (err) {
        toast.error(err.response._id);
      }
    };
    getOrderData();
  }, [menuOrder]);
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
  const handeleBtnContinued = () => {
    setFrom(!from);
  };

  if (!order) {
    // navigate(ROUTES.HOME);
    return <Spinner animation="border" role="status"></Spinner>;
  }

  const handleCancelBtnClick = (ev) => {
    navigate(ROUTES.HOME);
  };
  const keys = Object.keys(order);
  return (
    <Container>
      <h1 className="title">My Order</h1>
      {keys.length === 0 ? (
        <h1 className="titelNoOrder">There is no order</h1>
      ) : (
        ""
      )}
      <Col md={{ span: 6, offset: 4 }} xs={12}>
        <Row className="mb-3">
          {keys.map((item) => (
            <OneMyOrder key={item} item={item} order={order} />
          ))}
          {keys.length !== 0 ? (
            <Form.Group as={Col} controlid={"orderStatus"}>
              <Form.Label
                className="textMyOrder"
                controlid="floatingInput"
                label={"order Status"}
              >
                order Status :
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name={"orderStatus"}
                  id={"orderStatus"}
                  type={"orderStatus"}
                  className={`inputMyOrder transparent-background white-text`}
                  value={order.orderStatus ? "Ready Order" : "Working Order"}
                  readOnly
                />
              </Col>
            </Form.Group>
          ) : (
            ""
          )}
          <Col xs={12} md={6}>
            {keys.length !== 0 ? (
              <Form.Group as={Col} controlid={"takeAway"}>
                <Form.Label
                  className="textMyOrder"
                  controlid="floatingInput"
                  label={"take Away"}
                >
                  take Away :
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    name={"takeAway"}
                    id={"takeAway"}
                    type={"takeAway"}
                    className={`inputMyOrder transparent-background white-text`}
                    value={order.takeAway ? "Yes ✔️" : "No ❌"}
                    readOnly
                  />
                </Col>
              </Form.Group>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Col>
      <Col md={{ span: 6, offset: 5 }} xs={12}>
        <Button
          variant="warning"
          onClick={handeleBtnContinued}
          className="colinput"
        >
          <BsArrowRightShort />
          <BsArrowRightShort />
          Continued
          <BsArrowLeftShort />
          <BsArrowLeftShort />
        </Button>
      </Col>
      {from ? (
        <Table striped bordered hover style={{ marginTop: "10px" }}>
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
                />
              ))}
            <tr>
              <td colSpan={4}>Total Sum:</td>
              <td>{totalSum + "$"}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        ""
      )}
      <Col>
        <Row className="mb-3">
          <Button
            variant="warning"
            type="submit"
            onClick={handleCancelBtnClick}
            className="colinput"
            style={{ marginTop: "10px" }}
          >
            GO TO HOME PAGE
          </Button>
        </Row>
      </Col>
    </Container>
  );
};
export default MyOrder;
