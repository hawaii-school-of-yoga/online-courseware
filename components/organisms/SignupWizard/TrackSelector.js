import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class TrackSelector extends Component {
	render() {
		return (
			<div>
				<Button>Instructor</Button>
				<Button>Student</Button>
			</div>
		);
	}
}
