import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import { api } from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { arrCards } from "../contexts/CardsContext.js";

function App() {
  const [currentUser, setCurrentUser] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [cards, setNewCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setNewCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );

  const [selectedCard, setSelectedCard] = React.useState({});

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <arrCards.Provider value={cards}>
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          children=""
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            name="link"
            type="url"
            id="link-input"
            className="popup__input popup__input_link"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="link-input-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          title="Вы уверены?"
          name="card-delete"
          buttonText="Да"
        ></PopupWithForm>

        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
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
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="add"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
        >
          {" "}
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
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        </arrCards.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
