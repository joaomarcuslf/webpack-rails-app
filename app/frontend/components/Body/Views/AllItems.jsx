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
    const privateThis = this;
    fetch('/api/v1/todo_items.json', {
      method: 'GET',
      mode: 'cors'
    }).then((response: object) => {
       response.text()
        .then((result: object) => {
          let jsonResult = JSON.parse(result);
          privateThis.setState({
            items: jsonResult
          });
        });
    }, (error: object) => {
      // handle network error
      console.error(error);
    });
  }

  render(): ?React$Element<div> {
    let items = this
      .state
      .items
      .map((item: object): ?React$Element<div> => {
        return(
          <div key={item.id}>
            <h3> {item.title} </h3>
            <p> {item.description} </p>
            <hr />
          </div>
        );
      });

    return(
      <div>
        {items}
      </div>
    );
  }
}
