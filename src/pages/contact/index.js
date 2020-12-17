import React from 'react';
import logo from '../../assets/images/logo-1.jpg'
import {
    PageContainer, ImageContainer, ImageText, FormContainer,
    FormTitle, Form, ReturnHomeBtn,RtnBtnContainer,
    FormGroup, FormLabel, FormInput, Message, FormSection,
    TextAreaInput,SendMessageBtn, Icon, BtnContainer,
    SocialContainer
} from './ContactElements';
import {
    FaPhone, 
    FaMapPin, 
    FaEnvelope, 
    FaFacebook, 
    FaTwitter, 
    FaInstagram} from 'react-icons/fa';
import { preventDefault } from '@fullcalendar/react';



const Contact = () => {

    const handleForm = (e) => {
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if(xhr.readyState !== XMLHttpRequest.DONE) return;
            if(xhr.status === 200) {
                form.reset();
            }
        }
        xhr.send(data);
    }

    return (
        <>
            <PageContainer>
                <ImageContainer>
                    <ImageText>Comments? Questions? Want To Know More?</ImageText>
                </ImageContainer>

                <FormContainer>
                    <RtnBtnContainer>
                        <ReturnHomeBtn to='/'>Home</ReturnHomeBtn>
                    </RtnBtnContainer>
                    <FormTitle>Contact Us!</FormTitle>
                    <Form
                        onSubmit={(e) => handleForm(e)}
                        action="INSERT FORMSPREE LINK HERE"
                        method="POST">
                        <Message>This is the validation message</Message>
                        <FormSection>
                            <FormGroup>
                                <FormLabel for="fname">First Name</FormLabel>
                                <FormInput 
                                    id="fname" 
                                    placeholder="Enter your first name"
                                    type="text"
                                    required />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel for="lname">Last Name</FormLabel>
                                <FormInput 
                                    id="lname" 
                                    placeholder="Enter your last name"
                                    type="text" 
                                    required />
                            </FormGroup>
                        </FormSection>
                        <FormSection>
                            <FormGroup>
                                <FormLabel for="email">Email</FormLabel>
                                <FormInput 
                                    id="email" 
                                    type="email" 
                                    placeholder="Enter your email"
                                    required />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel for="phone">Phone Number</FormLabel>
                                <FormInput 
                                    id="phone" 
                                    placeholder="Enter your phone number"
                                    type="tel"
                                    required />
                            </FormGroup>
                        </FormSection>
                        <FormSection>
                            <FormGroup>
                            <FormLabel for="message">Message</FormLabel>
                                <TextAreaInput 
                                    type="text" 
                                    placeholder="Leave your message here!" 
                                    name="message"
                                    required />
                            </FormGroup>
                        </FormSection>

                        <SendMessageBtn >Send Message</SendMessageBtn>
                    </Form>
                    
                    <SocialContainer>
                        <Icon>
                            <FaEnvelope />
                        </Icon>
                        <Icon>
                            <FaFacebook />
                        </Icon>
                        <Icon>
                            <FaTwitter />
                        </Icon>   
                    </SocialContainer>

                </FormContainer>

            </PageContainer>
            

        </>
    )
}

export default Contact
