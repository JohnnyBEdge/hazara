import React from 'react';
import {
    HowToHelpContainer, SectionHeader, CardContainer,
    Card, CardImg, CardTitle, CardDesc, CardBtn
} from './HowToHelpElements';
import {Card1Data, Card2Data, Card3Data} from './cardData';
import help from '../../assets/images/help.jpeg'
// import {Spring} from 'react-spring/renderprops'

const HowToHelp = () => {
    return (
        <HowToHelpContainer id="how">
            <SectionHeader>How To Help</SectionHeader>
            <CardContainer>
                <Card >
                    <CardImg src={Card1Data.img}/>
                    <CardTitle>{Card1Data.cardTitle}</CardTitle>
                    <CardDesc>{Card1Data.cardDesc}</CardDesc>
                    <CardBtn>Learn More</CardBtn>
                </Card>
                <Card >
                    <CardImg src={Card2Data.img}/>
                    <CardTitle>{Card2Data.cardTitle}</CardTitle>
                    <CardDesc>{Card2Data.cardDesc}</CardDesc>
                    <CardBtn>Learn More</CardBtn>
                </Card>
                <Card >
                    <CardImg src={Card3Data.img}/>
                    <CardTitle>{Card3Data.cardTitle}</CardTitle>
                    <CardDesc>{Card3Data.cardDesc}</CardDesc>
                    <CardBtn>Learn More</CardBtn>
                </Card>
            </CardContainer>
        </HowToHelpContainer>
    )
}

export default HowToHelp;
