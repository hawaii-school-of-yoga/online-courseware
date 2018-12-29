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

	updateState = (key, value) => this.setState({ [key]: value });

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Component {...pageProps} updateState={this.updateState} state={this.state} data={mockData} />
			</Container>
		);
	}
}
