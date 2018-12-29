import React, { Component } from 'react';
import Router from 'next/router';

import Button from '../components/atoms/Button';

import Main from '../components/templates/Main';
import Card from '../components/molecules/Card';

export default class Module extends Component {
	render() {
		const { data, state, updateState } = this.props;

		return (
			<div id="page--index">
				<Main state={state} user={data.user}>
					<div className="jumbotron">
						<h1 className="display-4">Hawaii School of Yoga Courses</h1>
						<p className="lead">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget sapien sed tortor
							lobortis tempus nec quis libero. Suspendisse potenti. Phasellus id vehicula metus. Praesent
							pretium mauris ac pretium ultricies. Nulla gravida ornare eleifend. Nulla dui quam, mollis a
							rutrum eu, fermentum a urna. Proin vitae velit sapien.
						</p>
						<hr className="my-4" />
						<p>
							Sed tristique orci molestie sollicitudin laoreet. Aliquam sollicitudin eget tellus eget
							volutpat. Etiam in consectetur urna. Vestibulum ligula leo, maximus sed cursus vitae,
							dignissim ut enim. Vivamus varius luctus ex in bibendum. Proin pulvinar porta feugiat.
							Aliquam imperdiet arcu et tellus condimentum vulputate.
						</p>
						<div className="courses">
							{data.courses.map(({ id, modules, ...props }) => (
								<Card
									ActionButtons={() => (
										<div className="button-group">
											<Button
												onClick={() =>
													updateState('activeCourse', id, () => Router.push('/course'))}
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
