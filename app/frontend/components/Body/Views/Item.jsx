/* @flow */
import React from 'react';
import DateFormatter from '../../../formatters/dateFormatter.es6';

export default class AllItems extends React.Component {
  constructor(props: object) {
		super(props);

    let dateFormatter = new DateFormatter();
		this.formatDate = dateFormatter.format;

		this.state = {
			title: this.props.item.title,
			description: this.props.item.description,
			editable: false,
			hasNoTitle: false
		};
		this.handleEdit = this.handleEdit.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}

	shouldComponentUpdate(): boolean {
    return true;
  }

	handleTitleChange(event: object) {
    let title = event.target.value;
    let hasNoTitle = (title.length === 0);

    this.setState({ title: title, hasNoTitle: hasNoTitle });
  }

  handleDescriptionChange(event: object) {
    this.setState({ description: event.target.value });
  }

	handleEdit() {
		if (this.state.editable) {
			// @Todo
			let item = {
				title: this.state.title,
				description: this.state.description
			};

			item['id'] = this.props.item.id;

			this.props.handleUpdate(item);
		}
		this.setState({editable: !this.state.editable});
	}

	render(): ?React$Element<div> {
		let title = (this.state.editable) ? <div>
			<input type="text"
          placeholder="Type a title."
					value={this.state.title}
          onChange={this.handleTitleChange} />
        <br />
		</div> : <h3> {this.props.item.title} </h3>;
		let description = this.state.editable ? <div>
			<textarea
          placeholder="Type a description."
          disabled={this.state.hasNoTitle}
					value={this.state.description}
          onChange={this.handleDescriptionChange} />
        <br />
		</div> : <p> {this.props.item.description} </p>;
    return (
      <div>
				{ title }
				{description}
				<span> {this.formatDate(this.props.item.updated_at)} </span>
				<button onClick={this.props.handleDelete}>X</button>
				<button onClick={this.handleEdit}> {this.state.editable ? 'V' : 'E' } </button>
				<hr />
      </div>
    );
  }
}
