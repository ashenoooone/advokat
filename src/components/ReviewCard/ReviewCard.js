import React from 'react';
import './ReviewCard.scss';
import { motion } from 'framer-motion';

const ReviewCard = React.forwardRef(({ name, date, rating, text }) => {
  return (
    <div className='review'>
      <div className='review__heading'>
        <div className='review__info'>
          <h3 className='review__name'>{name}</h3>
          <p className='review__date'>{date}</p>
        </div>
        <div className='review__rating'>
          {[...Array(5)].map((star, index) => {
            if (index <= rating)
              return <span key={index} className='icon-star_active'></span>;
            else
              return <span key={index} className='icon-star_inactive'></span>;
          })}
        </div>
      </div>
      <p className='review__text'>{text}</p>
    </div>
  );
});

const MReviewCard = motion(ReviewCard, { forwardMotionProps: true });
export default MReviewCard;
