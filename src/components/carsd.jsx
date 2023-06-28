
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const CardFood =()=> {
  return (
    <Container>
      <Row className="justify-content-center">
        <h3 className="subtitle">Our chefs</h3>
        <Card className="card">
          <Card.Img variant="top" src="../image/chefs-1.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="../image/chefs-2.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src="../image/chefs-3.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default CardFood;