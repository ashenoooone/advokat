import React from 'react';
import './BlogCard.scss';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

const BlogCard = ({ image, time, title, text }) => {
  const trimText = (str) => {
    if (title.length > 24)
      return str.length > 199 ? str.slice(0, 199) + '...' : str + '...';
    else {
      return str.length > 259 ? str.slice(0, 259) + '...' : str + '...';
    }
  };

  console.log('одних это способ защитить свое имущество, имя, ...'.length);
  return (
    <div className='card'>
      <img src={image} alt='card img' />
      <div className='card__info'>
        <p className='card__time'>{time}</p>
        <h3 className='card__title'>{title}</h3>
        <p className='card__description'>{trimText(text)}</p>
      </div>
      <div className='card__buttons'>
        <a href='#' className='card__more'>
          Подробнее
        </a>
        <div className='card__buttos-container'>
          <div className='card__button-box'>
            <img src={like} alt='like' className='card__button' />
            <span className='card__number'>12</span>
          </div>
          <div className='card__button-box'>
            <img src={dislike} alt='dislike' className='card__button' />
            <span className='card__number'>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
