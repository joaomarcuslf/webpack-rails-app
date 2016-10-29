import React from 'react';
import AllItems from './Views/AllItems.jsx';

export default class Body extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <AllItems />
      </div>
    );
  }
}
