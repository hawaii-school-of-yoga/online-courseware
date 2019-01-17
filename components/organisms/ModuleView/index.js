import { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Video from '../../atoms/Video';
import Button from '../../atoms/Button';
import ReadMore from '../../atoms/ReadMore';

import './moduleView.scss';

export default class ModuleView extends Component {
	render() {
		const { module } = this.props;

		return (
			<div className="module--container">
				<div className="module--info">
					<h2>{module.title}</h2>
					<hr className="primary" />
					<p>
						<ReadMore>{module.description}</ReadMore>
					</p>
				</div>

				<Video url={module.video} />
				<div className="module--video-controls">
					<div className="button-group">
						<Button color="primary">
							<i className="fas fa-sticky-note" /> Take Notes
						</Button>
						<Button disabled>
							<i className="fas fa-sticky-note" /> Next Video
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
