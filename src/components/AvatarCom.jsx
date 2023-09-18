import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Image, Nav } from "react-bootstrap";
import "../css/navbar&foter.css";

import { useDispatch, useSelector } from "react-redux";
import { darkThemeActions } from "../store/darkTheme";
import { authActions } from "../store/auth";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
const Avatar = () => {

  const [imag, setImag] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
    const navigate = useNavigate();
  const id = jwt_decode(localStorage.token)._id;
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/users/" + id);
        const userid = {
          ...data,
        };
        const urlUser = userid.imageUrl;
        setImag(urlUser);
      } catch (err) {
      
      }
    })();
  }, [payload]);
  const profailClick = () => {
    navigate(ROUTES.PROFAIL);
  };
  return (
    <div>
   <Nav.Link className="profile-picture-container"> 
        <Image
          src={imag}
          roundedCircle
          className="profile-picture"
          onClick={profailClick}
        />
        {/*   <span className="ml-2"></span> */}
      </Nav.Link> 
    </div>
  );
};
export default Avatar;
