import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Container, Image } from "react-bootstrap";

const TableOrder = ({ imageUrl, alt, title, price, amount, total }) => {
  return (
    <tr>
       <td style={{ width: "150px" }}>
        <img
          src={imageUrl}
          alt="Product Image"
          className="imagealert"
          style={{ maxWidth: "200%", maxHeight: "200%" }}
        />
      </td> 
      <td>{title}</td>
      <td>{amount}</td>
      <td>{price + "$"}</td>
      <td>{amount * price + "$"}</td>
    </tr>
  );
};

export default TableOrder;
