import React, { Component } from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';

import Button from '../../atoms/Button';
import Status from '../../atoms/Status';

import ProgressBar from '../../molecules/ProgressBar';
import styles from '../../_css';

import './moduleSelector.scss';

export default class ModuleSelector extends Component {
	state = {
		toggle: true,
	};

	componentWillMount() {
		this.setState({ MOBILE: window.innerWidth < 768 });
	}

	render() {
		const { course, module, updateState } = this.props;
		const { toggle, MOBILE } = this.state;

		const courseProgressInt = parseInt(module.id / course.modules.length);

		const TOGGLE = toggle ? 'show' : 'hide';

		return (
			<div className="sidebar">
				<ListGroup>
					<ListGroupItem className="title-bar">
						<h2>{course.title}</h2>
						<hr className="primary" />
					</ListGroupItem>

					<ListGroupItem>
						<ProgressBar percent={courseProgressInt} />
					</ListGroupItem>

					<ListGroupItem>
						<div className="modules-container">
							<div className="modules-title">
								<h3>Modules</h3>
								{MOBILE && (
									<Button
										color="link"
										onClick={() => this.setState({ toggle: !toggle })}>
										{TOGGLE}
									</Button>
								)}
							</div>
							{toggle && (
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
							)}
						</div>
					</ListGroupItem>
				</ListGroup>
			</div>
		);
	}
}
