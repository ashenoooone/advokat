import React from 'react';
import './header.scss';
import logo from '../../assets/Vector.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
