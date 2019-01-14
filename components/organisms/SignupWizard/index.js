import React, { Component } from 'react';

import SignupForm from './SignupForm';
import TrackSelector from './TrackSelector';

export default class SignupWizard extends Component {
	state = { step: 0 };

	setStep = (step) => this.setState({ step });

	render() {
		const { updateState } = this.props;
		const { step } = this.state;

		const sharedProps = { setStep: this.setStep };

		const steps = [
			<SignupForm {...sharedProps} />,
			<TrackSelector {...sharedProps} updateState={updateState} />,
		];

		return steps[step];
	}
}
