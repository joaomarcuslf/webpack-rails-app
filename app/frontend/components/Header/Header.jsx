import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  render(): ?React$Element<h1> {
    return (
      <div className="container">
        <h1 className="text-center">
          TODO APP
        </h1>
        <p className="justify-text">
          This applications was made with React and rails, using a moderm approach, with webpack running on development and bundle the javascript files to Rails.
        </p>
      </div>
    );
  }
}
