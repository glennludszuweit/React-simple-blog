import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, onLogout }) => (
  <header className='App-header'>
    <ul className='container'>
      <li>
        <Link to='/'>Simple Blog</Link>
      </li>
      {isAuthenticated ? (
        <React.Fragment>
          <li>
            <Link to='/new'>New Post</Link>
          </li>
          <li>
            <button
              className='linkLike'
              onClick={(e) => {
                e.preventDefault();
                onLogout();
              }}
            >
              Logout
            </button>
          </li>
        </React.Fragment>
      ) : (
        <li>
          <Link to='/login'>Login</Link>
        </li>
      )}
    </ul>
  </header>
);
export default Header;
