import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = ({icon, title}) => {
    return (
    <nav className='navbar bg-primary'>
        <h1>
            <i className={icon} style={{paddingRight: '16px'}} /> {title}
        </h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    </nav>
    );
}

    // Sets default values
    Navbar.defaultProps ={
        title: 'Github Finder',
        icon: 'fab fa-github'
      };

      // defines what kind of data should be used (Will stil run but will give a console error if wrong)
      Navbar.propTypes = {
          title: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired
      };

export default Navbar;