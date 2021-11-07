import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: fit-content;
    position: relative;
    z-index: 1;
`

export const FooterWrapper = styled.div`
    padding: 0 24px;
    margin: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1100px;
`

export const SocialMedia = styled.div`
    display: flex;
    /* align-items: center; */
    /* justify-content: space-between; */
    height: 3.5vh;
`
export const SocialMediaIcon = styled(LinkR)`
    /* align-items: center;
    justify-content: center; */
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #393232;
    cursor: pointer;
    margin: 0 30px 50px 0;

    &:hover{
        color: #2F5D62;
        transition: 0.2s ease-in-out;
    }
`

export const Trademark = styled.p`

`