import React, { Component } from 'react';
import Link from 'next/link';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class CourseNavigator extends Component {
	render() {
		const { course, module } = this.props;
		const coursePage = window.location.pathname.includes('course');
		const modulePage = window.location.pathname.includes('module');
		const profilePage = window.location.pathname.includes('profile');

		const courseCrumb = (
			<BreadcrumbItem>
				<Link prefetch href="/course">
					<a>{course.title}</a>
				</Link>
			</BreadcrumbItem>
		);

		const moduleCrumb = (
			<BreadcrumbItem>
				<Link prefetch href="/module">
					<a>{module.title}</a>
				</Link>
			</BreadcrumbItem>
		);

		const profileCrumb = (
			<BreadcrumbItem>
				<Link prefetch href="/profile">
					<a>Profile</a>
				</Link>
			</BreadcrumbItem>
		);

		return (
			<Breadcrumb>
				<BreadcrumbItem>
					<Link prefetch href="/">
						<a>Main</a>
					</Link>
				</BreadcrumbItem>
				{coursePage || modulePage ? courseCrumb : null}
				{modulePage ? moduleCrumb : null}
				{profilePage ? profileCrumb : null}
			</Breadcrumb>
		);
	}
}
