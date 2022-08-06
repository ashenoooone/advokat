import React from 'react';
import './ConfPopup.scss';
import { motion, AnimatePresence } from 'framer-motion';
import close from '../../assets/close-cross.svg';

const ConfPopup = ({ isOpened, onClosePopupClick }) => {
  return (
    <section className={`popup consul-popup ${isOpened && 'popup_active'}`}>
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
            <h3 className='consul-popup__title'>Закрыть</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ConfPopup;
