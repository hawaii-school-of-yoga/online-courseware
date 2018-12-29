import React, { Component } from 'react';

import { Button } from 'reactstrap';
import './header.scss';
import styles from '../../_css';

export default class Header extends Component {
	render() {
		const { user } = this.props;

		return (
			<nav className="navbar">
				<div className="container">
					<div className="logo-bar">
						<img className="logo" src="/static/img/logo-no-text.png" />
					</div>
					<div className="title-bar">
						<h1>Hawaii School of Yoga</h1>
						<h2>Online Wisdom Portal</h2>
					</div>
					<div className="user-bar">
						<img src={user.img} />
						<div className="info-container">
							<h4>{user.name}</h4>
							<div className="button-group">
								<Button style={styles.button.xs} color="success">
									Settings
								</Button>
								<Button style={styles.button.xs} color="danger">
									Logout
								</Button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
