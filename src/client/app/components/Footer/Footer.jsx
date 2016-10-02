import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
	render () {
		return (
				<footer className='footer-container'>
					<Link to={'/about'} className='footer-item'>About</Link>
					<Link to={'/privacy-policy'} className='footer-item'>Privacy Policy</Link>
					<Link to={'/tos'} className='footer-item'>Terms of Service</Link>
					<Link to={'/feedback'} className='footer-item'>Feedback</Link>
				</footer>
			)
	}
}

export default Footer;