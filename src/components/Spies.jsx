import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const CardFood = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <h3 className="subtitle">Our chefs</h3>
        <Card className="card">
          <Card.Body>
            <Card.Img variant="top" src="../images/chefs-1.jpg" />

            <Card.Title>Walter White</Card.Title>
            <Card.Text>Master Chef</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="../images/chefs-2.jpg" />
          <Card.Body>
            <Card.Title>Sarah Jhonson</Card.Title>
            <Card.Text>Patissier</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="../images/chefs-3.jpg" />
          <Card.Body>
            <Card.Title>William Anderson</Card.Title>
            <Card.Text>CookBreads</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
export default CardFood;
