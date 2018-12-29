import React, { Component } from 'react';
import Header from '../components/molecules/Header';

import CourseNavigator from '../components/molecules/CourseNavigator';
import ModuleContainer from '../components/organisms/ModuleView';
import ModuleSelector from '../components/organisms/ModuleSelector';

import './index.css';

export default class Index extends Component {
	render() {
		const { data, state, updateState } = this.props;
		console.log(state);

		let currentCourse = data.courses.filter((course) => course.id === state.activeCourse);
		currentCourse = currentCourse[0];
		let currentModule = currentCourse.modules.filter((module) => module.id === state.activeModule);
		currentModule = currentModule[0];

		return (
			<div id="page--index">
				<Header user={data.user} />
				<div className="container main">
					<CourseNavigator course={currentCourse} module={currentModule} />
					<div className="courseware">
						<ModuleSelector updateState={updateState} course={currentCourse} module={currentModule} />
						<ModuleContainer module={currentModule} />
					</div>
				</div>
			</div>
		);
	}
}
