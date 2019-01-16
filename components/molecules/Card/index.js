import React from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
} from 'reactstrap';

import './card.scss';

import { trimAndAppend } from '../../../helpers/strings';

export default ({
	id,
	thumbnail,
	title,
	subtitle,
	description,
	additional,
	ActionButtons,
	active,
}) => {
	return (
		<Card className={active ? 'active' : ''}>
			<CardImg top width="100%" src={thumbnail} alt="Card image cap" />
			<CardBody>
				<CardTitle>{trimAndAppend(title, 24, '')}</CardTitle>
				<CardSubtitle>{subtitle}</CardSubtitle>
				<CardText>{trimAndAppend(description, 180, '...')}</CardText>
				<CardText>{additional}</CardText>
				<ActionButtons />
			</CardBody>
		</Card>
	);
};
