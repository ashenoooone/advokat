import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import './BlogCard.scss';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import ReactionPopup from '../ReactionPopup/ReactionPopup';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const BlogCard = ({ image, time, title, text, id }) => {
  const titleRef = useRef(null);

  const [maxLines, setMaxLines] = useState(6);
  const [isOpen, setOpen] = useState(false);
  const handleTogglePopup = (e) => {
    if (
      e.target.closest('div').className ===
        'card__buttos-container' + ' card__buttos-container__' + id ||
      e.target.closest('div').className ===
        'card__buttons' + ' card__buttons__' + id ||
      e.target.closest('div').className ===
        'card__button-box' + ' card__button-box__' + id
    )
      return setOpen(!isOpen);
  };
  const handleClosePopup = (e) => {
    if (
      e.target.closest('div').className ===
        'card__buttos-container' + ' card__buttos-container__' + id ||
      e.target.closest('div').className ===
        'card__buttons' + ' card__buttons__' + id ||
      e.target.closest('div').className ===
        'card__button-box' + ' card__button-box__' + id
    )
      return;
    if (
      isOpen &&
      e.target.closest('div').className !== 'reaction-popup__container'
    )
      setOpen(false);
  };

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
  }, [titleRef, text]);

  useEffect(() => {
    document.addEventListener('click', handleClosePopup);

    return () => {
      document.removeEventListener('click', handleClosePopup);
    };
  }, [isOpen]);

  return (
    <div className='card'>
      <img src={image} className='card__img' />
      <div className='card__info'>
        <p className='card__time'>{time}</p>
        <h3 className='card__title' ref={titleRef}>
          {title}
        </h3>
        <ResponsiveEllipsis
          text={text}
          maxLine={maxLines}
          ellipsis='...'
          trimRight
          basedOn='letters'
          component='p'
          className='card__description'
        />
      </div>
      <div className='card__buttons'>
        <a href='#' className='card__more'>
          Подробнее
        </a>
        <div
          className={`card__buttos-container card__buttos-container__${id}`}
          onClick={handleTogglePopup}
        >
          <div className={`card__button-box ${id}`}>
            <img src={like} alt='like' className='card__button' />
            <span className='card__number'>12</span>
          </div>
          <div className={`card__button-box card__button-box__${id}`}>
            <img src={dislike} alt='dislike' className='card__button' />
            <span className='card__number'>1</span>
          </div>
          <ReactionPopup isOpen={isOpen} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
