import React from 'react';
import App, { Container } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockData from '../prototype-mocks.json';

import '../styles/index.css';

export default class MyApp extends App {
	state = { activeCourse: 1, activeModule: 1 };

	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	updateState = (key, value, cb) => this.setState({ [key]: value }, cb);

	render() {
		const { Component, pageProps } = this.props;

		let currentCourse = mockData.courses.filter((course) => course.id === this.state.activeCourse);
		currentCourse = currentCourse[0];
		let currentModule = currentCourse.modules.filter((module) => module.id === this.state.activeModule);
		currentModule = currentModule[0];

		const state = {
			course: currentCourse,
			module: currentModule
		};

		return (
			<Container>
				<Component {...pageProps} state={state} updateState={this.updateState} data={mockData} />
			</Container>
		);
	}
}
