import React, { Component } from 'react';
import Main from '../../components/templates/Main';

import ModuleContainer from '../../components/organisms/ModuleView';
import ModuleSelector from '../../components/organisms/ModuleSelector';

import './index.css';

export default class Modules extends Component {
	render() {
		const { data, state, updateState } = this.props;

		return (
			<div id="page--modules">
				<Main updateState={updateState} user={data.user} state={state}>
					<ModuleSelector updateState={updateState} course={state.course} module={state.module} />
					<ModuleContainer module={state.module} />
				</Main>
			</div>
		);
	}
}
