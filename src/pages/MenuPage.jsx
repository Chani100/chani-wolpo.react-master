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
  BsListColumns,
  BsListOl,
  IconName,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const MenuPage = () => {
  return (
     <Container>
      <h1 className="title"> menu</h1>

     
        {/*  <ListGroup>
          <ListGroup.Item className="alert">
            <Image className="imagealert" src="../image/chefs-2.jpg" />
            Cras justo odio Cras justo odio bbbbb bbb bbbbbbb bbbbbbb bbbbb
            bbbbb
            <Link className="alertlink" href="#">
              an example link 90
              <BsCurrencyDollar />
            </Link>
          </ListGroup.Item>
        </ListGroup> */}
           <Form.Group as={Col} >
          <Col md={{ span: 6, offset: 3 }} xs={12}>
            <Row className="mb-3">
              <ListGroup  className="alert" >
                <Image className="imagealert" src="../image/chefs-2.jpg" />
                <h3>Cras justo odio</h3>
                Cras justo odio bbbbb bbbbbb bbbb bbbb bbbbb bbbbbbbb
                <Link className="alertlink" href="#">
                  an example link 90
                  <BsCurrencyDollar />
                </Link>
              </ListGroup>
            </Row>
            <Row className="mb-3">
              <ListGroup.Item className="alert">
                <Image className="imagealert" src="../image/chefs-2.jpg" />
                <h3>Cras justo odio</h3>
                <p> Cras justo odio bbbbb bbbbbb bbbb bbbb bbbbb bbbbbbbb</p>
                <Link className="alertlink" href="#">
                  an example link 90
                  <BsCurrencyDollar />
                </Link>
              </ListGroup.Item>
            </Row>
          </Col>
        </Form.Group>

        {/* <Card className="alert">
          <Card.Img
            className="imagealert"
            src="../image/chefs-2.jpg"
            alt="Card image"
          />
          <Card>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Link>
              an example link 90
              <BsCurrencyDollar />
            </Card.Link>
          </Card>
        </Card>
        <Alert className="alert">
          <Image className="imagealert" src="../image/chefs-2.jpg" />
          <text> ccccc cccccc cccccc cccccc cccc cccccc cccc</text>
          <span className="alertlink">
            <Alert.Link href="#">an example link</Alert.Link>
            90
            <BsCurrencyDollar />
          </span>
        </Alert>
        <Alert className="alert">
          <Image className="imagealert" src="../image/chefs-2.jpg" />
          <Alert.Link href="#">an example link</Alert.Link>{" "}
        </Alert> */}
      </Container>
    
  );
};

export default MenuPage;
