import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
	render() {
		const { course, user } = this.props;

		return (
			<nav className="navbar sticky-top">
				<img className="logo" src="/static/img/logo.png" />
				<div className="title-bar">
					<h1>{course.title}</h1>
					<h2>{course.module.title}</h2>
				</div>
				<div className="user-bar">
					<img src={user.img} />
					<h3>{user.name}</h3>
				</div>
			</nav>
		);
	}
}
