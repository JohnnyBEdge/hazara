import styled from 'styled-components';

export const WhatWeDoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    background-color: #FFFAFA;

`;

export const SectionHeader = styled.h2`
    font-size: 2rem;
    margin: 10px;
`;

export const SectionPhoto = styled.img`
    width: 100%;
    margin: 0;
    padding: 0;
`;

export const ListHeader = styled.h3`
    margin: 20px;
    font-size: 1.5rem;
`;

export const MissionList = styled.ul`
    column-count: 2;
    column-gap: 50px;
    max-width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 768px){
        column-count: 1;
    }
`;

export const MissionItem = styled.li`
    list-style-type: circle;
    font-size: 1rem;
    line-height: 1.5;

`;

export const LearnMoreBtn = styled.button`
    width: 300px;
    background-color: #3D6BAC;
    color: #FFFAFA;
    height: 40px;
    border-radius: 5px;
    font-size: 1.3rem;
    text-shadow: 2px 2px black;
    align-self: flex-end;
    margin: 20px;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 40px;
        font-size: 1.2rem;
        background-color: #3D6BAC;
        color: #FFFAFA;
        margin: 10px 0
    }
`;