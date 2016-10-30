/* @flow */
import React from 'react';

export default class NewItem extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    return(
      <div>
        <h1>This is NewItem Component</h1>
      </div>
    );
  }
}
