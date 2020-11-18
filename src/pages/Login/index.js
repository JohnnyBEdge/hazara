import React from 'react';
import { 
    LoginContainer, LoginForm, Logo, FormTitle,
    FormInput, BtnWrap, LoginBtn
} from './LoginElements';

const Login = () => {
    return (
        <LoginContainer>
            <LoginForm>
                <Logo />
                <FormTitle>Admin Login</FormTitle>
                <FormInput 
                    type="text" 
                    name="email" 
                    placeholder="Email"
                    required/>
                <FormInput 
                    type="text" 
                    name="password" 
                    placeholder="Password"
                    required/>
                <BtnWrap>
                    <LoginBtn>Sign In</LoginBtn>
                </BtnWrap>
            </LoginForm>
        </LoginContainer>
    )
}

export default Login
