import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import MenuComponent from "../components/MenuComponent";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { BsTrashFill } from "react-icons/bs";
const MenuPage = () => {
  const [originalCardsArr, setOriginalCardsArr] = useState(null);
  const [cardsArr, setCardsArr] = useState(null);
  const [orderIdMenu, setOrderIdMenu] = useState(null);
  const [cardrIdMenu, setCardIdMenu] = useState({
    card_id: "649ab96775cadb77fbffba05",
  });
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
        console.log("err", err);
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
  /* const handleFavBtnClick = async () => {
    try {
      await axios.patch("/cards/like/:id/" + id);
      onDeletefav(id);
      setfavState(!favState);
    } catch (err) {}
  }; */
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
    return <Spinner animation="grow" variant="warning" />;
  }
  const useridorder = jwt_decode(localStorage.token)._id;
   /* console.log(useridorder); */

  const withdrawalOfOrderId = async (id) => {
    try {
      const order = await axios.get("/orders/my-order-findOne/" + id);
      const orderId = order.data;
      setOrderIdMenu(orderId);
      console.log(orderIdMenu);
    } catch (err) {
      toast.error(err.response._id);
    }
  };
  
console.log(useridorder);
  withdrawalOfOrderId(useridorder);

 
  return (
    <Container>
      <h1 className="title"> menu</h1>
      <Row className="mb-3">
        {cardsArr.map((item) => (
          <MenuComponent
            key={item._id + Date.now()}
            id={item._id}
            title={item.title}
            imageUrl={item.imageUrl}
            imageAlt={item.imageAlt}
            description={item.description}
            price={item.price}
            orderId={orderIdMenu}
            onDelet={handleDeleteFromInitialCardsArr}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MenuPage;
