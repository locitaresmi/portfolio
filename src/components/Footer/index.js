import React from 'react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FooterContainer, FooterWrapper, SocialMedia, SocialMediaIcon, Trademark } from './FooterElement'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
            <SocialMedia>
                <SocialMediaIcon to={{ pathname: "https://www.linkedin.com/in/locitaresmi/" }} target="_blank">
                    <FaLinkedin />
                </SocialMediaIcon>
                <SocialMediaIcon to={{ pathname: "mailto:locitaresmi@gmail.com" }} target="_top">
                    <FaEnvelope />
                </SocialMediaIcon>
            </SocialMedia>
            <Trademark>© 2021 Wening Dyah Locitaresmi</Trademark>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
