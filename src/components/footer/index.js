import React from 'react';
import SocialMediaLinks from '../../components/SocialMediaLinks'
import {
    FooterWrapper, SectionTitle, Logo, ListsContainer,
    ListTitle, List, ResourceContainer, ListContainer,
    ListItem,PageLink, Signature, RouteLink, ItemLink
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
                            <ListItem>UtahHazaraAssociation@gmail.com</ListItem>
                            <ListItem>
                                <RouteLink to="/contact">Contact Form</RouteLink>
                            </ListItem>
                            <ListItem>
                                <SocialMediaLinks/>
                            </ListItem>
                    </List>

                    <ResourceContainer>
                        <ListTitle>Additional Resources</ListTitle>
                        <ListContainer>
                            <List>
                                <ListItem>
                                    <ItemLink href="https://www.immigrationadvocates.org/nonprofit/legaldirectory/search?state=UT">National Immigration Legal Services Directory</ItemLink>
                                </ListItem>
                                <ListItem>
                                    <ItemLink href="http://www.immigrantlegalservices.org/">Immigrant Legal Services</ItemLink>
                                </ListItem>
                                <ListItem>
                                    <ItemLink href="https://www.informedimmigrant.com/">Informed Immigrant</ItemLink>
                                </ListItem>
                            </List>
                            <List>
                                <ListItem>
                                    <ItemLink href="https://jobs.utah.gov/refugee/">Utah Workforce Services</ItemLink>
                                </ListItem>
                                <ListItem>
                                    <ItemLink href="https://minorityrights.org/minorities/hazaras/">Minority Rights Group International</ItemLink>
                                </ListItem>


                            </List>

                        </ListContainer>
                    </ResourceContainer>
                    
                    <List>
                        <ListTitle>Sections</ListTitle>
                            <PageLink to="home">Home</PageLink>
                            <PageLink to="events">Events</PageLink>
                            <PageLink to="donate">Donate</PageLink>
                            <ListItem>
                                    <RouteLink to="/admin/events">
                                        Admin
                                    </RouteLink>
                            </ListItem>
                    </List>
                </ListsContainer>

                <Signature>c 2020 John Martin</Signature>
            </FooterWrapper>
        </>
    )
}

export default Footer
