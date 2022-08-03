import React, { useEffect, useState } from 'react';
import { useMatchMedia } from '../../hook/useMatchMedia';

const Pagination = ({ blogPerPage, totalBlog, paginate, currentPage }) => {
	const isDesktopResolution = useMatchMedia('(min-width:1023px)', true);
	const [pag, setPag] = useState(
		[...Array(Math.ceil(totalBlog / blogPerPage))].map((_, index) => index + 1)
	);
	const [isPlus, setPlus] = useState(true);
	const handleIncrement = () => {
		if (currentPage + 1 <= pag[pag.length - 1]) {
			setPlus(true);
			paginate(currentPage + 1);
		}
	};
	const handleDecrement = () => {
		if (currentPage - 1 > 0) {
			setPlus(false);
			paginate(currentPage - 1);
		}
	};
	useEffect(() => {
		setPag(
			[...Array(Math.ceil(totalBlog / blogPerPage))].map(
				(_, index) => index + 1
			)
		);
		setPag([pag[0], pag[1], pag[2], '...', Math.ceil(totalBlog / blogPerPage)]);
	}, [isDesktopResolution, blogPerPage]);

	useEffect(() => {
		if (
			currentPage === pag[2] &&
			currentPage < Math.ceil(totalBlog / blogPerPage) - 2
		) {
			setPag([
				pag[2],
				pag[2] + 1,
				pag[2] + 2,
				'...',
				Math.ceil(totalBlog / blogPerPage),
			]);
		}
		if (isPlus && currentPage === Math.ceil(totalBlog / blogPerPage) - 3) {
			setPag([
				pag[1],
				pag[2],
				pag[2] + 1,
				pag[2] + 2,
				Math.ceil(totalBlog / blogPerPage),
			]);
		}
		if (!isPlus && pag[0] >= 1 && currentPage < pag[0]) {
			setPag([
				pag[0] - 3,
				pag[1] - 3,
				pag[2] - 3,
				'...',
				Math.ceil(totalBlog / blogPerPage),
			]);
		}
	}, [currentPage, isDesktopResolution]);

	return (
		<div className='pagination'>
			<button className='button button_gray' onClick={handleDecrement}>
				Назад
			</button>
			{pag.map(number => (
				<button
					key={number}
					className={`pagination__button ${
						number === currentPage && 'pagination__button_active'
					}`}
					onClick={() => number !== '...' && paginate(number)}
				>
					{number}
				</button>
			))}
			<button className='button button_gray' onClick={handleIncrement}>
				Вперед
			</button>
		</div>
	);
};

export default Pagination;
