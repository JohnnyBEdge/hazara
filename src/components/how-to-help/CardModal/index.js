import React from 'react';
import {CardModalOverlay, CardModalContainer,
    CardModalTitle, CardModalDesc, CardModalListTitle,
    CardModalList, CardModalListItem, CardBtn, CardImg,
    CloseCardIcon, CardRouteBtn
} from './CardModalElements';

const CardModal = ({
    openCardModal,toggleCardModal, titletext, fullDesc,listTitle, listItems, 
    btnText, img, btnLink, togglePaypal, routeBtn, p2, p3 }) => {

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
                <CardModalTitle>{titletext}</CardModalTitle>
                <CardImg src={img}/>
                <CardModalDesc>{fullDesc}</CardModalDesc>
                {p2 ? <CardModalDesc>{p2}</CardModalDesc> : ''}
                {p3 ? <CardModalDesc>{p3}</CardModalDesc> : ''}
                <CardModalListTitle>{listTitle}</CardModalListTitle>
                <CardModalList>
                    {listItem}
                </CardModalList>

                {routeBtn ? 
                    <CardRouteBtn 
                    to="/contact"
                    titletext={titletext}>
                        Contact Us</CardRouteBtn>
                    : 

                    <CardBtn 
                        titletext={titletext}
                        to="donate"
                        onClick={() => {
                            toggleCardModal();

                        }}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                            {btnText}</CardBtn>}

            </CardModalContainer>
        </>
    )
}

export default CardModal
