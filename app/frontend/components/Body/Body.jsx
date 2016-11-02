import React from 'react';
import 'whatwg-fetch';
import AllItems from './Views/AllItems.jsx';
import NewItem from './Views/NewItem.jsx';

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const privateThis = this; // this problem

    fetch('/api/v1/todo_items.json', {
      method: 'GET',
      mode: 'cors' // Same Origin
    })
      .then((response: object): object => {
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

  handleSubmit(item: object) {
    let newState = this.state.items.concat(item);
    this.setState({ items: newState });
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    return(
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <hr />
        <AllItems items={this.state.items} />
      </div>
    );
  }
}
