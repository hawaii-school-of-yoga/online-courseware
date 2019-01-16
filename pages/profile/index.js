import React, { Component } from 'react';
import Router from 'next/router';

import Button from '../../components/atoms/Button';
import Card from '../../components/molecules/Card';

import Main from '../../components/templates/Main';

import './profile.scss';

export default class Modules extends Component {
	render() {
		const { data, state, updateState } = this.props;

		return (
			<div id="page--profile">
				<Main updateState={updateState} user={data.user} state={state}>
					<div className="title-bar">
						<h1>My Profile</h1>
						<hr className="primary" />
					</div>

					<div className="edit-user">
						<img src="/static/mocks/user/img.jpg" />
						<form className="edit-profile">
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
					</div>
					<div className="my-courses">
						<h2>My Courses</h2>
						<hr className="primary" />
						<div className="card-container">
							{data.courses
								.filter((course) => data.user.courses.includes(course.id))
								.map(({ id, modules, ...props }) => (
									<Card
										ActionButtons={() => (
											<p className="button-group">
												<Button
													onClick={() => {
														updateState('loading', true);
														updateState('activeCourse', id, () => {
															Router.push('/module');
															updateState('loading', false);
														});
													}}
													color="success">
													Get Started
												</Button>
												<Button
													onClick={() => {
														updateState('loading', true);
														updateState('activeCourse', id, () => {
															Router.push('/course');
															updateState('loading', false);
														});
													}}
													outline
													color="primary">
													Information
												</Button>
											</p>
										)}
										updateState={updateState}
										key={id}
										additional={<span>Modules: {modules.length}</span>}
										{...props}
									/>
								))}
						</div>
					</div>
				</Main>
			</div>
		);
	}
}
