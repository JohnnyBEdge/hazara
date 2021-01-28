import styled from 'styled-components';
import img from '../../assets/images/donate-background.webp';

export const DonateSection = styled.div`
    display: flex;
    width: 100%;
    height: 800px;
    background-image: url(${img});
    background-size: cover;
    justify-content: space-between;


    @media screen and (max-width: 768px){
        background-color: #1961A3;
        background-image: none;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        height: 100%;
    }
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
    margin-top: 100px;
   

    @media screen and (max-width: 768px){
        height: 100%;
        width: 98%;
        margin-left: 0;
        min-height: 500px;
        display: ${({paypalOpen}) => (paypalOpen ? 'none' : 'flex')};
        margin-bottom: 40px;
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
    margin-top: -110px;
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
`
export const PaypalContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: auto;
`
export const ClosePaypal = styled.div`
    cursor: pointer;
`
