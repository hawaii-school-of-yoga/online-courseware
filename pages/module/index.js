import React, { Component } from 'react';

import ModuleContainer from '../../components/organisms/ModuleView';
import ModuleSelector from '../../components/organisms/ModuleSelector';

import Main from '../../components/templates/Main';

import './module.scss';

export default class Modules extends Component {
	render() {
		const { data, state, updateState } = this.props;
		const { course, module } = state;

		return (
			<div id="page--modules">
				<Main updateState={updateState} user={data.user} state={state}>
					<ModuleSelector
						updateState={updateState}
						course={course}
						module={module}
					/>
					<ModuleContainer module={module} />
				</Main>
			</div>
		);
	}
}
