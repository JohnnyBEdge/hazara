import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const FooterWrapper = styled.div`
    width: 100%;
    background-color: whitesmoke;
    border-top: solid black 1px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px){
        text-align: center;
    }

`
export const SectionTitle = styled.h2`
    font-size: 2rem;
    /* border-bottom: solid #FFFAFA 2px; */
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
`
export const ListTitle = styled.h4`
    font-size: 1.1rem;
    text-align: center;
    padding-top: 5px;
`
export const ListsContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        margin-top: 10px;

    }
`
export const Logo = styled.img`
    width: 200px;
    margin-right: 30px;
`
export const List = styled.ul`
    margin-right: 50px;

    @media screen and (max-width: 768px){
        margin: 20px;

    }
`
export const ListContainer = styled.div`
    display: flex;
`
export const ResourceContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ListItem = styled.li`
    list-style: none;
    margin-top: 10px;
    margin-left:0;
    font-size: .9rem;
`
export const AdminLink = styled(LinkR)`

`

export const Signature = styled.a`
    font-size: .8rem;
    width: 100%;
    text-align: center;
    padding: 20px;
`
