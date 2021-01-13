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
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 100;
  transition: 0.3s ease-in-out;
  background-color: whitesmoke;
  border: solid black 2px;
  opacity: ${({open}) => (open ? '100%' : '0')};
  /* left: ${({open}) => (open ? '50%' : '-100%')}; */
  /* top: ${({open}) => (open ? '50%' : '-100%')}; */
  transform: translate(-50%, -50%);
  width: auto;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
`
export const Title = styled.h3`
  margin: 10px;
`
export const Date = styled.p`
  margin: 10px;
`
export const Desc = styled.p`
  margin: 10px;
  padding: 5px;
`
export const Close = styled.div`
  align-self: flex-end;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
`