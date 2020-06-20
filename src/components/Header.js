import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <header className='App-header'>
    <ul className='container'>
      <li>
        <Link to='/'>Simple Blog</Link>
      </li>
      {props.isAuthenticated ? (
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
