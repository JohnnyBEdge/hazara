import React from 'react';
import {
    ModalOverlay, ModalContainer, ModalContent, ModalInfo,
    ModalTitle, ModalSubTitle, ModalImg, ModalText,
    CloseModalIcon1, CloseModalIcon2
} from './ModalElements'; 

const Modal = ({openModal, toggleModal,titleText,subTitleText, text, alt, img, listDesc, listItems }) => {
    // let arr = listItems
    // const items = listItems.map((item) => {
    //     return <li>{item}</li>
    // })

    return (
        <ModalContainer>
            <ModalOverlay id="modal" openModal={openModal} onClick={toggleModal}></ModalOverlay>
            <ModalContent openModal={openModal} img={img}>
                <CloseModalIcon1 fontSize='large' onClick={toggleModal} />
                <ModalInfo>
                    <CloseModalIcon2 fontSize='large' onClick={toggleModal} />
                    <ModalTitle>{titleText}</ModalTitle>
                    <ModalSubTitle>{subTitleText}</ModalSubTitle>
                    <ModalText>{text}</ModalText>
                    <ModalText>{listDesc}</ModalText>
                </ModalInfo>
            </ModalContent>
            {/* <ModalContent openModal={openModal}>
                <ModalImg src={img} alt={alt}/>
                <ModalTitle>{titleText}</ModalTitle>
                <ModalSubTitle>{subTitleText}</ModalSubTitle>
                <ModalText>{text}</ModalText>
                <ModalText>{listDesc}</ModalText>
            </ModalContent> */}
        </ModalContainer>

    )
}

export default Modal
