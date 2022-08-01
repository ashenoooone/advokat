import React, { useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.scss';
import { motion } from 'framer-motion';
const Reviews = ({ reviews }) => {
  const [currentReview, setCurrentReview] = useState(0);
  const onChangeReviewsClick = () => {
    if (currentReview !== reviews.length - 1)
      setCurrentReview((currentReview) => currentReview + 1);
  };

  const onChangeReviewsBackwardClick = () => {
    if (currentReview > 0)
      setCurrentReview((currentReview) => currentReview - 1);
  };

  return (
    <section id='reviews' className='reviews'>
      <div className='content'>
        <div className='reviews__heading'>
          <h2 className='title'>Отзывы</h2>
          <p className='reviews__count'>{reviews.length}</p>
        </div>
        <motion.div className='reviews__slider'>
          <motion.div
            className='reviews__carousel'
            animate={{ left: -currentReview * 650 }}
          >
            {reviews.map((item, index) => {
              return <ReviewCard {...item} key={index} />;
            })}
          </motion.div>
        </motion.div>
        <div className='reviews__buttons'>
          <div className='reviews__scroll-buttons'>
            <button
              className='button button_gray'
              onClick={onChangeReviewsBackwardClick}
            >
              Назад
            </button>
            <button
              className='button button_gray'
              onClick={onChangeReviewsClick}
            >
              Вперед
            </button>
          </div>
          <button className='button button_default'>Оставить отзыв</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
