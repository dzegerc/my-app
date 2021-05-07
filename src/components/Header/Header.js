import React from 'react';
import { 
    HeaderWrapper,
    Inner,
    LogoContainer,
    NavHamburger,
    NavHamburgerLine,
    Logo,
    Nav,
    NavItem
} from './HeaderStyle';
import LogoImage from '../../assets/images/logo.png';

const Header = () => {

    return (
        <HeaderWrapper>
        <Inner>
            <LogoContainer to="/">
                <Logo src={LogoImage} alt="FOI logo"/>
            </LogoContainer>
            <NavHamburger >
                <NavHamburgerLine />
                <NavHamburgerLine/>
                <NavHamburgerLine/>
            </NavHamburger>
           <Nav>
               <NavItem exact to="/">Home</NavItem>
               <NavItem to="/events">Events</NavItem>
               <NavItem to="/login">Login</NavItem>
               <NavItem to="/register">Register</NavItem>
           </Nav> 
        </Inner>
    </HeaderWrapper>
 );
}
export default Header;