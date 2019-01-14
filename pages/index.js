import React, { Component } from 'react';
import Router from 'next/router';

import styles from '../components/_css';

import Button from '../components/atoms/Button';
import Card from '../components/molecules/Card';

import Main from '../components/templates/Main';
import Jumbotron from '../components/templates/Jumbotron';
import SignupWizard from '../components/organisms/SignupWizard';

export default class Module extends Component {
	renderMain = (user) => {
		if (user) {
			return (
				<Main state={state} user={data.user}>
					<Jumbotron
						title="Hawaii School of Yoga Online Course Portal"
						description="Hawaii School of Yoga now offers quality online courseware for you to take anywhere with you that you have a device. Access to a beautiful of blend of ancient and modern yogic and tantric teachings including Spiritual Teachings, History, Philosophy, Hinduism and the Indian Spiritual Traditions Sanskrit, Mantra, Ayurveda, Kundalini Studies, and Tantra has never been more accessible. Check out our course catalog below.">
						<h2>Course Catalog</h2>
						<hr class="primary" />
						<div className="card-container">
							{data.courses.map(({ id, modules, ...props }) => (
								<Card
									ActionButtons={() => (
										<div className="button-group">
											<Button
												onClick={() =>
													updateState('activeCourse', id, () =>
														Router.push('/module'),
													)}
												color="success">
												Get Started
											</Button>
											<Button
												onClick={() =>
													updateState('activeCourse', id, () =>
														Router.push('/course'),
													)}
												outline
												color="primary">
												Information
											</Button>
										</div>
									)}
									updateState={updateState}
									key={id}
									additional={
										<div>
											<span>Modules: {modules.length}</span>
										</div>
									}
									{...props}
								/>
							))}
						</div>
					</Jumbotron>
				</Main>
			);
		} else return <SignupWizard />;
	};
	render() {
		const { data, state, updateState } = this.props;

		const MAIN = this.renderMain(state.user);

		return <div id="page--index">{MAIN}</div>;
	}
}
