import React from 'react';
import {
    PageContainer, NavBar, DonateContainer,
    IconContainer, Icon, HeaderText, SubHeaderText,
    DonateButton
} from './DonateElements';
import Footer from '../../components/footer';
import icon from '../../assets/images/donate-icon.png';


const DonatePage = () => {
    return (
        <>
            <NavBar />
            <PageContainer>
                <DonateContainer>
                    <IconContainer>
                        <Icon src={icon}/>
                    </IconContainer>
                    <HeaderText>Thank you for helping us achieve our goals!</HeaderText>
                    <SubHeaderText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex eaque rerum! Nam dolor, enim quis, iste corrupti voluptatem, deleniti saepe praesentium reprehenderit at quia sint eveniet fuga temporibus ducimus.</SubHeaderText>
                    <DonateButton>Donate Now</DonateButton>
                </DonateContainer>
            </PageContainer>
            <Footer/>
        </>
    )
}

export default DonatePage;
