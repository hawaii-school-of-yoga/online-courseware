import { Progress } from 'reactstrap';

export default () => (
	<div className="course-progress">
		<h3>Course Progress</h3>
		<div className="progress-bar-container">
			<span>{courseProgressInt}%</span>
			<Progress />
		</div>
	</div>
);
