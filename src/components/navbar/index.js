import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, 
    NavbarContainer, 
    NavLogo, MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks} from './NavbarElements'

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavLogo to='/'>
                    logo
                </NavLogo>
                <MobileIcon onClick={props.toggleMenu}>
                    <FaBars/>
                </MobileIcon>

                <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="#whoWeAre">Who We Are</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="#whatWeDo">What We Do</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="#howToHelp">How to Help</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="events">Events</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
