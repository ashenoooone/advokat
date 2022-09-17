import React, { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ReactionPopup.scss';
import ConfPopup from '../ConfPopup/ConfPopup';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const ReactionPopup = ({ isOpen, isLike, id, setCards }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [email, setEmail] = useState('');
  const [isCaptchaCompleted, setIsCaptchaCompleted] = useState(false);
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);
  let siteKey = process.env.REACT_APP_SITE_KEY;

  const sendLikeReaction = useCallback(async () => {
    const response = await axios.post(
      `http://134.0.115.164:7000/api/review-card/${id}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        like: email,
      }
    );
    setCards(state => {
      const updateCard = state.find(card => card.id === id);
      updateCard.likes.push(email);
      const cards = state.filter(card => card.id !== id);
      return [...cards, updateCard].sort((a, b) => a.id - b.id);
    });
  }, [email, id]);
  const sendDislikeReaction = useCallback(async () => {
    const response = await axios.post(
      `http://134.0.115.164:7000/api/review-card/${id}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        dislike: email,
      }
    );
    setCards(state => {
      const updateCard = state.find(card => card.id === id);
      updateCard.dislikes.push(email);
      const cards = state.filter(card => card.id !== id);
      return [...cards, updateCard].sort((a, b) => a.id - b.id);
    });
  }, [email, id]);
  const onCloseConfPopupClick = e => {
    e.preventDefault();
    const classes = e.target.classList;
    e.stopPropagation();
    if (classes.contains('popup') || classes.contains('popup__close-button'))
      setIsPopupOpened(false);
  };
  const onOpenPopupClick = e => {
    e.preventDefault();
    setIsPopupOpened(true);
  };
  const handleSubmitReactionForm = e => {
    e.preventDefault();
    setIsCaptchaVisible(true);
    if (isLike) {
      sendLikeReaction();
    } else {
      sendDislikeReaction();
    }
    setEmail('');
  };
  const handleEmailChange = e => setEmail(e.target.value);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5 }}
          className='reaction-popup'
        >
          <div className='reaction-popup__container'>
            <h3 className='consul-popup__title'>Поставить оценку</h3>
            <form className='popup-form' onSubmit={handleSubmitReactionForm}>
              <input
                type='email'
                className='popup-form__input'
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
              />
              <div className='submit-button-container'>
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  className={`captcha ${
                    isCaptchaVisible ? 'captcha_active' : ''
                  }`}
                />
                <button
                  className='button button_default'
                  style={{ width: '100%' }}
                >
                  Поставить
                </button>
              </div>
            </form>
            <p className='consul-popup__conf'>
              Нажимая на кнопку, я соглашаюсь с условиями{' '}
              <a
                href='#'
                className='reaction-popup__link'
                onClick={onOpenPopupClick}
              >
                политики конфиденциальности.
              </a>
            </p>
          </div>
        </motion.div>
      )}
      <ConfPopup
        key={2}
        onClosePopupClick={onCloseConfPopupClick}
        isOpened={isPopupOpened}
      />
    </AnimatePresence>
  );
};

export default ReactionPopup;
