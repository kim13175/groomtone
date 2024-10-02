import React from "react";

const popUpDescription = ({ product, onClose }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
};

export default popUpDescription;
  