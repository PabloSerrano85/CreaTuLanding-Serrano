// src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = () => {
  const items = [
    { id: 1, name: 'Producto 1', price: '$100' },
    { id: 2, name: 'Producto 2', price: '$200' },
    { id: 3, name: 'Producto 3', price: '$300' },
  ];

  return (
    <div className="item-list-container">
      {items.map(item => (
        <div key={item.id} className="item-card">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;
