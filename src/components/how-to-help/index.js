import React from 'react';
import left from '../../assets/hand-left.png';
import right from '../../assets/hand-right.png';
import cardImg from '../../assets/card-placeholder.jpeg';
import {
    EffectsContainer,
    Hand,
    InfoContainer,
    SectionHeader,
    SubHeaderText,
    SectionImgContainer,
    DonateImg,
    DonateCard,
    DCardHeader,
    DCardText,
    DCardBtn,
    CardContainer,
    Card,
    CardDetails,
    CardBtn,
    CardImg,
    CardTitle
} from './HowToHelpElements';
import help from '../../assets/help.jpeg'
// import {Spring} from 'react-spring/renderprops'
import Slide from 'react-reveal/Slide';
import Calendar from '../calendar/Calendar';

const HowToHelp = () => {
    return (
        <>
            {/* <EffectsContainer>
                <Slide left>
                    <Hand src={left} />
                </Slide>
                <Slide right>
                    <Hand src={right} /> 
                </Slide>
                <Hand src={left} />
                <Hand src={right} /> 
            </EffectsContainer> */}

            <InfoContainer>
                <SectionHeader id="howToHelp">
                    How To Help
                </SectionHeader>
                <SubHeaderText>
                    In order to fulfill the missions and the greater goals of our non-profit organization, we are in need of a physical center where we could perform the above already undertaken objectives in the most efficient manner. Join the other Utah Hazara supporters by making a donation to help us achieve our goals.</SubHeaderText>
                <SectionImgContainer>
                    <DonateImg src={help} />
                    <DonateCard>
                        <DCardHeader>Help the Cause!</DCardHeader>
                        <DCardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam amet voluptas doloribus quasi, commodi rerum error! Beatae, tenetur? Quasi reiciendis in quam repellendus rem, veniam nihil odit possimus earum?</DCardText>
                        <DCardBtn>Donate Now</DCardBtn>
                    </DonateCard>
                </SectionImgContainer>
            
            <CardContainer>
                <Card>
                    <CardImg src={cardImg}/>
                    <CardTitle>Volunteer</CardTitle>
                    <CardDetails>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quasi!
                    </CardDetails>
                    {/* <CardBtn>Learn More</CardBtn> */}
                </Card>
                <Card>
                <CardImg src={cardImg}/>
                <CardTitle>Join Us</CardTitle>
                    <CardDetails>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quasi!
                    </CardDetails>
                    {/* <CardBtn>Learn More</CardBtn> */}
                </Card>
                <Card>
                    <CardImg src={cardImg}/>
                    <CardTitle>Donate</CardTitle>
                    <CardDetails>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quasi!
                    </CardDetails>
                    {/* <CardBtn>Learn More</CardBtn> */}
                </Card>
            </CardContainer>
        </InfoContainer>
        </>
    )
}

export default HowToHelp;
