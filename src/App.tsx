import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <nav>
    <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    </ul>
    </nav>
    <div id="detail">
      <Outlet />
    </div>
    </>
  );
}

export default App;
