import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class PostForm extends Component {
  state = {
    post: {
      id: this.props.post.id,
      slug: this.props.post.slug,
      title: this.props.post.title,
      content: this.props.post.content,
    },
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
            defaultValue={this.props.title}
            id='form-title'
            value={this.state.post.title}
            onChange={(e) => {
              this.setState({
                post: {
                  ...this.state.post,
                  title: e.target.value,
                },
              });
            }}
          />
        </p>
        <p>
          <Quill
            className='quill-height'
            defaultValue={this.state.post.content}
            onChange={(content, delta, source, editor) => {
              this.setState({
                post: {
                  ...this.state.post,
                  content: editor.getContents(),
                },
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
