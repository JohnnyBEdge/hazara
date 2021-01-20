import React from 'react';
import {
    ModalOverlay, ModalContainer, ModalContent, ModalInfo,
    ModalTitle, ModalSubTitle, ModalImg, ModalText, ModalList,
    CloseModalIcon, ModalListItem
} from './ModalElements'; 

const Modal = ({
    openModal, toggleModal,titleText,subTitleText, text, alt, img, listDesc, 
    listItems,listSectionText1, listSectionText2, listSection1, listSection2
 }) => {

    return (
        <ModalContainer>
            <ModalOverlay id="modal" openModal={openModal} onClick={toggleModal}></ModalOverlay>
            <ModalContent openModal={openModal} img={img} alt={alt}>
                <ModalInfo>
                    <CloseModalIcon fontSize='large' onClick={toggleModal} />
                    <ModalTitle>{titleText}</ModalTitle>
                    {subTitleText ? <ModalSubTitle>{subTitleText}</ModalSubTitle> : ''}
                    {text ? <ModalText>{text}</ModalText> : '' }
                    {listDesc ? <ModalText>{listDesc}</ModalText> : ''}
                    {listSectionText1 ? <ModalText>{listSectionText1}</ModalText> : ''}
                    {listSection1 ? 
                        <ModalList>
                            {listSection1.map(item => (<ModalListItem>{item}</ModalListItem>))}
                        </ModalList> : ''}

                    {listSectionText2 ? <ModalText>{listSectionText2}</ModalText> : ''}
                    {listSection1 ? 
                        <ModalList>
                            {listSection2.map(item => (<ModalListItem>{item}</ModalListItem>))}
                        </ModalList> : ''}

                    {listItems ? 
                        <ModalList>
                            {listItems.map(item => (<ModalListItem>{item}</ModalListItem>))}
                        </ModalList> : ''}
                        

                    <ModalList>
                    
                    </ModalList>
                </ModalInfo>
            </ModalContent>
        </ModalContainer>

    )
}

export default Modal
