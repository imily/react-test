import React, { Component } from 'react';

class PostItemDom extends Component {
  render() {
    const item = this.props.item;
    const editPostObject = this.props.editPostObject;
    return (
      <div className="post-main">
        <div className="number">{item.id}</div>
        <button className="btn-delete" onClick={() => {this.props.deletePost(item.id)}}>Delete</button>
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
                <input type="text" data-type='topic' onChange={this.props.changeText} value={editPostObject.topic}/>
              </span>
            <span className="text">{ item.topic }</span>
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
          <button className="btn-edit-ok" onClick={() => {this.props.submitEdit(item)}}>OK</button>
        </div>
      </div>
    )
  }
}

export default PostItemDom;
