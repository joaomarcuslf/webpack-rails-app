/* @flow */
import { EventEmitter } from 'events';
import dispatcher from '../dispatchers/dispatcher.es6';

class NewItemStore extends EventEmitter {
  constructor() {
    super();

    this.item = { title: '', description: '', hasNoTitle: true };
  }

  getItemState(): object {
    return this.item;
  }

  clearInputs() {
    this.item = { title: '', description: '', hasNoTitle: true };
    this.emit('change');
  }

  handleTitleChange(title: string) {
    let hasNoTitle = (title.length === 0);

    this.item.title = title;
    this.item.hasNoTitle = hasNoTitle;

    this.emit('change');
  }

  handleDescriptionChange(description: string) {
    this.item.description = description;

    this.emit('change');
  }

  addItem(todoItem: object, successCallback: object) {
    fetch('/api/v1/todo_items.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'todo_item': todoItem
      })
    })
      .then((response: object): object => {
        return response.json();
      })
      .then((response: object) => {
        successCallback(response);
        this.clearInputs();
      });
  }

  handleActions(action: object) {
    switch(action.type) {
      case 'CHANGE_TITLE_INPUT':
        this.handleTitleChange(action.title);
        break;
      case 'CHANGE_DESCRIPTION_INPUT':
        this.handleDescriptionChange(action.description);
        break;
      case 'ADD_ITEM':
        this.addItem(action.todoItem, action.successCallback);
        break;
    }
  }
}

const newItemStore = new NewItemStore();
dispatcher.register(newItemStore.handleActions.bind(newItemStore));

export default newItemStore;
