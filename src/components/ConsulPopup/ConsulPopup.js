import React from 'react';
import './ConsulPopup.scss';
import close from '../../assets/close-cross.svg';
import { motion, AnimatePresence } from 'framer-motion';

const ConsulPopup = ({ isOpened, onClosePopupClick }) => {
  return (
    <section
      className={`consul-popup ${isOpened && 'consul-popup_active'}`}
      onClick={onClosePopupClick}
    >
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className='consul-popup__container'
            initial={{ y: 300, opacity: 0, scale: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 300, opacity: 0, scale: 0 }}
            transition={{ bounce: 'none' }}
            onClick={onClosePopupClick}
          >
            <img
              src={close}
              alt='Кнопка закрытия'
              className='consul-popup__close-button'
            />
            <h3 className='consul-popup__title'>Записаться на консультацию</h3>
            <form className='consul-form'>
              <input
                type='text'
                className='consul-form__input'
                placeholder='Имя'
              />
              <input
                type='text'
                className='consul-form__input'
                placeholder='Телефон или email'
              />
              <button className='button button_default'>Записаться</button>
            </form>
            <p className='consul-popup__conf'>
              Нажимая на кнопку, я соглашаюсь с условиями{' '}
              <a href='#' className='consul-popup__link'>
                политики конфиденциальности.
              </a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ConsulPopup;
