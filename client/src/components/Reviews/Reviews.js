import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.scss';
import { motion } from 'framer-motion';
import ReviewPopup from '../ReviewPopup/ReviewPopup';
import { useMatchMedia } from '../../hook/useMatchMedia';

const Reviews = ({
  reviews,
  onOpenPopupClick,
  onClosePopupClick,
  isPopupOpened,
}) => {
  const [currentReview, setCurrentReview] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(1280);
  const carouselRef = useRef(null);
  const isDesktopResolution = useMatchMedia('(min-width:1280px)', true);

  const onChangeReviewsClick = () => {
    if (currentReview !== reviews.length - 1)
      setCurrentReview((currentReview) => currentReview + 1);
  };

  const onChangeReviewsBackwardClick = () => {
    if (currentReview > 0)
      setCurrentReview((currentReview) => currentReview - 1);
  };

  const onWindowResize = () => {
    setCarouselWidth(carouselRef.current.offsetWidth);
  };

  useLayoutEffect(() => {
    setCarouselWidth(carouselRef.current.offsetWidth);
  }, [carouselRef, carouselWidth]);

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

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
            animate={{
              left: isDesktopResolution
                ? -currentReview * ((carouselWidth + 20) / 2)
                : -currentReview * (carouselWidth + 20),
            }}
            ref={carouselRef}
            transition={{ bounce: 'none' }}
          >
            {reviews.map((item, index) => {
              return (
                <ReviewCard
                  isDesktopResolution={isDesktopResolution}
                  width={carouselWidth}
                  {...item}
                  key={index}
                />
              );
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
          <button className='button button_default' onClick={onOpenPopupClick}>
            Оставить отзыв
          </button>
        </div>
      </div>
      <ReviewPopup
        isOpened={isPopupOpened}
        onClosePopupClick={onClosePopupClick}
      />
    </section>
  );
};

export default Reviews;
