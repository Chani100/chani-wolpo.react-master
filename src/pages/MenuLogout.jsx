import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
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
    "Main dishes",
    "drinking",
    "Category 3",
    "Category 4",
    "Category 5",
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

      <Form.Check
        className="radioMenu"
        inline
        label="For the full menu"
        name="group1"
        type="radio"
        onClick={() => handleCategoryClick(null)}
      />
      <Form.Check
        className="radioMenu"
        inline
        label="drinking"
        name="group1"
        type="radio"
        onClick={() => handleCategoryClick("drinking")}
      />
      <Form.Check
        className="radioMenu"
        inline
        label="Main Dishes"
        name="group1"
        type="radio"
        onClick={() => handleCategoryClick("Main dishes")}
      />
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
                <h3 className="subtitleh2">{category}</h3>

                {filterItemsByCategory(category).map((item) => (
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
                ))}
              </div>
            ))}
      </Row>
      <PopupExample variant="warning" onClick={handleButtonClick} />
    </Container>
  );
};

export default MenuLogoutPage;
