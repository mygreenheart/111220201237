import React from 'react'
import './App.css';

import Header from './components/header/Header';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Services />
      </div>
    </div>
  );
}

export default App;
