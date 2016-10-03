import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <Link to={'/contact'} className='nav-item'>Contact</Link>
        <Link to={'login'} className='nav-item'>Login</Link>
        <Link to={'/signup'} className='nav-item'>Sign up</Link>
      </nav>
      );
  }
}

export default Navigation;
