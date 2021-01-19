import React, {useState} from 'react';
import {
    DonateSection, DonateContainer,
    IconContainer, Icon, HeaderText, SubHeaderText,
    DonateButton, PaypalContainer, ClosePaypal
} from './DonateElements';
import Footer from '../footer';
import Sidebar from '../Sidebar';
import icon from '../../assets/images/donate-icon.png';
import PPBtn from '../Paypal';


const Donate = ({togglePaypal, paypalOpen}) => {

    const [checkout, setCheckout] = useState(false);

    const toggleCheckout = () => {
        setCheckout(!checkout);
    }

    return (
        <>
            <DonateSection id="donate">
                <DonateContainer paypalOpen={paypalOpen}>
                    <IconContainer>
                        <Icon src={icon}/>
                    </IconContainer>
                    <HeaderText>Thank you for helping us achieve our goals!</HeaderText>
                    <SubHeaderText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex eaque rerum! Nam dolor, enim quis, iste corrupti voluptatem, deleniti saepe praesentium reprehenderit at quia sint eveniet fuga temporibus ducimus.</SubHeaderText>
                    <DonateButton onClick={()=>{
                        togglePaypal();
                        toggleCheckout();
                    }}>
                        Donate Now</DonateButton>
                </DonateContainer>
                <PaypalContainer paypalOpen={paypalOpen} checkout={checkout}>
                    <ClosePaypal onClick={() => {
                        togglePaypal();
                        toggleCheckout();
                    }}>
                    <PPBtn/>
                    </ClosePaypal>
                </PaypalContainer>
            </DonateSection>
        </>
    )
}

export default Donate;
