import React, { Component } from 'react';
import Video from '../components/Video';
import Header from '../components/Header';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class Index extends Component {
	render() {
		const { state } = this.props;

		return (
			<div>
				<Header course={state.course} user={state.user} />
				<div className="container main">
					<Breadcrumb>
						<BreadcrumbItem>
							<a href="#">Courses</a>
						</BreadcrumbItem>
						<BreadcrumbItem>{state.course.title}</BreadcrumbItem>
						<BreadcrumbItem active>{state.course.module.title}</BreadcrumbItem>
					</Breadcrumb>
					<Video url="www.youtube.com/watch?v=b5H3b_Hh0Lw" />
				</div>
			</div>
		);
	}
}
