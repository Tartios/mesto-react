import React, { Children } from "react";

export default function PopupWithForm({ title, name, children, isOpen, isClose }) {
  // const popup = document.querySelector('.popup');
  
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_open"} `}>
      <div className="popup__container">
        <button type="button" onClick={isClose} className="popup__close-button"></button>
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
