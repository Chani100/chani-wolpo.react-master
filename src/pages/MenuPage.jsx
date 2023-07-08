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
import ButtonCreatCom from "../components/ButtenCraetCom";
const MenuPage = () => {
  const [originalCardsArr, setOriginalCardsArr] = useState(null);
  const [cardsArr, setCardsArr] = useState(null);
  const [orderIdMenu, setOrderIdMenu] = useState(null);
  const [cardrIdMenu, setCardIdMenu] = useState({});
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
    return <Spinner animation="grow" variant="warning" />;
  }


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
            onEdit={handleEditFromInitialCardsArr}
            canEdit={payload && payload.isAdmin}
            canDelete={payload && payload.isAdmin}
            canAdd={!(payload && payload.isAdmin)}
          />
        ))}
      </Row>
      <ButtonCreatCom canCreate={payload && payload.isAdmin} />
    </Container>
  );
};

export default MenuPage;
