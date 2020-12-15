import styled, {keyframes} from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

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
    background-color: rgba(0, 0, 0, 0.7);
`
export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){

    }
`
export const ModalContent = styled.div`
    display: ${({openModal}) => (openModal ? 'flex' : 'none')};
    position: fixed;
    z-index: 99;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    justify-content: flex-end;
    width: 70%;
    height: 700px;
    color: #1A61A3;
    background-image: url(${({img}) => (img)});
    background-size: cover;
    border-radius: 10px;

    @media screen and (max-width: 768px){
        position: fixed;
        display: ${({openModal}) => (openModal ? 'block' : 'none')};
        margin: 0 auto;
        width: 95%;
        height: 99%;
        padding-top: 30px;
        background-image: none;
    }
`
export const ModalInfo = styled.div`
    width: 65%;
    height: 500px;
    background-color: whitesmoke;
    align-self: flex-end;   
    margin: 0 20px 30px 0; 
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 10px;
    overflow: hidden visible;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 95%;
        margin: 0;
    }
`
export const CloseModalIcon = styled(CloseIcon)`
    display: none;
    color: black;
    padding: 7px;
    align-self: flex-end;
    cursor: pointer;
    color: #1A61A3;

    @media screen and (max-width: 768px){
        display: flex;
    }
`
// export const ModalContent = styled.div`
//     display: ${({openModal}) => (openModal ? 'flex' : 'none')};
//     position: fixed;
//     z-index: 99;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     flex-direction: column;
//     width: 70%;
//     height: 700px;
//     color: #1A61A3;
//     background-color: whitesmoke;
//     border-radius: 10px;
// `
export const ModalTitle = styled.h2`
    font-size: 25px;
    padding: 10px;
    margin: 10px;
`
export const ModalSubTitle = styled.h3`
    font-size: 20px;
    padding: 10px;
`
export const ModalImg = styled.img`
    width: ${({openModal}) => (openModal ? '100%' : '50%')};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
`
export const ModalText = styled.p`
    font-size: 18px;
    line-height: 1.5;
    margin: 20px 15px;

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