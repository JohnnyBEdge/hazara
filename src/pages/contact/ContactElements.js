import styled from 'styled-components';
import ContactImg from '../../assets/contact.jpeg'


export const PageContainer = styled.div`
    background-color: #F8F05F;
    height: 100vh;
`
export const PageHeader = styled.h2`
    text-align: center;
`
export const PageSubHeader = styled.h3`
    text-align: center;
`
export const FormContainer = styled.div`
    display: flex;
    width: 95%;
    margin: 0 auto;
    border: solid black 1px;
    background-color: #FFFAFA;
`
export const InfoSection = styled.div`
    border: solid black 1px;
    border-radius: 10px;
    margin: 3px;
    width: 40%;
    height: 500px;
    background-color: #3D6BAC;
`
export const FormHolder = styled.form`
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
`
export const InfoHeader = styled.h4`
    color: white;
    margin-left: 20px;
    margin-top: 30px;
    font-size: 1.3rem;
`
export const InfoSubHeader = styled.h5`
    margin-left: 20px;
    color: white;
    padding: 5px;
    font-size: .9rem;
    margin-bottom: 40px;
    margin-top: 20px;
`
export const ContactList = styled.ul`
    margin-left: 30px;
`
export const ListItem = styled.li`
    list-style: none;
    color: white;
`
export const MobileIcon = styled.div`
    height: 50px;
    cursor: pointer;
`
export const SocialList = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 40%;
`
export const FormSection = styled.div`
    display: flex;
    margin: 20px;
    justify-content: space-evenly;
    width: 100%;
`

export const FormInput = styled.input`
    padding: 3px;
    border: none;
    border-bottom: 2px solid lightgray;
    border-radius: 10px;
    height: 40px;
    background-color: #FFFAFA;
    display: block;

    &:focus {
        background-color: lightgray;
        outline: none;
    }
`
export const FormLabel = styled.label`
    font-size: .7rem;
    display: block;

`
export const TextAreaInput = styled.textarea`
    display: block;
  min-height: 32px;
  max-height: 320px;
  line-height: 21px;
  background-color: #FFFAFA;
  min-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid rgb(217, 217, 217);
  padding: 4px 11px;
  text-size-adjust: 100%;
  border: none;
  border-bottom: 2px solid lightgray; 
  margin-top: 30px;
  &:focus {
        background-color: lightgray;
        outline: none;
    }
`;
export const SubmitBtn = styled.button`
    width: 100px;
    background-color: #3D6BAC;
    color: #FFFAFA;
    height: 40px;
    border-radius: 5px;
    font-size: 1.2rem;
    text-shadow: 2px 2px black;
    margin-bottom: 10px;

    @media screen and (max-width: 768px){
        height: 60px;
        width: 100%;
        font-size: 1.2rem;
        background-color: #3D6BAC;
        color: #FFFAFA;
        margin-bottom: 0;
`

