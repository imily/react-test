import React, { Component } from 'react';

class AddPostDom extends Component {
  render() {
    const addPostObject = this.props.addPostObject;

    return (
      <React.Fragment>
        <h2 className="title">Create Post</h2>
        <div className="main">
          <input
            type="text"
            placeholder="user"
            data-type='userName'
            onChange={this.props.changeText}
            value={addPostObject.userName}
          />
          <input
            type="text"
            placeholder="topic"
            data-type='topic'
            onChange={this.props.changeText}
            value={addPostObject.topic}
          />
          <textarea cols="50" rows="5" placeholder="say something..."
                    data-type='description'
                    onChange={this.props.changeText}
                    value={addPostObject.description}
          />
          <button className="button submit" onClick={this.props.addPost}>Submit</button>
        </div>
      </React.Fragment>
    );
  }
}

export default AddPostDom;
