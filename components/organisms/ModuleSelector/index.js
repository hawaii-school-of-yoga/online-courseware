import React, { Component } from 'react';
import Button from '../../atoms/Button';
import styles from '../../_css';

import './moduleSelector.scss';

export default class ModuleSelector extends Component {
	render() {
		const { course, module, updateState } = this.props;

		return (
			<div className="sidebar">
				<h2>Course Modules</h2>
				<ul>
					{course.modules.map(({ moduleId, id, title }) => (
						<li key={id}>
							<Button
								style={styles.button.sidebar}
								outline
								size="sm"
								onClick={() => updateState('activeModule', id)}
								color={id === module.id ? 'primary' : 'secondary'}
								disabled={id !== module.id}>
								{moduleId} - {title}
							</Button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
