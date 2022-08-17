import React, { useEffect, useState } from 'react';
import './ReviewCard.scss';

const ReviewCard = ({
  name,
  date,
  rating,
  text,
  width,
  isDesktopResolution,
}) => {
  const [cardWidth, setCardWidth] = useState(0);
  useEffect(() => {
    if (isDesktopResolution) setCardWidth((width - 20) / 2);
    else setCardWidth(width);
  }, [isDesktopResolution, width]);

  return (
    <div
      className='review'
      style={{ width: `${cardWidth ? cardWidth + 'px' : '100%'}` }}
    >
      <div className='review__heading'>
        <div className='review__info'>
          <h3 className='review__name'>{name}</h3>
          <p className='review__date'>{date}</p>
        </div>
        <div className='review__rating'>
          {[...Array(5)].map((star, index) => {
            if (index < rating)
              return <span key={index} className='icon-star_active'></span>;
            else
              return <span key={index} className='icon-star_inactive'></span>;
          })}
        </div>
      </div>
      <p className='review__text'>{text}</p>
    </div>
  );
};

export default ReviewCard;
