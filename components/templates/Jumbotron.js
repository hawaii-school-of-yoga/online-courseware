export default ({ title, subtitle, description, children }) => (
	<div className="jumbotron">
		<h1>{title}</h1>
		{subtitle && <h2>{subtitle}</h2>}
		<p className="lead">{description}</p>
		{children}
	</div>
);
