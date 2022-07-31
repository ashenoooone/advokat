import React from 'react';
import logo from '../../assets/logo_footer.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content'>
        <div className='footer__columns'>
          <div className='footer__info'>
            <img src={logo} alt='Логотип' className='footer__logo' />
            <div className='footer__sign'>
              <h2 className='footer__name'>
                <span className='footer__job'>адвокат</span>
                <br />
                роман яковенко
              </h2>
            </div>
          </div>
          <div className='footer__contacts'>
            <p className='footer__contact'>+7 919 827 51 57</p>
            <p className='footer__contact'>romario.yakovenko@yandex.ru</p>
            <p className='footer__adress'>
              г. Саратов, ул. Сакко и Ванцетти, 55
            </p>
          </div>
        </div>
        <p className='footer__copyright'>
          © Адвокат Роман Яковенко. Все права защищены
        </p>
      </div>
    </footer>
  );
};

export default Footer;
