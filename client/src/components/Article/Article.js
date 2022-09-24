import React, { useState } from 'react';
import './Article.scss';
import ReactionPopup from '../ReactionPopup/ReactionPopup';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';
import BlogCard from '../BlogCard/BlogCard';
import Comment from '../Comment/Comment';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useCallback } from 'react';

const Article = () => {
  const { id } = useParams();
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [blogData, setBlogData] = useState({});
  const [comments, setComments] = useState([]);
  const [anotherBlog, setAnotherBlog] = useState([]);
  /* handlers */
  const handleTogglePopup = () => {
    setOpen(!isOpen);
  };
  const handleNameChange = e => setName(e.target.value);
  const handleCommentChange = e => setComment(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handleFormSubmit = async e => {
    e.preventDefault();
    const response = await axios.post(`http://134.0.115.164:7000/api/article`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      name,
      text: comment,
      email,
      blogId: id,
    });
    if (response) {
      setComments(state => [
        ...state,
        {
          id: response.data.id,
          text: comment,
          email,
          name,
          data: response.data.data,
        },
      ]);
      setComment('');
      setEmail('');
      setName('');
    }
  };
  /* api handler */
  const getInfo = useCallback(async () => {
    const response = await axios.get(
      `http://134.0.115.164:7000/api/article/${id}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    setBlogData(response.data);
  }, [id]);
  const getComments = useCallback(async () => {
    if (id) {
      const res = await axios.get(
        `http://134.0.115.164:7000/api/comments/${id}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      setComments(res.data);
    }
  }, [id]);
  const getAnotherBlog = useCallback(async () => {
    const response = await axios.get(
      `http://134.0.115.164:7000/api/another-blog/${id}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    if (response) setAnotherBlog(response.data.anotherBlogs);
  }, []);

  useEffect(() => {
    getInfo();
    getComments();
    getAnotherBlog();
  }, [getInfo, getComments, getAnotherBlog]);
  return (
    <main className='main' key={id}>
      <div className='main__container'>
        <img src={blogData?.image} alt='main img' className='main__img' />
        <p className='data'>{blogData?.time}</p>
        <h1 className='main__title'>{blogData?.title}</h1>
        <div className='text-container'>
          <pre className='text'>{blogData?.text}</pre>
        </div>
        <div
          className={`card__buttos-container post-reaction`}
          onClick={handleTogglePopup}
        >
          <div className={`card__button-box`}>
            <img src={like} alt='like' className='card__button' />
            <span className='card__number'>
              {blogData.likes ? blogData.likes.length : 0}
            </span>
          </div>
          <div className={`card__button-box`}>
            <img src={dislike} alt='dislike' className='card__button' />
            <span className='card__number'>
              {blogData.dislikes ? blogData.dislikes.length : 0}
            </span>
          </div>
          <ReactionPopup isOpen={isOpen} setOpen={setOpen} />
        </div>
        <div className='another-blog'>
          <h2 className='another-blog__title'>Другие статьи</h2>
          <div className='another-blog__container'>
            {anotherBlog.map(blog => (
              <BlogCard key={'blog/' + blog.id} {...blog} />
            ))}
          </div>
        </div>
        <div className='rating'>
          <h2 className='rating__title'>Комментарии</h2>
          <div className='rating__comments'>
            {comments &&
              comments.map(com => <Comment key={'com/' + com.id} {...com} />)}
          </div>
        </div>
      </div>
      <div className='reviews-form'>
        <div className='reviews-form__container'>
          <h3 className='review-popup__title'>Оставить отзыв</h3>
          <form className='popup-form' onSubmit={handleFormSubmit}>
            <div className='review-popup__inputs'>
              <input
                type='text'
                className='popup-form__input'
                placeholder='Имя'
                value={name}
                required
                onChange={handleNameChange}
              />
              <input
                type='text'
                className='popup-form__input'
                placeholder='Email'
                value={email}
                required
                onChange={handleEmailChange}
              />
            </div>
            <input
              type='text'
              className='popup-form__input'
              placeholder='Комментарий'
              value={comment}
              required
              onChange={handleCommentChange}
            />
            <button className='reviews-form__button'>Отправить</button>
          </form>
          <p className='review-popup__conf'>
            Нажимая на кнопку, я соглашаюсь с условиями{' '}
            <a href='#' className='popup__link'>
              политики конфиденциальности.
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Article;
