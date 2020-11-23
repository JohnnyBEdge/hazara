import styled from 'styled-components';

export const HowToHelpContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 800px;
    width: 100%;
    background-color: #1961A3;
`
export const SectionHeader = styled.h2`
    font-size: 25px;
    color: whitesmoke;
    align-self: center;
    margin: 40px 0 20px 0;
`
// export const SubHeaderText = styled.p`
//     font-size: 1.3rem;
//     color: whitesmoke;
//     align-self: center;
//     width: 500px;
//     padding: 10px;

// `
export const CardContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
align-items: center;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    min-height: 350px;
    border-radius: 3px;
    background-color: whitesmoke;

    &:hover {
        box-shadow: 0 0 4px 4px rgba(255,255,255,.25);
    }
`
export const CardImg = styled.img`
    height: 200px;
    align-self: center;
    padding: 5px;
`
export const CardTitle = styled.h3`
    align-self: center;
    text-align: center;
    font-size: 1.5rem;
    padding: 5px 0px;
`
export const CardDesc = styled.p`
    width: 95%;
    line-height: 1.5;
    align-self: center;
    text-align: center;
    font-size: 16px;
    padding: 0 8px;
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
    margin: 10px 0px;
    justify-self: flex-end;

    &:hover{
        transition: all 0.2s ease-in-out;
        font-weight: bold;
        transform: scale(1.1);
    }
`

