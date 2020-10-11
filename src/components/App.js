import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  // let isEditProfilePopupOpen = false;
  // let isAddPlacePopupOpen = false;
  // let isEditAvatarPopupOpen = false;

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  const popup = Array.from(document.querySelectorAll('.popup'))
  function closeAllPopups() {
    popup.forEach((popup) => {
      popup.classList.remove('popup_open');
    })
    
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );

  return (
    <body className="page">
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        children=""
        isOpen={isEditAvatarPopupOpen}
        isClose={closeAllPopups}
      >
        <form action="#" className="popup__form" noValidate>
          <input
            name="link"
            type="url"
            id="link-input"
            className="popup__input popup__input_link"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="link-input-error" className="popup__input-error"></span>
          <button
            type="submit"
            className="popup__save-button popup__save-button_block"
            disabled
          >
            Сохранить
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="card-delete" >
        <button type="submit" className="popup__save-button">
          Да
        </button>
      </PopupWithForm>

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        isClose={closeAllPopups}
      >
        <form action="#" className="popup__form" noValidate>
          <input
            name="name"
            type="text"
            id="name-input"
            className="popup__input popup__input_name"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="name-input-error" className="popup__input-error"></span>
          <input
            name="about"
            type="text"
            id="self-input"
            className="popup__input popup__input_prof"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="self-input-error" className="popup__input-error"></span>
          <button type="submit" className="popup__save-button">
            Сохранить
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add"
        isOpen={isAddPlacePopupOpen}
        isClose={closeAllPopups}
      >
        {" "}
        <form action="#" className="popup__form" noValidate>
          <input
            name="name"
            type="text"
            id="mark-input"
            className="popup__input popup__input_mark"
            placeholder="Название"
            minLength="1"
            maxLength="30"
            required
          />
          <span id="mark-input-error" className="popup__input-error"></span>
          <input
            name="link"
            type="url"
            id="link-input"
            className="popup__input popup__input_link"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="link-input-error" className="popup__input-error"></span>
          <button
            type="submit"
            className="popup__save-button popup__save-button_block"
            disabled
          >
            Создать
          </button>
        </form>
      </PopupWithForm>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form action="#" className="popup__form" noValidate>
            <input
              name="link"
              type="url"
              id="link-input"
              className="popup__input popup__input_link"
              placeholder="Ссылка на аватар"
              required
            />
            <span id="link-input-error" className="popup__input-error"></span>
            <button
              type="submit"
              className="popup__save-button popup__save-button_block"
              disabled
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_card-delete">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h3 className="popup__title">Вы уверены?</h3>
          <button type="submit" className="popup__save-button">
            Да
          </button>
        </div>
      </div>
      <div className="popup popup_type_profile">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form action="#" className="popup__form" noValidate>
            <input
              name="name"
              type="text"
              id="name-input"
              className="popup__input popup__input_name"
              minLength="2"
              maxLength="40"
              required
            />
            <span id="name-input-error" className="popup__input-error"></span>
            <input
              name="about"
              type="text"
              id="self-input"
              className="popup__input popup__input_prof"
              minLength="2"
              maxLength="200"
              required
            />
            <span id="self-input-error" className="popup__input-error"></span>
            <button type="submit" className="popup__save-button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h3 className="popup__title">Новое место</h3>
          <form action="#" className="popup__form" noValidate>
            <input
              name="name"
              type="text"
              id="mark-input"
              className="popup__input popup__input_mark"
              placeholder="Название"
              minLength="1"
              maxLength="30"
              required
            />
            <span id="mark-input-error" className="popup__input-error"></span>
            <input
              name="link"
              type="url"
              id="link-input"
              className="popup__input popup__input_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span id="link-input-error" className="popup__input-error"></span>
            <button
              type="submit"
              className="popup__save-button popup__save-button_block"
              disabled
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_image">
        <div className="popup__container popup__container_img">
          <button type="button" className="popup__close-button"></button>
          <img src="#" alt="добавленная картинка" className="popup__imgSrc" />
          <h3 className="popup__title popup__title_img-container"></h3>
        </div>
      </div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <template id="card">
        <div className="foto-grid__section">
          <button className="foto-grid__img-button">
            <img
              src="#"
              alt="добавленная картинка"
              className="foto-grid__image"
            />
          </button>
          <button className="foto-grid__delete-button"></button>
          <div className="foto-grid__card">
            <h2 className="foto-grid__title"></h2>
            <div>
              <button type="submit" className="foto-grid__like-button"></button>
              <p className="foto-grid__like-counter"></p>
            </div>
          </div>
        </div>
      </template>
    </body>
  );
}

export default App;
