import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    editComment: (state, action) => {
      const { id, newText } = action.payload;
      const comment = state.comments.find((comment) => comment.id === id);
      if (comment) {
        comment.text = newText;
      }
    },
    deleteComment: (state, action) => {
      const deleteRecursively = (comments, id) => {
        return comments.filter((comment) => {
          if (comment.id === id) {
            return false;
          }
          if (comment.replies) {
            comment.replies = deleteRecursively(comment.replies, id);
          }
          return true;
        });
      };

      state.comments = deleteRecursively(state.comments, action.payload);
    },
    addReply: (state, action) => {
      const { parentId, reply } = action.payload;
      const parentComment = state.comments.find((comment) => comment.id === parentId);
      if (parentComment) {
        parentComment.replies.push(reply);
      }
    },
    setComments: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.comments = action.payload;
      } else {
        console.error('setComments payload is not an array:', action.payload);
        state.comments = []; // Fallback to an empty array if the payload is invalid
      }
    },
  },
});

export const { addComment, editComment, deleteComment, addReply, setComments } = commentsSlice.actions;
export default commentsSlice.reducer;
