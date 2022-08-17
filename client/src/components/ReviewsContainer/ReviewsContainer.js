import Reviews from '../Reviews/Reviews';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewsContainer = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [reviews, setReviews] = useState([]);

  const onOpenPopupClick = () => {
    setIsPopupOpened(true);
  };

  const onClosePopupClick = (e) => {
    const classes = e.target.classList;
    if (classes.contains('popup') || classes.contains('popup__close-button'))
      setIsPopupOpened(false);
  };

  useEffect(() => {
    axios.get('http://localhost:7000/api/reviews/?limit=10').then((res) => {
      setReviews(res.data);
    });
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
