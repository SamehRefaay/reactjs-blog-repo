import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
	return (
		<main className="missing">
			<div className="container">
				<h1>Page Not Found</h1>
				<p>Well, that's disappointing.</p>
				<p>
					<Link to="/">
						Visit Our <span style={{ color: 'blue' }}>Homepage</span>
					</Link>
				</p>
			</div>
		</main>
	);
};

export default Missing;
