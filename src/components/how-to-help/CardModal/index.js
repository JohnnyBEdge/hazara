import React from 'react';
import {CardModalOverlay, CardModalContainer, Grow} from './CardModalElements';

const CardModal = ({openCardModal, toggleCardModal}) => {
    return (
        <>
            <CardModalOverlay openCardModal={openCardModal} onClick={toggleCardModal}></CardModalOverlay>
          
            <CardModalContainer openCardModal={openCardModal}>
                <p>{openCardModal}</p>
            </CardModalContainer>
        </>
    )
}

export default CardModal
