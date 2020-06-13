import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class PostForm extends Component {
  render() {
    return (
      <form action='' className='container'>
        <h1>Add new Post</h1>
        <p>
          <button type='submit'>Submit</button>
        </p>
      </form>
    );
  }
}

export default PostForm;
