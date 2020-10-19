import styled from 'styled-components';
import ContactImg from '../../assets/contact.jpeg'

export const FormContainer = styled.div`
    width:100%;
    height: 100%;
`
export const InfoContainer = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    border: solid black 1px;
    border-radius: 10px;
    margin: 20px;
`

export const HeaderText = styled.h2`
    font-size: 4rem;
    text-align: center;
`
export const SubHeaderText = styled.h3`
    font-size: 1.75rem;
    text-align: center;
`
export const Us = styled.div`
    border: solid black 1px;
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    height: 600px;
    background-image: url(${ContactImg});
    background-position: center;
    color: white;
    text-shadow: 2px 2px #000000;
    margin: 10px;
`
export const IconList = styled.ul`
    margin-top: 10px;
    margin-left: 20px;
    list-style: none;
    font-size: 1.3rem
`
export const Icon = styled.li`
    margin: 20px;
`
export const SocialM = styled.ul`
    display: flex;
    width: 200px;
    justify-content: space-evenly;
    list-style:none;
    font-size: 2rem;
`
export const ListItem = styled.li`
`
export const Form = styled.div`
    width: 100%;
    align-items: center;
    max-width: 700px;
`
export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin: 20px;
    
`
export const Button = styled.button`

`
