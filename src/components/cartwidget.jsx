// src/components/CartWidget.jsx
import React from 'react';

const CartWidget = () => {
  // Simulamos un número de productos en el carrito
  const itemsInCart = 5;

  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      {itemsInCart > 0 && (
        <span className="cart-count">{itemsInCart}</span>
      )}
    </div>
  );
};

export default CartWidget;
