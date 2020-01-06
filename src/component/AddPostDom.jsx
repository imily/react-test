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
            data-testid="user_input"
            onChange={this.props.changeText}
            value={addPostObject.userName}
          />
          <input
            type="text"
            placeholder="topic"
            data-type='topic'
            data-testid="topic_input"
            onChange={this.props.changeText}
            value={addPostObject.topic}
          />
          <textarea cols="50" rows="5" placeholder="say something..."
                    data-type='description'
                    data-testid="description_input"
                    onChange={this.props.changeText}
                    value={addPostObject.description}
          />
          <button className="button submit" onClick={this.props.addPost} data-testid="add_post">Submit</button>
        </div>
      </React.Fragment>
    );
  }
}

export default AddPostDom;
