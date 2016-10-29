/* @flow */
import React from 'react';
import Header from './Header/Header.jsx';
import Body from './Body/Body.jsx';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}
