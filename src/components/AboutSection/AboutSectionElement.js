import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { motion } from 'framer-motion'

export const AboutContainer = styled.div`

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: fit-content;
    min-height: 80vh;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 40px 24px;
    justify-content: center;
`

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2'
    }
`

export const Column1 = styled(motion.div)`
    margin-bottom: 15px;
    padding: 0 20px;
    grid-area: col1;
`

export const Column2 = styled(motion.div)`
    margin-bottom: 15px;
    padding: 0 20px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 0;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
`

export const Paragraph = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
`

export const ImgWrap = styled.div`
    max-width: 1000px;
    height: 100%;
`

export const Img = styled.img`
    width: 350px;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width:400px) {
        width: 300px;
    }
`

export const SocialMediaRow = styled.div`
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 0 50px 0;
`

export const SocialMediaIcon = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #393232;
    cursor: pointer;
    margin: 0 30px 0 0;

    &:hover{
        color: #2F5D62;
        transition: 0.2s ease-in-out;
    }
`

export const LinkSpan = styled.a`
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 24px;
    text-decoration: underline;
    cursor: pointer;
    color: #393232;

    &:active{
        color: #393232;
    }
    &:hover{
        color: #393232;
    }
    &:visited{
        color: #393232;
    }
`