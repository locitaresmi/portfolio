import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { motion } from 'framer-motion'

export const ProjectContainer = styled.div`
    
    @media screen and (max-width: 768px) {
        padding: 20px 0;
    }
`
export const ProjectWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: fit-content;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const ProjectRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2'
    }
`

export const ProjectColumn1 = styled(motion.div)`
    margin-bottom: 15px;
    padding: 0 20px;
    grid-area: col1;
`

export const ProjectColumn2 = styled(motion.div)`
    margin-bottom: 15px;
    padding: 0 20px;
    grid-area: col2;
`

export const ProjectYear = styled.p`
    color: #E48257;
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const ProjectTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: 'Playfair Display', serif;
`

export const ProjectIssuer = styled.p`
`

export const ImgWrap = styled.div`
    width: 700px;
    height: 300px;
    cursor: pointer;
    position: relative;

    @media screen and (max-width: 950px) {
        width: 500px;
        height: auto;
    }

    @media screen and (max-width: 680px) {
        width: 430px;
        height: auto;
    }

    @media screen and (max-width: 480px) {
        width: 350px;
        height: auto;
    }

    @media screen and (max-width: 400px) {
        width: 300px;
        height: auto;
    }
`

export const ProjectImg = styled.img`
    width: 100%;
    margin: 0;
    padding: 0;
    height: inherit;
`

export const ImgOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 700px;
    height: 300px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s;

    @media screen and (max-width: 950px) {
        width: 500px;
        height: 214.29px;
    }

    @media screen and (max-width: 680px) {
        width: 430px;
        height: 184.28px;
    }

    @media screen and (max-width: 480px) {
        width: 350px;
        height: 150px;
    }

    @media screen and (max-width: 400px) {
        width: 300px;
        height: 129px;
    }

    &:hover{
        opacity: 1;
    }
`
export const ProductName = styled.p`
    color: white;
    margin-bottom: 10px;
    line-height: 1.1;
`

export const ProductDescription = styled.p`
    text-align: center;
    color: white;
    width: 70%;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 40px;

    @media screen and (max-width: 950px) {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`

export const AdditionalDescription = styled.p`
    color: white;
    opacity: 0.8;
`

export const ProjectLink = styled(LinkR)``