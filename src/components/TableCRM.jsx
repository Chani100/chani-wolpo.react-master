 import { Col } from "react-bootstrap";
import { BsCheck2, BsFileExcel, BsFileX, BsFillCheckSquareFill, BsFillFileExcelFill, BsUiChecks } from "react-icons/bs";

const TableCRM = ({
  id,
  bizNumber,
  name,
  phone,
  email,
  city,
  street,
  houseNumber,
  takeAway,
  orderStatus,
  createdAt,
  onInfo,
}) => {
  const handleIdOrder = () => {
    onInfo(id);
  };
  return (
    <tr onClick={handleIdOrder}>
      <td>{bizNumber}</td>
      <td className="medieCrm">{name}</td>
      <td>{phone}</td>
      <td className="medieCrm"> {email}</td>
      <td className="medieCrm"> {city}</td>
      <td className="medieCrm">{street}</td>
      <td className="medieCrm">{houseNumber}</td>
      {/* {takeAway?(<td><BsCheck2 /></td>):(<td><BsFileExcel /></td>)} */}
      {takeAway ? <td>✔️</td> : <td>❌</td>}
      {orderStatus ? <td>✔️</td> : <td>❌</td>}
      <td className="medieCrm">{createdAt}</td>
    </tr>
  );
};

export default TableCRM;
