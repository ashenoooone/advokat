import React from 'react';
import './Consul.scss';
import Roman from '../../assets/Roman.jpg';
import logo from '../../assets/logo_gray.svg';

const Consul = () => {
  return (
    <section className='consul'>
      <div className='content'>
        <p className='consul__subtitle'>
          Квалифицированная юридическая помощь по уголовным и гражданским делам
        </p>
        <h1 className='consul__title'>Адвокат в Саратове</h1>
        <p className='consul__paragraph'>
          Защита интересов и восстановление нарушенных прав граждан и
          юридических лиц в судах и правоохранительных органах;
          <br /> <br /> Защита доверителей от уголовного преследования, а также
          помощь в восстановлении нарушенных прав потерпевших;
          <br /> <br /> Оказание профессиональной правовой поддержки и
          квалифицированной юридической помощи гражданам и организациям в целях
          защиты их прав, свобод и интересов в правоохранительных органах и
          судах общей юрисдикции;
          <br /> <br /> Юридическая помощь физическим и юридическим лицам.
        </p>
        <button className='button button_default'>
          Записаться на консультацию
        </button>
        <div className='consul__contacts'>
          <p className='consul__contact'>+7 919 827 51 57</p>
          <p className='consul__contact'>romario.yakovenko@yandex.ru</p>
        </div>
        <img src={Roman} alt='Адвокат Роман' className='consul__portret' />
        <img src={logo} alt='Логотип' className='consul__logo' />
      </div>
    </section>
  );
};

export default Consul;
