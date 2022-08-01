import React, { useState, useEffect } from 'react';
import './header.scss';
import logo from '../../assets/Vector.svg';
import burger from '../../assets/burger.svg';
import ContactPopup from '../ContactPopup/ContactPopup';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isHide, setHide] = useState(false);
  const [pos, setPos] = useState(100);
  const handleOpenClick = () => setOpen(!isOpen);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 100 && window.scrollY > pos) {
        setPos(window.scrollY);
        setHide(true);
      } else {
        setPos(window.scrollY);
        setHide(false);
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [pos]);
  return (
    <header className={`header ${isHide && 'header_hide'}`}>
      <div className='content header__content'>
        <ContactPopup isOpen={isOpen} setOpen={setOpen} />
        <div className='header__info'>
          <img src={logo} alt='logo' className='header__logo' />
          <h2 className='header__name'>
            <span className='header__job'>адвокат</span>
            <br />
            роман яковенко
          </h2>
        </div>
        <nav className='header__nav'>
          <a href='#reviews' className='header__link'>
            Отзывы
          </a>
          <a href='#blog' className='header__link'>
            Блог
          </a>
          <span href='#' className='header__link' onClick={handleOpenClick}>
            Контакты
          </span>
          <img src={burger} alt='burger menu' className={'header__burger'} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
