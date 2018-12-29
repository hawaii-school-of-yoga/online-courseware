import React, { Component } from 'react';

import { Button } from 'reactstrap';
import './header.css';
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
						<div className="mantra">
							<img className="aum" src="/static/img/aum.png" />
							<h4 className="lokah">लोकाः समस्ताः सुखिनो भवन्तु</h4>
						</div>
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
