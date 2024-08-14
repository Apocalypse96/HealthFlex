import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../features/commentsSlice';

const CommentForm = ({ parentId = null, onReply = null }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() && !text.trim()) {
      setError('Both name and comment are required.');
      return;
    }

    if (!name.trim()) {
      setError('Name is required.');
      return;
    }

    if (!text.trim()) {
      setError('Comment is required.');
      return;
    }

    setError('');

    if (onReply) {
      onReply(text);
    } else {
      dispatch(addComment({ id: Date.now(), name, text, date: new Date().toISOString(), replies: [] }));
    }

    setName('');
    setText('');
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="submit">{onReply ? 'Post Reply' : 'Post'}</button>
    </form>
  );
};

export default CommentForm;
