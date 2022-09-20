import React, { useState, useEffect } from 'react';
import './header.scss';
import logo from '../../assets/Vector.svg';
import burger from '../../assets/burger.svg';
import ContactPopup from '../ContactPopup/ContactPopup';
import { AnimatePresence, motion } from 'framer-motion';
import { useMatchMedia } from '../../hook/useMatchMedia';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isHide, setHide] = useState(false);
  const [pos, setPos] = useState(100);
  const [isBurger, setBurger] = useState(true);
  const handleOpenClick = () => setOpen(!isOpen);
  const isBurgerActive = useMatchMedia('(max-width: 1023px)', true);
  const navigate = useNavigate();
  const navigateToMainPage = () => navigate('/');
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 100 && window.scrollY > pos) {
        setPos(window.scrollY);
        setHide(true);
      } else {
        setPos(window.scrollY);
        setHide(false);
        setOpen(false);
        setBurger(true);
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [pos]);
  useEffect(() => {
    if (!isBurgerActive) setBurger(true);
  }, [isBurgerActive]);
  return (
    <header className={`header ${isHide && 'header_hide'}`}>
      <div className='header__content'>
        <div className='header__info'>
          <img
            src={logo}
            alt='logo'
            className='header__logo'
            onClick={navigateToMainPage}
          />
          <h2 className='header__name'>
            <span className='header__job'>адвокат</span>
            <br />
            роман яковенко
          </h2>
        </div>
        {!isBurgerActive && (
          <nav
            className={`${!isBurger ? 'header__nav-burger' : 'header__nav'}`}
          >
            <a
              href='#reviews'
              className={`${!isBurger ? 'header__nav-link' : 'header__link'}`}
            >
              Отзывы
            </a>
            <a
              href='#blog'
              className={`${!isBurger ? 'header__nav-link' : 'header__link'}`}
            >
              Блог
            </a>
            <span
              className={`${!isBurger ? 'header__nav-link' : 'header__link'}`}
              onClick={handleOpenClick}
            >
              Контакты
            </span>
            <ContactPopup isOpen={isOpen} setOpen={setOpen} />
          </nav>
        )}
        {isBurgerActive && (
          <img
            src={burger}
            alt='burger menu'
            className={'header__burger'}
            onClick={() => setBurger(!isBurger)}
          />
        )}
      </div>
      <AnimatePresence>
        {isBurgerActive && !isBurger && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            exit={{ opacity: 0 }}
            className='header__nav-burger'
          >
            <a href='#reviews' className='header__link'>
              Отзывы
            </a>
            <a href='#blog' className='header__link'>
              Блог
            </a>
            <span className='header__link' onClick={handleOpenClick}>
              Контакты
            </span>
            <ContactPopup isOpen={isOpen} setOpen={setOpen} />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
