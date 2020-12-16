import React from 'react';
import logo from '../../assets/images/logo-1.jpg'
import {
    PageContainer, ImageContainer, ImageText, FormContainer,
    FormTitle, Form, ReturnHomeBtn,RtnBtnContainer
} from './ContactElements';
import {
    FaPhone, 
    FaMapPin, 
    FaEnvelope, 
    FaFacebook, 
    FaTwitter, 
    FaInstagram} from 'react-icons/fa';



const Contact = () => {
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
                    <Form>

                    </Form>
                </FormContainer>

            </PageContainer>
            

        </>
    )
}

export default Contact
