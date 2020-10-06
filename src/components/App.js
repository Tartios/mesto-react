import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mesto Russia</title>
  </head>
  <body class="page">
    <div class="popup popup_type_avatar">
      <div class="popup__container">
        <button type="button" class="popup__close-button"></button>
        <h3 class="popup__title">Обновить аватар</h3>
        <form action="#" class="popup__form" novalidate>
          <input
            name="link"
            type="url"
            id="link-input"
            class="popup__input popup__input_link"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="link-input-error" class="popup__input-error"></span>
          <button type="submit" class="popup__save-button popup__save-button_block" 
          disabled>Сохранить</button>
        </form>
      </div>
    </div>
    <div class="popup popup_type_card-delete">
      <div class="popup__container">
        <button type="button" class="popup__close-button"></button>
        <h3 class="popup__title">Вы уверены?</h3>
        <button type="submit" class="popup__save-button">Да</button>
      </div>
    </div>
    <div class="popup popup_type_profile">
      <div class="popup__container">
        <button type="button" class="popup__close-button"></button>
        <h3 class="popup__title">Редактировать профиль</h3>
        <form action="#" class="popup__form" novalidate>
          <input
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
          <span id="self-input-error" class="popup__input-error"></span>
          <button type="submit" class="popup__save-button">Сохранить</button>
        </form>
      </div>
    </div>
    <div class="popup popup_type_add">
      <div class="popup__container">
        <button type="button" class="popup__close-button"></button>
        <h3 class="popup__title">Новое место</h3>
        <form action="#" class="popup__form" novalidate>
          <input
            name="name"
            type="text"
            id="mark-input"
            class="popup__input popup__input_mark"
            placeholder="Название"
            minlength="1"
            maxlength="30"
            required
          />
          <span id="mark-input-error" class="popup__input-error"></span>
          <input
            name="link"
            type="url"
            id="link-input"
            class="popup__input popup__input_link"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="link-input-error" class="popup__input-error"></span>
          <button
            type="submit"
            class="popup__save-button popup__save-button_block"
            disabled
          >
            Создать
          </button>
        </form>
      </div>
    </div>
    <div class="popup popup_type_image">
      <div class="popup__container popup__container_img">
        <button type="button" class="popup__close-button"></button>
        <img src="#" alt="добавленная картинка" class="popup__imgSrc" />
        <h3 class="popup__title popup__title_img-container"></h3>
      </div>
    </div>
    <Header />
    <Main />
    <Footer />
    <template id="card">
      <div class="foto-grid__section">
        <button class="foto-grid__img-button">
          <img src="#" alt="добавленная картинка" class="foto-grid__image" />
        </button>
        <button class="foto-grid__delete-button"></button>
        <div class="foto-grid__card">
          <h2 class="foto-grid__title"></h2>
          <div>
            <button type="submit" class="foto-grid__like-button"></button>
            <p class="foto-grid__like-counter"></p>
          </div>
        </div>
      </div>
    </template>
  </body>
</html>

  );
}

export default App;
