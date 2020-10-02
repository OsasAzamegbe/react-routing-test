import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link className="nav-link" to="/">
      <h1>Logo</h1>
      </Link >
      <ul>
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link >
        <Link className="nav-link" to="/about" >
          <li>About</li>
        </Link>
        <Link className="nav-link" to="/shop" >
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
