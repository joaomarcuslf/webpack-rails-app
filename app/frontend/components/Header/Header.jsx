import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  render(): ?React$Element<h1> {
    return(
      <h1>This is the header</h1>
    );
  }
}
