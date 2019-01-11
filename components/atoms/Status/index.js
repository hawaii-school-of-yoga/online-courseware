import './status.scss';

export default function({ percentage }) {
	let icon = '';

	console.log(percentage);
	if (percentage <= 0) {
		icon = 'fa-circle';
	} else if (percentage > 0 && percentage < 100) {
		icon = 'fa-ellipsis-h';
	} else {
		icon = 'fa-check-circle';
	}

	return <i class={`fas ${icon}`} />;
}
