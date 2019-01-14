import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Router from 'next/router';

import './trackselector.scss';

export default class TrackSelector extends Component {
	handleTrackChoice = (track) => {
		this.props.updateState('track', track, () => this.props.setStep(0));
	};

	render() {
		return (
			<div className="track-selector-view">
				<div className="container">
					<div className="container small">
						<h1>Select Your Learning Track</h1>
						<hr className="primary" />
						<h2>
							Our content is specially curated with the needs of aspiring Yoga
							Instructors or the casual learner in mind. Please select the track
							that resonates with you. All modules count towards a Certificate,
							regardless of Track, and the Track one is on can be changed at any
							time.
						</h2>
						<div className="track-choices">
							<Button
								color="success"
								onClick={() => this.handleTrackChoice('instructor')}>
								<h3>Instructor</h3>
								<hr />
								<h4>Pursue Advanced Yoga Studies.</h4>
							</Button>
							<Button
								color="info"
								onClick={() => this.handleTrackChoice('student')}>
								<h3>Casual</h3>
								<hr />
								<h4>Learn at your own pace.</h4>
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
