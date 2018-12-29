import React, { Component } from 'react';
import Main from '../../components/templates/Main';

import ModuleContainer from '../../components/organisms/ModuleView';
import ModuleSelector from '../../components/organisms/ModuleSelector';

export default class Modules extends Component {
	render() {
		const { data, state, updateState } = this.props;
		const { course, module } = state;

		return (
			<div id="page--course">
				<Main updateState={updateState} user={data.user} state={state}>
					<div>Hello, world. I'm a course page!</div>
				</Main>
			</div>
		);
	}
}
