import { Container, Image, Row } from "react-bootstrap";
import ROUTES from "../routes/ROUTES";
import CarouselHome from "../components/Carosel.jsx";
import"../css/home_page.css"
import Button from "react-bootstrap/Button";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import PopupExample from "../components/OrdersPopup";
import PopupBook from "../components/BookAtablePopup";

import PaymentForm from "./PaymentForm";
import CardFood from "../components/Spies";
import Slider from "../components/Slider";



const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(ROUTES.MENU);
  };
  return (
    <Container>
      <h1 className="title">Welcome</h1>
      <Container className="phome">
        <p>
          Welcome to our exceptional meat chef restaurant, a haven for meat
          lovers where the art of cooking meat reaches new heights. Step into a
          world of savory delights, where the finest cuts of meat are
          transformed into culinary masterpieces. Our restaurant is dedicated to
          the pursuit of excellence, with a passion for showcasing the full
          potential of meat through innovative and skillful techniques.
        </p>
        <p>
          As you enter, you'll be greeted by a warm and inviting atmosphere that
          sets the stage for an extraordinary dining experience. The aroma of
          sizzling steaks and slow-roasted ribs fills the air, tantalizing your
          senses and whetting your appetite. Our dedicated meat chef is a true
          maestro, expertly working with different cuts and flavors to create
          dishes that are succulent, tender, and bursting with flavor.
        </p>

        <div className="divbuttonehome">
          <PopupBook variant="warning" onClick={handleButtonClick} />

          <PopupExample variant="warning" onClick={handleButtonClick} />
        </div>
      </Container>
      <CardFood />
      <h3 className="subtitle">Our recommenders</h3>
      <Slider />
      {/*   {<SimpleSlider />} */}
      {/*   <CarouselHome />   */}
    </Container>
  );
};
export default HomePage;
