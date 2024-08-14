// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import CommentsList from './components/CommentsList';
import CommentForm from './components/CommentForm';
import usePersistedComments from './hooks/usePersistedComments';
import './App.css';

function App() {
  usePersistedComments(); // Manage comment persistence
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <button onClick={themeToggler} style={{ marginBottom: '20px', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <h1>Comments Section</h1>
        <CommentForm />
        <CommentsList />
      </div>
    </ThemeProvider>
  );
}

export default App;
