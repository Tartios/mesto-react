import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState("");

  const [userDescription, setUserDescription] = React.useState("");

  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setNewCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    <main>
      <section className="profile">
        <button
          style={{ backgroundImage: `url(${userAvatar})` }}
          className="profile__avatar"
          onClick={onEditAvatar}
        ></button>
        <div className="profile__info">
          <div className="profile__info-input">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__prof">{userDescription}</p>
          </div>
          <button
            type="button"
            className="profile__info-button"
            onClick={onEditProfile}
          ></button>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="foto-grid">
        {cards.map((item) => (
          <Card key={item._id} onCardClick={onCardClick} card={item} />
        ))}
      </section>
    </main>
  );
}

export default Main;
