import React from 'react';
import {CardModalOverlay, CardModalContainer, Grow,
    CardModalTitle, CardModalDesc, CardModalListTitle,
    CardModalList, CardModalListItem
} from './CardModalElements';

const CardModal = ({openCardModal, toggleCardModal, titleText, fullDesc,listTitle, listItems }) => {

    let listItem;
    if(listItems){
        listItem = listItems.map(item => {
        return <CardModalListItem>{item}</CardModalListItem>
        })
    }
    return (
        <>
            <CardModalOverlay openCardModal={openCardModal} onClick={toggleCardModal}></CardModalOverlay>
          
            <CardModalContainer openCardModal={openCardModal}>
                <CardModalTitle>{titleText}</CardModalTitle>
                <CardModalDesc>{fullDesc}</CardModalDesc>
                <CardModalListTitle>{listTitle}</CardModalListTitle>
                <CardModalList>
                    {listItem}
                </CardModalList>
            </CardModalContainer>
        </>
    )
}

export default CardModal
