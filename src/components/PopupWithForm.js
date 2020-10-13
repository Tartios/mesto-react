import React, { Children } from "react";

export default function PopupWithForm({ title, name, children, isOpen, onClose }) {
  
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_open"} `}>
      <div className="popup__container">
        <button type="button" onClick={onClose} className="popup__close-button"></button>
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
