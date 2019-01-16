import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import Star from '../../atoms/Star';

import { Button } from 'reactstrap';
import './header.scss';
import styles from '../../_css';

export default class Header extends Component {
	render() {
		const { user, updateState } = this.props;

		return (
			<nav className="navbar">
				<div className="container">
					<div className="logo-bar">
						<Link prefetch href="/">
							<a>
								<img className="logo" src="/static/img/logo-no-text.png" />
							</a>
						</Link>
					</div>
					<div className="title-bar">
						<h1>Hawaii School of Yoga</h1>
						<h2>Online Wisdom Portal</h2>
					</div>
					<div className="user-bar">
						<Link prefetch href="/profile">
							<img src={user.img} />
						</Link>
						<div className="info-container">
							<h4>{user.name}</h4>
							{/* <div className="star-power">
								{user.stars.map(({ star }) => <Star type={star.type} />)}>
							</div> */}
							<div className="button-group">
								<Button
									style={styles.button.xs}
									color="success"
									onClick={() => {
										updateState('loading', true, () => {
											Router.push('/profile');
											updateState('loading', false);
										});
									}}>
									My Profile
								</Button>
								<Button
									style={styles.button.xs}
									color="danger"
									onClick={() => this.props.updateState('track', 0)}>
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
