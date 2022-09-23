import { useState } from "react";
import "./ConsulPopup.scss";
import close from "../../assets/close-cross.svg";
import { motion, AnimatePresence } from "framer-motion";
import ConfPopup from "../ConfPopup/ConfPopup";
import axios from "axios";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ReCAPTCHA from "react-google-recaptcha";

const ConsulPopup = ({ isOpened, onClosePopupClick, onClose }) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [nameError, setNameError] = useState("");
  const [contactError, setContactError] = useState("");
  const [isTooltipOpened, setIsTooltipOpened] = useState(false);
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);
  const [infoText, setInfoText] = useState("Заявка успешно отправлена!");
  const [isTooltipError, setIsTooltipError] = useState(false);

  const onCaptchaChange = async (e) => {
    setIsCaptchaVisible(false);
    try {
      await axios.post(
        "http://134.0.115.164:7000/api/consultation",
        {
          email: contact,
          name: name,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setInfoText("Заявка успешно отправлена!");
      setIsTooltipError(false);
      setIsTooltipOpened(true);
    } catch (error) {
      setIsTooltipOpened(true);
      setInfoText("Ошибка!");
      setIsTooltipError(true);
    }
  };

  const onCloseTooltipClick = (e) => {
    e.preventDefault();
    const classes = e.target.classList;
    e.stopPropagation();
    if (classes.contains("popup") || classes.contains("popup__close-button")) {
      setIsTooltipOpened(false);
      onClose();
      setName("");
      setContact("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (nameError.length === 0 && contactError.length === 0)
      setIsCaptchaVisible(true);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.value.match(/(?! {2,}).{2,}/g))
      setNameError("Минимальная длина имени 2 символа.");
    else setNameError("");
  };

  const onContactChange = (e) => {
    setContact(e.target.value);
    if (
      !e.target.value.match(
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g
      )
    )
      setContactError("Введите корректную почту или номер телефона.");
    else setContactError("");
  };

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
  return (
    <section
      className={`popup consul-popup ${isOpened && "popup_active"}`}
      onClick={onClosePopupClick}
    >
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className="popup__container"
            initial={{ y: 300, opacity: 0, scale: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 300, opacity: 0, scale: 0 }}
            transition={{ bounce: "none" }}
            onClick={onClosePopupClick}
          >
            <img
              src={close}
              alt="Кнопка закрытия"
              className="popup__close-button"
            />
            <h3 className="consul-popup__title">Записаться на консультацию</h3>
            <form className="popup-form" onSubmit={onSubmit}>
              <div className="popup-form__input-container">
                <input
                  type="text"
                  className="popup-form__input"
                  placeholder="Имя"
                  value={name}
                  onChange={onNameChange}
                  required
                />
                <span className="popup-form__input-error">{nameError}</span>
              </div>
              <div className="popup-form__input-container">
                <input
                  type="text"
                  className="popup-form__input"
                  required
                  value={contact}
                  onChange={onContactChange}
                  placeholder="Телефон или email"
                />
                <span className="popup-form__input-error">{contactError}</span>
              </div>
              <div className="submit-button-container">
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  className={`captcha ${
                    isCaptchaVisible ? "captcha_active" : ""
                  }`}
                  onChange={onCaptchaChange}
                />
                <button className="button button_default">Записаться</button>
              </div>
            </form>
            <p className="consul-popup__conf">
              Нажимая на кнопку, я соглашаюсь с условиями{" "}
              <a
                href="#"
                className="consul-popup__link"
                onClick={onOpenPopupClick}
              >
                политики конфиденциальности.
              </a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <ConfPopup
        key={1}
        onClosePopupClick={onCloseConfPopupClick}
        isOpened={isPopupOpened}
      />
      <InfoTooltip
        title={infoText}
        isError={isTooltipError}
        isOpened={isTooltipOpened}
        onClose={onCloseTooltipClick}
      />
    </section>
  );
};

export default ConsulPopup;
