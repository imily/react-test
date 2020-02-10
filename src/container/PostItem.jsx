import React, { Component } from 'react';
import PostItemDom from '../component/PostItemDom';

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedItem: null,
      isEditing: false,
      editContent: {
        topic: '',
        description: '',
      }
    };
  }
  deletePost = (id) => {
    const newPosts = this.props.postList.filter((item) => {
      return item.id !== id
    });
    this.props.putPostToStorage(newPosts);
    this.props.getPosts();
  };
  editItem = (item) => {
    this.setState({
      ...this.state,
      editedItem: item,
      isEditing: true
    });
  };
  clearEdit = () => {
    this.setState({
      ...this.state,
      editedItem: null,
      isEditing: true,
      editContent: {
        topic: '',
        description: '',
      }
    });
  };
  changeText = (event) => {
    const inputField = event.target;
    const type = inputField.dataset.type;
    const cloneStateEdit = Object.assign({}, this.state.editContent);

    cloneStateEdit[type] = inputField.value;
    this.setState({
      ...this.state,
      editContent: { ...cloneStateEdit }
    });
  };
  submitEdit = (item, postList) => {
    for (let i = 0; i < postList.length; i++) {
      const newPost = postList[i];
      if (newPost.id === item.id) {
        newPost.topic = this.state.editContent.topic;
        newPost.description = this.state.editContent.description;
      }
    }

    this.props.putPostToStorage(postList);
    this.props.getPosts();
    this.clearEdit();
  };
  render() {
    const item = this.props.item;
    const editingStyle = (item === this.state.editedItem)? 'editing' : '';
    const editPostObject = {
      topic: this.state.editContent.topic,
      description: this.state.editContent.description
    };
    return (
      <div className={`post-item ${editingStyle}`}>
        <PostItemDom
          item={item}
          postList={this.props.postList}
          putPostToStorage={this.props.putPostToStorage}
          getPosts={this.props.getPosts}
          deletePost={this.deletePost}
          editItem={this.editItem}
          clearEdit={this.clearEdit}
          changeText={this.changeText}
          submitEdit={this.submitEdit}
          editPostObject={editPostObject}
        />
      </div>
    )
  }
}

export default PostItem;
