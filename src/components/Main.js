import React from 'react';
import './FormValidator.js';
// import {
//   parameters,
//   openButton,
//   addButton,
//   profileForm,
//   addForm,
//   inputName,
//   inputProf,
//   inputMark,
//   inputLink,
//   addSave,
//   gridCards,
//   profileName,
//   profileProf,
//   myID,
//   profileAvatar,
//   avatarForm,
//   popupError,
// } from "../utils/parameters.js";

function Main() {
  function handleEditAvatarClick() {
    const avik = document.querySelector('.popup_type_avatar');
    avik.classList.add('popup_open');
  }

  function handleEditProfileClick() {
    const profic = document.querySelector('.popup_type_profile');
    profic.classList.add('popup_open');
  }

  function handleAddPlaceClick() {
    const placek = document.querySelector('.popup_type_add');
    placek.classList.add('popup_open');    
  }

    return (
        <main>
          <section class="profile">
            <button class="profile__avatar" onClick={handleEditAvatarClick}></button>
            <div class="profile__info">
              <div class="profile__info-input">
                <h1 class="profile__name"></h1>
                <p class="profile__prof"></p>
              </div>
              <button type="button" class="profile__info-button" onClick={handleEditProfileClick}></button>
            </div>
            <button type="button" class="profile__add-button" onClick={handleAddPlaceClick}></button>
          </section>
          <section class="foto-grid"></section>
        </main>        
    )
}

export default Main;