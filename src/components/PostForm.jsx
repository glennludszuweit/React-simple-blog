import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class PostForm extends Component {
  state = {
    title: '',
    content: '',
    saved: false,
  };

  handleAddNewPost = (e) => {
    e.preventDefault();
    if (this.state.title) {
      const post = {
        title: this.state.title,
        content: this.state.content,
      };
      this.props.addNewPost(post);
      this.setState({ saved: true });
    } else {
      alert('Title Required');
    }
  };

  render() {
    if (this.state.saved === true) {
      return <Redirect to='/' />;
    }
    return (
      <form onSubmit={this.handleAddNewPost} className='container'>
        <h1>Add new Post</h1>
        <p>
          <input
            type='text'
            id='form-title'
            value={this.state.title}
            onChange={(e) => {
              this.setState({
                title: e.target.value,
              });
            }}
          />
        </p>
        <p>
          <Quill
            className='quill-height'
            onChange={(content, delta, source, editor) => {
              this.setState({
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
