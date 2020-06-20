import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated }) => (
  <header className='App-header'>
    <ul className='container'>
      <li>
        <Link to='/'>Simple Blog</Link>
      </li>
      {isAuthenticated ? (
        <li>
          <Link to='/new'>New Post</Link>
        </li>
      ) : (
        <li>
          <Link to='/login'>Login</Link>
        </li>
      )}
    </ul>
  </header>
);
export default Header;
