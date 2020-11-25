import React from 'react';
import {
    WhoWeAreContainer,InfoContainer,LeftSide,RightSide,
    SectionHeader,Title,Info,GroupPhoto, LearnMoreBtn
} from './WhoWeAreElements';
import WhoWeAreImg from '../../assets/images/whoweare.jpg';
import { whoWeAreData } from '../Modal/data';
import HeadShake from 'react-reveal/HeadShake';

const WhoWeAre = ({setModalData, toggleModal}) => {
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
                        <LearnMoreBtn 
                            onClick={()=>{
                                setModalData(whoWeAreData);
                                toggleModal();
                                }}>
                                Learn More!</LearnMoreBtn>
                    </InfoContainer> 
                </LeftSide>
                    
                <RightSide>
                    <HeadShake>
                        <GroupPhoto src={WhoWeAreImg}/>
                    </HeadShake>
                </RightSide> 

            </WhoWeAreContainer>
        </>
    )
}

export default WhoWeAre;
