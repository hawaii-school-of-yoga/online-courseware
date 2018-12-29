import React, { Component } from 'react';
import Router from 'next/router';

import Button from '../components/atoms/Button';

import Main from '../components/templates/Main';
import Card from '../components/molecules/Card';

import './index.scss';

export default class Module extends Component {
	render() {
		const { data, state, updateState } = this.props;

		return (
			<div id="page--index">
				<Main state={state} user={data.user}>
					<div className="jumbotron">
						<h1 className="display-4">Hawaii School of Yoga Online Courses</h1>
						<p className="lead">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget sapien sed tortor
							lobortis tempus nec quis libero. Suspendisse potenti. Phasellus id vehicula metus. Praesent
							pretium mauris ac pretium ultricies. Nulla gravida ornare eleifend. Nulla dui quam, mollis a
							rutrum eu, fermentum a urna. Proin vitae velit sapien.
						</p>
						<h2>Available Courses</h2>
						<div className="courses">
							{data.courses.map(({ id, modules, ...props }) => (
								<Card
									ActionButtons={() => (
										<div className="button-group">
											<Button
												onClick={() =>
													updateState('activeCourse', id, () => Router.push('/module/'))}
												color="primary"
											>
												View Course
											</Button>
										</div>
									)}
									updateState={updateState}
									key={id}
									text={`Modules: ${modules.length}`}
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
