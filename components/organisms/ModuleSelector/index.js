import React, { Component } from 'react';
import Button from '../../atoms/Button';

import './moduleSelector.scss';

export default class ModuleSelector extends Component {
	render() {
		const { course, module, updateState } = this.props;

		return (
			<div className="sidebar">
				<h2>Modules</h2>
				<ul>
					{course.modules.map(({ id, title }) => (
						<li key={id}>
							<Button
								outline
								size="sm"
								onClick={() => updateState('activeModule', id)}
								color={id === module.id ? 'primary' : 'secondary'}
							>
								{title}
							</Button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
