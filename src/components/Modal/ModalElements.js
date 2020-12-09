import styled, {keyframes} from 'styled-components'

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
    width: 70%;
    height: 700px;
    background-color: whitesmoke;
    border-radius: 10px;
`
export const ModalTitle = styled.h2`

`
export const ModalSubTitle = styled.h3`

`
export const ModalImg = styled.img`
    width: ${({openModal}) => (openModal ? '100%' : '50%')};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const ModalText = styled.p`

`
// const grow = keyframes`
// from {
//   /* transform: rotate(0deg); */
//   transform: scale(0);
// }

// to {
//   transform: scale(1);
//   /* transform: rotate(360deg); */
// }
// `;
// export const Grow = styled.div`
// display: inline-block;
// animation: ${grow} 2s linear ;
// padding: 2rem 1rem;
// font-size: 1.2rem;
// `;