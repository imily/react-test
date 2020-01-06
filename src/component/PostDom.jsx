import React, { Component } from 'react';
import PostItem from '../container/PostItem';
import AddPost from '../container/AddPost';

class PostDom extends Component {
  render() {
    const postList = this.props.postList;
    const isListValid = ((postList !== []) && (postList !== null));

    return (
      <React.Fragment>
        <AddPost
          postList={postList}
          putPostToStorage={this.props.putPostToStorage}
          getPosts={this.props.getPosts}
        />
        <div className="post-container">
          { (isListValid) && postList.map(item =>
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
