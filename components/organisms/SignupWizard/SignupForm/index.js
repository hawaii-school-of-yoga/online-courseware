import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './signup.scss';

export default class SignupForm extends Component {
	handleSubmit = () => {
		// TODO: registration, signup call
		// TODO: store cookie auth
		// TODO: TODO
		this.props.setStep(1);
	};

	render() {
		return (
			<div className="container">
				<form className="form-signin">
					<img src="/static/img/logo.png" />
					<h1>Sign up or Sign In</h1>
					<hr className="primary" />
					<small className="info">
						Have an account? Enter your email and password. Want one? Enter your{' '}
						<strong>HawaiiSchoolOfYoga.com</strong> address and a secure
						password. Thank you!
					</small>
					<hr className="primary" />
					<label htmlFor="inputEmail" className="sr-only">
						Email address
					</label>
					<input
						type="email"
						id="inputEmail"
						className="form-control"
						placeholder="Email address"
						required
						autoFocus
					/>
					<label htmlFor="inputPassword" className="sr-only">
						Password
					</label>
					<input
						type="password"
						id="inputPassword"
						className="form-control"
						placeholder="Password"
						required
					/>
					<div className="checkbox">
						<label>
							<input type="checkbox" value="remember-me" />
							<div>Remember me</div>
						</label>
					</div>
					<Button color="primary" onClick={this.handleSubmit}>
						Enter
					</Button>
				</form>
			</div>
		);
	}
}
