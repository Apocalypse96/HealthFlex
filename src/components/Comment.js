import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editComment, deleteComment, addReply } from '../features/commentsSlice';
import { format } from 'date-fns';
import CommentForm from './CommentForm';
import { FaTrash } from 'react-icons/fa';

const Comment = ({ comment }) => {
  const { id, name, text, date, replies = [] } = comment;
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editComment({ id, newText }));
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    dispatch(deleteComment(id));
  };

  const handleReply = (replyText) => {
    dispatch(addReply({ parentId: id, reply: { id: Date.now(), name: 'Anonymous', text: replyText, date: new Date().toISOString(), replies: [] } }));
    setShowReplyForm(false);
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <h4>{name}</h4>
        <span className="date">{format(new Date(date), 'do MMM yyyy')}</span>
        <button className="delete-button" onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
      <div className="comment-body">
        {isEditing ? (
          <textarea value={newText} onChange={(e) => setNewText(e.target.value)} />
        ) : (
          <p>{text}</p>
        )}
      </div>
      <div className="comment-footer">
        <button className="reply-button" onClick={() => setShowReplyForm(!showReplyForm)}>Reply</button>
        <button className="edit-button" onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      </div>
      {showReplyForm && (
        <div className="reply-section">
          <CommentForm parentId={id} onReply={handleReply} />
        </div>
      )}
      {replies.length > 0 && (
        <div className="reply-section">
          {replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
