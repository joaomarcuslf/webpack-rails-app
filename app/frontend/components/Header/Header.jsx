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
      <div className="container text-center">
        <h1>
          TODO APP
        </h1>
        <p>
          This applications was made with React and rails,
          using a moderm approach, with webpack running on
          development and bundle the javascript files to Rails.
        </p>
      </div>
    );
  }
}
