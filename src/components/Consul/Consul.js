import React from 'react';
import './Consul.scss';
import logo from '../../assets/logo_gray.svg';
import ConsulPopup from '../ConsulPopup/ConsulPopup';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Consul = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const onOpenPopupClick = () => {
    setIsPopupOpened(!isPopupOpened);
  };
  const onClosePopupClick = (e) => {
    const classes = e.target.classList;
    if (classes.contains('popup') || classes.contains('popup__close-button'))
      setIsPopupOpened(false);
  };
  return (
    <section className='consul'>
      <div className='content'>
        <p className='consul__subtitle'>
          Квалифицированная юридическая помощь по уголовным и гражданским делам
        </p>
        <h1 className='consul__title'>Адвокат в Саратове</h1>
        <div className='consul__text'>
          <p className='consul__paragraph'>
            Защита интересов и восстановление нарушенных прав граждан и
            юридических лиц в судах и правоохранительных органах;
          </p>
          <p className='consul__paragraph'>
            Защита доверителей от уголовного преследования, а также помощь в
            восстановлении нарушенных прав потерпевших;
          </p>
          <p className='consul__paragraph'>
            Оказание профессиональной правовой поддержки и квалифицированной
            юридической помощи гражданам и организациям в целях защиты их прав,
            свобод и интересов в правоохранительных органах и судах общей
            юрисдикции;
          </p>
          <p className='consul__paragraph'>
            Юридическая помощь физическим и юридическим лицам.
          </p>
        </div>
        <button className='button button_default' onClick={onOpenPopupClick}>
          Записаться на консультацию
        </button>
        <div className='consul__contacts'>
          <p className='consul__contact'>+7 919 827 51 57</p>
          <p className='consul__contact'>romario.yakovenko@yandex.ru</p>
        </div>
        <div className='consul__portret'></div>
        <img src={logo} alt='Логотип' className='consul__logo' />
      </div>
      <ConsulPopup
        onClosePopupClick={onClosePopupClick}
        isOpened={isPopupOpened}
      />
    </section>
  );
};

export default Consul;
