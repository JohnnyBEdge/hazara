import React from 'react';
import {CardModalOverlay, CardModalContainer, Grow,
    CardModalTitle, CardModalDesc, CardModalListTitle,
    CardModalList, CardModalListItem, CardBtn, CardImg,
    CloseCardIcon
} from './CardModalElements';

const CardModal = ({openCardModal,toggleCardModal, titleText, fullDesc,listTitle, listItems, btnText, img }) => {

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
                <CloseCardIcon fontSize='large' onClick={toggleCardModal} />
                <CardModalTitle>{titleText}</CardModalTitle>
                <CardImg src={img}/>
                <CardModalDesc>{fullDesc}</CardModalDesc>
                <CardModalListTitle>{listTitle}</CardModalListTitle>
                <CardModalList>
                    {listItem}
                </CardModalList>
                <CardBtn>{btnText}</CardBtn>
            </CardModalContainer>
        </>
    )
}

export default CardModal
