import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";

const TableUsers = ({
  id,
  name,
  phone,
  email,
  city,
  street,
  houseNumber,
  createdAt,
  isAdmin,
  onDelete,
  onEdit,
}) => {
  const handleUserDelete = () => {
    onDelete(id);
  };
  const handleUserAdminEdit = () => {
    onEdit(id);
  };
  console.log(id);
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td className="medieCrm"> {email}</td>
      <td className="medieCrm">{city}</td>
      <td className="medieCrm">{street}</td>
      <td className="medieCrm">{houseNumber}</td>
      <td className="medieCrm">{createdAt}</td>
      {isAdmin ? (
        <td>
          ✔️
          <Button variant="warning" onClick={handleUserAdminEdit}>
            <BsPencilFill />
          </Button>
        </td>
      ) : (
        <td>
          ❌
          <Button variant="warning" onClick={handleUserAdminEdit}>
            <BsPencilFill />
          </Button>
        </td>
      )}
      <td>
        <Button variant="warning" onClick={handleUserDelete}>
          <BsTrashFill />
        </Button>
      </td>
    </tr>
  );
};
export default TableUsers;
