import React from 'react';
import {
    ModalOverlay, ModalContainer, ModalContent, ModalInfo,
    ModalTitle, ModalSubTitle, ModalImg, ModalText,
    CloseModalIcon
} from './ModalElements'; 

const Modal = ({openModal, toggleModal,titleText,subTitleText, text, alt, img, listDesc, listItems }) => {

    return (
        <ModalContainer>
            <ModalOverlay id="modal" openModal={openModal} onClick={toggleModal}></ModalOverlay>
            <ModalContent openModal={openModal} img={img}>
                <ModalInfo>
                    <CloseModalIcon fontSize='large' onClick={toggleModal} />
                    <ModalTitle>{titleText}</ModalTitle>
                    <ModalSubTitle>{subTitleText}</ModalSubTitle>
                    <ModalText>{text}</ModalText>
                    <ModalText>{listDesc}</ModalText>
                </ModalInfo>
            </ModalContent>
        </ModalContainer>

    )
}

export default Modal
