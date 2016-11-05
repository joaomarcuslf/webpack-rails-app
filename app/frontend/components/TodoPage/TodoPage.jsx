import React from 'react';
import 'whatwg-fetch';
import AllItems from './Views/AllItems.jsx';
import NewItem from './Views/NewItem.jsx';

export default class TodoPage extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateItems = this.updateItems.bind(this);
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

  handleUpdate(item: object) {
    fetch(`/api/v1/todo_items/${item.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'todo_item': item
      })
    })
      .then((response: object): object => {
        return response.json();
      })
      .then((response: object) => {
        this.updateItems(response);
      });
  }

  updateItems(item: object) {
    let items = this.state.items.filter((i) => { return i.id !== item.id; });
    items.push(item);
    this.setState({items: items });
  }

  removeItemClient(id: integer) {
    let newItems = this.state.items.filter((item) => {
      return item.id != id;
    });

    this.setState({ items: newItems });
  }

  render(): ?React$Element<div> {
    return(
      <div className="container">
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items}
                  handleDelete={this.handleDelete}
                  onUpdate={this.handleUpdate} />
      </div>
    );
  }
}
