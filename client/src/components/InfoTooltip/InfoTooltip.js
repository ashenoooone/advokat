import React from 'react';
import authErrorImage from '../../assets/auth-error.svg';
import authSuccesImage from '../../assets/auth-succes.svg';
import close from '../../assets/close-cross.svg';
import './InfoTooltip.scss';

const InfoTooltip = ({ title = '', isError = false, isOpened, onClose }) => {
  return (
    <div
      onClick={onClose}
      className={
        isOpened ? `popup tooltip-popup popup_active` : `popup tooltip-popup`
      }
    >
      <div className='popup__container'>
        <img
          src={close}
          alt='Кнопка закрытия'
          className='popup__close-button'
        />
        <img
          src={isError ? authErrorImage : authSuccesImage}
          alt=''
          className='popup__image'
        />
        <h2 className='popup__info'>{title}</h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
