import React from 'react';
import 'whatwg-fetch';
import AllItems from './Views/AllItems.jsx';
import NewItem from './Views/NewItem.jsx';

import TodoPageActions from '../../actions/TodoPageActions.es6';
import TodoPageStore from '../../stores/TodoPageStore.es6';

export default class TodoPage extends React.Component {
  constructor() {
    super();
    this.state = { items: TodoPageStore.getAllTodos() };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillMount() {
    TodoPageStore.on('change', () => {
      this.setState({ items: TodoPageStore.getAllTodos() });
    });
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  handleSubmit(item: object) {
    TodoPageActions.addTodo(item);
  }

  handleDelete(id: integer) {
    TodoPageActions.deleteItem(id);
  }

  handleUpdate(item: object) {
    TodoPageActions.updateTodo(item);
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
