/* @flow */
import React from 'react';
import DateFormatter from '../../../formatters/dateFormatter.es6';

export default class AllItems extends React.Component {
  constructor(props: object) {
    super(props);

    let dateFormatter = new DateFormatter();

    this.formatDate = dateFormatter.format;
  }

  handleDelete(id: integer) {
    this.props.handleDelete(id);
  }

  render(): ?React$Element<div> {
    let items = this.props.items
      .map((item: object): ?React$Element<div> => {
      return (
        <div key={item.id}>
          <h3> {item.title} </h3>
          <p> {item.description} </p>
          <span> {this.formatDate(item.updated_at)} </span>
          <button onClick={this.handleDelete.bind(this, item.id)}>X</button>
          <hr />
        </div>
      );
    });

    return (
      <div>
        {items}
      </div>
    );
  }
}
