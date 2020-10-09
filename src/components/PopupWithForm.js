import React from 'react';

function popupWithForm({title, name, children}) {
    return (
        <div className={`popup popup_type_${name}`}>
            <div className="popup__container">
            <button type="button" className="popup__close-button"></button>
    <h3 className="popup__title">{title}</h3>
    <form action="#" class="popup__form" novalidate>
        {children}
          {/* <input
            name="name"
            type="text"
            id="name-input"
            class="popup__input popup__input_name"
            minlength="2"
            maxlength="40"
            required
          />
          <span id="name-input-error" class="popup__input-error"></span>
          <input
            name="about"
            type="text"
            id="self-input"
            class="popup__input popup__input_prof"
            minlength="2"
            maxlength="200"
            required
          />
          <span id="self-input-error" class="popup__input-error"></span> */}
          <button type="submit" class="popup__save-button">Сохранить</button>
        </form>
            </div>
      </div>
    )
}