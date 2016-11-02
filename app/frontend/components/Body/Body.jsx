import React from 'react';
import 'whatwg-fetch';
import AllItems from './Views/AllItems.jsx';
import NewItem from './Views/NewItem.jsx';

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.removeItemClient = this.removeItemClient.bind(this);
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

  shouldComponentUpdate(): boolean {
    return true;
  }

  handleSubmit(item: object) {
    let newState = this.state.items.concat(item);
    this.setState({ items: newState });
  }

  handleDelete(id: integer) {
    fetch(`/api/v1/todo_items/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response: object): object => {
        return response.text();
      })
      .then(() => {
        this.removeItemClient(id);
      });
  }

  removeItemClient(id) {
    let newItems = this.state.items.filter((item) => {
      return item.id != id;
    });

    this.setState({ items: newItems });
  }

  render(): ?React$Element<div> {
    return(
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <hr />
        <AllItems items={this.state.items} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
