import React, { Component } from 'react';
import Router from 'next/router';

import Button from '../../components/atoms/Button';

import Card from '../../components/molecules/Card';

import ModuleContainer from '../../components/organisms/ModuleView';
import ModuleSelector from '../../components/organisms/ModuleSelector';

import Main from '../../components/templates/Main';
import Jumbotron from '../../components/templates/Jumbotron';

export default class Modules extends Component {
	render() {
		const { data, state, updateState } = this.props;
		const { course, module } = state;

		const { title, subtitle, description } = course;

		return (
			<div id="page--course">
				<Main updateState={updateState} user={data.user} state={state}>
					<Jumbotron
						title={title}
						subtitle={subtitle}
						description={description}>
						<div className="card-container">
							{course.modules.map(({ id, modules, ...props }) => (
								<Card
									{...props}
									active={id === module.id}
									ActionButtons={() => (
										<div className="button-group">
											<Button
												onClick={() =>
													updateState('activeModule', id, () =>
														Router.push('/module/'),
													)}
												color={id === module.id ? 'success' : 'primary'}
												disabled={id > module.id}>
												{/* // TODO: start, resume, etc? */}
												View Module
											</Button>
										</div>
									)}
									updateState={updateState}
									key={id}
								/>
							))}
						</div>
					</Jumbotron>
				</Main>
			</div>
		);
	}
}
