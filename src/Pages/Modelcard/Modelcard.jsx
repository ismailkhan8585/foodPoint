import React, { useState } from "react";
import "./modecard.css";
import defaultImage from "../../assets/burger1.jpg";
import { FaTrash,FaTimes } from "react-icons/fa";

const Modelcard = ({ isVisible, onClose, item }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isVisible) return null;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const itemTotal = (item?.price || 0) * quantity;

  return (
    <div className="modal-overlay show" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Cart Items</h2>
          <button className="close-btn" onClick={onClose}>
        <FaTimes /> {/* Close icon */}
      </button>
        </div>
        <div className="modal-card-content">
          <div className="cart-item">
            <img
              src={item?.image || defaultImage}
              alt={item?.title || "Item Image"}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{item?.title || "Item Name"}</h3>
              <p>Price: €{item?.price || "0.00"}</p>
              <p>Total: €{itemTotal.toFixed(2)}</p>
              <div className="cart-item-quantity">
                <button onClick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity}>+</button>
              </div>
            </div>
            <button className="trash-btn">
              <FaTrash />
            </button>
          </div>
        </div>
        <div className="modal-footer">
          <div className="total-amount">
            Total Amount: ${itemTotal.toFixed(2)}
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Modelcard;
