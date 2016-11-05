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
					className="form-control"
          placeholder="Type a title."
					value={this.state.title}
          onChange={this.handleTitleChange} />
        <br />
		</div> :
    <h3 className="item-title"> <i className="fa fa-comment-o fa-lg" /> {this.props.item.title} </h3>;

		let description = this.state.editable ? <div>
			<textarea className="form-control"
          placeholder="Type a description."
          disabled={this.state.hasNoTitle}
					value={this.state.description}
          onChange={this.handleDescriptionChange} />
        <br />
		</div> :
    <p className="item-paragraph"> <i className="fa fa-quote-left fa-lg" /> {this.props.item.description} </p>;

		let editIcon = (this.state.editable) ?
    <i className="fa fa-check fa-lg" /> :
    <i className="fa fa-pencil-square-o fa-lg" />;

    return (
			<div className="row container item-content">
				<div className="icons-container">
					<button className="btn-icon" onClick={this.props.handleDelete}>
						<i className="fa fa-close fa-lg" />
					</button>
					<button className="btn-icon" onClick={this.handleEdit}>
						{editIcon}
					</button>
				</div>
				{ title }
				{description}
				<span>
					<i className="fa fa-calendar fa-lg" />
					{this.formatDate(this.props.item.updated_at)}
				</span>
				<hr />
      </div>
    );
  }
}
