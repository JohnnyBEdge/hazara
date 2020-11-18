import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'whitesmoke' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10; 
    transition: 0.8s all ease;
`

export const NavbarContainer = styled.div`
    display: flex;
    align-self: center;
    justify-content: space-between;
    height: 50px;
    z-index: 1;
    width: 100%;
    margin: 0 50px;
    max-width: 1100px;
`
export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    margin: 5px;
    height: 60px;
`
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
        color: ${({scrollNav}) => (scrollNav ? '#00539F' : 'whitesmoke')};
        /* background: #3D6BAC; */
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
    height: 80px;
    padding-bottom:2px;
    text-shadow: 0px 2px 3px grey;
`;

export const NavLink1 = styled(LinkS)`
    color: ${({scrollNav}) => (scrollNav ? '#00539F' : 'whitesmoke')};
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    padding: 0 1rem;
    cursor: pointer;
    font-size: 1rem;
    &.active{
        border-bottom: 3px solid rgb(14, 214, 14);
        color: yellow;
    }
    &:hover{
        color: #F9C910;
        transition: 0.3s all ease;
        transform: scale(1.2)
    }
`;
export const NavLink2 = styled(LinkR)`
    color: ${({scrollNav}) => (scrollNav ? '#00539F' : 'whitesmoke')};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover{
        color: #F9C910;
        transition: 0.3s all ease;
        transform: scale(1.2)
    }
    &.active {
        border-bottom: 3px solid #01bf71;
        color: yellow;
    }
`;

export const DonateBtn = styled.button`
    border-radius: 50px;
    background-color: #F9C910;
    color: #00539F;
    //	Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line. The text continues on the same line until a <br> tag is encountered
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 1rem;
    /* outline: none; */
    border: solid black 1px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    height: 40px;

    &:hover{
        transition: all 0.2s ease-in-out;
        font-weight: bold;
        color: #010606;
        transform: scale(1.2);
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`