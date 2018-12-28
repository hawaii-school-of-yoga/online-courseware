import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
	render() {
		const { course, user } = this.props;

		return (
			<nav className="navbar">
				<div className="logo-bar">
					<img className="logo" src="/static/img/logo-no-text.png" />
				</div>
				<div className="title-bar">
					<h1>Hawaii School of Yoga</h1>
					<img className="aum" src="/static/img/aum.png" />
				</div>
				<div className="user-bar">
					<img src={user.img} />
					<div className="">
						<h4>{user.name}</h4>
					</div>
				</div>
			</nav>
		);
	}
}
