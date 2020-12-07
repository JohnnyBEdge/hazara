import React from 'react';
import {
    ModalOverlay, ModalContainer, ModalContent,
    ModalTitle, ModalSubTitle, ModalImg, ModalText
} from './ModalElements'; 

const Modal = ({openModal, toggleModal,titleText,subTitleText, text, alt, img, listDesc, listItems }) => {
    // let arr = listItems
    // const items = listItems.map((item) => {
    //     return <li>{item}</li>
    // })

    return (
        <ModalContainer>
            <ModalOverlay id="modal" openModal={openModal} onClick={toggleModal}></ModalOverlay>
            <ModalContent openModal={openModal}>
                <ModalImg src={img} alt={alt}/>
                <ModalTitle>{titleText}</ModalTitle>
                <ModalSubTitle>{subTitleText}</ModalSubTitle>
                <ModalText>{text}</ModalText>
                <ModalText>{listDesc}</ModalText>
                <ul>
                    insert list here
                    {/* return {listItems}.map((item) => {<li>item</li>}) */}
                </ul>

            </ModalContent>
        </ModalContainer>

    )
}

export default Modal
