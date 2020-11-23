import React from 'react';
import {
    ModalOverlay, ModalContainer, ModalContent,
    ModalTitle, ModalSubTitle, ModalImg, ModalText
} from './ModalElements';

const Modal = ({openModal, toggleModal,titleText,subTitleText, text, alt, img }) => {
    return (
        <ModalContainer>
            <ModalOverlay id="modal" openModal={openModal} onClick={toggleModal}></ModalOverlay>
            <ModalContent openModal={openModal}>
                <ModalImg src={img} alt={alt}/>
                <ModalTitle>{titleText}</ModalTitle>
                <ModalSubTitle>{subTitleText}</ModalSubTitle>
                
                <ModalText>{text}</ModalText>
            </ModalContent>
        </ModalContainer>

    )
}

export default Modal
