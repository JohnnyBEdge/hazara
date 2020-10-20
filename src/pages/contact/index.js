import React from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {
    FormContainer,
    HeaderText,
    SubHeaderText,
    Us,
    IconList,
    Icon,
    SocialM,
    ListItem,
    Form,
    InfoContainer,
    InputContainer,
    InputContainer2,
    Button,
    BtnContainer
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
            <FormContainer>
                <HeaderText>Contact Us</HeaderText>
                <SubHeaderText>Questions or remarks? Send us a message!</SubHeaderText>

                <InfoContainer>
                    <Us>
                        <IconList>
                            <Icon>
                                <FaPhone/> 123-456-7890
                            </Icon>
                            <Icon>
                                <FaEnvelope/> email@email.com
                            </Icon>
                            <Icon>
                                <FaMapPin/> 666 Elm St. Salt Lake City, Ut 84111
                            </Icon>
                        </IconList>

                        <SocialM>
                            <ListItem>
                                <FaFacebook/>
                            </ListItem>
                            <ListItem>
                                <FaInstagram/>
                            </ListItem>
                            <ListItem>
                                <FaTwitter/>
                            </ListItem>
                        </SocialM>
                    </Us>
                <Form>
                    <InputContainer>
                        <TextField label="First Name" />
                        <TextField label="Last Name" />
                    </InputContainer>
                <br/>
                    <InputContainer>
                        <TextField label="Phone" />
                        <TextField label="Email"/>
                    </InputContainer>
                <br/>
                <InputContainer2 >
                    {/* <FormLabel>Message</FormLabel>
                    <TextArea></TextArea> */}
                    <TextField 
                        aria-label="empty textarea" 
                        multiline
                        placeholder="Type message here." 
                        rowsMin={12}
                        variant="outlined"
                        fullWidth = "true"
                        />
                </InputContainer2>
                <BtnContainer>
                    <Button>Send Message</Button>
                </BtnContainer>
                </Form>
            </InfoContainer>
            </FormContainer>
        </>
    )
}

export default Contact
