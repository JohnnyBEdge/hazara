import React from 'react';
import { whatWeDoData } from '../Modal/data';
import {
    WhatWeDoContainer, InfoContainer, SectionHeader,
    ListHeader, MissionList, MissionItem, LearnMoreBtn
} from './WhatWeDoElements';
import Slide from 'react-reveal/Slide';

const WhatWeDo = ({toggleModal, setModalData}) => {
    return (
        <>
            <WhatWeDoContainer id="what">
                <Slide right>
                    <InfoContainer>
                        <SectionHeader> What We Do </SectionHeader>
                        
                        <ListHeader>
                        We work tirelessly to fulfill our mission of helping the refugees and immigrants by:
                        </ListHeader>
                        <MissionList>
                            <MissionItem>
                                helping immigrants with admissions to schools, colleges and univeristies
                            </MissionItem>
                            <MissionItem>
                                job assistance in finding, applying and securing suitable jobs in the Salt Lake valley 
                            </MissionItem>
                            <MissionItem>
                                help arrange cultural and religious programs
                            </MissionItem>
                            <MissionItem>
                                we have an activities program for kids and teens that include skiing, football etc.
                            </MissionItem>
                            <MissionItem>
                                book reading club with monthly discussions
                            </MissionItem>
                            <MissionItem>
                                teaching of basic English language to the elderly of the community
                            </MissionItem>
                        </MissionList>
                        <LearnMoreBtn onClick={ () => { 
                            setModalData(whatWeDoData);
                            toggleModal();}}> Learn More! </LearnMoreBtn>
                    </InfoContainer>
                </Slide>
            </WhatWeDoContainer>  
            
        </>
    )
}

export default WhatWeDo;
