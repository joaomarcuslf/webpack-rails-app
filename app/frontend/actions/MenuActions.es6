/* @flow */
import dispatcher from '../dispatchers/dispatcher.es6';

function clickMenu() {
  dispatcher.dispatch({
    type: 'CLICK_MENU'
  });
}

export default {
  clickMenu: clickMenu
};
