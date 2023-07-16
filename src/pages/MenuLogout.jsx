import { useEffect, useState } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import MenuComponent from "../components/MenuComponent";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useQueryParams from "../hooks/useQueryParams";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuLogoutCom from "../components/MenuLogoutCom";
const MenuLogoutPage = () => {
  const [originalCardsArr, setOriginalCardsArr] = useState(null);
  const [cardsArr, setCardsArr] = useState(null);
  
  
  const navigate = useNavigate();
  let qparams = useQueryParams();
 
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

  if (!cardsArr) {
    return <Spinner animation="grow" variant="warning" className="spiner" />;
  }
 
  return (
    <Container>
      <h1 className="title"> menu</h1>
 <Col md={4} lg={2} sm={6}>
     
       
        {cardsArr.map((item) => (
          <MenuLogoutCom
            key={item._id + Date.now()}
            id={item._id}
            title={item.title}
            imageUrl={item.imageUrl}
            imageAlt={item.imageAlt}
            description={item.description}
            price={item.price}
           
          />
        ))}
       
   
      </Col>
    </Container>
  );
};

export default MenuLogoutPage;
