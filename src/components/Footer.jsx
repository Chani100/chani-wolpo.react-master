import React from "react";
import { Container, Image } from "react-bootstrap";
import {
  BsEnvelopeAt,
  BsGeoAlt,
  BsStopwatch,
  BsTelephone,
  BsWhatsapp,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "../css/media.css";
const Footer = () => {
 const openEmailBox=()=> {
   const subject = encodeURIComponent("I would be happy to contact you");
   const url =
     "https://mail.google.com/mail/?view=cm&to=chani.wolpo@gmail.com&su=" +
     subject;
   window.open(url);

}
  const whatsappNumber = "+972552540326";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20want%20to%20chat%20with%20you!`;

    window.open(whatsappUrl, "_blank");
  };
  const handleMapClick = () => {
    const address = "2 Sons Street, Tiberias";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(url, "_blank");
  };

  const renderTooltip = (props) => {
    const currentTime = new Date().getHours();
    const isOpen = currentTime >= 11 && currentTime <= 23;
    const tooltipContent = isOpen ? "Open" : "Closed";

    return (
      <Tooltip id="button-tooltip" {...props}>
        {tooltipContent}
      </Tooltip>
    );
  };

  return (
    <footer className="footer">
      <Container className="center-content">
        <div className="center-content">
          <Image className="logo_footer" src="../images/logo1.png" />

          <h6 className="name_footer">A quality meat restaurant</h6>
          <div className="div_footer">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Link>
                <BsStopwatch className="icon_footer" />
              </Link>
            </OverlayTrigger>

            <p className="text_footer">
              Open Hours: Monday-Saturday: 11:00 AM - 23:00 PM
            </p>
          </div>
          <div className="div_footer">
            <Link>
              <BsGeoAlt className="icon_footer" onClick={handleMapClick} />
            </Link>
            <p className="text_footer">
              Location: A108 Adam Street, New York, NY 535022
            </p>
          </div>
          <div className="div_footer">
            <Link>
              <BsWhatsapp className="icon_footer" onClick={handleClick} />
            </Link>

            <p className="text_footer">phone: 0552540326</p>
          </div>
          <div className="div_footer">
            <Link>
             
              <BsEnvelopeAt className="icon_footer" onClick={openEmailBox} />
            </Link>
            <p className="text_footer">chani.wolpo@gmail.com</p>
          </div>

          <br></br>
          <p className=" text_footer">© 2023 .chani wolpo</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
