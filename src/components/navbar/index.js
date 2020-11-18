import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, NavbarContainer, NavLogo, MobileIcon, 
    NavMenu, NavItem, NavLink1, NavLink2, DonateBtn
} from './NavbarElements';
import logo from '../../assets/logo-1.jpg'


const Navbar = (props) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNavbar = () => window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
    const scrollHome = () => scroll.scrollToTop();

    return (
        <>
            <Nav scrollNav={scrollNav}>

                <NavbarContainer>

                    <NavLogo src={logo} onClick={scrollHome}/>

                    <MobileIcon onClick={props.toggleMenu}>
                        <FaBars/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLink1 
                                to='who'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Who We Are</NavLink1>
                        </NavItem>
                        <NavItem>
                            <NavLink1 
                                to="what"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >What We Do</NavLink1>
                        </NavItem>
                        <NavItem>
                            <NavLink1 
                                to="how"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}    
                            >How To Help</NavLink1>
                        </NavItem>
                        <NavItem>
                            <NavLink2 
                                to="/contact"
                            >Contact Us</NavLink2>
                        </NavItem>
                        <NavItem>
                            <NavLink2 
                                to="/events"  
                            >Events</NavLink2>
                        </NavItem>
                    </NavMenu>
                    <DonateBtn>Donate</DonateBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
