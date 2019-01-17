import { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Video from '../../atoms/Video';
import Button from '../../atoms/Button';
import ReadMore from '../../atoms/ReadMore';

import './moduleView.scss';

export default class ModuleView extends Component {
	state = {
		quizAttempted: false,
	};

	render() {
		const { module } = this.props;
		const { quizAttempted } = this.state;

		return (
			<div className="module--container">
				<div className="module--info">
					<h2>{module.title}</h2>
					<hr className="primary" />
					<div className="documents">
						<h3>Important Documents</h3>
						<ul>
							{module.docs.map(({ path, title }) => (
								<li className="document">
									<a href={path} target="_blank">
										{title}
									</a>
								</li>
							))}
						</ul>{' '}
					</div>
					<div className="about">
						<h3>About This Module</h3>
						<p>
							<ReadMore>{module.description}</ReadMore>
						</p>
					</div>
				</div>

				<div className="video-container">
					<h3>Module Video</h3>
					<Video url={module.video} />
					<div className="module--video-controls">
						<div className="button-group">
							<Button color="primary">
								<i className="fas fa-sticky-note" /> Take Notes
							</Button>
							{module.quiz && !quizAttempted ? (
								<a
									onClick={() => this.setState({ quizAttempted: true })}
									target="_blank"
									href={module.quiz}
									className="btn btn-warning">
									<i className="fas fa-sticky-note" /> Take Quiz
								</a>
							) : (
								<Button disabled>
									<i className="fas fa-sticky-note" /> Next Video
								</Button>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
