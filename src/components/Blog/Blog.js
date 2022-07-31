import React, { useEffect, useState } from 'react';
import './Blog.scss';
import posts from '../../assets/image.png';
import BlogCard from '../BlogCard/BlogCard';
import Pagination from '../Pagination/Pagination';
import { useMatchMedia } from '../../hook/useMatchMedia';
const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState(3);

  const isDesktopResolution = useMatchMedia('(min-width:1023px)', true);

  useEffect(() => {
    isDesktopResolution ? setBlogPerPage(3) : setBlogPerPage(2);
  }, [isDesktopResolution]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
      time: '32423',
      title: 'Ризаконодательстве',
      text: 'Правовая  обардировке» со стороны попадающих в нее подобно метеоритному дождю случайных фрагментов других правовых культур, юридических текстов, процедур и правовых конструкций. Такая «бомбардировка» позволяет государству оценить собственный опыт правовой жизни, обрести «зеркало» для его рассмотрения, возможность развивать, совершенствовать отдельные элементы своей правовой системы, наполняя их новыми смыслами [1]. О значении римского права для мировой цивилизации и культуры замечательно сказал Р.Иеринг: «Путем римского права, но превзойдя его, дальше через него - вот девиз, в котором для меня заключается значение римского права нового мира» [2]. Римское право оказало огромное влияние на правовые системы не только стран Западной Европы, но и на правовую систему Российского государства. Прежде чем вообще говорит о рецепции римского права, необходимо определить, что такое «рецепция». Рецепция – (от лат. receptio - принятие) 1) в физиологии – осуществляемое рецепторами восприятие энергии раздражителей и преобразование ее в нервное возбуждение.',
    },
    {
      id: 4,
      image: posts,
      time: '143551',
      title: 'А43535ужен адвокат?',
      text: 'Каждому че345356637 жизни требуется привлечение высококвалифицированного специалиста, наделенногопознаниями в области права. Для одних это способ защитить свое имущество, имя, бизнес. Для вторых – возможность оценить и минимизировать риски. Для третьих – метод структурировать и организовать бесперебойное осуществление хозяйственной деятельности. Для четвертых – средство достижения компромисса в споре и т.д. Адвокат по уголовным делам поможет в самой трудной жизненной ситуации, связанной с уголовным преследованием. В любом случае, помощь адвоката бывает необходима всем!',
    },
    {
      id: 5,
      image: posts,
      time: '346486856',
      title: 'Н4365споры',
      text: 'Для принятия12415 бывает необходимым для наследника пройти процедуру в суде, например: как установление факта родственных отношений, в связи с отсутствием у него какого-либо правоустанавливающего документа, необходимого при подаче заявления о вступлении в наследство в нотариальную палату.',
    },
    {
      id: 6,
      image: posts,
      time: '135021',
      title: 'Римск13511 законодательстве',
      text: 'Правовая культура отдельных стран подвергается постоянной «бомбардировке» со стороны попадающих в нее подобно метеоритному дождю случайных фрагментов других правовых культур, юридических текстов, процедур и правовых конструкций. Такая «бомбардировка» позволяет государству оценить собственный опыт правовой жизни, обрести «зеркало» для его рассмотрения, возможность развивать, совершенствовать отдельные элементы своей правовой системы, наполняя их новыми смыслами [1]. О значении римского права для мировой цивилизации и культуры замечательно сказал Р.Иеринг: «Путем римского права, но превзойдя его, дальше через него - вот девиз, в котором для меня заключается значение римского права нового мира» [2]. Римское право оказало огромное влияние на правовые системы не только стран Западной Европы, но и на правовую систему Российского государства. Прежде чем вообще говорит о рецепции римского права, необходимо определить, что такое «рецепция». Рецепция – (от лат. receptio - принятие) 1) в физиологии – осуществляемое рецепторами восприятие энергии раздражителей и преобразование ее в нервное возбуждение.',
    },
    {
      id: 7,
      image: posts,
      time: '15.12.2021',
      title: 'А зачем мне вообще нужен адвокат?',
      text: 'Каждому человеку в определенный период его жизни требуется привлечение высококвалифицированного специалиста, наделенногопознаниями в области права. Для одних это способ защитить свое имущество, имя, бизнес. Для вторых – возможность оценить и минимизировать риски. Для третьих – метод структурировать и организовать бесперебойное осуществление хозяйственной деятельности. Для четвертых – средство достижения компромисса в споре и т.д. Адвокат по уголовным делам поможет в самой трудной жизненной ситуации, связанной с уголовным преследованием. В любом случае, помощь адвоката бывает необходима всем!',
    },
    {
      id: 8,
      image: posts,
      time: '27.05.2021',
      title: 'Наследственные споры',
      text: 'Для принятия и вступления в наследство бывает необходимым для наследника пройти процедуру в суде, например: как установление факта родственных отношений, в связи с отсутствием у него какого-либо правоустанавливающего документа, необходимого при подаче заявления о вступлении в наследство в нотариальную палату.',
    },
    {
      id: 9,
      image: posts,
      time: '23.05.2021',
      title: 'Римское право в законодательстве',
      text: 'Правовая культура отдельных стран подвергается постоянной «бомбардировке» со стороны попадающих в нее подобно метеоритному дождю случайных фрагментов других правовых культур, юридических текстов, процедур и правовых конструкций. Такая «бомбардировка» позволяет государству оценить собственный опыт правовой жизни, обрести «зеркало» для его рассмотрения, возможность развивать, совершенствовать отдельные элементы своей правовой системы, наполняя их новыми смыслами [1]. О значении римского права для мировой цивилизации и культуры замечательно сказал Р.Иеринг: «Путем римского права, но превзойдя его, дальше через него - вот девиз, в котором для меня заключается значение римского права нового мира» [2]. Римское право оказало огромное влияние на правовые системы не только стран Западной Европы, но и на правовую систему Российского государства. Прежде чем вообще говорит о рецепции римского права, необходимо определить, что такое «рецепция». Рецепция – (от лат. receptio - принятие) 1) в физиологии – осуществляемое рецепторами восприятие энергии раздражителей и преобразование ее в нервное возбуждение.',
    },
    {
      id: 10,
      image: posts,
      time: '15.12.2021',
      title: 'А зачем мне вообще нужен адвокат?',
      text: 'Каждому человеку в определенный период его жизни требуется привлечение высококвалифицированного специалиста, наделенногопознаниями в области права. Для одних это способ защитить свое имущество, имя, бизнес. Для вторых – возможность оценить и минимизировать риски. Для третьих – метод структурировать и организовать бесперебойное осуществление хозяйственной деятельности. Для четвертых – средство достижения компромисса в споре и т.д. Адвокат по уголовным делам поможет в самой трудной жизненной ситуации, связанной с уголовным преследованием. В любом случае, помощь адвоката бывает необходима всем!',
    },
    {
      id: 11,
      image: posts,
      time: '27.05.2021',
      title: 'Наследственные споры',
      text: 'Для принятия и вступления в наследство бывает необходимым для наследника пройти процедуру в суде, например: как установление факта родственных отношений, в связи с отсутствием у него какого-либо правоустанавливающего документа, необходимого при подаче заявления о вступлении в наследство в нотариальную палату.',
    },
    {
      id: 12,
      image: posts,
      time: '23.05.2021',
      title: 'Римское право в законодательстве',
      text: 'Правовая культура отдельных стран подвергается постоянной «бомбардировке» со стороны попадающих в нее подобно метеоритному дождю случайных фрагментов других правовых культур, юридических текстов, процедур и правовых конструкций. Такая «бомбардировка» позволяет государству оценить собственный опыт правовой жизни, обрести «зеркало» для его рассмотрения, возможность развивать, совершенствовать отдельные элементы своей правовой системы, наполняя их новыми смыслами [1]. О значении римского права для мировой цивилизации и культуры замечательно сказал Р.Иеринг: «Путем римского права, но превзойдя его, дальше через него - вот девиз, в котором для меня заключается значение римского права нового мира» [2]. Римское право оказало огромное влияние на правовые системы не только стран Западной Европы, но и на правовую систему Российского государства. Прежде чем вообще говорит о рецепции римского права, необходимо определить, что такое «рецепция». Рецепция – (от лат. receptio - принятие) 1) в физиологии – осуществляемое рецепторами восприятие энергии раздражителей и преобразование ее в нервное возбуждение.',
    },
    {
      id: 13,
      image: posts,
      time: '15.12.2021',
      title: 'А зачем мне вообще нужен адвокат?',
      text: 'Каждому человеку в определенный период его жизни требуется привлечение высококвалифицированного специалиста, наделенногопознаниями в области права. Для одних это способ защитить свое имущество, имя, бизнес. Для вторых – возможность оценить и минимизировать риски. Для третьих – метод структурировать и организовать бесперебойное осуществление хозяйственной деятельности. Для четвертых – средство достижения компромисса в споре и т.д. Адвокат по уголовным делам поможет в самой трудной жизненной ситуации, связанной с уголовным преследованием. В любом случае, помощь адвоката бывает необходима всем!',
    },
    {
      id: 14,
      image: posts,
      time: '27.05.2021',
      title: 'Наследственные споры',
      text: 'Для принятия и вступления в наследство бывает необходимым для наследника пройти процедуру в суде, например: как установление факта родственных отношений, в связи с отсутствием у него какого-либо правоустанавливающего документа, необходимого при подаче заявления о вступлении в наследство в нотариальную палату.',
    },
    {
      id: 15,
      image: posts,
      time: '23.05.2021',
      title: 'Римское право в законодательстве',
      text: 'Правовая культура отдельных стран подвергается постоянной «бомбардировке» со стороны попадающих в нее подобно метеоритному дождю случайных фрагментов других правовых культур, юридических текстов, процедур и правовых конструкций. Такая «бомбардировка» позволяет государству оценить собственный опыт правовой жизни, обрести «зеркало» для его рассмотрения, возможность развивать, совершенствовать отдельные элементы своей правовой системы, наполняя их новыми смыслами [1]. О значении римского права для мировой цивилизации и культуры замечательно сказал Р.Иеринг: «Путем римского права, но превзойдя его, дальше через него - вот девиз, в котором для меня заключается значение римского права нового мира» [2]. Римское право оказало огромное влияние на правовые системы не только стран Западной Европы, но и на правовую систему Российского государства. Прежде чем вообще говорит о рецепции римского права, необходимо определить, что такое «рецепция». Рецепция – (от лат. receptio - принятие) 1) в физиологии – осуществляемое рецепторами восприятие энергии раздражителей и преобразование ее в нервное возбуждение.',
    },
  ];
  const lastIndex = currentPage * blogPerPage;
  const firstIndex = lastIndex - blogPerPage;
  const currentBlogs = cards.slice(firstIndex, lastIndex);
  return (
    <section className='blog'>
      <h2 className='title blog__title'>Блог</h2>
      <div className='blog__container'>
        {currentBlogs.map((card) => (
          <BlogCard key={card.id} {...card} />
        ))}
      </div>
      <Pagination
        blogPerPage={blogPerPage}
        totalBlog={cards.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
};

export default Blog;
