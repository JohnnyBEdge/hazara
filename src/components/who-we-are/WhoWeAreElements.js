import styled from 'styled-components';

export const WhoWeAreContainer = styled.div`
    background-color: whitesmoke;
    height: 800px;
    width: 100%;
    max-width: 1200px;
    display: flex;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
export const InfoContainer = styled.div`
    height: 100%;
    width: 60%;
    background-color: #1961A3;
    @media screen and (max-width: 768px){
        width: 100%;
        height: 400px;
    }
`
export const ImageContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 768px){
        width: 100%;
        height: 400px;
    }
`

// export const SectionHeader = styled.p`
//     font-size: 20px;
//     /* font-family: 'Happy Monkey', cursive; */
//     padding: 20px;

// `

// export const Title = styled.h1`
//     font-size: 3rem;
//     padding: 10px;
// `

// export const Info = styled.p`
//     font-size: 20px;
//     /* font-family: 'Happy Monkey', cursive; */
//     padding: 10px;
// `



export const GroupPhoto = styled.img`
    width: 100%;
    /* min-width: 500px; */
    margin-left: -150px;
    box-shadow: 3px 3px 16px 0px rgba(0,0,0,0.75);
    @media screen and (max-width: 768px){
        /* object-fit: fill; */
        margin-left: 0;
    }
`