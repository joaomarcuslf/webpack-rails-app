/* @flow */
import React from 'react';
import 'whatwg-fetch';

export default class AllItems extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = { items: [] };
  }

  getInitialState(): object {
    return this.state;
  }

  componentDidMount() {
    const privateThis = this; // this problem

    fetch('/api/v1/todo_items.json', {
      method: 'GET',
      mode: 'cors' // Same Origin
    })
      .then((response: object) => {
        // Fetch API will give an response with promise
        return response.json();
      })
      .then((result: object) => {
        privateThis.setState({
          items: result
        });
      }, (error: object) => {
        // handle network error
        console.error(error);
      });
  }

  render(): ?React$Element<div> {
    let items = this.state.items
      .map((item: object): ?React$Element < div > => {
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
