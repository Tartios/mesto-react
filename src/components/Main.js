import React from 'react';

function Main() {
    return (
        <main>
          <section class="profile">
            <button class="profile__avatar"></button>
            <div class="profile__info">
              <div class="profile__info-input">
                <h1 class="profile__name"></h1>
                <p class="profile__prof"></p>
              </div>
              <button type="button" class="profile__info-button"></button>
            </div>
            <button type="button" class="profile__add-button"></button>
          </section>
          <section class="foto-grid"></section>
        </main>        
    )
}

export default Main;