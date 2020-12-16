import styled from 'styled-components';
import contact from '../../assets/images/contact3.jpg';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-height: 800px;

    @media screen and (max-width: 768px){
        flex-direction: column;
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
`
export const Form = styled.form`

`
export const FormLabel = styled.label`

`
export const FormInput = styled.input`

`

