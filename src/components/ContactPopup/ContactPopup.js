import React, { useEffect } from 'react';
import './ContactPopup.scss';
import whatsup from '../../assets/whatsup.svg';

const ContactPopup = ({ isOpen, setOpen }) => {
  const handleEscapeClose = (e) => e.key === 'Escape' && setOpen(false);
  const handleClosePopup = (e) => {
    if (e.target.innerText === 'Контакты') return;
    return !e.target.closest('#container') && setOpen(false);
  };
  useEffect(() => {
    document.addEventListener('keydown', handleEscapeClose);
    document.addEventListener('click', handleClosePopup);
    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
      document.removeEventListener('click', handleClosePopup);
    };
  }, [isOpen]);

  return (
    <div className={`contact ${isOpen && 'contact_active'}`}>
      <div id='container' className='contact__container'>
        <div className='contact__numbers'>
          <p className='contact__number'>+7 919 827 51 57</p>
          <img src={whatsup} alt='whatsup icon' className='contact__whatsup' />
        </div>
        <p className='contact__mail'>romario.yakovenko@yandex.ru</p>
        <p className='contact__adress'>г. Саратов, ул. Сакко и Ванцетти, 55</p>
      </div>
    </div>
  );
};

export default ContactPopup;
