import styled from 'styled-components';
import ContactImg from '../../assets/contact.jpeg'

export const FormContainer = styled.div`
    width:100%;
    height: 100%;
    background-color: #F8F05F;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const InfoContainer = styled.div`
    width:100%;
    max-width: 1000px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    border: solid black 1px;
    border-radius: 10px;
    background-color: #FFFAFA;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        width: 100%;
        border-radius: 0;
        display: block;
    }
`

export const HeaderText = styled.h2`
    font-size: 4rem;
    text-align: center;
`
export const SubHeaderText = styled.h3`
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 20px;
`
export const Us = styled.div`
    border: solid black 1px;
    border-radius: 10px;
    width: 100%;
    /* max-width: 500px; */
    height: 600px;
    background-image: url(${ContactImg});
    background-position: center;
    color: white;
    text-shadow: 2px 2px #000000;
    margin: 10px;
    @media screen and (max-width: 768px){
        margin: 0;
        border-radius: 0;
        border: none;
        position: fixed;
        z-index: 1
    }
`
export const IconList = styled.ul`
    margin-top: 10px;
    margin-left: 20px;
    list-style: none;
    font-size: 1.3rem;
    @media screen and (max-width: 768px){
        font-size: 1rem;
}
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
    max-width: 500px;
    @media screen and (max-width: 768px){
        position: fixed;
        z-index: 2;
        margin-top: 200px;
}
`
export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px;  
    @media screen and (max-width: 768px){
        margin: 0;
}
`
export const InputContainer2 = styled.div`
    display: flex;
    width: 450px;
    justify-content: space-evenly;
    margin: 0 auto;  
    padding: 20px;
    @media screen and (max-width: 768px){
        width: 100%;
}
`

export const BtnContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`
export const Button = styled.button`
    width: 300px;
    background-color: #3D6BAC;
    color: #FFFAFA;
    height: 40px;
    border-radius: 5px;
    font-size: 1.3rem;
    text-shadow: 2px 2px black;
    margin-right: 20px;
`
