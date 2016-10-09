import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
	render () {
		return (
			<div className="about-container row">
			<div className="page-section large-6 large-centered">
				<h2>About Us</h2>
				<p>
					Remote collaboration is still very much a big challenge for many teams.
					We want to be able to virtualize a team in different geography to replicate
					the experience of being in the same room together. We are a team of veteran
					entrepreneurs who have had successes building products. We have collectively
					started 4 companies, with 2 acquired and 1 taken public. We are passionate 
					about simple, elegant modes of communication and the impact they can have.
				</p>
			</div>
			</div>
			)
	}
}

export default About;