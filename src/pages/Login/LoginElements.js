import { logDOM } from '@testing-library/react';
import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;   
`
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;   
    height: 500px;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const Logo = styled.img`
    height: 100px;
    margin: 0;
    padding: 0;
`
export const FormTitle = styled.h2`

`
export const FormInput = styled.input`
    width: 90%;
    border-style: none;
    border-bottom: 2px solid black;
    height: 40px;
    margin: 10px 0 20px 0;
    background-color: whitesmoke;
    padding: 5px;
    font-size: 1.2rem;
`
export const BtnWrap = styled.div`
`
export const LoginBtn = styled.button`
`