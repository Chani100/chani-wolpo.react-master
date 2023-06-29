import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  ListGroup,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import {
  BsCurrencyDollar,
  BsFillBasket2Fill,
  BsListColumns,
  BsListOl,
  IconName,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const MenuPage = () => {
 
  return (
    <Container>
      <h1 className="title"> menu</h1>
      <Row className="mb-3">
        <Col xs={12} md={6}>
          <Form.Group as={Col}>
            <ListGroup className="alert">
              <Image className="imagealert" src="../image/chefs-2.jpg" />
              <h3>Cras justo odio</h3>
              Cras justo odio bbbbb bbbbbb bbbb bbbb bbbbb bbbbbbbb
              <Link className="alertlink" href="#">
                an example link 90
                <BsCurrencyDollar />
              </Link>
            </ListGroup>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group as={Col}>
            <ListGroup className="alert">
              <Image className="imagealert" src="../image/chefs-2.jpg" />
              <h3>Cras justo odio</h3>
              Cras justo odio bbbbb bbbbbb bbbb bbbb bbbbb bbbbbbbb
              <Link className="alertlink" href="#">
                an example link 90
                <BsCurrencyDollar />
              </Link>
            </ListGroup>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group as={Col}>
            <ListGroup className="alert">
              <Image 
              className="imagealert" src="../image/chefs-2.jpg" />
              <h3>Cras justo odio</h3>
              <h6> Cras justo odio bbbbb bbbbbb bbbb bbbb bbbbb bbbbbbbb</h6>
              <h5>
                90
                <BsCurrencyDollar />
              </h5>
              <Button variant="warning" className="alertlink" href="#">
                Add to order
              </Button>
            </ListGroup>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuPage;
