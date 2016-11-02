/* @flow */
import React from 'react';
import Item from './Item.jsx';

export default class AllItems extends React.Component {
  constructor(props: object) {
    super(props);

    this.onUpdate = this.onUpdate.bind(this);
  }

  handleDelete(id: integer) {
    this.props.handleDelete(id);
  }

  onUpdate(item: object) {
    this.props.onUpdate(item);
  }

  render(): ?React$Element<div> {
    let items = this.props.items
      .map((item: object): ?React$Element < div > => {
      return (
        <div key={item.id}>
          <Item item={item}
                handleDelete={this.handleDelete.bind(this, item.id)}
                handleUpdate={this.onUpdate} />
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
