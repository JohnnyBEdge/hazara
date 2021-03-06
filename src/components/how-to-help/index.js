import React, {useState} from 'react';
import {
    HowToHelpContainer, SectionHeader, CardContainer,
    Card, CardImg, CardTitle, CardDesc, CardBtn
} from './HowToHelpElements';
// import {card1, card2, card3} from '../Modal/data'
import {Card1Data, Card2Data, Card3Data} from './cardData';
import Fade from 'react-reveal/Fade';
import CardModal from './CardModal';

const HowToHelp = ({toggleModal, setModalType, setModalData, modalData, modalTypeCard, toggleModalType, togglePaypal}) => {

    const [openCardModal, setOpenCardModal] = useState(false);

    const toggleCardModal = () => {
        setOpenCardModal(!openCardModal);
    }


    return (
        <HowToHelpContainer id="how">
            <CardModal 
                openCardModal={openCardModal} 
                toggleCardModal={toggleCardModal} 
                togglePaypal={togglePaypal}
                {...modalData}
                 />
            <SectionHeader>How To Help</SectionHeader>
            <CardContainer openCardModal={openCardModal}>
                <Fade left cascade>
                    <Card >
                        <CardImg src={Card1Data.img}/>
                        <CardTitle>{Card1Data.titleText}</CardTitle>
                        <CardDesc>{Card1Data.shortDesc}</CardDesc>
                        <CardBtn onClick={() => {
                            setModalData(Card1Data)
                            toggleCardModal()
                        }}>Learn More</CardBtn>
                    </Card>

                    <Card >
                        <CardImg src={Card2Data.img}/>
                        <CardTitle>{Card2Data.titleText}</CardTitle>
                        <CardDesc>{Card2Data.shortDesc}</CardDesc>
                        <CardBtn onClick={() => {
                            setModalData(Card2Data);
                            toggleCardModal();
                            
                        }}>Learn More</CardBtn>
                    </Card>


                    <Card >
                        <CardImg src={Card3Data.img}/>
                        <CardTitle>{Card3Data.titleText}</CardTitle>
                        <CardDesc>{Card3Data.shortDesc}</CardDesc>
                        <CardBtn onClick={() => {
                            setModalData(Card3Data);
                            toggleCardModal();
                        }}> Learn More</CardBtn>
                    </Card>

                </Fade>

            </CardContainer>
            
        </HowToHelpContainer>
    )
}

export default HowToHelp;
