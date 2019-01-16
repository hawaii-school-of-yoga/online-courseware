import React, { Component } from 'react';
import Router from 'next/router';

import styles from '../components/_css';

import Button from '../components/atoms/Button';
import Card from '../components/molecules/Card';

import Main from '../components/templates/Main';
import Jumbotron from '../components/templates/Jumbotron';
import SignupWizard from '../components/organisms/SignupWizard';

export default class Module extends Component {
	renderMain = (data, state, updateState) => {
		const { user, courses } = data;
		const { track } = state;

		let PAGE = '';
		let COMPONENT = '';

		if (track) {
			PAGE = 'index';
			COMPONENT = (
				<Main state={state} user={user} updateState={updateState}>
					<Jumbotron
						title="Hawaii School of Yoga Online Course Portal"
						description="Hawaii School of Yoga now offers quality online courseware for you to take anywhere with you that you have a device. Access to a beautiful of blend of ancient and modern yogic and tantric teachings including Spiritual Teachings, History, Philosophy, Hinduism and the Indian Spiritual Traditions Sanskrit, Mantra, Ayurveda, Kundalini Studies, and Tantra has never been more accessible. Check out our course catalog below.">
						<h2>Course Catalog</h2>
						<hr className="primary" />
						<div className="card-container">
							{courses.map(({ id, modules, ...props }) => (
								<Card
									ActionButtons={() => (
										<p className="button-group">
											<Button
												onClick={() => {
													updateState('loading', true);
													updateState('activeCourse', id, () => {
														Router.push('/module');
														updateState('loading', false);
													});
												}}
												color="success">
												Get Started
											</Button>
											<Button
												onClick={() => {
													updateState('loading', true);
													updateState('activeCourse', id, () => {
														Router.push('/course');
														updateState('loading', false);
													});
												}}
												outline
												color="primary">
												Information
											</Button>
										</p>
									)}
									updateState={updateState}
									key={id}
									additional={<span>Modules: {modules.length}</span>}
									{...props}
								/>
							))}
						</div>
					</Jumbotron>
				</Main>
			);
		} else {
			PAGE = 'signup';
			COMPONENT = <SignupWizard updateState={this.props.updateState} />;
		}

		return <div id={`page--${PAGE}`}>{COMPONENT}</div>;
	};

	render() {
		const { data, state, updateState } = this.props;
		return this.renderMain(data, state, updateState);
	}
}
