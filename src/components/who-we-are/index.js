import React from 'react';
import {
    WhoWeAreContainer,
    InfoContainer,
    GridWrapper,
    SectionHeader,
    Title,
    Info,
    ImageContainer,
    GroupPhoto
} from './WhoWeAreElements';
import WhoWeAreImg from '../../assets/images/whoweare.jpg'

const WhoWeAre = () => {
    return (
        <>
            <WhoWeAreContainer id="who">
                {/* <GridWrapper> */}
                    <InfoContainer>
                        {/* <SectionHeader id="whoWeAre">We are the...</SectionHeader>
                        <Title>Utah Hazara Association</Title>
                        <Info>
                            Our non-profit organization ‘Utah Hazara Association (UHA)’ 
                            was established under 501© (3)  almost 2 years ago to directly 
                            confront the issues of cultural awareness in youth, religious 
                            programs and ripening of language. 
                        </Info> */}
                    </InfoContainer> 
                    
                    <ImageContainer>
                        <GroupPhoto src={WhoWeAreImg}/>
                    </ImageContainer> 
                {/* </GridWrapper> */}
            </WhoWeAreContainer>
        </>
    )
}

export default WhoWeAre;
