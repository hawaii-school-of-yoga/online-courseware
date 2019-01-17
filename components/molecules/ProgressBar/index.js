import { Progress } from 'reactstrap';
import './progress.scss';

export default ({ percent }) => (
	<div className="course-progress">
		<h3>Progress</h3>
		<div className="progress-bar-container">
			<span>{percent}%</span>
			<Progress />
		</div>
	</div>
);
