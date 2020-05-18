import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ol>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="create">
        <li>Sell</li>
      </Link>
    </ol>
  </nav>
);

export default Nav;
