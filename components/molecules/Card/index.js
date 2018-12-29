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
}) => {
	return (
		<Card>
			<CardImg top width="100%" src={thumbnail} alt="Card image cap" />
			<CardBody>
				<CardTitle>{title}</CardTitle>
				<CardSubtitle>{subtitle}</CardSubtitle>
				<CardText>
					<p>{trimAndAppend(description, 180, '...')}</p>
					<span>{additional}</span>
				</CardText>
				<ActionButtons />
			</CardBody>
		</Card>
	);
};
