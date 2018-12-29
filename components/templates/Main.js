import React, { Component } from 'react';
import Header from '../../components/molecules/Header';
import Footer from '../../components/atoms/Footer';

import CourseNavigator from '../../components/molecules/CourseNavigator';

export default class Main extends Component {
	render() {
		const { user, state, updateState } = this.props;
		const { course, module } = state;

		return (
			<div id="template--main">
				<Header user={user} />

				<div className="container main">
					<CourseNavigator course={course} module={module} />
					<div className="flex-container">{this.props.children}</div>
				</div>

				<Footer />
			</div>
		);
	}
}
