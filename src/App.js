import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import Posts from './components/Posts';
import Post from './components/Post';
import PostForm from './components/PostForm';
import Message from './components/Message';

class App extends Component {
  state = {
    posts: [],
    message: null,
  };

  getNewSlugFromTitle = (title) =>
    encodeURIComponent(title.toLowerCase().split(' ').join('-'));

  addNewPost = (post) => {
    post.id = this.state.posts.length + 1;
    post.slug = this.getNewSlugFromTitle(post.title);
    this.setState({
      posts: [...this.state.posts, post],
      message: 'saved',
    });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1500);
  };

  updatePost = (post) => {
    post.slug = this.getNewSlugFromTitle(post.title);
    const index = this.state.posts.findIndex((p) => p.id === post.id);
    const posts = this.state.posts
      .slice(0, index)
      .concat(this.state.posts.slice(index + 1));
    const newPosts = [...posts, post].sort((a, b) => a.id - b.id);
    this.setState({
      posts: newPosts,
      message: 'updated',
    });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1500);
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          {this.state.message && <Message type={this.state.message} />}
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Posts posts={this.state.posts} />}
            />
            <Route
              path='/post/:postSlug'
              render={(props) => {
                const post = this.state.posts.find(
                  (post) => post.slug === props.match.params.postSlug
                );
                if (post) return <Post post={post} />;
                else return <PageNotFound />;
              }}
            />
            <Route
              exact
              path='/new'
              render={() => <PostForm addNewPost={this.addNewPost} />}
            />
            <Route
              path='/edit/:postSlug'
              render={(props) => {
                const post = this.state.posts.find(
                  (post) => post.slug === props.match.params.postSlug
                );
                if (post) {
                  return <PostForm updatePost={this.updatePost} post={post} />;
                } else {
                  return <Redirect to='/' />;
                }
              }}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
