import React from 'react';
import {
    FooterWrapper,
    SectionTitle,
    Logo,
    ListsContainer,
    ListTitle,
    List,
    List2,
    ResourceContainer,
    ListContainer,
    ListItem,
    PageLink,
    Signature,
    AdminLink
} from './FooterElements';
import logo from '../../assets/images/logo-1.jpg'

const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <SectionTitle>Utah Hazara Association</SectionTitle>
                <AdminLink to="/admin/events">
                                        Admin
                                    </AdminLink>
                <ListsContainer>
                    <Logo src={logo}/>
                    
                    <List>
                        <ListTitle>Contact</ListTitle>
                            <ListItem>123-456-7890</ListItem>
                            <ListItem>email@email.com</ListItem>
                            <ListItem>Social Media Links</ListItem>
                    </List>

                    <ResourceContainer>
                        <ListTitle>Additional Resources</ListTitle>
                        <ListContainer>
                            <List>
                                <ListItem>resource.com</ListItem>
                                <ListItem>resource.com</ListItem>
                                <ListItem>resource.com</ListItem>
                            </List>
                            <List>
                                <ListItem>resource.com</ListItem>
                                <ListItem>resource.com</ListItem>
                                    {/* <AdminLink to="/admin/events">
                                        Admin
                                    </AdminLink> */}
                            </List>

                        </ListContainer>
                    </ResourceContainer>
                    
                    <List>
                        <ListTitle>Sections</ListTitle>
                            <PageLink to="/">Home</PageLink>
                            <PageLink to="events">Events</PageLink>
                            <PageLink to="donate">Donate</PageLink>
                    </List>
                </ListsContainer>

                <Signature href="https://martin-jr.com">c 2020 John Martin</Signature>
            </FooterWrapper>
        </>
    )
}

export default Footer
