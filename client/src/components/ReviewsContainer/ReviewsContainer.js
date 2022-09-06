import Reviews from '../Reviews/Reviews';
import { useState, useMemo } from 'react';
import axios from 'axios';

const ReviewsContainer = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [reviews, setReviews] = useState([
    {
      name: 'Анастасия',
      text: 'Хочу сказать огромное спасибо Роману Александровичу! Роман Александрович, мне внушил доверие начиная с первого разговора по телефону и до положительного завершения дела я в нем ни на секунду не засомневалась! Вы очень грамотный адвокат и отзывчивый человек.',
      date: '31.08.2022',
      rating: 4,
    },
    {
      name: 'Галина Кузнецова',
      text: 'Выражаем Вам огромную благодарность за профессионализм в защите наших интересов по гражданскому делу. Спасибо за помощь и поддержку. Отмечаем Ваш профессионализм и умелые действия в отставание наших позиций. С уважением, Галина',
      date: '31.08.2022',
      rating: 4,
    },
    {
      name: 'Михаил',
      text: 'Выражаем Вам огромную благодарность за профессионализм в защите наших интересов по гражданскому делу. Спасибо за помощь и поддержку. Отмечаем Ваш профессионализм и умелые действия в отставание наших позиций. С уважением, Галина',
      date: '31.08.2022',
      rating: 5,
    },
    {
      name: 'Галина Кузнецова',
      text: 'Выражаем Вам огромную благодарность за профессионализм в защите наших интересов по гражданскому делу. Спасибо за помощь и поддержку. Отмечаем Ваш профессионализм и умелые действия в отставание наших позиций. С уважением, Галина',
      date: '31.08.2022',
      rating: 0,
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

  // useMemo(() => {
  //   axios.get('http://localhost:7000/api/reviews/?limit=10').then((res) => {
  //     setReviews(res.data);
  //   });
  // }, []);

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
