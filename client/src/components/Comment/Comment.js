import React from 'react';
import './Comment.scss';

const Comment = ({ name, id, data, text }) => {
  const formatId = id =>
    `${id}`.length < 4 ? '0'.repeat(4 - `${id}`.length) + id : id;

  return (
    <div className='comment'>
      <div className='comment__head'>
        <h3 className='comment__name'>{name}</h3>
        <p className='comment__number'>№{formatId(id)}</p>
        <p className='comment__data'>{data}</p>
      </div>
      <p className='comment__text'>{text}</p>
    </div>
  );
};

export default Comment;
