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
import "../css/media.css";
import MenuComponent from "../components/MenuComponent";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { BsCardHeading, BsListUl, BsTrashFill } from "react-icons/bs";
import ButtonCreatCom from "../components/ButtenCraetCom";
import CompletionOfAnOrder from "../components/CompletionOfAnOrder";
import "bootstrap/dist/css/bootstrap.min.css";
import PopupExample from "../components/OrdersPopup";
import ROUTES from "../routes/ROUTES";
import PopupSmile from "../components/PopupSmile";
import CardMenu from "../components/CardMenu";
const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [displayCategories, setDisplayCategories] = useState(false);
  const [originalCardsArr, setOriginalCardsArr] = useState(null);
  const [cardsArr, setCardsArr] = useState(null);
  const [orderIdMenu, setOrderIdMenu] = useState(null);
  const [cardrIdMenu, setCardIdMenu] = useState({});
  const [listOrCard, setListOrCard] = useState(true);
  const navigate = useNavigate();
  let qparams = useQueryParams();
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  const id = jwt_decode(localStorage.token)._id;
  useEffect(() => {
    const withdrawalOfOrderId = async () => {
      try {
        const order = await axios.get("/orders/my-order-findOne/" + id);
        setOrderIdMenu(order.data);
      } catch (err) {
        toast.error(err.response._id);
      }
    };
    withdrawalOfOrderId();
  }, [orderIdMenu]);
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
  const handelListOrCard = () => {
    setListOrCard(!listOrCard);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setDisplayCategories(false);
  };

  const handleShowAllCategories = () => {
    setDisplayCategories(true);
    setSelectedCategory("");
  };

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

  const handleDeleteFromInitialCardsArr = async (id) => {
    try {
      await axios.delete("/cards/" + id);
      setCardsArr((newCardsArr) =>
        newCardsArr.filter((item) => item._id != id)
      );
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  const handleEditFromInitialCardsArr = (id) => {
    const cardToEdit = cardsArr.find((card) => card._id == id);
    navigate(`/edit/${id}`, { state: { user_id: cardToEdit.user_id } });
  };
  const handleMoreInformationFromInitialCardsArr = (id) => {
    navigate(`/infor/${id}`);
  };
  if (!cardsArr) {
    return <Spinner animation="grow" variant="warning" className="spiner" />;
  }
  /*  const getCategoryContent = (category) => {
    switch (category) {
      case "drinking":
        return <p>Drinking content goes here</p>;
      case "Main dishes":
        return <p>Main Dishes content goes here</p>;
      default:
        return null;
    }
  }; */
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
        {listOrCard ? (
          <BsCardHeading style={{ fontSize: "1.5rem" }} />
        ) : (
          <BsListUl style={{ fontSize: "1.5rem" }} />
        )}
      </Button>
      <h1 className="title"> menu</h1>
      <ButtonCreatCom canCreate={payload && payload.isAdmin} />
      <div>
        <Nav
          className="nav_catgory"
          variant="underline"
          defaultActiveKey="/home"
        >
          <Nav.Item className="nav_item_catgory">
            <Nav.Link
              eventKey="link-1"
              onClick={() => handleCategoryClick(null)}
            >
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
        <div>
          <h2 className="subtitleh2"> {selectedCategory}</h2>
          {selectedCategory !== null
            ? cardsArr
                .filter((item) => item.category === selectedCategory)
                .map((item) =>
                  !listOrCard ? (
                    <CardMenu
                      key={item._id + Date.now()}
                      id={item._id}
                      imageUrl={item.imageUrl}
                      imageAlt={item.imageAlt}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      orderId={orderIdMenu}
                      onDelete={handleDeleteFromInitialCardsArr}
                      onEdit={handleEditFromInitialCardsArr}
                      canEdit={payload && payload.isAdmin}
                      canDelete={payload && payload.isAdmin}
                      canAdd={!(payload && payload.isAdmin)}
                      canFav={payload}
                      listOrCard={listOrCard}
                    />
                  ) : (
                    <MenuComponent
                      key={item._id + Date.now()}
                      id={item._id}
                      imageUrl={item.imageUrl}
                      imageAlt={item.imageAlt}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      orderId={orderIdMenu}
                      onDelete={handleDeleteFromInitialCardsArr}
                      onEdit={handleEditFromInitialCardsArr}
                      canEdit={payload && payload.isAdmin}
                      canDelete={payload && payload.isAdmin}
                      canAdd={!(payload && payload.isAdmin)}
                      canFav={payload}
                      listOrCard={listOrCard}
                    />
                  )
                )
            : categories.map((category) => (
                <div key={category}>
                  <h3 className="subtitleh2">{category}</h3>
             
                    <div className="row">
                      {filterItemsByCategory(category).map((item) =>
                        !listOrCard ? (
                          <CardMenu
                            key={item._id + Date.now()}
                            id={item._id}
                            imageUrl={item.imageUrl}
                            imageAlt={item.imageAlt}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            orderId={orderIdMenu}
                            onDelete={handleDeleteFromInitialCardsArr}
                            onEdit={handleEditFromInitialCardsArr}
                            canEdit={payload && payload.isAdmin}
                            canDelete={payload && payload.isAdmin}
                            canAdd={!(payload && payload.isAdmin)}
                            canFav={payload}
                            listOrCard={listOrCard}
                          />
                        ) : (
                          <MenuComponent
                            key={item._id + Date.now()}
                            id={item._id}
                            imageUrl={item.imageUrl}
                            imageAlt={item.imageAlt}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            orderId={orderIdMenu}
                            onDelete={handleDeleteFromInitialCardsArr}
                            onEdit={handleEditFromInitialCardsArr}
                            canEdit={payload && payload.isAdmin}
                            canDelete={payload && payload.isAdmin}
                            canAdd={!(payload && payload.isAdmin)}
                            canFav={payload}
                            listOrCard={listOrCard}
                          />
                        )
                      )}
                    </div>
                  
                </div>
              ))}
        </div>
      </div>

      <CompletionOfAnOrder variant="warning" orderId={orderIdMenu} />
    </Container>
  );
};

export default MenuPage;
