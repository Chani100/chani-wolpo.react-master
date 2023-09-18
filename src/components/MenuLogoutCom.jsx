import { Button, Card, Col, Container, Form, Image, ListGroup, Row } from "react-bootstrap";
import ImagePopup from "./ImagePopup";
import {
  BsCurrencyDollar,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsPencilFill,
  BsTrashFill,
} from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../css/media.css";
const MenuLogoutCom = ({
  id,
  imageUrl,
  alt,
  title,
  description,
  price,
  listOrCard,
}) => {
  return (
    <Col xs={12} md={6}>
      {listOrCard ? (
        <Form.Group as={Col}>
          <ListGroup className="alert">
            <div className="product-list">
              <div key={id} className="product-item">
                <ImagePopup imageUrl={imageUrl} alt={alt} />
                <div className="product-details">
                  <h3>{title}</h3>
                  <h6>{description}</h6>
                  <h5>
                    {price}
                    <BsCurrencyDollar />
                  </h5>
                </div>
              </div>
            </div>
          </ListGroup>
        </Form.Group>
      ) : (
        <Form.Group as={Col}>
          <Card className="cardMenu">
            <Image src={imageUrl} roundedCircle className="img_title" />
            <Card.Body className="cardBody">
              <Card.Title className="card_title">{title}</Card.Title>
              <Card.Text className="card_text">{description}</Card.Text>
              <h5 className="card_price">
                {price} <BsCurrencyDollar />
              </h5>
            </Card.Body>
          </Card>
        </Form.Group>
      )}
    </Col>
  );
};
export default MenuLogoutCom;
