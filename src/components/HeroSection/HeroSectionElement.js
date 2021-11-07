import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { motion } from 'framer-motion'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 70vh;
    position: relative;
    z-index: 1;
`

export const HeroContent = styled(motion.div)`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    text-align: center;
`

export const HeroLink = styled(LinkR)`
    margin-top: 24px;
    color: #393232;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroSpan = styled(motion.span)`

`

export const LinkContainer = styled(motion.div)`
    margin-top: 20px;
`