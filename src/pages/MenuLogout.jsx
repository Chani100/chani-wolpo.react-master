import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Nav,
  Row,
  Spinner,
} from "react-bootstrap";

import "../css/menu.css"; 

import MenuComponent from "../components/MenuComponent";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuLogoutCom from "../components/MenuLogoutCom";
import PopupExample from "../components/OrdersPopup";
import ROUTES from "../routes/ROUTES";
import { useSelector } from "react-redux";
import { BsCardHeading, BsListUl } from "react-icons/bs";
const MenuLogoutPage = () => {
  const [originalCardsArr, setOriginalCardsArr] = useState(null);
  const [cardsArr, setCardsArr] = useState(null);
  const [listOrCard, setListOrCard] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();
  let qparams = useQueryParams();
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        filterFunc(data);
      })
      .catch((err) => {
        toast.error("err from axios" + "" + err.response.data.msg);
      });
  }, []);
  const filterFunc = (data) => {
    if (!originalCardsArr && !data) {
      return;
    }
    let filter = "";
    if (qparams.filter) {
      filter = qparams.filter;
    }
    if (!originalCardsArr && data) {
      setOriginalCardsArr(data);
      setCardsArr(data.filter((card) => card.title.startsWith(filter)));
      return;
    }

    if (originalCardsArr) {
      let neworiginalCardsArr = JSON.parse(JSON.stringify(originalCardsArr));
      setCardsArr(
        neworiginalCardsArr.filter((card) => card.title.startsWith(filter))
      );
    }
  };
  useEffect(() => {
    filterFunc();
  }, [qparams.filter]);
  const handelListOrCard = () => {
    setListOrCard(!listOrCard);
  };
  if (!cardsArr) {
    return <Spinner animation="grow" variant="warning" className="spiner" />;
  }
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const handleButtonClick = () => {
    navigate(ROUTES.MENU);
  };

  const categories = [
    "Breads",
    "Salads",
    "Soups",
    "Extras",
    "Main dishes",
    "Desserts",
    "Drinking",
  ];

  const filterItemsByCategory = (category) => {
    return cardsArr.filter((item) => item.category === category);
  };
  return (
    <Container>
      <Button
        variant="warning"
        className="buttonList"
        onClick={handelListOrCard}
      >
        {listOrCard ? <BsCardHeading /> : <BsListUl />}
      </Button>
      <h1 className="title"> menu</h1>
      <PopupExample variant="warning" onClick={handleButtonClick} />
      <Nav className="nav_catgory" variant="underline" defaultActiveKey="/home">
        <Nav.Item className="nav_item_catgory">
          <Nav.Link eventKey="link-1" onClick={() => handleCategoryClick(null)}>
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link
            eventKey="link-2"
            onClick={() => handleCategoryClick("Breads")}
          >
            Breads
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link
            eventKey="link-3"
            onClick={() => handleCategoryClick("Salads")}
          >
            Salads
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link
            eventKey="link-4"
            onClick={() => handleCategoryClick("Soups")}
          >
            Soups
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link
            eventKey="link-5"
            onClick={() => handleCategoryClick("Extras")}
          >
            Extras
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link
            eventKey="link-6"
            onClick={() => handleCategoryClick("Main dishes")}
          >
            Main dishes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav_item_catgory">
          <Nav.Link
            eventKey="link-7"
            onClick={() => handleCategoryClick("Desserts")}
          >
            Desserts
          </Nav.Link>
        </Nav.Item>{" "}
        <Nav.Item className="nav_item_catgory">
          <Nav.Link
            eventKey="link-8"
            onClick={() => handleCategoryClick("Drinking")}
          >
            Drinking
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Row>
        <h2 className="subtitleh2"> {selectedCategory}</h2>
        {selectedCategory !== null
          ? cardsArr
              .filter((item) => item.category === selectedCategory)
              .map((item) => (
                <MenuLogoutCom
                  key={item._id + Date.now()}
                  id={item._id}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  listOrCard={listOrCard}
                />
              ))
          : categories.map((category) => (
              <div key={category}>
                {<h3 className="subtitleh2">{category}</h3>}
                <div className="row">
                  {filterItemsByCategory(category).map((item) => (
                    <div className="col-md-6" key={item._id + Date.now()}>
                      <MenuLogoutCom
                        id={item._id}
                        imageUrl={item.imageUrl}
                        imageAlt={item.imageAlt}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        listOrCard={listOrCard}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </Row>
    </Container>
  );
};

export default MenuLogoutPage;
