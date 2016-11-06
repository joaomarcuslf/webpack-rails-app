/* @flow */
import dispatcher from '../dispatchers/dispatcher.es6';

function getTodos() {
  dispatcher.dispatch({
    type: 'GET_TODOS'
  });
}

function receiveTodos() {
  dispatcher.dispatch({
    type: 'RECEIVED_TODOS'
  });
}

function updateTodo(item: object) {
  dispatcher.dispatch({
    type: 'UPDATE_TODO',
    item: item
  });
}

function deleteItem(id: integer) {
  dispatcher.dispatch({
    type: 'DELETE_ITEM',
    id: id
  });
}

function addTodo(item: object) {
  dispatcher.dispatch({
    type: 'ADD_NEW_ITEM',
    item: item
  });
}

export default {
  getTodos: getTodos,
  addTodo: addTodo,
  receiveTodos: receiveTodos,
  updateTodo: updateTodo,
  deleteItem: deleteItem
};
