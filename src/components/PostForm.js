import React, { Component } from "react";

export default class PostForm extends Component {
  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" class="form-control" id="title" />
        </div>
        <button className="btn btn-success" type="submit"></button>
      </form>
    );
  }
}
