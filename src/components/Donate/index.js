import React, {useState} from 'react';
import {
    DonateSection, DonateContainer,
    IconContainer, Icon, HeaderText, SubHeaderText,
     PaypalContainer
} from './DonateElements';
import icon from '../../assets/images/donate-icon.png';
import PPBtn from '../Paypal';


const Donate = () => {

    return (
        <>
            <DonateSection id="donate">
                <DonateContainer >
                    <IconContainer>
                        <Icon src={icon}/>
                    </IconContainer>
                    <HeaderText>Thank you for helping us achieve our goals!</HeaderText>
                    <SubHeaderText>Whether you give once or make muliple donations, every dollar brings us closer to our goals. A physical center would not only help achieve the missions of the community but would also help in development of the community to inculcate more refugees/immigrants into their programs and be a helping help for the sake of humanity.  </SubHeaderText>
                    <PaypalContainer>
                        <PPBtn/>
                    </PaypalContainer>                 
                </DonateContainer>
            </DonateSection>
        </>
    )
}

export default Donate;
