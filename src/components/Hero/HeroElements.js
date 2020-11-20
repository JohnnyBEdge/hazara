import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    width: 100%;
    position: relative;
    z-index: 1;
`
export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const HeroContent = styled.div`
    z-index: 3;
    /* max-width: 1920px; */
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    /* white-space: nowrap; */
    align-items: center;
    justify-content: center;
`
export const PageTitle = styled.h1`
    font-size: 5rem;;
    text-align: center;
    color: whitesmoke;
    
    @media screen and (max-width: 768px){
        font-size: 4rem;
        margin-top: 100px;
        text-align: justify;
    }
`
export const PageTitleSubtext = styled.p`
    font-size: 2rem;
    text-align: center;
    color: whitesmoke;
    margin: 0px 40px;

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }
`
export const HeroImg = styled.img`
    object-fit: contain;
    width:100%;
    opacity: .3;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    @media screen and (max-width: 768px){
        height: 100%;
        width: auto;
    }
`