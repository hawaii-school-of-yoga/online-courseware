import React, { Component } from 'react';
import Main from '../../components/templates/Main';

import ModuleContainer from '../../components/organisms/ModuleView';
import ModuleSelector from '../../components/organisms/ModuleSelector';

export default class Modules extends Component {
	render() {
		const { data, state, updateState } = this.props;
		const { course, module } = state;

		return (
			<div id="page--modules">
				<Main updateState={updateState} user={data.user} state={state} />
			</div>
		);
	}
}
