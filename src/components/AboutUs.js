import React from 'react';
import aboutUs from '../../src/images/aboutUs.jpeg';

const AboutUs = () => {
	return (
		<main className="about-us">
			<div className="container">
				<div className="image-container">
					<img src={aboutUs} alt="about us" />
				</div>
				<div className="text">
					<h2>About Us</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
						earum laudantium nam vel at. Non laborum ipsa eligendi, delectus
						iste nostrum accusantium perspiciatis soluta aliquam, suscipit
						voluptates! Blanditiis, consequatur iure!
					</p>
				</div>
			</div>
		</main>
	);
};

export default AboutUs;
