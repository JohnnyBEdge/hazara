import styled, {keyframes} from 'styled-components'

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
    width: 600px;
    height: 750px;
    background-color: whitesmoke;
    border-radius: 10px;
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