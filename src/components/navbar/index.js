import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, 
    NavbarContainer, 
    NavLogo, MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavLink2,
    SiteLogo} from './NavbarElements';
import logo from '../../assets/logo-1.jpg'


const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavLogo to='/'>
                    <SiteLogo src={logo}/>
                </NavLogo>
                <MobileIcon onClick={props.toggleMenu}>
                    <FaBars/>
                </MobileIcon>

                <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="whoWeAre">Who We Are</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="whatWeDo">What We Do</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="howToHelp">How to Help</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLink2 to="/contact">Contact Us</NavLink2>
                        </NavItem>
                        <NavItem>
                            <NavLink2 to="/events">Events</NavLink2>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
