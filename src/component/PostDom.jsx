import React, { Component } from 'react';
import PostItem from '../container/PostItem';
import AddPost from '../container/AddPost';

class PostDom extends Component {
  render() {
    const list = this.props.list;
    const posts = this.props.posts;
    const postList = this.props.postList;
    const isListValid = ((list !== []) && (list !== null));

    return (
      <React.Fragment>
        <button className='reset-button' onClick={() => {this.props.resetData(posts)}}>Reset Data</button>
        <AddPost
          postList={postList}
          putPostToStorage={this.props.putPostToStorage}
          getPosts={this.props.getPosts}
        />
        <div className="post-container">
          { (isListValid) && list.map(item =>
            <PostItem
              item={item}
              key={item.id}
              postList={postList}
              putPostToStorage={this.props.putPostToStorage}
              getPosts={this.props.getPosts}
            />)
          }
        </div>
      </React.Fragment>
    );
  }
}

export default PostDom;
