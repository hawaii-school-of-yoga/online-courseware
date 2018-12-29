import React from 'react';
import App, { Container } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockState from '../prototype-mocks.json';

import '../styles/index.css';

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	selectCourse = () => {};
	selectModuel = () => {};

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Component {...pageProps} state={mockState} />
			</Container>
		);
	}
}
