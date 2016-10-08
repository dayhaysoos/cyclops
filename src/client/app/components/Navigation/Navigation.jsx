import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <div className="row">
          <Link to={'/home'} className='nav-item large-9 medium-9 columns'>Cyclops</Link>
          <Link to={'/contact'} className='nav-item large-1 medium-1 columns'>Contact</Link>
          <Link to={'login'} className='nav-item large-1 medium-1 columns'>Login</Link>
          <Link to={'/signup'} className='nav-item large-1 medium-1 columns'>Sign up</Link>
        </div>
      </nav>
      );
  }
}

export default Navigation;
