import React from 'react';
import {
    SidebarContainer,
    Icon,
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
                    <SidebarLink to="#whoWeAre" onClick={props.toggleMenu}>
                        Who We Are
                    </SidebarLink>
                    <SidebarLink to="#whatWeDo" onClick={props.toggleMenu}>
                        What We Do
                    </SidebarLink>
                    <SidebarLink to="#howToHelp" onClick={props.toggleMenu}>
                        How To Help
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={props.toggleMenu}>
                        Contact Us
                    </SidebarLink>
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
