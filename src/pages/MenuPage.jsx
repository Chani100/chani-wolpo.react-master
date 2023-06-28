import {
  Alert,
  Card,
  Container,
  FloatingLabel,
  Form,
  Image,
  Stack,
} from "react-bootstrap";
import { BsCurrencyDollar, IconName } from "react-icons/bs";
const MenuPage = () => {
  return (
    <div>
      <h1 className="title"> menu</h1>

      <Container>
        <Alert className="alert">
        <div>   <Image className="imagealert" src="../image/chefs-2.jpg" />
         ccccccccccccccccccccccccccccccccccccc</div>
         <div className="alertlink"> <Alert.Link href="#" >an example link</Alert.Link>
          90<BsCurrencyDollar /></div>
        </Alert>
        <Alert className="alert">
          <Image className="imagealert" src="../image/chefs-2.jpg" />
          <Alert.Link href="#">an example link</Alert.Link>{" "}
        </Alert>
        <Alert className="alert">
          <Image className="imagealert" src="../image/chefs-2.jpg" />
          <Alert.Link href="#">an example link</Alert.Link>{" "}
        </Alert>
        <Alert className="alert">
          <Image className="imagealert" src="../image/chefs-2.jpg" />
          <Alert.Link href="#">an example link</Alert.Link>{" "}
        </Alert>
        <Alert className="alert">
          <Image className="imagealert" src="../image/chefs-2.jpg" />
          <Alert.Link href="#">an example link</Alert.Link>{" "}
        </Alert>
        <Alert className="alert">
          <Image className="imagealert" src="../image/chefs-2.jpg" />
          <Alert.Link href="#">an example link</Alert.Link>{" "}
        </Alert>
      </Container>
    </div>
  );
};

export default MenuPage;
