import React from 'react';
import {
    WhoWeAreContainer,InfoContainer,LeftSide,RightSide,
    SectionHeader,Title,Info,GroupPhoto, LearnMoreModal
} from './WhoWeAreElements';
import WhoWeAreImg from '../../assets/images/whoweare.jpg'

const WhoWeAre = () => {
    return (
        <>
            <WhoWeAreContainer id="who">
                <LeftSide>
                    <InfoContainer>
                        <SectionHeader id="whoWeAre">We are the...</SectionHeader>
                        <Title>Utah Hazara Association</Title>
                        <Info>
                            Our non-profit organization ‘Utah Hazara Association (UHA)’ 
                            was established under 501© (3)  almost 2 years ago to directly 
                            confront the issues of cultural awareness in youth, religious 
                            programs and ripening of language. 
                        </Info>
                        <LearnMoreModal>Learn More!</LearnMoreModal>
                    </InfoContainer> 
                </LeftSide>
                    
                <RightSide>
                    <GroupPhoto src={WhoWeAreImg}/>
                </RightSide> 

            </WhoWeAreContainer>
        </>
    )
}

export default WhoWeAre;
