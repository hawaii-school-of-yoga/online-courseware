import React, { Component } from 'react';
import Main from '../../components/templates/Main';
import Jumbotron from '../../components/templates/Jumbotron';

import ModuleContainer from '../../components/organisms/ModuleView';
import ModuleSelector from '../../components/organisms/ModuleSelector';

export default class Modules extends Component {
	render() {
		const { data, state, updateState } = this.props;
		const { course, module } = state;

		console.log(course);

		return (
			<div id="page--course">
				<Main updateState={updateState} user={data.user} state={state}>
					<Jumbotron title={course.title} description={course.description}>
						Hello, world. I am the rest of the content
					</Jumbotron>
				</Main>
			</div>
		);
	}
}
