import React, { useEffect, useState } from 'react';
import { useMatchMedia } from '../../hook/useMatchMedia';

const Pagination = ({
	blogPerPage,
	totalBlog,
	currentPage,
	setCurrentPage,
}) => {
	let pages = Math.ceil(totalBlog / blogPerPage);
	const isDesktopResolution = useMatchMedia('(min-width:1023px)', true);

	const numberOfPages = [];
	for (let i = 1; i <= pages; i++) {
		numberOfPages.push(i);
	}

	const [currentButton, setCurrentButton] = useState(1);
	const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

	useEffect(() => {
		let tempNumberOfPages = [...arrOfCurrButtons];

		let dotsInitial = '...';
		let dotsLeft = '... ';
		let dotsRight = ' ...';

		if (numberOfPages.length < 6) {
			tempNumberOfPages = numberOfPages;
		} else if (currentButton >= 1 && currentButton <= 3) {
			tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
		} else if (currentButton === 4) {
			const sliced = numberOfPages.slice(0, 5);
			tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
		} else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
			const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
			const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
			tempNumberOfPages = [
				1,
				dotsLeft,
				...sliced1,
				...sliced2,
				dotsRight,
				numberOfPages.length,
			];
		} else if (currentButton > numberOfPages.length - 3) {
			const sliced = numberOfPages.slice(numberOfPages.length - 4);
			tempNumberOfPages = [1, dotsLeft, ...sliced];
		} else if (currentButton === dotsInitial) {
			setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
		} else if (currentButton === dotsRight) {
			setCurrentButton(arrOfCurrButtons[3] + 2);
		} else if (currentButton === dotsLeft) {
			setCurrentButton(arrOfCurrButtons[3] - 2);
		}

		setArrOfCurrButtons(tempNumberOfPages);
		setCurrentPage(currentButton);
	}, [currentButton, isDesktopResolution, blogPerPage]);

	return (
		<div className='pagination'>
			<button
				className='button button_gray'
				onClick={() => setCurrentButton(prev => (prev <= 1 ? prev : prev - 1))}
			>
				Назад
			</button>
			{arrOfCurrButtons.map(number => {
				return (
					<button
						key={number}
						className={`pagination__button ${
							number === currentPage && 'pagination__button_active'
						}`}
						onClick={() => setCurrentButton(number)}
					>
						{number}
					</button>
				);
			})}
			<button
				className='button button_gray'
				onClick={() =>
					setCurrentButton(prev =>
						prev >= numberOfPages.length ? prev : prev + 1
					)
				}
			>
				Вперед
			</button>
		</div>
	);
};

export default Pagination;
