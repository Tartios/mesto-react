import React from "react";
import Api from "./Api.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState('Я и ты');

  const [userDescription, setUserDescription] = React.useState('Ты и я');

  const [userAvatar, setUserAvatar] = React.useState(
    "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0082-CUSA02487_00-AV00000000000008/1591334423000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
  );
  const myID = "b7f21f02-0f3c-4a3e-ae62-e9761e3102fc";
  const userID = "ccc3841f08657ff5c04cac75";
  const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-15",
    id: myID
  });

  React.useEffect(() => {
    api
    .getAppInfo()
    .then((res) => {
      const [cardInfo, userData] = res;
    })

    api.getUserInfo()
    .then((res) => {
      setUserName.setUserInfo(res);
    })
  }) //тут нужно посмотреть как апи передавать в разметку, это в лайвкодинге было


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
      <section className="foto-grid"></section>
    </main>
  );
}

export default Main;
