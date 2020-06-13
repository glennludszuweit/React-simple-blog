import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class PostForm extends Component {
  state = {
    title: '',
    content: '',
  };

  render() {
    return (
      <form action='' className='container'>
        <h1>Add new Post</h1>
        <p>
          <input
            type='text'
            id='form-title'
            value={this.state.title}
            onChange={(e) => {
              this.state({
                title: e.target.value,
              });
            }}
          />
        </p>
        <p>
          <Quill
            onChange={(content, delta, source, editor) => {
              this.state({
                content: editor.getContents(),
              });
            }}
          />
        </p>
        <p>
          <button type='submit'>Submit</button>
        </p>
      </form>
    );
  }
}

export default PostForm;
