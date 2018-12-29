import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import './video.css';

export default class VideoPlayer extends Component {
	ready = () => {
		// TODO:
	};

	start = () => {
		// TODO:
	};

	play = () => {
		// TODO:
	};

	pause = () => {
		// TODO:
	};

	progress = () => {
		// TODO:
	};

	end = () => {
		// TODO:
	};

	error = () => {
		// TODO:
	};

	render() {
		const { url } = this.props;
		return (
			<div className="player-wrapper">
				<ReactPlayer
					url={url}
					onError={this.error}
					onPause={this.pause}
					onReady={this.ready}
					onStart={this.start}
					onPlay={this.play}
					onEnded={this.end}
					width="100%"
					height="100%"
					className="react-player"
				/>
			</div>
		);
	}
}
