import React, { useEffect, useState, useCallback } from 'react';
import './Blog.scss';
import posts from '../../assets/image.png';
import BlogCard from '../BlogCard/BlogCard';
import Pagination from '../Pagination/Pagination';
import { useMatchMedia } from '../../hook/useMatchMedia';
import axios from 'axios';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage, setBlogPerPage] = useState(3);
  const [cards, setCards] = useState([]);
  const isDesktopResolution = useMatchMedia('(max-width:1050px)', true);
  const getCards = useCallback(() => {
    axios
      .get('http://134.0.115.164:7000/api/blogs', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(res => setCards(res.data));
  }, [cards]);

  useEffect(() => {
    !isDesktopResolution ? setBlogPerPage(3) : setBlogPerPage(2);
  }, [isDesktopResolution]);

  useEffect(() => {
    getCards();
  }, []);

  const lastIndex = currentPage * blogPerPage;
  const firstIndex = lastIndex - blogPerPage;
  const currentBlogs = cards.slice(firstIndex, lastIndex);
  return (
    <section id='blog' className='blog'>
      <h2 className='title blog__title'>Блог</h2>
      <div className='blog__container'>
        {currentBlogs &&
          currentBlogs.map(card => <BlogCard key={card.id} {...card} />)}
      </div>
      <Pagination
        blogPerPage={blogPerPage}
        totalBlog={cards.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default Blog;
