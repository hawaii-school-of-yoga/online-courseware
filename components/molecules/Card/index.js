import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default ({ id, thumbnail, title, subtitle, text, ActionButtons }) => {
	return (
		<div>
			<Card>
				<CardImg top width="100%" src={thumbnail} alt="Card image cap" />
				<CardBody>
					<CardTitle>{title}</CardTitle>
					<CardSubtitle>{subtitle}</CardSubtitle>
					<CardText>{text}</CardText>
					<ActionButtons />
				</CardBody>
			</Card>
		</div>
	);
};
