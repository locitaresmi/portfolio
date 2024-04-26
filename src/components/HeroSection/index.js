import React from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroSpan, LinkContainer, HeroLink } from './HeroSectionElement'

const transition = {
    duration: 0.3,
    // ease: [0.6, 0.01, -0.05, 0.9]
}

const appearUp = {
    initial: {
        opacity: 0,
        y: 40
    },

    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            ...transition
        }
    }
}

const appearDown = {
    initial: {
        opacity: 0,
        y: -10
    },

    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
            ...transition,
            duration: 0.5
        }
    }
}

const HeroSection = () => {

    return (
        <HeroContainer>
            <HeroContent initial="initial" animate='animate' variants={appearUp}>
                <HeroH1>Hi! I’m Wening. I love exploring <HeroSpan initial={{ color:'#393232' }} animate={{ color:'#E48257' }} transition={{ delay: .7 }}>design and practicality</HeroSpan>.</HeroH1>
                <LinkContainer initial="initial" animate='animate' variants={appearDown}>
                    <HeroLink to="/about">Get to know more about me</HeroLink>
                </LinkContainer>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
