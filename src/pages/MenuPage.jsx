import { useState } from "react";
import {
Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { BsCurrencyDollar } from "react-icons/bs";
import ImagePopup from "../components/ImagePopup";

const MenuPage = () => {
  /* const ImagePopup = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  }} */
 const imageUrls = [
   "../image/chefs-2.jpg",
"../image/chefs-2.jpg"
 
 ];
  
    /* const imageUrls = ["../image/chefs-2.jpg", "../image/chefs-2.jpg"]; */
console.log(imageUrls[1]);
console.log(imageUrls);
  return (
    <Container>
      <h1 className="title"> menu</h1>
      <Row className="mb-3">
        <Col xs={12} md={6}>
          <Form.Group as={Col}>
            <ListGroup className="alert">
              <ImagePopup imageUrl={imageUrls[1]} />
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
        <Col xs={12} md={6}>
          <Form.Group as={Col}>
            <ListGroup className="alert">
              <ImagePopup imageUrl={imageUrls[1]} />

              <h3>Cras justo odio</h3>
              <h6> Cras justo odio bbbbb bbbbbb bbbb bbbb bbbbb bbbbbbbb</h6>
              <h5>
                60
                <BsCurrencyDollar />
              </h5>
              <Button variant="warning" className="alertlink" href="#">
                Add to order
              </Button>
            </ListGroup>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group as={Col}>
            <ListGroup className="alert">
              <Image className="imagealert" src="../image/chefs-2.jpg" />
              <h3>Cras justo odio</h3>
              <h6> Cras justo odio bbbbb bbbbbb bbbb bbbb bbbbb bbbbbbbb</h6>
              <h5>
                59
                <BsCurrencyDollar />
              </h5>
              <Button variant="warning" className="alertlink" href="#">
                Add to order
              </Button>
            </ListGroup>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group as={Col}>
            <ListGroup className="alert">
              <a href="../image/chefs-2.jpg" target="_blank">
                {/* <img src="path_to_your_image.jpg" alt="Image" /> */}

                <Image
                  className="imagealert"
                  src="../image/chefs-2.jpg"
                  alt="Image"
                />
              </a>
              <h3>Cras justo odio</h3>
              <h6> Cras justo odio bbbbb bbbbbb bbbb bbbb bbbbb bbbbbbbb</h6>
              <h5>
                75
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
