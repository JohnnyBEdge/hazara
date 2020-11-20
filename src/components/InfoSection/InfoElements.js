import styled from 'styled-components';

export const InfoContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? 'red' : 'blue')};
    background: whitesmoke;
    height: 100vh;
    display: flex;

    @media screen and (max-width: 768px){
        padding: 100px 0;
        height: 100%;
    }
`
export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    justify-content: center;
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax()(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`:`'col1 col2'`)};

    @media screen and (max-width: 768px){
        //
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col1'`: `'col1 col1' 'col2 col2'`)};
    }
`
export const Col1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Col2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 10px;
`
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const SectionHeading = styled.h2`
    margin-bottom: 24px;
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 600;
    color: #0c0c0c;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1.5rem;
    line-height: 1.5;
    color: #0c0c0c;
`
export const BtnWrap = styled.div`
    display: ${({displayBtn}) => (displayBtn ? 'flex' : 'none')};
    justify-content: center;
`
export const ModalBtn = styled.button`
    display: ${({displayBtn}) => (displayBtn ? 'flex' : 'none')};
    align-items: center;
    border-radius: 50px;
    background-color: rgb(14, 214, 14);
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media screen and (max-width: 768px){
        display: none;
    }
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        font-size: 1.2rem;
    }
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

    @media screen and (max-width: 768px){
        max-width: 100%;
    }
`
export const Img = styled.img`
    width: 80%;
    margin: 0 0 10px 30px;
    padding-right: 0;

    @media screen and (max-width: 768px){
        width: 100%;
        margin: 0 auto;
    }
`