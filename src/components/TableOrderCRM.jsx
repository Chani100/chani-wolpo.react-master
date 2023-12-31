import { Col } from "react-bootstrap";
import {
  BsCheck2,
  BsFileExcel,
  BsFileX,
  BsFillCheckSquareFill,
  BsFillFileExcelFill,
  BsUiChecks,
} from "react-icons/bs";

const TableOrderCRM = ({
  bizNumber,
  name,
  phone,
  createdAt,
  date,
  time,
  numOfPeople,
}) => {
  return (
    <tr>
      <td>{bizNumber}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td className="medieCrm"> {date}</td>
      <td className="medieCrm">{time}</td>
      <td className="medieCrm">{numOfPeople}</td>
      <td className="medieCrm">{createdAt}</td>
    </tr>
  );
};

export default TableOrderCRM;
