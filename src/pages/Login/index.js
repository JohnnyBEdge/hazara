// import React, {useState} from 'react';
// import { 
//     LoginContainer, LoginForm, Logo, FormTitle,
//     FormInput, BtnWrap, LoginBtn
// } from './LoginElements';
// import Amplify, { Auth } from "aws-amplify";
// import awsconfig from '../../config.json';

// Amplify.configure(awsconfig);

// const Login = () => {

//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [errors, setErrors] = useState({})

//     // const handleSubmit = async (event) => {
//     //     event.preventDefault();
    
//         // Form validation
//         // this.clearErrorState();
//         // const error = Validate(event, this.state);
//         // if (error) {
//         //   this.setState({
//         //     errors: { ...this.state.errors, ...error }
//         //   });
//         // }
    
//     //     try {
//     //       const user = await Auth.signIn(username, password);
//     //       console.log(user);
//     //       this.props.auth.setAuthStatus(true);
//     //       this.props.auth.setUser(user);
//     //       this.props.history.push("/admin/events");
//     //     }catch(error) {
//     //       let err = null;
//     //       !error.message ? err = { "message": error } : err = error;
//     //       setErrors({
//     //         errors: {
//     //           ...errors,
//     //           cognito: err
//     //         }
//     //       });
//     //     }
//     //   };

//     return (
//         <LoginContainer>
//             <LoginForm 
//                 // onSubmit={handleSubmit}
//                 > 
//                 <Logo />
//                 <FormTitle>Admin Login</FormTitle>
//                 <FormInput 
//                     type="text" 
//                     name="email" 
//                     placeholder="Email"
//                     onChange={({ target }) => setUsername(target.value)}
//                     required/>
//                 <FormInput 
//                     type="text" 
//                     name="password" 
//                     placeholder="Password"
//                     onChange={({ target }) => setPassword(target.value)}
//                     required/>
//                 <BtnWrap>
//                     <LoginBtn>Sign In</LoginBtn>
//                 </BtnWrap>
//             </LoginForm>
//         </LoginContainer>
//     )
// }

// export default Login
