import styled from 'styled-components'

export const ModalOverlay = styled.div`
    display: ${({openModal}) => (openModal ? 'flex' : 'none')};
    position: fixed;
    z-index: 90;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`
export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalContent = styled.div`
    display: ${({openModal}) => (openModal ? 'flex' : 'none')};
    position: fixed;
    z-index: 99;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    width: 600px;
    height: 700px;
    background-color: whitesmoke;
`
export const ModalTitle = styled.h2`

`
export const ModalSubTitle = styled.h3`

`
export const ModalImg = styled.img`
    width: 50%;
`
export const ModalText = styled.p`

`
