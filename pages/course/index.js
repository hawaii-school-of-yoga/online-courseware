import React, { Component } from 'react';

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
									ActionButtons={() => (
										<div className="button-group">
											<Button
												onClick={() =>
													updateState('activeCourse', id, () =>
														Router.push('/module/'),
													)}
												color="primary">
												Start Module // TODO: start, resume, etc?
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
