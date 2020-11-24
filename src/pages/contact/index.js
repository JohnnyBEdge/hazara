import React from 'react';
import logo from '../../assets/images/logo-1.jpg'
import {
    PageContainer, PageTitle, TitleSubText, ContactContainer,
    InfoSection, FormSection, InfoHeader,
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
    import Navbar from '../../components/navbar'



const Contact = () => {
    return (
        <>
            <PageContainer>
                <Navbar/>
                <PageTitle>Contact Us</PageTitle>
                <TitleSubText>Questions or concerns? Wish to speak with someone? Looking for volunteer opportunties? Fill out the form below and we''ll contact you ASAP!</TitleSubText>

                <ContactContainer>

                </ContactContainer>
            </PageContainer>
            

        </>
    )
}

export default Contact
