import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink } from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
               <CloseIcon /> 
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="#whoWeAre">
                        Who We Are
                    </SidebarLink>
                    <SidebarLink to="#whatWeDo">
                        What We Do
                    </SidebarLink>
                    <SidebarLink to="#howToHelp">
                        How To Help
                    </SidebarLink>
                    <SidebarLink to="contact">
                        Contact Us
                    </SidebarLink>
                    <SidebarLink to="events">
                        Events
                    </SidebarLink>
                    <SidebarLink to="donate">
                        Donate
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
