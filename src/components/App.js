import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import ImagePopup from "./ImagePopup.js";
import { api } from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { arrCards } from "../contexts/CardsContext.js";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api.likeCard(card._id).then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));

        setNewCards(newCards);
      });
    } else {
      api.deleteLikeCard(card._id).then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));

        setNewCards(newCards);
      });
    }
  }

  function handleDeleteCard(card) {
    // api
    //   .deleteCard(card._id)
    //   .then(() => {
    //     const newCards = cards.filter((c) => {
    //       return c._id !== card._id;
    //     });
    //     setNewCards(newCards);
    //   })
    //   .catch((err) => console.log(err));
  }

  function handleUpdateUser({ name, about }) {
    api.patchUserInfo({ name, about }).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    });
  }

  function handleUpdateAvatar({ avatar }) {
    api.setNewAvatar({ avatar }).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    });
  }

  function handleAddPlaceSubmit({ name, link }) {
    api.postNewCard({ name, link }).then((newCard) => {
      setNewCards([newCard, ...cards]);
      closeAllPopups();
    });
  }

  // const isLiked = cards.likes.some(i => i._id === currentUser._id);

  // function handleLikeCard() {
  //   api.likeCard(cards._id)
  //   .then(() => {

  //   })
  // }

  //--------------------- КАРТОЧКИ ----------------//

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
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <arrCards.Provider value={cards}>
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <PopupWithForm
            title="Вы уверены?"
            name="card-delete"
            buttonText="Да"
          ></PopupWithForm>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onLikeClick={handleCardLike}
            onDeleteCard={handleDeleteCard}
          />
          <Footer />
        </arrCards.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
