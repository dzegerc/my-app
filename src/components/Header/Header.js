import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header className="Header">
        <div className="Header-Inner">
           <a href="index.html" className="Header-LogoContainer">
               <img src={Logo}  className="Header-Logo"/>
            </a>
            <div className="Header-NavHamburger">
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                </div>
            <nav className="Header-Nav">
                <a href="index.html" className="Header-NavItem">Home</a>
                <a href="events.html" className="Header-NavItem">Events</a>
            </nav>

        </div>

    </header>
    );
}
export default Header;