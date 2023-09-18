import axios from "axios";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import "../css/crm&pay.css";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import MyOrdersCom from "../components/MyOrdersCom";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
const MyOrders = () => {
  const id = jwt_decode(localStorage.token)._id;
  const [order, setOrder] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getUllOrders();
  }, []);

  const getUllOrders = async () => {
    try {
      const ullOrders = await axios.get("/orders/my-order-ull/" + id);
      setOrder(ullOrders.data);
    } catch (err) {
      toast.error(err.response);
    }
  };
  const handleInfoOrder = (id) => {
    navigate(`/order/${id}`);
  };
  return (
    <Container>
      <h1 className="title">My Orders</h1>
      <h3 className="pAbuot">For order details, click on the desired order.</h3>
      <Table striped bordered hover>
        <thead className="tablacrm">
          <tr className="crmHeader">
            <th className="medieCrm">Name</th>
            <th>Take Away</th>
            <th>Order Status</th>
            <th className="medieCrm">CreatedAt</th>
          </tr>
        </thead>
        <tbody className="tablacrm">
          {order &&
            order.map((item) => (
              <MyOrdersCom
                key={item._id + Date.now()}
                id={item._id}
                name={item.name}
                takeAway={item.takeAway}
                orderStatus={item.orderStatus}
                createdAt={item.createdAt}
                onInfo={handleInfoOrder}
              />
            ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default MyOrders;
