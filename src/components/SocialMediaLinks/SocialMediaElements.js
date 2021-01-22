import styled from 'styled-components';

export const SocialContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;
`
export const Icon = styled.a`
margin: 5px 10px;
cursor: pointer;
text-decoration: none;
color: black;
&:hover {
    transform: scale(1.1)
}

`