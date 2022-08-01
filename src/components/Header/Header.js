import React, { useState, useEffect } from 'react';
import './header.scss';
import logo from '../../assets/Vector.svg';
import burger from '../../assets/burger.svg';
import ContactPopup from '../ContactPopup/ContactPopup';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isHide, setHide] = useState(false);
  const [pos, setPos] = useState(100);
  const [isBurger, setBurger] = useState(false);
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
          <span className='header__link' onClick={handleOpenClick}>
            Контакты
          </span>
          <img
            src={burger}
            alt='burger menu'
            className={'header__burger'}
            onClick={() => setBurger(!isBurger)}
          />
        </nav>
      </div>
      <AnimatePresence>
        {isBurger && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{
              duration: 0.5,
            }}
            exit={{ height: 0 }}
            className='header__nav-burger'
          >
            <div className='header__navs'>
              <a href='#reviews' className='header__nav-link'>
                Отзывы
              </a>
              <a href='#blog' className='header__nav-link'>
                Блог
              </a>
              <span className='header__nav-link' onClick={handleOpenClick}>
                Контакты
              </span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
