import React, { Component } from 'react';
import Link from 'next/link';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class CourseNavigator extends Component {
	render() {
		const { course, module } = this.props;
		const coursePage = window.location.pathname.includes('course');
		const modulePage = window.location.pathname.includes('module');

		const courseCrumb = (
			<BreadcrumbItem>
				<Link href="/course">{course.title}</Link>
			</BreadcrumbItem>
		);

		const moduleCrumb = (
			<BreadcrumbItem>
				<Link href="/module">{module.title}</Link>
			</BreadcrumbItem>
		);

		return (
			<Breadcrumb>
				<BreadcrumbItem>
					<Link href="/">
						<a>Courses</a>
					</Link>
				</BreadcrumbItem>
				{coursePage || modulePage ? courseCrumb : null}
				{modulePage ? moduleCrumb : null}
			</Breadcrumb>
		);
	}
}
