import React, { Component } from 'react';
import Video from '../components/atoms/Video';
import Header from '../components/molecules/Header';

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
					<div className="courseware">
						<div className="sidebar">Sidebar</div>
						<div className="video-container">
							<Video url="https://www.youtube.com/watch?v=duQ9_578RKw" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
