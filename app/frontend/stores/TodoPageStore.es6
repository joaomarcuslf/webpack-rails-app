/* @flow */
import { EventEmitter } from 'events';
import dispatcher from '../dispatchers/dispatcher.es6';

class TodoPageStore extends EventEmitter {
  constructor() {
    super();

    this.todoItems = [];

    fetch('/api/v1/todo_items.json', {
      method: 'GET',
      mode: 'cors' // Same Origin
    })
      .then((response: object): object => {
        // Fetch API will give an response with promise
        return response.json();
      })
      .then((result: object) => {
        this.todoItems = result;

        this.emit('change');
      }, (error: object) => {
        // handle network error
        console.error(error);
      });
  }

  getAllTodos(): object {
    return this.todoItems;
  }

  addTodo(item: object) {
    let newItems = this.todoItems.concat(item);
    this.todoItems = newItems;
    this.emit('change');
  }

  updateTodo(item: object) {
    if(item.title.length > 0) {
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
        .then((result: object) => {
          let updatadeItem = result;
          let items = this.todoItems.filter((i: object): boolean => {
            return i.id !== updatadeItem.id;
          });

          items.push(updatadeItem);

          this.todoItems = items;
          this.emit('change');
        });
    }
  }

  deleteTodo(id: integer) {
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
        let newItems = this.todoItems.filter((item: object): boolean => {
          return item.id != id;
        });

        this.todoItems = newItems;
        this.emit('change');
      });
  }

  handleActions(action: object) {
    switch(action.type) {
      case 'ADD_NEW_ITEM':
        this.addTodo(action.item);
        break;
      case 'DELETE_ITEM':
        this.deleteTodo(action.id);
        break;
      case 'UPDATE_TODO':
        this.updateTodo(action.item);
        break;
    }
  }
}

const todoPageStore = new TodoPageStore();
dispatcher.register(todoPageStore.handleActions.bind(todoPageStore));

export default todoPageStore;
