import styled from 'styled-components';
import img from '../../assets/images/donateBackground.jpg';
import Navbar from '../navbar';

export const DonateSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 800px;
    background-image: url(${img});
    background-size: cover;
    justify-content: center;

    @media screen and (max-width: 768px){
        background-color: #1961A3;
        background-image: none;
    }
`
export const NavBar = styled(Navbar)`
    background: red;
`
export const DonateContainer = styled.div`
    display: flex;
    background-color: #FFC659;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 400px;
    height: 500px;
    margin-left: 75px;
    border: solid #1961A3 2px;
    border-radius: 5px;
   

    @media screen and (max-width: 768px){
        margin-top: 100px;
        margin: 0 auto;
        width: 350px;
    }
`
export const IconContainer = styled.div`
    width: 150px;
    height: 150px;
    border: solid #1961A3 2px;
    border-radius: 75px;
    position: relative;
    top: -80px;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const Icon = styled.img`
    width: 120px;
`
export const HeaderText = styled.h1`
    margin-top: -120px;
    color: #1961A3;
    text-align: center;
    font-size: 30px;
    padding: 0 10px;
`
export const SubHeaderText = styled.p`
    color: #1961A3;
    line-height: 1.5;
    font-size: 18px;
    text-align: center;
    padding: 5px;
    margin-top: -100px;
`
export const DonateButton = styled.button`
    border-radius: 50px;
    background-color: #1961A3;
    color: whitesmoke;
    //	Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line. The text continues on the same line until a <br> tag is encountered
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 1rem;
    /* outline: none; */
    border: solid black 1px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    height: 40px;
    margin: -100px 0px 20px 0px;

    &:hover{
        transition: all 0.2s ease-in-out;
        font-weight: bold;
        color: #010606;
        transform: scale(1.2);
    }
`
