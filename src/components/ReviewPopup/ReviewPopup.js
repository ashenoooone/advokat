import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import close from '../../assets/close-cross.svg';
import './ReviewPopup.scss';
import { useState } from 'react';

const ReviewPopup = ({ isOpened, onClosePopupClick }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const starsRating = useMemo(() => {
    return [...Array(5)].map((item, index) => {
      return (
        <span
          key={index}
          onMouseEnter={() => setHoverRating(index)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => setRating(index)}
          className={`icon-star${
            index <= hoverRating || (!hoverRating && rating >= index)
              ? '_active'
              : '_inactive'
          }`}
        ></span>
      );
    });
  }, [hoverRating, rating]);

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
              <div className='review-popup__rating'>
                <span className='review-popup__span'>Оценка</span>
                <div className='review-popup__stars'>{starsRating}</div>
              </div>
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
