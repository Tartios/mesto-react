import React from 'react';

function imagePopup() {
    return (
        <div className="popup popup_type_image">
        <div className="popup__container popup__container_img">
          <button type="button" className="popup__close-button"></button>
          <img src="#" alt="добавленная картинка" className="popup__imgSrc" />
          <h3 className="popup__title popup__title_img-container"></h3>
        </div>
      </div>
    )
}