import React from 'react';
import { 
    HeroContainer, HeroBackground, PageTitle,
    HeroContent, HeroImg, PageTitleSubtext
    } from './HeroElements';
import HeroImage from '../../assets/images/hero.webp';

const Hero = () => {
    return (
        <HeroContainer id="home">
            <HeroBackground>
                <HeroImg src={HeroImage}/>
            </HeroBackground>
            <HeroContent>
                <PageTitle>Utah Hazara Association</PageTitle>
                <PageTitleSubtext>Serving the local community while bringing awareness to global Hazara issues</PageTitleSubtext>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
