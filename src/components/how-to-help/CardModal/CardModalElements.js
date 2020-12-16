import styled, {keyframes} from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

export const CardModalOverlay = styled.div`
    display: ${({openCardModal}) => (openCardModal ? 'flex' : 'none')};
    position: fixed;
    z-index: 90;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.5); */
`

export const CardModalContainer = styled.div`
    display: ${({openCardModal}) => (openCardModal ? 'flex' : 'none')};
    position: fixed;
    z-index: 91;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    justify-content: space-evenly;
    width: 600px;
    min-height: 650px;
    height: auto;
    margin-top: 40px;
    background-color: whitesmoke;
    border-radius: 10px;
    border: solid black 2px;

    @media screen and (max-width: 768px){
      width: 100%;
      height: 100%;
      margin-top: 0;
      overflow: hidden visible;
    }
`
const grow = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Grow = styled.div`
  display: inline-block;
  animation: ${grow} 2s linear;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export const CardModalTitle = styled.h3`
  text-align: center;
  font-size: 25px;
  padding: 10px;
`
export const CardImg = styled.img`
  width: 50%;
  margin: 0 auto;
`
export const CardModalDesc = styled.p`
  padding: 10px;
  text-align: justify;
  font-size: 18px;
  line-height: 1.5;
  margin: 0 20px;
`
export const CardModalListTitle = styled.h4`
  text-align: center;
  font-size: 20px;
  padding: 10px;
`
export const CardModalList = styled.ul`
  column-count: 2;
  text-align: center;

  @media screen and (max-width: 768px){
    margin: 0 10px;
  }
`
export const CardModalListItem = styled.li`
  list-style: none;
  line-height: 2;
`
export const CardBtn = styled.button`
    background-color: #F9C910;
    align-self: center;
    border-radius: 50px;
    text-align: center;
    font-size: 1.2rem;
    height: 45px;
    width: 55%;
    padding: 10px 22px;
    cursor: pointer;
    margin: 20px 0px;
    margin-bottom: 10px;
    justify-self: flex-end;

    &:hover{
        transition: all 0.2s ease-in-out;
        font-weight: bold;
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px){
      width: 100%;
      border-radius: 3px;
      margin-bottom: 0;
      align-self: flex-end;
      height: 55px;
    }
`
export const CloseCardIcon = styled(CloseIcon)`
    display: flex;
    color: black;
    padding: 7px;
    align-self: flex-end;
    cursor: pointer;
`