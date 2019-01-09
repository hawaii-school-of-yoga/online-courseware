import React from 'react';
import App, { Container } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import mocks from '../mocks';

import Loading from '../components/atoms/Loading';

import '../styles/index.scss';
import '../styles/bootstrap.scss';

const defaultState = {
	activeCourse: 1,
	activeModule: 1,
	loading: true,
};

export default class MyApp extends App {
	state = defaultState;

	componentDidMount() {
		if (typeof window !== 'undefined') {
			const localStorageState = JSON.parse(
				window.localStorage.getItem('won-rva'),
			);

			if (typeof localStorageState === 'object') {
				this.setState({ ...localStorageState, loading: false });
			}
		}
	}

	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	updateState = (key, value, customCb) => {
		this.setState({ loading: true });
		this.setState({ [key]: value }, function() {
			window.localStorage.setItem('hsyonline', JSON.stringify(this.state));

			if (customCb) {
				customCb();
			}

			this.setState({ loading: false });
		});
	};

	render() {
		if (this.state.loading) {
			return <Loading />;
		}

		const { Component, pageProps } = this.props;

		console.log(mocks);

		let currentCourse = mocks.courses.filter(
			(course) => course.id === this.state.activeCourse,
		);
		currentCourse = currentCourse[0];

		let currentModule = currentCourse.modules.filter(
			(module) => module.id === this.state.activeModule,
		);
		currentModule = currentModule[0];

		const state = {
			course: currentCourse,
			module: currentModule,
		};

		return (
			<Container>
				<Component
					{...pageProps}
					state={state}
					updateState={this.updateState}
					data={mocks}
				/>
			</Container>
		);
	}
}
