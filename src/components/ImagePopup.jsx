import React, { useState } from "react";
import { Image } from "react-bootstrap";

const ImagePopup = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Image
        src={imageUrl}
        alt="Image"
        onClick={openPopup}
        className="imagealert"
      />

      {isOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <Image src={imageUrl} alt="Image" className="popup-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePopup;
