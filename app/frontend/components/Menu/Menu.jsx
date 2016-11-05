import React from 'react';
import MenuStore from '../../stores/MenuStore.es6';
import MenuActions from '../../actions/MenuActions.es6';

export default class Header extends React.Component {
  constructor() {
		super();

		this.state = {
			isOpen: MenuStore.getMenuState()
		};

		this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    MenuStore.on('change', () => {
      this.setState({
        isOpen: MenuStore.getMenuState()
      });
    });
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

	handleClick() {
		MenuActions.clickMenu();
	}

	render(): ?React$Element<h1> {
		let menuBtn = (this.state.isOpen) ?
      <i className="fa fa-minus-square-o fa-3x" /> : <i className="fa fa-plus-square-o fa-3x" />;

		let menuContent = (!this.state.isOpen) ? <div className="menu-content" /> : <div className="menu-content open">
			<h2>
				Find me:
			</h2>
			<div className="links-list">
				<a target="_new" href="http://joaomarcuslf.github.io/">
					<i className="fa fa-terminal fa-lg" /> @joaomarcuslf
				</a>
				<a target="_new" href="https://github.com/joaomarcuslf/">
					<i className="fa fa-github-square fa-lg" /> Github
				</a>
				<a target="_new" href="https://www.facebook.com/joaomarcus.l.fernandes/">
					<i className="fa fa-facebook-square fa-lg" /> Facebook
				</a>
				<a target="_new" href="https://twitter.com/joaomarcuslf/">
					<i className="fa fa-twitter-square  fa-lg" /> Twitter
				</a>
				<a target="_new" href="https://medium.com/@joaomarcuslf/">
					<i className="fa fa-medium fa-lg" /> Medium
				</a>
				<a target="_new" href="https://www.linkedin.com/in/joaomarcuslf/">
					<i className="fa fa-linkedin-square  fa-lg" /> LinkeIn
				</a>
			</div>
		</div>;

    return (
			<div className="menu container-fluid">
				<div className="icons-container">
					<button className="btn-icon" onClick={this.handleClick}>
						{menuBtn}
					</button>
				</div>

				{menuContent}
      </div>
    );
  }
}
