import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
	render () {
		return (
				<footer>
					<div className="row">
						<Link to={'/about'} className='footer-item large-3 medium-3 columns'>About</Link>
						<Link to={'/privacy-policy'} className='footer-item large-3 medium-3 columns'>Privacy Policy</Link>
						<Link to={'/tos'} className='footer-item large-3 medium-3 columns'>Terms of Service</Link>
						<Link to={'/feedback'} className='footer-item large-3 medium-3 columns'>Feedback</Link>
					</div>
				</footer>
			)
	}
}

export default Footer;