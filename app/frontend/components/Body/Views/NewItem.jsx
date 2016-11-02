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
      <div>
        <input type="text"
          placeholder="Type a title."
          value={this.state.title}
          onChange={this.handleTitleChange} />
        <br />
        <textarea
          placeholder="Type a description."
          disabled={this.state.hasNoTitle}
          value={this.state.description}
          onChange={this.handleDescriptionChange} />
        <br />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
