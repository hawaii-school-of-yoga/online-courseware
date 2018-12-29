import React, { Component } from 'react';
import './jumbotron.scss';

export default class Jumbotron extends Component {
	render() {
		const { title, subtitle, description, children } = this.props;
		return (
			<div className="jumbotron">
				<h1>{title}</h1>
				{subtitle && <h2>{subtitle}</h2>}
				<p className="lead">{description}</p>
				{children}
			</div>
		);
	}
}
