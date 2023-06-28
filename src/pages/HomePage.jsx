import { Container } from "react-bootstrap";
import ROUTES from "../routes/ROUTES";
import CarouselHome from "../components/carosel.jsx";
import CardFood from "../components/carsd.jsx"
import Button from "react-bootstrap/Button";
const HomePage = () => {
  return (
    <Container>
      <Button variant="warning" className="buttonhome">
        Book a table
      </Button>
      <Button variant="warning" className="buttonhome">
        takeAway
      </Button>
      {/*  <CarouselHome /> */}

      <CardFood />
    </Container>
  );
};
export default HomePage;
