// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.3s linear;
  }

  .App {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .comment-form {
    background-color: ${({ theme }) => theme.inputBackground};
    padding: 20px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .comment-form input,
  .comment-form textarea {
    width: calc(100% - 10px);
    padding: 10px;
    background-color: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.inputText};
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s linear, color 0.3s linear;
  }

  .comment-form input:focus,
  .comment-form textarea:focus {
    outline: none;
    border-color: ${({ theme }) => theme.buttonBackground};
  }

  .comment-form button {
    align-self: flex-end;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s linear;
  }

  .comment-form button:hover {
    background-color: ${({ theme }) => theme.buttonBackground}CC;
  }

  .comment {
    margin-bottom: 20px;
    padding: 15px;
    background-color: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.inputText};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px;
    position: relative;
  }

  .comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  .comment-body {
    margin-top: 10px;
    color: ${({ theme }) => theme.text};
  }

  .comment-footer {
    margin-top: 10px;
    display: flex;
    gap: 10px;
  }

  .reply-button,
  .edit-button {
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s linear;
  }

  .reply-button:hover,
  .edit-button:hover {
    background-color: ${({ theme }) => theme.buttonBackground}CC;
  }

  .date {
    margin-right: 40px; /* Create space for the delete icon */
  }

  .delete-button {
    position: absolute;
    top: 50%;
    right: -20px; /* Overlapping the right edge of the container */
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    font-size: 20px;
  }

  .delete-button:hover {
    color: ${({ theme }) => theme.buttonBackground};
  }

  .sort-comments {
    text-align: right;
    margin-bottom: 20px;
  }

  .sort-comments select {
    padding: 5px;
    background-color: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 5px;
    cursor: pointer;
  }
`;
