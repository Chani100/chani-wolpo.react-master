import { Col } from "react-bootstrap";
import {
  BsCheck2,
  BsFileExcel,
  BsFileX,
  BsFillCheckSquareFill,
  BsFillFileExcelFill,
  BsUiChecks,
} from "react-icons/bs";

const MyOrdersCom = ({
  id,
  name,
  takeAway,
  orderStatus,
  createdAt,
  onInfo,
}) => {
const handleIdOrder = () => {
  onInfo(id)
};
  return (
    <tr onClick={handleIdOrder}>
      <td className="medieCrm">{name}</td>
      {takeAway ? <td>✔️</td> : <td>❌</td>}
      {orderStatus ? <td>✔️</td> : <td>❌</td>}
      <td className="medieCrm">{createdAt}</td>
    </tr>
  );
};

export default MyOrdersCom;
