import React from 'react'
import './App.css';

import Header from './components/header/Header';
import Services from './components/services/Services';
import Comments from './components/comments/Comments';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Services />
        <Comments />
      </div>
    </div>
  );
}

export default App;
