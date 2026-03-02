import React from 'react';
import './ItemCard.css';

function ItemCard({ brand, model, price, type, image }) {
  // Formata o número para o padrão de moeda brasileiro (R$)
  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="item-card">
      <div className="card-image-container">
        <img src={image} alt={`${brand} ${model}`} className="card-image" />
      </div>
      <div className="card-content">
        <p className="card-type">{type}</p>
        <h3 className="card-title">{brand} {model}</h3>
        <p className="card-price">{formatPrice(price)}</p>
      </div>
    </div>
  );
}

export default ItemCard;