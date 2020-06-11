import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <article className='notfound container'>
    <h1>404!</h1>
    <h3>Page not found.</h3>
    <p>
      <Link to='/'>Return to Hompage.</Link>
    </p>
  </article>
);

export default PageNotFound;
