import React, { useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ReactionPopup.scss";
import ConfPopup from "../ConfPopup/ConfPopup";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ReactionPopup = ({ isLike, id, setCards, onClose }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [email, setEmail] = useState("");
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);
  let siteKey = process.env.REACT_APP_SITE_KEY;

  const sendLikeReaction = useCallback(async () => {
    const response = await axios.post(
      `http://134.0.115.164:7000/api/review-card/${id}`,
      {
        like: email,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    response &&
      setCards((state) => {
        const updateCard = state.find((card) => card.id === id);
        updateCard.likes.push(email);
        const cards = state.filter((card) => card.id !== id);
        return [...cards, updateCard].sort((a, b) => {
          const firstDate = new Date(a.createdAt).getTime();
          const secondDate = new Date(b.createdAt).getTime();
          return secondDate - firstDate;
        });
      });
  }, [email, id]);

  const sendDislikeReaction = useCallback(async () => {
    const response = await axios.post(
      `http://134.0.115.164:7000/api/review-card/${id}`,
      {
        dislike: email,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    response &&
      setCards((state) => {
        const updateCard = state.find((card) => card.id === id);
        updateCard.dislikes.push(email);
        const cards = state.filter((card) => card.id !== id);
        return [...cards, updateCard].sort((a, b) => {
          const firstDate = new Date(a.createdAt).getTime();
          const secondDate = new Date(b.createdAt).getTime();
          return secondDate - firstDate;
        });
      });
  }, [email, id]);

  const onCloseConfPopupClick = (e) => {
    e.preventDefault();
    const classes = e.target.classList;
    e.stopPropagation();
    if (classes.contains("popup") || classes.contains("popup__close-button"))
      setIsPopupOpened(false);
  };

  const onOpenPopupClick = (e) => {
    e.preventDefault();
    setIsPopupOpened(true);
  };

  const handleSubmitReactionForm = (e) => {
    e.preventDefault();
    setIsCaptchaVisible(true);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);

  const onOuterPopupClick = (e) => {
    console.log(e.target.closest("div"));
    if (
      e.target.closest("div").className !== "reaction-popup__container" &&
      e.target.closest("div").className !== "submit-button-container"
    ) {
      onClose();
    }
  };
  const onCaptchaChange = async (e) => {
    setIsCaptchaVisible(false);
    if (isLike) {
      await sendLikeReaction();
    } else {
      await sendDislikeReaction();
    }
    setEmail("");
    onClose();
  };

  useEffect(() => {
    window.addEventListener("click", onOuterPopupClick);
    return () => {
      window.removeEventListener("click", onOuterPopupClick);
    };
  }, []);

  return (
    <AnimatePresence>
      (
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        exit={{ height: 0 }}
        transition={{ duration: 0.5 }}
        className="reaction-popup"
        // onClick={onOuterPopupClick}
      >
        <div className="reaction-popup__container">
          <h3 className="consul-popup__title">Поставить оценку</h3>
          <form className="popup-form" onSubmit={handleSubmitReactionForm}>
            <input
              type="email"
              className="popup-form__input"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <div className="submit-button-container">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                className={`captcha ${
                  isCaptchaVisible ? "captcha_active" : ""
                }`}
                onChange={onCaptchaChange}
              />
              <button
                className="button button_default"
                style={{ width: "100%" }}
              >
                Поставить
              </button>
            </div>
          </form>
          <p className="consul-popup__conf">
            Нажимая на кнопку, я соглашаюсь с условиями{" "}
            <a
              href="#"
              className="reaction-popup__link"
              onClick={onOpenPopupClick}
            >
              политики конфиденциальности.
            </a>
          </p>
        </div>
      </motion.div>
      <ConfPopup
        key={2}
        onClosePopupClick={onCloseConfPopupClick}
        isOpened={isPopupOpened}
      />
    </AnimatePresence>
  );
};

export default ReactionPopup;
