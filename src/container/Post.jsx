import React, { Component } from 'react';
import posts from '../Data/posts';
import PostDom from '../component/PostDom';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  resetData = (posts) => {
    this.putPostToStorage(posts);
    this.getPosts();
  };

  putPostToStorage = (posts) => {
    localStorage.setItem('posts', JSON.stringify(posts));
  };

  getPosts = () => {
    const originPosts = localStorage.getItem('posts');
    this.setState({
      ...this.state,
      postList: JSON.parse(originPosts)
    });
  };

  render() {
    return (
      <div className="container">
        <button
          className='reset-button'
          onClick={() => {this.resetData(posts)}}
          data-testid="display_posts"
        >
          Reset Data
        </button>
        <PostDom
          putPostToStorage={this.putPostToStorage}
          getPosts={this.getPosts}
          postList={this.state.postList}
        />
      </div>
    );
  }
}

export default Post;
