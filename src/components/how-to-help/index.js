import React, {useState} from 'react';
import {
    HowToHelpContainer, SectionHeader, CardContainer,
    Card, CardImg, CardTitle, CardDesc, CardBtn,
    HelpSidebar, Rotate
} from './HowToHelpElements';
import {card1, card2, card3} from '../Modal/data'
import {Card1Data, Card2Data, Card3Data} from './cardData';
import help from '../../assets/images/help.jpeg'
// import {Spring} from 'react-spring/renderprops'
import Fade from 'react-reveal/Fade';
import CardModal from './CardModal';

const HowToHelp = ({toggleModal, setModalType, setModalData, modalTypeCard, toggleModalType}) => {

    const [openCardModal, setOpenCardModal] = useState(false);

    const toggleCardModal = () => {
        setOpenCardModal(!openCardModal);
    }


    return (
        <HowToHelpContainer id="how">
            <CardModal openCardModal={openCardModal} toggleCardModal={toggleCardModal} />
            {/* <HelpSidebar helpOpen={helpOpen}>HELP SIDEBAR</HelpSidebar> */}
            <SectionHeader>How To Help</SectionHeader>
            <CardContainer openCardModal={openCardModal}>
                <Fade left cascade>
                    <Card >
                        <CardImg src={Card1Data.img}/>
                        <CardTitle>{Card1Data.titleText}</CardTitle>
                        <CardDesc>{Card1Data.shortDesc}</CardDesc>
                        <CardBtn onClick={() => {
                            toggleCardModal()
                            // toggleModal()
                            // setModalData(Card1Data)
                        }}>Learn More</CardBtn>
                    </Card>

                    <Card >
                        <CardImg src={Card2Data.img}/>
                        <CardTitle>{Card2Data.titleText}</CardTitle>
                        <CardDesc>{Card2Data.shortDesc}</CardDesc>
                        <CardBtn onClick={() => {
                            toggleModal();
                            setModalData(Card2Data);
                        }}>Learn More</CardBtn>
                    </Card>


                    <Card >
                        <CardImg src={Card3Data.img}/>
                        <CardTitle>{Card3Data.titleText}</CardTitle>
                        <CardDesc>{Card3Data.shortDesc}</CardDesc>
                        <CardBtn onClick={() => {
                            toggleModal()
                            setModalData(Card3Data)
                        }}> Learn More</CardBtn>
                    </Card>

                </Fade>

            </CardContainer>
            
        </HowToHelpContainer>
    )
}

export default HowToHelp;
