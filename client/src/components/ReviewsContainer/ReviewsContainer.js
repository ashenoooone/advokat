import Reviews from '../Reviews/Reviews';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewsContainer = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [reviews, setReviews] = useState([
    {
      name: 'Анастасия',
      date: '31.08.2022',
      rating: 5,
      text: 'Хочу сказать огромное спасибо Роману Александровичу! Роман Александрович, мне внушил доверие начиная с первого разговора по телефону и до положительного завершения дела я в нем ни на секунду не засомневалась! Вы очень грамотный адвокат и отзывчивый человек.',
    },
    {
      name: 'Михаил',
      date: '23.08.2022',
      rating: 3,
      text: 'Выражаем Вам огромную благодарность за профессионализм в защите наших интересов по гражданскому делу. Спасибо за помощь и поддержку. Отмечаем Ваш профессионализм и умелые действия в отставание наших позиций. С уважением, Галина',
    },
    {
      name: 'Григорий',
      date: '24.08.2022',
      rating: 2,
      text: 'Большое спасибо спасио спасиоспасио спасио спасиоспасиоспасио',
    },
    {
      name: 'Григорий',
      date: '24.08.2022',
      rating: 2,
      text: 'Хочу сказать огромное спасибо Роману Александровичу! Роман Александрович, мне внушил доверие начиная с первого разговора по телефону и до положительного завершения дела я в нем ни на секунду не засомневалась! Вы очень грамотный адвокат и отзывчивый человек.',
    },
  ]);

  const onOpenPopupClick = () => {
    setIsPopupOpened(true);
  };

  const onClosePopupClick = (e) => {
    const classes = e.target.classList;
    if (classes.contains('popup') || classes.contains('popup__close-button'))
      setIsPopupOpened(false);
  };

  useEffect(() => {
    // axios.get('http://localhost:7000/api/reviews/?limit=10').then((res) => {
    //   setReviews(res.data);
    // });
  }, []);

  return (
    <Reviews
      reviews={reviews}
      onOpenPopupClick={onOpenPopupClick}
      onClosePopupClick={onClosePopupClick}
      isPopupOpened={isPopupOpened}
    />
  );
};

export default ReviewsContainer;
