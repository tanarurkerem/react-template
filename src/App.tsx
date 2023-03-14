import React from 'react';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    </ul>
    </nav>
    <div id="detail">
      <Outlet />
    </div>
    </>
  );
}

export default App;
