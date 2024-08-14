// src/hooks/usePersistedComments.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComments } from '../features/commentsSlice';

const usePersistedComments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments'));
    if (savedComments && Array.isArray(savedComments)) {
      dispatch(setComments(savedComments));
    } else {
      console.error('Loaded comments are not an array:', savedComments);
      dispatch(setComments([])); // Optionally reset to an empty array
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);
};

export default usePersistedComments;
