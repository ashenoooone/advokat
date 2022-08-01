import React from 'react';

const Pagination = ({ blogPerPage, totalBlog, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlog / blogPerPage); i++)
    pageNumbers.push(i);

  return (
    <div className='pagination'>
      <button
        className='button button_gray'
        onClick={() => currentPage - 1 > 0 && paginate(currentPage - 1)}
      >
        Назад
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`pagination__button ${
            number === currentPage && 'pagination__button_active'
          }`}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
      <button
        className='button button_gray'
        onClick={() =>
          currentPage + 1 <= pageNumbers[pageNumbers.length - 1] &&
          paginate(currentPage + 1)
        }
      >
        Вперед
      </button>
    </div>
  );
};

export default Pagination;
