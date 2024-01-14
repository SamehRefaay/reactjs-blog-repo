import React from 'react';

const Footer = () => {
	const today = new Date();
	return (
		<footer>
			<div className="container">
				<p>copyright &copy; {today.getFullYear()}</p>
			</div>
		</footer>
	);
};

export default Footer;
