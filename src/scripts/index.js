import '../styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  console.log('페이지가 로드되었습니다!');
  
  // React 앱 마운트
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.render(<App />, root);
  }
});