import React from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, Heading, Paragraph, ImgWrap, Img, LinkSpan } from './AboutSectionElement'
// import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Photo from '../../images/Photo.jpg'

const transition = {
    duration: 0.3,
    ease: [0.6, 0.01, -0.05, 0.9]
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

const appearFade = {
    initial: {
        opacity: 0,
    },

    animate: {
        opacity: 1,
        transition: {
            delay: 0.2,
            ...transition,
            duration: 0.6
        }
    }
}

const AboutSection = () => {
    return (
        <AboutContainer>
            <AboutWrapper>
                <AboutRow>
                    <Column1 initial="initial" animate='animate' variants={appearFade}>
                        <TextWrapper>
                            <Heading>Hello!</Heading>
                            <Paragraph>Hello! I’m a third-year information system student and a junior UX researcher. I’m passionate about making people’s lives better and easier through technology. UX research, for me,  is the right place to channel my passion.</Paragraph>
                            <Paragraph>This website is intended to showcase my UX research experience. There’s still a lot of room for improvement in my previous projects, so any feedbacks are super welcomed (and needed!). Reach out to me via <LinkSpan href="https://www.linkedin.com/in/locitaresmi/" target="_blank">my LinkedIn</LinkSpan> or <LinkSpan href="mailto:locitaresmi@gmail.com">email me directly to locitaresmi@gmail.com</LinkSpan>.</Paragraph>
                        </TextWrapper>
                        {/* <SocialMediaRow>
                            <SocialMediaIcon to={{ pathname: "https://www.linkedin.com/in/locitaresmi/" }} target="_blank">
                                <FaLinkedin />
                            </SocialMediaIcon>
                            <SocialMediaIcon to={{ pathname: "mailto:locitaresmi@gmail.com" }} target="_top">
                                <FaEnvelope />
                            </SocialMediaIcon>
                        </SocialMediaRow> */}
                    </Column1>
                    <Column2 initial="initial" animate='animate' variants={appearUp}>
                        <ImgWrap>
                            <Img src={Photo} alt="My photo!"/>
                        </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutSection
