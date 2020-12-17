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
                    <SidebarLink to="who" onClick={props.toggleMenu}>
                        Who We Are
                    </SidebarLink>
                    <SidebarLink to="what" onClick={props.toggleMenu}>
                        What We Do
                    </SidebarLink>
                    <SidebarLink to="how" onClick={props.toggleMenu}>
                        How To Help
                    </SidebarLink>
                    <SidebarLinkR to="/contact" onClick={props.toggleMenu}>
                        Contact Us
                    </SidebarLinkR>
                    <SidebarLink to="events" onClick={props.toggleMenu}>
                        Events
                    </SidebarLink>
                    <SidebarLink to="donate" onClick={props.toggleMenu}>
                        Donate
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
