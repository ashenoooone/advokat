import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import close from '../../assets/close-cross.svg';
import './ReviewPopup.scss';
import { useState } from 'react';

const ReviewPopup = ({ isOpened, onClosePopupClick }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [reviewError, setReviewError] = useState('');
  const [nameText, setNameText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [reviewText, setReviewText] = useState('');

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

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const onNameInput = (e) => {
    setNameText(e.target.value);
    if (!e.target.value.match(/.{2,}/g))
      setNameError('Минимальная длина имени 2 символа.');
    else setNameError('');
  };
  const onEmailInput = (e) => {
    setEmailText(e.target.value);
    if (!e.target.value.match(/^.{2,}\@.{2,}\..{2,}/g))
      setEmailError('Введите корректный адресс электронной почты.');
    else setEmailError('');
  };
  const onReviewInput = (e) => {
    setReviewText(e.target.value);
    if (!e.target.value.match(/.{10,}/g))
      setReviewError('Минимальная длина отзыва 10 символа.');
    else setReviewError('');
  };

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
                <div className='popup-form__input-container'>
                  <input
                    type='text'
                    className='popup-form__input'
                    placeholder='Имя'
                    value={nameText}
                    required
                    onInput={onNameInput}
                  />
                  <span className='popup-form__input-error'>{nameError}</span>
                </div>
                <div className='popup-form__input-container'>
                  <input
                    type='text'
                    className='popup-form__input'
                    required
                    onInput={onEmailInput}
                    placeholder='Email'
                    value={emailText}
                  />
                  <span className='popup-form__input-error'>{emailError}</span>
                </div>
              </div>
              <div className='popup-form__input-container'>
                <input
                  type='text'
                  className='popup-form__input'
                  placeholder='Отзыв'
                  value={reviewText}
                  required
                  onInput={onReviewInput}
                />
                <span className='popup-form__input-error'>{reviewError}</span>
              </div>
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
