import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.scss';
const Reviews = ({ reviews }) => {
  return (
    <section className='reviews'>
      <div className='content'>
        <div className='reviews__heading'>
          <h2 className='title'>Отзывы</h2>
          <p className='reviews__count'>{reviews.length}</p>
        </div>
        <div className='reviews__slider'>
          {reviews.map((item, index) => {
            return <ReviewCard {...item} key={index} />;
          })}
        </div>
        <div className='reviews__buttons'>
          <div className='reviews__scroll-buttons'>
            <button className='button button_gray'>Назад</button>
            <button className='button button_gray'>Вперед</button>
          </div>
          <button className='button button_default'>Оставить отзыв</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
