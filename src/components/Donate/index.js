import React from 'react';
import {
    DonateSection, DonateContainer,
    IconContainer, Icon, HeaderText, SubHeaderText,
    DonateButton, PaypalContainer
} from './DonateElements';
import Footer from '../footer';
import Sidebar from '../Sidebar';
import icon from '../../assets/images/donate-icon.png';


const Donate = ({togglePaypal, paypalOpen}) => {

    return (
        <>
            <DonateSection id="donate">
                <DonateContainer>
                    <IconContainer>
                        <Icon src={icon}/>
                    </IconContainer>
                    <HeaderText>Thank you for helping us achieve our goals!</HeaderText>
                    <SubHeaderText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex eaque rerum! Nam dolor, enim quis, iste corrupti voluptatem, deleniti saepe praesentium reprehenderit at quia sint eveniet fuga temporibus ducimus.</SubHeaderText>
                    <DonateButton onClick={togglePaypal}>
                        Donate Now</DonateButton>
                </DonateContainer>
                <PaypalContainer paypalOpen={paypalOpen}>

                </PaypalContainer>
            </DonateSection>
        </>
    )
}

export default Donate;
