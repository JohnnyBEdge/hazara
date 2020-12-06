import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, NavbarContainer, NavLogo, MobileIcon, 
    NavMenu, NavItem, NavLink1, NavLink2, DonateBtn
} from './NavbarElements';
import logo from '../../assets/images/logo-1.jpg'


const Navbar = (props) => {
    const [scrollnav, setScrollNav] = useState(false);

    const changeNavbar = () => window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
    const scrollHome = () => scroll.scrollToTop();

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar)
    }, [])

    return (
        <>
            <Nav scrollnav={scrollnav}>

                <NavbarContainer>

                    <NavLogo src={logo} onClick={scrollHome}/>

                    <MobileIcon onClick={props.toggleMenu} scrollnav={scrollnav}>
                        <FaBars/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLink1 
                                to="who"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                scrollnav={scrollnav ? 1 : 0}
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
                                scrollnav={scrollnav ? 1 : 0}
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
                                scrollnav={scrollnav ? 1 : 0}
                            >How To Help</NavLink1>
                        </NavItem>
                        <NavItem>
                            <NavLink1 
                                to="events"  
                                scrollnav={scrollnav ? 1 : 0}
                            >Events</NavLink1>
                        </NavItem>
                        <NavItem>
                            <NavLink2 
                                to="/contact"
                                scrollnav={scrollnav ? 1 : 0}
                            >Contact Us</NavLink2>
                        </NavItem>

                    </NavMenu>
                    {/* <DonateBtn to="donate">Donate</DonateBtn> */}
                    <DonateBtn onClick={props.toggleDonate}>Donate</DonateBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
