import React, { Component } from 'react';
import Video from '../components/Video';
import Header from '../components/Header';

export default class Index extends Component {
	render() {
		const { state } = this.props;

		return (
			<div>
				<Header course={state.course} user={state.user} />
				<div className="container">
					<Video url="www.youtube.com/watch?v=b5H3b_Hh0Lw" />
				</div>
			</div>
		);
	}
}
