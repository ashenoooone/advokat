import React, { useEffect, useState } from 'react';
import './BlogCard.scss';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import ReactionPopup from '../ReactionPopup/ReactionPopup';

const BlogCard = ({ image, time, title, text, id }) => {
	const trimText = str => {
		if (title.length > 24)
			return str.length > 199 ? str.slice(0, 199) + '...' : str + '...';
		else {
			return str.length > 259 ? str.slice(0, 259) + '...' : str + '...';
		}
	};

	const [isOpen, setOpen] = useState(false);
	const handleTogglePopup = e => {
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
	const handleClosePopup = e => {
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
	useEffect(() => {
		document.addEventListener('click', handleClosePopup);

		return () => {
			document.removeEventListener('click', handleClosePopup);
		};
	}, [isOpen]);

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
