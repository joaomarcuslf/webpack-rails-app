import React from 'react';
import AllItems from './Views/AllItems.jsx';
import NewItem from './Views/NewItem.jsx';

export default class Body extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    return(
      <div>
        <NewItem />
        <hr />
        <AllItems />
      </div>
    );
  }
}
