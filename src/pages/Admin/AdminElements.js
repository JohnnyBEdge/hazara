import styled from 'styled-components';
import { AmplifySignUp } from '@aws-amplify/ui-react';

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    width: 100%;

`
export const CreateAdminBtn = styled.button`
    width: 100%;
    min-width: 153px;
    display: inline-block;
    margin-bottom: 0px;
    background-color: #FF9900;
    height: 50px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    letter-spacing: 0.75px;
`
export const SignUp = styled(AmplifySignUp)`
    display: flex;
    margin-top: 100px;
    justify-content: center;
    align-self: center;
`