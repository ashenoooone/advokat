import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.scss';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import ReactionPopup from '../ReactionPopup/ReactionPopup';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const BlogCard = ({
  image,
  time,
  title,
  text,
  id,
  likes = [],
  dislikes = [],
  setCards,
}) => {
  const titleRef = useRef(null);
  const [isLike, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike(true);
  };
  const handleDislikeClick = () => {
    setLike(false);
  };
  const [maxLines, setMaxLines] = useState(6);
  const [isOpen, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const handleTogglePopup = e => {
    e.stopPropagation();
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
  // const handleClosePopup = e => {
  //   e.stopPropagation();
  //   if (
  //     e.target.closest('div').className ===
  //     'card__button-box' + ' card__button-box__' + id
  //   )
  //     return;
  //   if (
  //     isOpen &&
  //     e.target.closest('div').className !== 'reaction-popup__container'
  //   )
  //     setOpen(false);
  // };
  const handleKeyPressClosePopup = e => {
    if (isOpen && e.key === 'Escape') setOpen(false);
  };
  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    if (titleEl.offsetHeight > 31) {
      setMaxLines(maxLines => maxLines - titleEl.offsetHeight / 31 + 1);
    }
  }, [titleRef, text]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPressClosePopup);
    return () => {
      document.removeEventListener('keydown', handleKeyPressClosePopup);
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
        <Link to={`/article/${id}`} className='card__more'>
          Подробнее
        </Link>
        <div className={`card__buttos-container card__buttos-container__${id}`}>
          <div
            className={`card__button-box card__button-box__${id}`}
            onClick={handleTogglePopup}
          >
            <img
              src={like}
              alt='like'
              className='card__button'
              onClick={handleLikeClick}
            />
            <span className='card__number'>{likes.length}</span>
          </div>
          <div
            className={`card__button-box card__button-box__${id}`}
            onClick={handleTogglePopup}
          >
            <img
              src={dislike}
              alt='dislike'
              className='card__button'
              onClick={handleDislikeClick}
            />
            <span className='card__number'>{dislikes.length}</span>
          </div>
          <ReactionPopup
            isOpen={isOpen}
            isLike={isLike}
            id={id}
            setCards={setCards}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
