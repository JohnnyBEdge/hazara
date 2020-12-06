import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Modal = styled.div`
    width: 90%;
    height: 90%;
    background-color: red;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    transition: 0.3s ease-in-out;
    opacity: ${({openDonate}) => (openDonate ? '100%' : '0')};
    left: ${({openDonate}) => (openDonate ? '0' : '-100%')};
`