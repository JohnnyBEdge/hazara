import React from 'react';
import sectionPhoto from '../../assets/Girls_in_Ghazni.jpg';
import {
    WhatWeDoContainer,
    SectionHeader,
    SectionPhoto,
    ListHeader,
    MissionList,
    MissionItem,
    LearnMoreBtn
} from './WhatWeDoElements';

const WhatWeDo = () => {
    return (
        <>
            <WhatWeDoContainer>
                <SectionHeader id="whatWeDo">
                    What We Do
                </SectionHeader>
                <SectionPhoto src={sectionPhoto}/>
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
                <LearnMoreBtn>
                    Click Here to Learn More!
                </LearnMoreBtn>
            </WhatWeDoContainer>  
        </>
    )
}

export default WhatWeDo;
