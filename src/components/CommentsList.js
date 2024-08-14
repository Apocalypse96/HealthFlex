import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';

const CommentsList = () => {
  const [sortOrder, setSortOrder] = useState('desc');
  const comments = useSelector((state) => state.comments.comments);

  const sortedComments = [...comments].sort((a, b) => {
    return sortOrder === 'desc'
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="comments-list">
      <div className="sort-comments">
        <label htmlFor="sort-order">Sort By: </label>
        <select id="sort-order" onChange={(e) => setSortOrder(e.target.value)}>
          <option value="desc">Date and Time ↓</option>
          <option value="asc">Date and Time ↑</option>
        </select>
      </div>
      {sortedComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
