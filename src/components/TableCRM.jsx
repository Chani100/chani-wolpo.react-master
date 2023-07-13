import { Col } from "react-bootstrap";
import { BsCheck2, BsFileExcel, BsFileX, BsFillCheckSquareFill, BsFillFileExcelFill, BsUiChecks } from "react-icons/bs";

const TableCRM = ({
  bizNumber,
  name,
  phone,
  email,
  street,
  houseNumber,
  takeAway,
  orderStatus,
  createdAt,
}) => {

    // const takeAway =()=>{
    //     if(!takeAway){
            
    //     }
    // }
  return (
    <tr>
      <td>{bizNumber}</td>
      <td className="medieCrm">{name}</td>
      <td>{phone}</td>
      <td className="medieCrm"> {email}</td>
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
