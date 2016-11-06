/* @flow weak */
import React from 'react';

import NewItemActions from '../../../actions/NewItemActions.es6';
import NewItemStore from '../../../stores/NewItemStore.es6';

export default class NewItem extends React.Component {
  constructor(props: object) {
    super(props);

    this.state = NewItemStore.getItemState();

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    NewItemStore.on('change', () => {
      this.getStates();
    });
  }

  componentWillUnmount() {
    NewItemStore.removeListener('change', this.getStates);
  }

  getStates() {
    this.setState(NewItemStore.getItemState());
  }

  handleTitleChange(event: object) {
    let title = event.target.value;

    NewItemActions.handleTitleChange(title);
  }

  handleDescriptionChange(event: object) {
    let description = event.target.value;

    NewItemActions.handleDescriptionChange(description);
  }

  handleSubmit() {
    let todoItem = {
      title: this.state.title,
      description: this.state.description
    };

    NewItemActions.addItem(todoItem, this.props.handleSubmit);
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
          <i className="fa fa-plus fa-lg" />
        </button>
      </div>
    );
  }
}
