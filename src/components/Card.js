import React from "react";

export default function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card)
    }
  return (
      <div className="foto-grid__section">
        <button className="foto-grid__img-button">
          <img src={card.link} alt={card.name} className="foto-grid__image" onClick={handleClick} />
        </button>
        <button className="foto-grid__delete-button"></button>
        <div className="foto-grid__card">
          <h2 className="foto-grid__title">{card.name}</h2>
          <div>
            <button type="submit" className="foto-grid__like-button"></button>
            <p className="foto-grid__like-counter"></p>
          </div>
        </div>
      </div>
  );
}
