import React, { useEffect, useState } from 'react';
import { useMatchMedia } from '../../hook/useMatchMedia';

const Pagination = ({ blogPerPage, totalBlog, paginate, currentPage }) => {
	const isDesktopResolution = useMatchMedia('(min-width:1023px)', true);
	const [pag, setPag] = useState(
		[...Array(Math.ceil(totalBlog / blogPerPage))].map((_, index) => index + 1)
	);
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
		if (currentPage === Math.ceil(totalBlog / blogPerPage) - 3) {
			setPag([
				pag[1],
				pag[2],
				pag[2] + 1,
				pag[2] + 2,
				Math.ceil(totalBlog / blogPerPage),
			]);
		}
		if (pag[0] >= 1 && currentPage < pag[0]) {
			setPag([
				pag[0] - 2,
				pag[1] - 2,
				pag[2] - 2,
				'...',
				Math.ceil(totalBlog / blogPerPage),
			]);
		}
	}, [currentPage, isDesktopResolution]);

	return (
		<div className='pagination'>
			<button
				className='button button_gray'
				onClick={() => currentPage - 1 > 0 && paginate(currentPage - 1)}
			>
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
			<button
				className='button button_gray'
				onClick={() =>
					currentPage + 1 <= pag[pag.length - 1] && paginate(currentPage + 1)
				}
			>
				Вперед
			</button>
		</div>
	);
};

export default Pagination;
