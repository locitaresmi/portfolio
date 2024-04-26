import React from 'react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FooterContainer, FooterWrapper, SocialMedia, SocialMediaIcon, Trademark } from './FooterElement'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
            <SocialMedia>
                <SocialMediaIcon href='https://www.linkedin.com/in/locitaresmi/' target="_blank">
                    <FaLinkedin />
                </SocialMediaIcon>
                <SocialMediaIcon href='mailto:locitaresmi@gmail.com' target="_top">
                    <FaEnvelope />
                </SocialMediaIcon>
            </SocialMedia>
            <Trademark>© Wening Dyah Locitaresmi 2024</Trademark>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
