import React from 'react';
import {SocialContainer, Icon} from './SocialMediaElements';
import {
    FaEnvelope, 
    FaFacebook, 
    } from 'react-icons/fa';

const SocialMediaLinks = () => {
    return (
        <SocialContainer>
            <Icon href="mailto:utahhazaraassociation@gmail.com">
                <FaEnvelope />
            </Icon>
            <Icon href="https://www.facebook.com/Utah-Hazara-Association-103407585058385">
                <FaFacebook />
            </Icon>
        </SocialContainer>
    )
}

export default SocialMediaLinks
