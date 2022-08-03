import React, { useEffect, useMemo, useState } from 'react';
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
	}, [isDesktopResolution, blogPerPage]);

	const Pag = useMemo(() => {
		if (isPlus && pag.length > 4) {
			if (currentPage === 1)
				setPag([pag[0], pag[1], pag[2], '...', pag[pag.length - 1]]);
			else if (currentPage === pag[pag.length - 1]) {
				setPag([1, '...', currentPage - 2, currentPage - 1, currentPage]);
			} else if (currentPage + 1 === pag[pag.length - 1]) {
				setPag([1, '...', currentPage - 1, currentPage, currentPage + 1]);
			} else if (currentPage + 2 === pag[pag.length - 1]) {
				setPag([1, '...', currentPage, currentPage + 1, pag[pag.length - 1]]);
			} else {
				setPag([
					currentPage - 1,
					currentPage,
					currentPage + 1,
					'...',
					pag[pag.length - 1],
				]);
			}
		} else if (pag.length > 4 && !isPlus) {
			if (currentPage >= 1 && currentPage <= 3)
				if (currentPage === 3)
					setPag([
						currentPage - 2,
						currentPage - 1,
						currentPage,
						'...',
						pag[pag.length - 1],
					]);
				else if (currentPage === 2)
					setPag([
						currentPage - 1,
						currentPage,
						currentPage + 1,
						'...',
						pag[pag.length - 1],
					]);
				else {
					setPag([
						currentPage,
						currentPage + 1,
						currentPage + 2,
						'...',
						pag[pag.length - 1],
					]);
				}
			if (currentPage === pag[0] && currentPage - 1 > 0) {
				setPag([
					currentPage - 1,
					currentPage,
					currentPage + 1,
					'...',
					pag[pag.length - 1],
				]);
			} else if (currentPage + 2 === pag[pag.length - 1]) {
				setPag([
					currentPage - 2,
					currentPage - 1,
					currentPage,
					'...',
					pag[pag.length - 1],
				]);
			} else if (currentPage + 3 === pag[pag.length - 1]) {
				setPag([
					currentPage - 1,
					currentPage,
					currentPage + 1,
					'...',
					pag[pag.length - 1],
				]);
				console.log(pag);
			}
		}
		return (
			<>
				{pag.map(number => {
					return (
						<button
							key={number}
							className={`pagination__button ${
								number === currentPage && 'pagination__button_active'
							}`}
							onClick={() => number !== '...' && paginate(number)}
						>
							{number}
						</button>
					);
				})}
			</>
		);
	}, [
		isDesktopResolution,
		blogPerPage,
		pag.length,
		currentPage,
		isPlus,
		paginate,
		totalBlog,
		window.innerWidth,
	]);
	return (
		<div className='pagination'>
			<button className='button button_gray' onClick={handleDecrement}>
				Назад
			</button>
			{Pag}
			<button className='button button_gray' onClick={handleIncrement}>
				Вперед
			</button>
		</div>
	);
};

export default Pagination;
