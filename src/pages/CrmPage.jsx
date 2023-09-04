import axios from 'axios';
import { Col, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import TableCRM from '../components/TableCRM';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import "../css/crm&pay.css"
const CRMPage =()=>{
  const [order, setOrder] = useState();

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders=async()=>{
    try{
      const orders = await axios.get("/orders");
      console.log(orders.data);
      setOrder(orders.data)
    } catch (err) {
      console.log(err);
      toast.error(err.response);
    }
  
  }
  
return (
  <Table striped bordered hover>
    <thead className="tablacrm">
      <tr className="crmHeader">
        <th>Biz Number</th>
        <th className="medieCrm">Name</th>
        <th>Phone</th>
        <th className="medieCrm">Email</th>
        <th className="medieCrm">Street</th>
        <th className="medieCrm">House Number</th>
        <th>Take Away</th>
        <th>Order Status</th>
        <th className="medieCrm">CreatedAt</th>
      </tr>
    </thead>
    <tbody className="tablacrm">
      {order &&
        order.map((item) => (
          <TableCRM
            key={item._id + Date.now()}
            bizNumber={item.bizNumber}
            name={item.name}
            phone={item.phone}
            email={item.email}
            street={item.street}
            houseNumber={item.houseNumber}
            takeAway={item.takeAway}
            orderStatus={item.orderStatus}
            createdAt={item.createdAt}
          />
        ))}
    </tbody>
  </Table>
);
}
export default CRMPage