import React from 'react';
import './Blog.scss';
import posts from '../../assets/image.png';
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
  const cards = [
    {
      id: 1,
      image: posts,
      time: '15.12.2021',
      title: 'А зачем мне вообще нужен адвокат?',
      text: 'Каждому человеку в определенный период его жизни требуется привлечение высококвалифицированного специалиста, наделенногопознаниями в области права. Для одних это способ защитить свое имущество, имя, бизнес. Для вторых – возможность оценить и минимизировать риски. Для третьих – метод структурировать и организовать бесперебойное осуществление хозяйственной деятельности. Для четвертых – средство достижения компромисса в споре и т.д. Адвокат по уголовным делам поможет в самой трудной жизненной ситуации, связанной с уголовным преследованием. В любом случае, помощь адвоката бывает необходима всем!',
    },
    {
      id: 2,
      image: posts,
      time: '27.05.2021',
      title: 'Наследственные споры',
      text: 'Для принятия и вступления в наследство бывает необходимым для наследника пройти процедуру в суде, например: как установление факта родственных отношений, в связи с отсутствием у него какого-либо правоустанавливающего документа, необходимого при подаче заявления о вступлении в наследство в нотариальную палату.',
    },
    {
      id: 3,
      image: posts,
      time: '23.05.2021',
      title: 'Римское право в законодательстве',
      text: 'Правовая культура отдельных стран подвергается постоянной «бомбардировке» со стороны попадающих в нее подобно метеоритному дождю случайных фрагментов других правовых культур, юридических текстов, процедур и правовых конструкций. Такая «бомбардировка» позволяет государству оценить собственный опыт правовой жизни, обрести «зеркало» для его рассмотрения, возможность развивать, совершенствовать отдельные элементы своей правовой системы, наполняя их новыми смыслами [1]. О значении римского права для мировой цивилизации и культуры замечательно сказал Р.Иеринг: «Путем римского права, но превзойдя его, дальше через него - вот девиз, в котором для меня заключается значение римского права нового мира» [2]. Римское право оказало огромное влияние на правовые системы не только стран Западной Европы, но и на правовую систему Российского государства. Прежде чем вообще говорит о рецепции римского права, необходимо определить, что такое «рецепция». Рецепция – (от лат. receptio - принятие) 1) в физиологии – осуществляемое рецепторами восприятие энергии раздражителей и преобразование ее в нервное возбуждение.',
    },
  ];
  return (
    <section className='blog'>
      <h2 className='title blog__title'>Блог</h2>
      <div className='blog__container'>
        {cards.map((card) => (
          <BlogCard key={card.id} {...card} />
        ))}
      </div>
      <div className='pagination'>
        <button className='button button_gray'>Назад</button>
        <button className='pagination__button pagination__button_active'>
          1
        </button>
        <button className='pagination__button'>2</button>
        <button className='pagination__button'>3</button>
        <button className='pagination__button'>...</button>
        <button className='pagination__button'>7</button>
        <button className='button button_gray'>Вперед</button>
      </div>
    </section>
  );
};

export default Blog;
