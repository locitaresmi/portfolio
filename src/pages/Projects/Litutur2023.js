import React from 'react'
import { ProjectContainer, ProjectWrapper, ImageContainer, Image, Sidebar, SidebarMenu, SidebarItem, SidebarLink, TextContainer, ProjectHeading, ProjectParagraph, ProjectRow, TextColumn, ProjectSection, ProjectSubHeading, SidebarHeading, ProjectMainPoints, ContentImageContainer, ImageCaption, LinkSpan } from './ProjectElement'
import Header from '../../images/Litutur Header.webp'
import AwardCeremony from '../../images/Litutur Award.webp'
import ScrollToTop from '../../components/ScrollToTop'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer'
import mediumZoom from 'medium-zoom'
import ImageZoom from './ImageZoom'

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
            ...transition,
            duration: 0.5
        }
    }
}

const appearRight = {
    initial: {
        opacity: 0,
        x: -40
    },

    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.2,
            ...transition,
            duration: 0.5
        }
    }
}

const Finku2023Retention = () => {

    const zoom = React.useRef(mediumZoom({
        margin: 24,
    }))

    return (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: 0.2 }} exit={{ opacity:0 }}>
            <ScrollToTop />
            <ProjectContainer>
                <ProjectWrapper>
                    <ImageContainer>
                        <Image src={Header} />
                    </ImageContainer>
                </ProjectWrapper>
                <ProjectWrapper>
                    <ProjectRow>
                        <Sidebar initial='initial' animate='animate' variants={appearRight}>
                        <SidebarHeading>Outline</SidebarHeading>
                            <SidebarMenu>
                                <SidebarItem>
                                    <SidebarLink to="section1" smooth={true} duration={500} spy={true} exact={true} offset={-110}>About</SidebarLink>
                                </SidebarItem>
                            </SidebarMenu>
                        </Sidebar>
                        <TextColumn initial='initial' animate='animate' variants={appearUp}>
                            <TextContainer>
                                <ProjectHeading>Increasing Literacy Through A Pre-school Reading App</ProjectHeading>
                                <ProjectSection id='section1'>
                                    <ProjectSubHeading>About</ProjectSubHeading>
                                    <ProjectParagraph>In 2023, two friends (Achmad Fikri Adidharma, Hustler; Indri Klarissa Ramadhanti, Hacker) and I (Hipster) designed an AI-based system to help parents introduce literacy to their pre-school-aged children. We came up with this idea after noticing the low literacy rates in Jakarta compared to major cities in neighbouring countries.</ProjectParagraph>
                                    <ProjectParagraph>I was responsible for the design research, where I led the entire research process that formed the basis of this system. I conducted in-depth interviews and quantitative surveys with parents and prospective parents to understand their experiences in preparing their children's education. I also interviewed several child experts to learn more about the behaviour and limitations of young children. Additionally, I conducted a concept test to validate our idea with prospective users.</ProjectParagraph>
                                    <ProjectMainPoints>National Recognition</ProjectMainPoints>
                                    <ProjectParagraph>This system design received a national award from the Ministry of State-Owned Enterprises of the Republic of Indonesia in 2023.</ProjectParagraph>
                                    <ProjectParagraph><LinkSpan href="https://cs.ui.ac.id/2023/10/09/mahasiswa-fasilkom-ui-juarai-ajang-hackathon-fordigi-city-chapter-x-jakarta-dan-fordigi-summit-2023/" target="_blank">Publication Link</LinkSpan></ProjectParagraph>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={AwardCeremony}
                                            alt="Awarding Ceremony"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Awarding Ceremony</ImageCaption>
                                    </ContentImageContainer>
                                </ProjectSection>
                            </TextContainer>
                        </TextColumn>
                    </ProjectRow>
                </ProjectWrapper>
            </ProjectContainer>
            <Footer />
        </motion.div>
    )
}

export default Finku2023Retention
