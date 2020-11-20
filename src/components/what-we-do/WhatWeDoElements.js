import styled from 'styled-components';

export const WhatWeDoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 800px;
    padding: 10px;
    background-color: #FFC759;
`;
export const InfoContainer = styled.div`
    width: 75%;
    height: 80%;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px){
        width: 90%;
    }
`

export const SectionHeader = styled.p`
    font-size: 25px;
    color: #FFC759;
    text-shadow: 0px 2px 3px lightgray;
    font-weight: 800;
    padding: 20px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }
`

export const ListHeader = styled.h3`
    margin: 20px;
    font-size: 1.5rem;
    font-weight: bolder;
    max-width: 500px;
    text-align: center;
    align-self: center;
`;

export const MissionList = styled.ul`
    column-count: 2;
    column-gap: 50px;
    max-width: 80%;
    margin: 0 auto;
    color: gray;

    @media screen and (max-width: 768px){
        column-count: 1;
    }
`;

export const MissionItem = styled.li`
    list-style-type: circle;
    font-size: 1rem;
    line-height: 1.5;
    @media screen and (max-width: 768px){
        padding: 10px 0;
    }
`;

export const LearnMoreBtn = styled.button`
    width: 150px;
    height: 50px;
    margin: 10px;
    font-size: 18px;
    color: #0c0c0c;
    text-shadow: 0px 2px 3px lightgray;
    background-color: transparent;
    border: solid black 1px;
    align-self: center;
    cursor: pointer;

    @media screen and (max-width:768px){
        width: 80%;
        height: 70px;
        font-size: 25px;
    }
`