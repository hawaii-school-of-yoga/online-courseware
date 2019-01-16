import React, { Component } from 'react';

import Main from '../../components/templates/Main';

export default class Modules extends Component {
	render() {
		const { data, state, updateState } = this.props;

		return (
			<div id="page--profile">
				<Main updateState={updateState} user={data.user} state={state}>
					Hello, world!
				</Main>
			</div>
		);
	}
}
