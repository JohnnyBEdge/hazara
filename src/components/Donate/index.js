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
                    <SubHeaderText>Whether you give once or make muliple donations, every dollar brings us closer to our goals. A physical center would not only help achieve the missions of the community but would also help in development of the community to inculcate more refugees/immigrants into their programs and be a helping help for the sake of humanity.  </SubHeaderText>
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
