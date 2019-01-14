import React from 'react';

import App, { Container } from 'next/app';
import Router from 'next/router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import mocks from '../mocks';

import Loading from '../components/atoms/Loading';

import '../styles/index.scss';
import '../styles/bootstrap.scss';

const defaultState = {
	user: 0,
	activeCourse: 1,
	activeModule: 1,
	loading: true,
};

Router.events.on('routeChangeComplete', () => {
	window.scrollTo(0, 0);
});

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

	updateState = (key, value, customCb = null) => {
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
		const { loading, user } = this.state;

		if (loading) {
			return <Loading />;
		}

		const { activeCourse, activeModule } = this.state;
		const { Component, pageProps } = this.props;

		let currentCourse = mocks.courses.filter(
			(course) => course.id === activeCourse,
		);
		currentCourse = currentCourse[0];

		let currentModule = currentCourse.modules.filter(
			(module) => module.id === activeModule,
		);
		currentModule = currentModule[0];

		const state = {
			course: currentCourse,
			module: currentModule,
			user,
		};

		return (
			<Container>
				<TransitionGroup>
					<CSSTransition
						key={this.props.router.route}
						classNames="fade"
						timeout={2000}>
						<Component
							{...pageProps}
							state={state}
							updateState={this.updateState}
							data={mocks}
						/>
					</CSSTransition>
				</TransitionGroup>
			</Container>
		);
	}
}
