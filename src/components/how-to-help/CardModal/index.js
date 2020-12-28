import React from 'react';
import {CardModalOverlay, CardModalContainer, Grow,
    CardModalTitle, CardModalDesc, CardModalListTitle,
    CardModalList, CardModalListItem, CardBtn, CardImg,
    CloseCardIcon, CardRouteBtn
} from './CardModalElements';

const CardModal = ({openCardModal,toggleCardModal, titleText, fullDesc,listTitle, listItems, btnText, img, btnLink, togglePaypal }) => {

    let listItem;
    if(listItems){
        listItem = listItems.map(item => {
        return <CardModalListItem>{item}</CardModalListItem>
        })
    }
    const checkDonate = () => {
        if(btnLink === "donate"){
            setTimeout(
                () => togglePaypal(), 1100)
        }
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
                <CardBtn 
                    titleText={titleText}
                    to={btnLink} 
                    onClick={() => {
                        toggleCardModal();
                        checkDonate();
                    }}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}>
                        {btnText}</CardBtn>
                <CardRouteBtn 
                    to="/contact"
                    titleText={titleText}>
                        Contact Us</CardRouteBtn>
            </CardModalContainer>
        </>
    )
}

export default CardModal
