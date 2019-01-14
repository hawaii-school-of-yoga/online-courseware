import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './signup.scss';

import SignupForm from './SignupForm';
import TrackSelector from './TrackSelector';

export default class SignupWizard extends Component {
	state = { step: 0 };

	setStep = (step) => this.setState('step', step);

	render() {
		const { updateState } = this.props;
		const { step } = this.state;

		const steps = [
			<SignupForm setStep={this.setStep} />,
			<TrackSelector setStep={this.setStep} />,
		];

		return (
			<TransitionGroup>
				<CSSTransition key={step} classNames="fade" timeout={2000}>
					{steps[step]}
				</CSSTransition>
			</TransitionGroup>
		);
	}
}
