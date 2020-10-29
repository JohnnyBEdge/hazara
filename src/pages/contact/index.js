import React from 'react';
import logo from '../../assets/logo-1.jpg'
import {
    PageContainer,
    FormContainer,
    PageHeader,
    PageSubHeader,
    InfoSection,
    FormSection,
    InfoHeader,
    InfoSubHeader,
    ContactList,
    ListItem,
    MobileIcon,
    SocialList,
    FormLabel,
    FormInput,
    TextAreaInput,
    FormHolder,
    SubmitBtn,
    Logo
} from './ContactElements';
import {
    FaPhone, 
    FaMapPin, 
    FaEnvelope, 
    FaFacebook, 
    FaTwitter, 
    FaInstagram} from 'react-icons/fa';
import { Input } from '@material-ui/core';


const Contact = () => {
    return (
        <PageContainer>
            <PageHeader>Contact Us</PageHeader>
            <PageSubHeader>Questions? Remarks? Want to know more? Send us a message!</PageSubHeader>
            <FormContainer>
                <InfoSection>
                    <InfoHeader>Contact Information</InfoHeader>
                    <InfoSubHeader>Fill out the form and someone from our team will reach out to you as soon as possible.</InfoSubHeader>
                    <ContactList>
                        <ListItem>
                            <MobileIcon>
                                <FaPhone/> 123-456-7890
                            </MobileIcon>
                        </ListItem>
                        <ListItem>
                            <MobileIcon>
                                <FaEnvelope/> email@email.com
                            </MobileIcon>
                        </ListItem>
                        <ListItem>
                            <MobileIcon>
                                <FaMapPin/> 666 Elm St. Salt Lake City, UT
                            </MobileIcon>
                        </ListItem>
                    </ContactList>
                    <Logo src={logo}/>
                    <SocialList>
                        <ListItem>
                            <MobileIcon>
                                <FaFacebook/>
                            </MobileIcon>
                        </ListItem>
                        <ListItem>
                            <MobileIcon>
                                <FaInstagram/>
                            </MobileIcon>
                        </ListItem>
                        <ListItem>
                            <MobileIcon>
                                <FaTwitter/>
                            </MobileIcon>
                        </ListItem>
                    </SocialList>
                    
                </InfoSection>
                <FormHolder>
                    <FormSection>
                        <FormLabel for="fname">First Name
                            <FormInput type="text" name="fname"/>
                        </FormLabel>
                        <FormLabel for="lname">Last Name
                            <FormInput type="text" name="lname"/>
                        </FormLabel>
                    </FormSection>
                    <br/>
                    <FormSection>
                        <FormLabel for="phone">Phone Number
                            <FormInput type="tel" name="phone"/>
                        </FormLabel>
                        <FormLabel for="email">Email
                            <FormInput type="email" name="email"/>
                        </FormLabel>
                    </FormSection>
                    <FormSection>
                        <FormLabel for="message">Message
                            <TextAreaInput type="text" name="message">Leave your message here!</TextAreaInput>
                        </FormLabel>
                    </FormSection>
                    <FormSection>
                        <SubmitBtn>Send!</SubmitBtn>
                    </FormSection>
                    
                </FormHolder>

            </FormContainer>
        </PageContainer>
    )
}

export default Contact
