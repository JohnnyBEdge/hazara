import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    transition: 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${({openDonate}) => (openDonate ? '100%' : '0')};
    left: ${({openDonate}) => (openDonate ? '0' : '-100%')};
    width: 100%;
    height: 100%;
`
export const Modal = styled.div`
    width: 90%;
    height: 80%;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
`
export const CloseModalIcon = styled(CloseIcon)`
    color: black;
    padding-top: 10px;
    padding-right: 10px;
    align-self: flex-end;
    cursor: pointer;
`