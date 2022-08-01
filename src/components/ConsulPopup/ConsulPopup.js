import React from 'react';
import './ConsulPopup.scss';
import { motion } from 'framer-motion';

const ConsulPopup = React.forwardRef(({ isOpened }, ref) => {
  return (
    <motion.section className='consul-popup' ref={ref}>
      <h3 className='consul-popup__title'>Записаться на консультацию</h3>
      <form className='consul-form'>
        <input type='text' className='consul-form__input' placeholder='Имя' />
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
    </motion.section>
  );
});

const MConsulPopup = motion(ConsulPopup, { forwardMotionProps: true });
export default MConsulPopup;
