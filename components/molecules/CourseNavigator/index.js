import React from 'react';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default ({ course }) => (
	<Breadcrumb>
		<BreadcrumbItem>
			<a href="#">Courses</a>
		</BreadcrumbItem>
		<BreadcrumbItem>{course.title}</BreadcrumbItem>
		<BreadcrumbItem active>{course.module.title}</BreadcrumbItem>
	</Breadcrumb>
);
