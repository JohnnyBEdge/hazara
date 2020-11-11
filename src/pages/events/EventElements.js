import styled from 'styled-components'
// import CalendarList from '../../components/calendar/CalendarList'

export const CalendarContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F8F05F;
    
    /* @media screen and (max-width: 768px){
        width: 400px;
    } */
`
export const PageTitle = styled.h2`
    font-size: 3rem;
    padding: 20px;
    margin-top: 20px;
`

// export const EventsList = styled.ul`
//     display: none;
    
//     @media screen and (max-width: 768px){
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         height: auto;
//         margin-top: 30px;
//         margin-bottom: 50px;
//         width: 100%;
//     }
// `
// export const Event = styled.li`
//     text-decoration: none;
//     font-size: 1.5rem;
// `