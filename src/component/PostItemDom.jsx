import React, { Component } from 'react';

class PostItemDom extends Component {
  render() {
    const item = this.props.item;
    const editPostObject = this.props.editPostObject;
    return (
      <div className="post-main" data-testid="post_item">
        <div className="number" data-testid="number_post">{item.id}</div>
        <button
          className="btn-delete"
          onClick={() => {this.props.deletePost(item.id)}}
          data-testid="delete_post"
        >
          Delete
        </button>
        <div className="user">
          <p>
            <b>Posted by : </b>
            <span>{ item.user_name }</span>
          </p>
        </div>
        <div className="topic">
          <p>
            <b>Topic : </b>
            <span className="input">
                <input
                  type="text"
                  data-type='topic'
                  data-testid="topic_input"
                  onChange={this.props.changeText}
                  value={editPostObject.topic}
                />
              </span>
            <span className="text"
                  data-testid="display_topic"
            >
              { item.topic }
            </span>
          </p>
        </div>
        <div className="description">
          <p>
            <b>Content : </b>
            <span className="input">
                <input type="text" data-type='description' onChange={this.props.changeText} value={editPostObject.description}/>
              </span>
            <span className="text">{ item.description }</span>
          </p>
        </div>
        <button className="btn-edit" onClick={() => {this.props.editItem(item)}}>Edit</button>
        <div className="edit-area">
          <button className="btn-edit-cancel" onClick={this.props.clearEdit}>CANCEL</button>
          <button
            className="btn-edit-ok"
            onClick={() => {this.props.submitEdit(item, this.props.postList)}}
            data-testid="edit_post"
          >
            OK
          </button>
        </div>
      </div>
    )
  }
}

export default PostItemDom;
