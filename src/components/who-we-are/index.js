import React from 'react';
import {
    WhoWeAreContainer,
    InfoContainer,
    Intro,
    Title,
    Info,
    ImageContainer,
    GroupPhoto
} from './WhoWeAreElements';
import WhoWeAreImg from '../../assets/temp-group-photo.jpeg'

const WhoWeAre = () => {
    return (
        <>
            <WhoWeAreContainer>
                <InfoContainer>
                    <Intro id="whoWeAre">We are the...</Intro>
                    <Title>Utah Hazara Association</Title>
                    <Info>
                        Our non-profit organization ‘Utah Hazara Association (UHA)’ 
                        was established under 501© (3)  almost 2 years ago to directly 
                        confront the issues of cultural awareness in youth, religious 
                        programs and ripening of language. 
                    </Info>
                </InfoContainer> 

                <ImageContainer>
                    <GroupPhoto src={WhoWeAreImg}/>
                </ImageContainer> 
            </WhoWeAreContainer>
        </>
    )
}

export default WhoWeAre;
