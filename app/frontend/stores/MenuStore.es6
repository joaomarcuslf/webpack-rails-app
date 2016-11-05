/* @flow */
import { EventEmitter } from 'events';
import dispatcher from '../dispatchers/dispatcher.es6';

class MenuStore extends EventEmitter {
  constructor() {
    super();

    this.isOpen = false;
  }

  getMenuState(): boolean {
    return this.isOpen;
  }

  toggleMenuState() {
    this.isOpen = !this.isOpen;

    this.emit('change');
  }

  handleActions(action: object) {
    switch(action.type) {
      case 'CLICK_MENU':
        this.toggleMenuState();
        break;
    }
  }
}

const menuStore = new MenuStore();
dispatcher.register(menuStore.handleActions.bind(menuStore));

export default menuStore;
