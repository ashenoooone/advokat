import React, { useState } from 'react';
import './header.scss';
import logo from '../../assets/Vector.svg';
import burger from '../../assets/burger.svg';

const Header = () => {
  const [isBurger, setBurger] = useState(false);
  return (
    <header className='header'>
      <div className='content header__content'>
        <div className='header__info'>
          <img src={logo} alt='logo' className='header__logo' />
          <h2 className='header__name'>
            <span className='header__job'>адвокат</span>
            <br />
            роман яковенко
          </h2>
        </div>
        <nav className='header__nav'>
          <a href='#' className='header__link'>
            Отзывы
          </a>
          <a href='#' className='header__link'>
            Блог
          </a>
          <a href='#' className='header__link'>
            Контакты
          </a>
          <img src={burger} alt='burger menu' className={'header__burger'} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
