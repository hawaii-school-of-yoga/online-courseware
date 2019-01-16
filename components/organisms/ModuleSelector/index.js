import React, { Component } from 'react';

import Button from '../../atoms/Button';
import Status from '../../atoms/Status';

import ProgressBar from '../../molecules/ProgressBar';
import styles from '../../_css';

import './moduleSelector.scss';

export default class ModuleSelector extends Component {
	render() {
		const { course, module, updateState } = this.props;

		const courseProgressInt = parseInt(module.id / course.modules.length);

		return (
			<div className="sidebar">
				<ProgressBar percent={courseProgressInt} />

				<div className="module-list">
					{course.modules.map(({ moduleId, id, title }) => {
						// TODO: calculate percentage of completion based on data upgrades...
						const percent = module.id === id ? 1 : 0;

						return (
							<div className="module" key={id}>
								<Button
									style={styles.button.sidebar}
									size="sm"
									onClick={() =>
										module.id !== id && updateState('activeModule', id)}
									color={id === module.id ? 'success' : 'secondary'}
									disabled={id !== module.id}>
									<div className="module--text">
										<Status percentage={percent} />
										<span>
											{moduleId} - {title}
										</span>
									</div>
								</Button>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
