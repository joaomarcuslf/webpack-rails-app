/* @flow */
import React from 'react';

export default class AllItems extends React.Component {
  constructor(props: object) {
    super(props);
  }

  render(): ?React$Element<div> {
    let items = this.props.items
      .map((item: object): ?React$Element<div> => {
      return (
        <div key={item.id}>
          <h3> {item.title} </h3>
          <p> {item.description} </p>
          <span> {item.updated_at} </span>
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
