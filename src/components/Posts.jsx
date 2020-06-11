import React from 'react';

const Posts = ({ posts }) => (
  <article className='posts container'>
    <h1>Posts</h1>
    <ul>
      {posts.length < 1 && <li key='empty'>No Posts Yet!</li>}
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
        </li>
      ))}
    </ul>
  </article>
);

export default Posts;
