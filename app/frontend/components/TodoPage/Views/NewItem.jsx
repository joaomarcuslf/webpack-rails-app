/* @flow weak */
import React from 'react';

export default class NewItem extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = { title: '', description: '', hasNoTitle: true };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(event: object) {
    let title = event.target.value;
    let hasNoTitle = (title.length === 0);

    this.setState({ title: title, hasNoTitle: hasNoTitle });
  }

  handleDescriptionChange(event: object) {
    this.setState({ description: event.target.value });
  }

  handleSubmit() {
    fetch('/api/v1/todo_items.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'todo_item': {
          'title': this.state.title,
          'description': this.state.description
        }
      })
    })
      .then((response: object): object => {
        return response.json();
      })
      .then((response: object) => {
        this.props.handleSubmit(response);
        this.setState({
          title: '',
          description: '',
          hasNoTitle: true
        });
      });
  }

  render(): ?React$Element<div> {
    return (
      <div className="row form-group jumbotron add-form-area">
        <h2 className="lead">
          Add a new todo:
        </h2>
        <input type="text"
          className="form-control"
          placeholder="Type a title."
          value={this.state.title}
          onChange={this.handleTitleChange} />
        <textarea
          className="form-control"
          placeholder="Type a description."
          disabled={this.state.hasNoTitle}
          value={this.state.description}
          onChange={this.handleDescriptionChange} />
        <button
          className="btn btn-primary btn-to-right"
          disabled={this.state.hasNoTitle}
          onClick={this.handleSubmit}>
          <span className="add-text">Add new Todo</span>
          <i className="fa fa-plus fa-lg"></i>
        </button>
      </div>
    );
  }
}
