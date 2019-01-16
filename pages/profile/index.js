import React, { Component } from 'react';

import Main from '../../components/templates/Main';

import Button from '../../components/atoms/Button';

import './profile.scss';

export default class Modules extends Component {
	render() {
		const { data, state, updateState } = this.props;

		console.log(data, state);

		return (
			<div id="page--profile">
				<Main updateState={updateState} user={data.user} state={state}>
					<div className="title-bar">
						<h1>Your Hawaii School of Yoga Profile</h1>
						<hr className="primary" />
					</div>
					<form className="edit-profile">
						<h2>Edit Your Profile</h2>
						<label htmlFor="inputEmail" className="sr-only">
							Email address
						</label>
						<input
							type="email"
							id="inputEmail"
							className="form-control"
							placeholder={data.user.email}
						/>
						<label htmlFor="inputUsername" className="sr-only">
							Username
						</label>
						<input
							type="text"
							id="inputUsername"
							className="form-control"
							placeholder={data.user.name}
						/>
						<Button color="success" onClick={() => {}}>
							Save Changes
						</Button>
					</form>
					<h2 className="my-courses">
						<h2>My Courses</h2>
					</h2>
				</Main>
			</div>
		);
	}
}
