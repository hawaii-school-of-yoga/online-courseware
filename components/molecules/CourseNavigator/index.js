import React, { Component } from 'react';
import Link from 'next/link';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class CourseNavigator extends Component {
	render() {
		const { course, module } = this.props;
		return (
			<Breadcrumb>
				<BreadcrumbItem>
					<Link href="/">
						<a>Courses</a>
					</Link>
				</BreadcrumbItem>
			</Breadcrumb>
		);
	}
}
