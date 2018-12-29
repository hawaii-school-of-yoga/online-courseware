import React, { Component } from 'react';
import Router from 'next/router';

import styles from '../components/_css';
import './index.scss';

import Button from '../components/atoms/Button';
import Card from '../components/molecules/Card';

import Main from '../components/templates/Main';
import Jumbotron from '../components/templates/Jumbotron';

export default class Module extends Component {
	render() {
		const { data, state, updateState } = this.props;

		return (
			<div id="page--index">
				<Main state={state} user={data.user}>
					<Jumbotron
						title="Hawaii School of Yoga Online Course Portal"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
							eget sapien sed tortor lobortis tempus nec quis libero.
							Suspendisse potenti. Phasellus id vehicula metus. Praesent pretium
							mauris ac pretium ultricies. Nulla gravida ornare eleifend. Nulla
							dui quam, mollis a rutrum eu, fermentum a urna. Proin vitae velit
							sapien.">
						<h2>Available Courses</h2>
						<div className="courses">
							{data.courses.map(({ id, modules, ...props }) => (
								<Card
									ActionButtons={() => (
										<div className="button-group">
											<Button
												onClick={() =>
													updateState('activeCourse', id, () =>
														Router.push('/course/'),
													)}
												color="primary">
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
					</Jumbotron>
				</Main>
			</div>
		);
	}
}
