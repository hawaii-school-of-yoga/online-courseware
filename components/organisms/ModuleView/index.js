import { Component } from 'react';
import Video from '../../atoms/Video';
import Button from '../../atoms/Button';

import './moduleView.scss';

export default class ModuleView extends Component {
	render() {
		const { module } = this.props;
		console.log(module);

		return (
			<div className="courseware">
				<div className="module--container">
					<div className="module--info">
						<h2>{module.title}</h2>
						<p>{module.description}</p>
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
			</div>
		);
	}
}
