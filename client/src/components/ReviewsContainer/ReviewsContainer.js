import Reviews from '../Reviews/Reviews';
import { useState, useMemo } from 'react';
import axios from 'axios';

const ReviewsContainer = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [reviews, setReviews] = useState([]);

  const onOpenPopupClick = () => {
    setIsPopupOpened(true);
  };

  const onClosePopupClick = e => {
    const classes = e.target.classList;
    if (classes.contains('popup') || classes.contains('popup__close-button'))
      setIsPopupOpened(false);
  };

  useMemo(() => {
    axios
      .get('http://134.0.115.164:7000/api/reviews', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(res => {
        console.log(res);
        setReviews(res.data);
      });
  }, []);

  return (
    <Reviews
      reviews={reviews}
      onOpenPopupClick={onOpenPopupClick}
      onClosePopupClick={onClosePopupClick}
      isPopupOpened={isPopupOpened}
      setIsPopupOpened={setIsPopupOpened}
    />
  );
};

export default ReviewsContainer;
