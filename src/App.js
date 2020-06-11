import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        slug: 'hello-react',
        title: 'Hello React',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rem officia! Nemo nobis id cupiditate.',
      },
      {
        id: 2,
        slug: 'hello-simple-blog',
        title: 'Hello Simple Blog',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rem officia! Nemo nobis id cupiditate.',
      },
      {
        id: 3,
        slug: 'hello-admin',
        title: 'Hello Admin',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rem officia! Nemo nobis id cupiditate.',
      },
    ],
  };
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
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
                return <Post post={post} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
