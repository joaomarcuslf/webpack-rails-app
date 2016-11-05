/* @flow */
import dispatcher from '../dispatchers/dispatcher.es6';

function handleTitleChange(title: string) {
  dispatcher.dispatch({
    type: 'CHANGE_TITLE_INPUT',
    title: title
  });
}

function handleDescriptionChange(description: string) {
  dispatcher.dispatch({
    type: 'CHANGE_DESCRIPTION_INPUT',
    description: description
  });
}

function addItem(todoItem: object, successCallback: object) {
  dispatcher.dispatch({
    type: 'ADD_ITEM',
    todoItem: todoItem,
    successCallback: successCallback
  });
}

export default {
  handleTitleChange: handleTitleChange,
  handleDescriptionChange: handleDescriptionChange,
  addItem: addItem
};
