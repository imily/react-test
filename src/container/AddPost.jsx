import React, { Component } from 'react';
import AddPostDom from '../component/AddPostDom';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      topic: '',
      description: ''
    };
  }
  changeText = (event) => {
    const inputField = event.target;
    const type = inputField.dataset.type;
    const cloneState = Object.assign({}, this.state);

    cloneState[type] = inputField.value;
    this.setState({
      ...cloneState
    });
  };
  isEmpty = () => {
    if ((this.state.userName) === '' ||
      (this.state.topic) === '' ||
      (this.state.description) === '') {
      return false;
    }
    return true;
  };
  addPost = () => {
    if (!this.isEmpty()) {
      alert('not empty');
      return;
    }
    const postList = this.props.postList;
    const newPost = {
      id: (postList.length) + 1,
      user_name: this.state.userName,
      topic: this.state.topic,
      description: this.state.description
    };
    postList.push(newPost);
    this.props.putPostToStorage(postList);
    this.props.getPosts();
    this.clearField();
  };
  clearField = () => {
    this.setState({
      ...this.state,
      userName: '',
      topic: '',
      description: '',
    });
  };
  render() {
    const addPostObject = {
      userName: this.state.userName,
      topic: this.state.topic,
      description: this.state.description
    };
    return (
      <div className="add-post-container">
          <AddPostDom
            addPostObject={addPostObject}
            changeText={this.changeText}
            isEmpty={this.isEmpty}
            addPost={this.addPost}
            clearField={this.clearField}/>
      </div>
    )
  }
}

export default AddPost;
