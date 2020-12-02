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
    Signature,
    AdminLink
} from './FooterElements';
import logo from '../../assets/images/logo-1.jpg'

const Footer = () => {
    return (
        <>
            <FooterWrapper>
                <SectionTitle>Utah Hazara Association</SectionTitle>
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
                                <ListItem>
                                    <AdminLink to="/admin/events">
                                        Admin
                                        </AdminLink>
                                </ListItem>
                            </List>
                        </ListContainer>
                    </ResourceContainer>
                    
                    <List>
                        <ListTitle>Sections</ListTitle>
                            <ListItem>Home</ListItem>
                            <ListItem>Events</ListItem>
                            <ListItem>Donate</ListItem>
                    </List>
                </ListsContainer>

                <Signature href="https://martin-jr.com">c 2020 John Martin</Signature>
            </FooterWrapper>
        </>
    )
}

export default Footer
