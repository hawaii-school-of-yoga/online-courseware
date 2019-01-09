import React, { Component } from 'react';

import Button from '../../atoms/Button';
import ProgressBar from '../../molecules/ProgressBar';
import styles from '../../_css';

import './moduleSelector.scss';

export default class ModuleSelector extends Component {
	render() {
		const { course, module, updateState } = this.props;

		const courseProgressInt = parseInt(module.id / course.modules.length);

		return (
			<div className="sidebar">
				<h2>{course.title}</h2>
				<hr className="primary" />

				<ProgressBar />

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
