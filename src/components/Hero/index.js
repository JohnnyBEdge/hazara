import React from 'react';
import { 
    HeroContainer, HeroBackground, PageTitle,
    HeroContent, HeroImg, PageTitleSubtext
    } from './HeroElements';
import HeroImage from '../../assets/images/hero2.JPG';

const Hero = () => {
    return (
        <HeroContainer id="home">
            <HeroBackground>
                <HeroImg src={HeroImage}/>
            </HeroBackground>
            <HeroContent>
                <PageTitle>Utah Hazara Association</PageTitle>
                <PageTitleSubtext>Some type of slogan goes in here.</PageTitleSubtext>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
