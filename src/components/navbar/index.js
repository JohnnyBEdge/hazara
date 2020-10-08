import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, 
    NavbarContainer, 
    NavLogo, MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to='/'>
                    logo
                </NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>

                <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Item1</NavLinks>
                            <NavLinks to="about2">Item2</NavLinks>
                            <NavLinks to="about3">Item3</NavLinks>
                            <NavLinks to="about4">Item4</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
