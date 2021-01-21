import styled from 'styled-components';
import contact from '../../assets/images/contact3.jpg';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const PageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-height: 800px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const ImageContainer = styled.div`
    background-image: url(${contact});
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;


    @media screen and (max-width: 768px){
        display: none;
    }
`
export const ImageText = styled.p`
    color: white;
    font-size: 60px;
    text-align: center;
    margin-top: 50px;
    text-shadow: 2px 2px 4px #000000;
`
export const FormContainer = styled.div`
    width: 50%;
`
export const RtnBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    @media screen and (max-width: 768px){
        position: relative;
        left: 90px;
    }
`
export const ReturnHomeBtn = styled(Link)`
    border-radius: 4px;
    height: 50px;
    width: 85px;
    background-color: transparent;
    border: solid black 1px;
    margin: 10px 20px 0 0;
    text-decoration: none;
    text-align: center;
    padding-top: 13px;
    color: black;
    transition: 0.3s all ease;

    &:hover {
        background-color: #FFC559;
        color: #1A61A3;
        transition: 0.3s all ease;
        transform: scale(1.2);
    }
    
`
export const FormTitle = styled.h1`
    margin-left: 15%;
    margin-top: 7%;
    width: 100%;
    @media screen and (max-width: 768px){
        position: relative;
        right: 90px;
        margin-top: 10%;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    /* @media screen and (max-width: 768px){
        width: 90%;
    } */
`
export const FormSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 10px;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 768px){
        align-self: center;
    }
`
export const FormLabel = styled.label`
    margin-bottom: 0.5em;
	color: black;
    font-size: 15px;
    display: block;
`
export const FormInput = styled.input`
    padding: 0.5em;
    border: none;
	border-bottom: solid lightgray 2px;
    width: 200px;
	margin-bottom: 0.5em;
    &:focus {
        outline: none;
        border-bottom: 2px black solid; 
    }
    @media screen and (max-width: 768px){
        width: 300px;
        margin-bottom: 1em;
    }

`
export const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: none;
`
export const TextAreaInput = styled.textarea`
    display: block;
    min-height: 32px;
    max-height: 320px;
    line-height: 21px;
    min-width: 400px;;
    width: 50%;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid rgb(217, 217, 217);
    padding: 4px 11px;
    text-size-adjust: 100%;
    border: none;
    border-bottom: 2px solid lightgray; 
    margin-top: 5px;     
    &:focus {
        outline: none;
        border-bottom: 2px solid black; 
    }

    @media screen and (max-width: 480px){
        min-width: 350px;
    }
`
export const SendMessageBtn = styled.button`
    border-radius: 4px;
    height: 50px;
    width: 110px;
    background-color: transparent;
    border: solid black 1px;
    margin-top: 20px;
    text-decoration: none;
    text-align: center;
    color: black;
    transition: 0.5s all ease;

    &:hover {
        background-color: #FFC559;
        color: #1A61A3;
        transition: 0.5s all ease;
        width: 150px;
    }
    @media screen and (max-width: 768px){
        width: 300px;
    }
`
export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
export const Icon = styled.div`
    margin: 5px 10px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1)
    }
`



