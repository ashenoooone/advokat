import { useState } from 'react';
import './ConsulPopup.scss';
import close from '../../assets/close-cross.svg';
import { motion, AnimatePresence } from 'framer-motion';
import ConfPopup from '../ConfPopup/ConfPopup';
const ConsulPopup = ({ isOpened, onClosePopupClick }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const onCloseConfPopupClick = (e) => {
    e.preventDefault();
    const classes = e.target.classList;
    e.stopPropagation();
    if (classes.contains('popup') || classes.contains('popup__close-button'))
      setIsPopupOpened(false);
  };
  const onOpenPopupClick = (e) => {
    e.preventDefault();
    setIsPopupOpened(true);
  };
  return (
    <section
      className={`popup consul-popup ${isOpened && 'popup_active'}`}
      onClick={onClosePopupClick}
    >
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className='popup__container'
            initial={{ y: 300, opacity: 0, scale: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 300, opacity: 0, scale: 0 }}
            transition={{ bounce: 'none' }}
            onClick={onClosePopupClick}
          >
            <img
              src={close}
              alt='Кнопка закрытия'
              className='popup__close-button'
            />
            <h3 className='consul-popup__title'>Записаться на консультацию</h3>
            <form className='popup-form'>
              <input
                type='text'
                className='popup-form__input'
                placeholder='Имя'
              />
              <input
                type='text'
                className='popup-form__input'
                placeholder='Телефон или email'
              />
              <button className='button button_default'>Записаться</button>
            </form>
            <p className='consul-popup__conf'>
              Нажимая на кнопку, я соглашаюсь с условиями{' '}
              <a
                href='#'
                className='consul-popup__link'
                onClick={onOpenPopupClick}
              >
                политики конфиденциальности.
              </a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <ConfPopup
        onClosePopupClick={onCloseConfPopupClick}
        isOpened={isPopupOpened}
      />
    </section>
  );
};

export default ConsulPopup;
