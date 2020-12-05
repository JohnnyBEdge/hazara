import styled from 'styled-components'

export const CalendarContainer = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #FFC659;
    padding-bottom: 50px;
    
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const PageTitle = styled.h2`
    font-size: 3rem;
    padding: 20px;
    margin-top: 20px;
`
