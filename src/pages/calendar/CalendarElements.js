import styled from 'styled-components'

export const CalendarContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F8F05F;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const PageTitle = styled.h2`
    font-size: 3rem;
    padding: 20px;
    margin-top: 20px;
`