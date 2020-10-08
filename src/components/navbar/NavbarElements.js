import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #3D6BAC;
    height: 125px;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    
    top: 0;
    z-index: 10;  
    
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    align-self: center;
    margin-right: 50px;
    margin-left: 50px;
    justify-content: space-between;
    height: 50px;
    z-index: 1;
    width: 100%;
    
    max-width: 1100px;
    background: #FFFAFA;
`

export const NavLogo = styled(LinkR)`
    color: red;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-wight: bold;
    text-decoration: none;
    background: #FFFAFA;
    width: 100px;
    height: 100px;
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff
        background: #3D6BAC;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    color: black;
    text-decoration: none;
    height: 30px
`

export const NavLinks = styled(LinkS)`
    color: #black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71
    }
`