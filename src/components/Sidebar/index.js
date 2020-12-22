import React from 'react';
import {
    SidebarContainer, SidebarLinkR, Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink } from './SidebarElements'

const Sidebar = (props) => {
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggleMenu}>
            <Icon isOpen={props.isOpen}>
               <CloseIcon /> 
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                        to="who" 
                        onClick={props.toggleMenu} 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                        Who We Are
                    </SidebarLink>
                    <SidebarLink 
                        to="what" 
                        onClick={props.toggleMenu} 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                        What We Do
                    </SidebarLink>
                    <SidebarLink 
                        to="how" 
                        onClick={props.toggleMenu} 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        How To Help
                    </SidebarLink>
                    <SidebarLinkR 
                        to="/contact" 
                        onClick={props.toggleMenu}>
                        Contact Us
                    </SidebarLinkR>
                    <SidebarLink 
                        to="events" 
                        onClick={props.toggleMenu} 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                        Events
                    </SidebarLink>
                    <SidebarLink 
                        to="donate" 
                        onClick={props.toggleMenu} 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                        Donate
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
