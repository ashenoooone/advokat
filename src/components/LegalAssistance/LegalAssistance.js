import React from 'react';
import './LegalAssistance.scss';
import legalitem1 from '../../assets/legalitem1.svg';
import legalitem2 from '../../assets/legalitem2.svg';
import legalitem3 from '../../assets/legalitem3.svg';
import legalitem4 from '../../assets/legalitem4.svg';

const LegalAssistance = () => {
  return (
    <section className='legal-assist'>
      <div className='legal-assist__content'>
        <h2 className='title legal-assist__title'>
          Юридическая помощь физическим и юридическим лицам
        </h2>
        <div className='legal-assist__service'>
          <div className='service__card'>
            <img src={legalitem1} alt='document' className='service__img' />
            <div className='service__content'>
              <h3 className='service__title'>
                Консультации и составление документов:
              </h3>
              <ul className='service__list'>
                <li className='service__item'>
                  Устные консультации по правовым вопросам
                </li>
                <li className='service__item'>
                  Письменные консультации и правовые заключения
                </li>
                <li className='service__item'>
                  Составление исковых заявлений, жалоб, ходатайств, иных
                  документов правового характера
                </li>
                <li className='service__item'>
                  Составление проектов договоров
                </li>
                <li className='service__item'>
                  Оформление запросов на получение документов
                </li>
              </ul>
            </div>
          </div>
          <div className='service__card'>
            <img src={legalitem2} alt='document' className='service__img' />
            <div className='service__content'>
              <h3 className='service__title'>
                Участие в гражданском судопроизводстве в судах общей юрисдикции
                и арбитражных судах, по делам об административных
                правонарушениях:
              </h3>
              <ul className='service__list'>
                <li className='service__item'>
                  Участие в качестве представителя доверителя в гражданском
                  судопроизводстве (семейные и трудовые дела, дела о взыскании
                  золженности и возмещении вреда)
                </li>
                <li className='service__item'>
                  Участие в качестве представителя доверителя в арбитражных
                  судах в каждой инстанции и в иных органах разрешения
                  конфликтов
                </li>
                <li className='service__item'>
                  Участие в качестве представителя доверителя в делах об
                  административных правонарушениях
                </li>
              </ul>
            </div>
          </div>
          <div className='service__card'>
            <img src={legalitem3} alt='document' className='service__img' />
            <div className='service__content'>
              <h3 className='service__title'>
                Участие в уголовном судопроизводстве:
              </h3>
              <ul className='service__list'>
                <li className='service__item'>
                  Защита на предварительном следствии
                </li>
                <li className='service__item'>
                  Защита прав потерпевших на следствии и в суде
                </li>
                <li className='service__item'>Защита подсудимого в суде</li>
              </ul>
            </div>
          </div>
          <div className='service__card'>
            <img src={legalitem4} alt='document' className='service__img' />
            <div className='service__content'>
              <h3 className='service__title'>Оказание внесудебных услуг:</h3>
              <ul className='service__list'>
                <li className='service__item'>
                  Досудебное урегулирование споров между конфликтующими
                  сторонами, в том числе в области семейных, жилищных,
                  наследственных, трудовых споров, по взысканию задолженности
                </li>
                <li className='service__item'>
                  Услуги личного и семейного адвоката
                </li>
                <li className='service__item'>
                  Представление интересов доверителей в государственных
                  учреждениях
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalAssistance;
