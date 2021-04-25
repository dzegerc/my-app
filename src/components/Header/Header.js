import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/logo.png';

import { Link } from 'react-router-dom';

const links = {
    home: 'Home',
    events: 'Events',
}




const Header = () => {
    return (
        <header className="Header">
        <div className="Header-Inner">
           <Link to="/Home" className="Header-LogoContainer">
               <img src={Logo}  className="Header-Logo"/>
           </Link>
            <div className="Header-NavHamburger">
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                </div>
            <nav className="Header-Nav">
                <Link  className="Header-NavItem" to="/Home">{links.home}</Link>
                <Link className="Header-NavItem"  to="/Events" >{links.events}</Link>
            </nav>
        </div>
    </header>
    );
}
export default Header;