import styled from 'styled-components';

export const EffectsContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #F8F05F;

`

// export const LeftHand = styled.img`
//     width: 200px;
//     margin: 0 auto;
//     position: absolute;
// `

export const Hand = styled.img`
    width: 50%;
    /* position: absolute; 
    left: 30%; */
    margin-top: 20px;

    @media screen and (max-width: 768px){
        left: 10%;
        width: 80%;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #F8F05F;
`
export const SectionHeader = styled.h2`
    font-size: 2rem;
    padding: 10px;;
    margin-left: 20px;
`
export const SubHeaderText = styled.p`
    line-height: 1.5;
    font-size: 1.3rem;
    max-width: 700px;
    padding: 20px;
    margin-left: 30px;
`
export const SectionImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
export const DonateImg = styled.img`
    width: 100%;
    position: absolute;
`

export const DonateCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: auto;
    background-color: #FFFAFA;
    border: solid black 1px;
    position: relative;
    margin: 60px 80px;

    @media screen and (max-width: 768px){
        margin: 0 auto;
        width: 70%;
        margin-top: 175px;
        height: auto;
    }
    
`

export const CardHeader = styled.h4`
    font-size: 3rem;
    padding: 5px;
    margin: 10px
`

export const CardText = styled.p`
    line-height: 1.5;
    padding: 5px;
    margin: 15px;
    font-size: 1.5rem;
`

export const CardBtn = styled.button`
    width: 300px;
    background-color: #3D6BAC;
    color: #FFFAFA;
    height: 50px;
    border-radius: 5px;
    font-size: 1.5rem;
    text-shadow: 2px 2px black;
    margin-bottom: 10px;
    align-self: center;

    @media screen and (max-width: 768px){
        height: 60px;
        width: 100%;
        font-size: 1.2rem;
        background-color: #3D6BAC;
        color: #FFFAFA;
        margin-bottom: 0;
    }
`
