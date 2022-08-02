import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import close from '../../assets/close-cross.svg';
import './ReviewPopup.scss';

const ReviewPopup = ({ isOpened, onClosePopupClick }) => {
  return (
    <section
      className={`review-popup popup ${isOpened && 'popup_active'}`}
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
            <h3 className='review-popup__title'>Оставить отзыв</h3>
            <form className='popup-form'>
              <div className='review-popup__inputs'>
                <input
                  type='text'
                  className='popup-form__input'
                  placeholder='Имя'
                />
                <input
                  type='text'
                  className='popup-form__input'
                  placeholder='Email'
                />
              </div>
              <input
                type='text'
                className='popup-form__input'
                placeholder='Отзыв'
              />
              <span className='review-popup__span'>Оценка</span>
              <button className='button button_default'>Оставить отзыв</button>
            </form>
            <p className='review-popup__conf'>
              Нажимая на кнопку, я соглашаюсь с условиями{' '}
              <a href='#' className='popup__link'>
                политики конфиденциальности.
              </a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReviewPopup;
