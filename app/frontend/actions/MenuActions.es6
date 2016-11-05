/* @flow */
import dispatcher from '../dispatchers/dispatcher.es6';

function _clickMenu() {
  dispatcher.dispatch({
    type: 'CLICK_MENU'
  });
}

export default {
  clickMenu: _clickMenu
};
