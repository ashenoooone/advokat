import React, { useEffect, useState, useCallback } from 'react';
import './Blog.scss';
import BlogCard from '../BlogCard/BlogCard';
import Pagination from '../Pagination/Pagination';
import { useMatchMedia } from '../../hook/useMatchMedia';
import axios from 'axios';
import { useLayoutEffect } from 'react';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState(3);
  const [cards, setCards] = useState([]);
  const [paginationLength, setPaginationLength] = useState(0);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const isDesktopResolution = useMatchMedia('(max-width:1050px)', true);
  const getCards = useCallback(async () => {
    const res = await axios.get('http://134.0.115.164:7000/api/blogs', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    if (res) {
      setCards(state =>
        res.data.sort((a, b) => {
          const firstDate = new Date(a.createdAt).getTime();
          const secondDate = new Date(b.createdAt).getTime();
          return secondDate - firstDate;
        })
      );
      setPaginationLength(res.data.length);
    }
  }, [cards]);

  useEffect(() => {
    !isDesktopResolution ? setBlogPerPage(3) : setBlogPerPage(2);
  }, [isDesktopResolution]);

  useLayoutEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    const lastIndex = currentPage * blogPerPage;
    const firstIndex = lastIndex - blogPerPage;
    setCurrentBlogs(cards.slice(firstIndex, lastIndex));
  }, [cards, currentPage, blogPerPage]);

  return (
    <section id='blog' className='blog'>
      <h2 className='title blog__title'>Блог</h2>
      <div className='blog__container'>
        {currentBlogs &&
          currentBlogs.map(card => (
            <BlogCard key={card.id} {...card} setCards={setCards} />
          ))}
      </div>
      {cards.length && (
        <Pagination
          blogPerPage={blogPerPage}
          totalBlog={paginationLength}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </section>
  );
};

export default Blog;
