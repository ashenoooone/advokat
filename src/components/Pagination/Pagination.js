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
		console.log(currentPage);
		if (pag.length > 4) {
			setPag([pag[0], pag[1], pag[2], '...', pag[pag.length - 1]]);
		}
		if (isPlus && pag[2] === currentPage)
			setPag([pag[0] + 2, pag[1] + 2, pag[2] + 2, '...', pag[pag.length - 1]]);
		if (!isPlus && pag[0] >= 1 && currentPage < pag[0]) {
			setPag([
				pag[0] - 2,
				pag[1] - 2,
				pag[2] - 2,
				'...',
				Math.ceil(totalBlog / blogPerPage),
			]);
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
		pag[0],
		pag[1],
		pag[2],
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
