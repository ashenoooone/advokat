import React from 'react';
import './ConfPopup.scss';
import { motion, AnimatePresence } from 'framer-motion';
import close from '../../assets/close-cross.svg';

const ConfPopup = ({ isOpened, onClosePopupClick }) => {
  return (
    <section
      className={`conf-popup popup ${isOpened && 'popup_active'}`}
      onClick={onClosePopupClick}
    >
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
            <p className='conf-popup__subtitle'>
              Использование Пользователем сайта означает Согласие с настоящей
              Политикой конфиденциальности и условиями обработки персональных
              данных Пользователя. В случае несогласия с условиями Политики
              конфиденциальности Пользователь должен прекратить использование
              сайта.
            </p>
            <h3 className='conf-popup__title'>
              Пользователь дает Согласие Оператору на обработку своих
              персональных данных со следующими условиями
            </h3>
            <ol className='conf-popup__list'>
              <li className='conf-popup__list-item'>
                Данное Согласие дается на обработку персональных данных, как без
                использования средств автоматизации, так и с их использованием.
              </li>
              <li className='conf-popup__list-item'>
                Согласие дается на обработку следующих персональных данных:
                фамилия, имя, отчество, номер телефона, адрес электронной почты.
                Пользователь подтверждает, что все указанные им данные
                принадлежат лично ему.
              </li>
              <li className='conf-popup__list-item'>
                Обработка персональных данных осуществляется с целью
                использования Пользователем сервисов Сайта, в том числе, но не
                ограничиваясь перечисленными: услуга онлайн заказа обратного
                звонка, услуга онлайн размещения вопроса, отправка сообщений на
                телефон и электронную почту, а также обеспечения связи с
                Пользователем посредством предоставленных Пользователем
                персональных (контактных) данных.
              </li>
              <li className='conf-popup__list-item'>
                В ходе обработки персональных данных, могут быть совершены
                следующие действия: получение, ввод, сбор, систематизация,
                накопление персональных данных, в том числе у уполномоченных
                третьих лиц; хранение, удаление персональных данных (в
                электронном виде и на бумажном носителе); уточнение (обновление,
                изменение) персональных данных; использование персональных
                данных в связи с оказываемыми услугами; передача персональных
                данных субъекта в установленном порядке по внутренней или
                внешней сети по защищенным каналам связи, на материальных
                носителях; блокирование; уничтожение.
              </li>
              <li className='conf-popup__list-item'>
                Оператор вправе поручить обработку персональных данных
                Пользователя третьим лицам (при условии соблюдения режима
                конфиденциальности персональных данных, а также при условии, что
                таковое не нарушает законные права и интересы Пользователя и
                положения действующего законодательства Российской Федерации).
                Третьи лица, привлечённые Оператором, осуществляют обработку
                персональных данных Пользователя, предоставляемых Оператором, в
                объёме, в целях и способами, установленными настоящим Согласием.
              </li>
              <li className='conf-popup__list-item'>
                Настоящее Согласие действует в отношении всей информации,
                которую Оператор может получить о Пользователе во время
                использования им Сайта.
              </li>
              <li className='conf-popup__list-item'>
                Согласие на обработку персональных данных действует с момента
                предоставления Пользователем Оператору своих персональных данных
                до достижения целей обработки персональных данных.
              </li>
            </ol>
            <p className='conf-popup__footer'>
              Согласие может быть отозвано путем отправки Пользователем
              электронного письма на E-mail Оператора с запросом на отзыв
              Согласия.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ConfPopup;
