import styled from 'styled-components';

export const WhoWeAreContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #F8F05F;
    padding-top: 10%;

    @media screen and (max-width: 768px){
        flex-direction: column;
        /* width: 100%; */
        justify-content: center;
        align-items: center;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
`

export const Intro = styled.p`
    font-size: 20px;
    font-family: 'Happy Monkey', cursive;
    padding: 20px;

`

export const Title = styled.h1`
    font-size: 3rem;
    padding: 10px;
`

export const Info = styled.p`
    font-size: 20px;
    font-family: 'Happy Monkey', cursive;
    padding: 10px;

`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;

`

export const GroupPhoto = styled.img`
    max-width: 500px;
    width: 90%;
    border: solid white 4px;
    border-radius: 5px;
    margin: 0 auto;
    box-shadow: 3px 3px 16px 0px rgba(0,0,0,0.75);
`