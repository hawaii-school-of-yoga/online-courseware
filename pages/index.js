import React, { Component } from 'react';
import Header from '../components/molecules/Header';

import CourseNavigator from '../components/molecules/CourseNavigator';
import ModuleContainer from '../components/organisms/ModuleView';
import ModuleSelector from '../components/organisms/ModuleSelector';

import './index.css';

export default class Index extends Component {
	render() {
		const { state } = this.props;

		return (
			<div id="page--index">
				<Header user={state.user} />
				<div className="container main">
					<CourseNavigator course={state.course} />
					<div className="courseware">
						<ModuleSelector course={state.course} />
						<ModuleContainer module={state.course.module} />
					</div>
				</div>
			</div>
		);
	}
}
