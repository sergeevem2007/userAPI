import React, { FC } from 'react';
import './Header.css';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div>
            <a href="/" className="header__logo">
              Пользователи гитхаба
            </a>
            <span className="header__nav">defunct</span>
          </div>
          <div>
            <input type="text" name="" id="" className="header__input" placeholder="Поиск пользователя" />
            <button className="header__btn">Найти</button>
          </div>
        </div>
      </div>
    </header>
  );
};
