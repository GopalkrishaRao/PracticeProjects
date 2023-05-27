import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">To Do</h1>
      <div className="button-container">
        <button className="button">Login</button>
        <button className="button">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
