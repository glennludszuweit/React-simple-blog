import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Hello React',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rem officia! Nemo nobis id cupiditate.',
      },
      {
        id: 2,
        title: 'Hello Simple Blog',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rem officia! Nemo nobis id cupiditate.',
      },
      {
        id: 3,
        title: 'Hello Admin',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rem officia! Nemo nobis id cupiditate.',
      },
    ],
  };
  render() {
    return (
      <div className='App'>
        <Header />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
