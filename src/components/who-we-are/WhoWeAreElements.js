import styled from 'styled-components';

export const WhoWeAreContainer = styled.div`
    background-color: whitesmoke;
    height: 800px;
    width: 100%;
    max-width: 1920px;
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
export const LeftSide = styled.div`
    height: 100%;
    width: 60%;
    background-color: #1961A3;
    display: flex;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 600px;
        justify-content: center;
    }
`
export const RightSide = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 768px){
        width: 100%;
        height: 600px;
    }
`
export const InfoContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    color: whitesmoke;
    margin-left: 20px;
`

export const SectionHeader = styled.p`
    font-size: 20px;
    padding: 20px;
    max-width: 200px;
`

export const Title = styled.h2`
    text-align: center;
    font-size: 48px;
`

export const Info = styled.p`
    font-size: 20px;
    padding: 10px;

    @media screen and (max-width: 768px){
        margin: 20px 0 30px 0;
    }
`
export const GroupPhoto = styled.img`
    width: 100%;
    /* min-width: 500px; */
    margin-left: -90px;
    box-shadow: 3px 3px 16px 0px rgba(0,0,0,0.75);
    @media screen and (max-width: 768px){
        /* object-fit: fill; */
        margin-left: 0;
    }
`
export const LearnMoreBtn = styled.button`
    width: 150px;
    height: 50px;
    background-color: transparent;
    border: solid whitesmoke 1px;
    color: whitesmoke;
    font-size: 18px;
    margin-top: 15px;
    align-self: center;
    cursor: pointer;

    @media screen and (max-width:768px){
        width: 90%;
        height: 70px;
        font-size: 25px;
    }
`