/* @flow */
import React from 'react';
import Header from './Header/Header.jsx';
import Menu from './Menu/Menu.jsx';


export default class App extends React.Component {
  propTypes: {
    children: React.PropTypes.element.isRequired
  }
  
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    return(
      <div>
        <Menu />
        <Header />

        {this.props.children}
      </div>
    );
  }
}
