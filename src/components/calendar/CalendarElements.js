import styled from 'styled-components'

export const CalContainer = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  border: solid black 2px;
  border-radius: 3px;
  background: whitesmoke;
`
export const EventModal = styled.div`
  /* width: 300px;
  height: 200px;
  background-color: whitesmoke;
  border: solid black 2px;
  display: {({open}) => open ? 'flex' : 'none'}; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: 0.3s ease-in-out;
  background-color: whitesmoke;
  border: solid black 2px;
  opacity: ${({open}) => (open ? '100%' : '0')};
  left: ${({open}) => (open ? '0' : '-100%')};
  width: 300px;
  height: 300px;
`
export const Title = styled.h3`

`
export const Date = styled.p`

`
export const Desc = styled.p`

`