import React, { Component } from 'react';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class CourseNavigator extends Component {
	render() {
		const { course, module } = this.props;
		return (
			<Breadcrumb>
				<BreadcrumbItem>
					<a href="#">Courses</a>
				</BreadcrumbItem>
				<BreadcrumbItem>{course.title}</BreadcrumbItem>
				<BreadcrumbItem active>{module.title}</BreadcrumbItem>
			</Breadcrumb>
		);
	}
}
