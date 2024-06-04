import React from 'react'
import { ProjectContainer, ProjectWrapper, ImageContainer, Image, Sidebar, SidebarMenu, SidebarItem, SidebarLink, TextContainer, ProjectHeading, ProjectParagraph, ProjectRow, TextColumn, ProjectSection, ProjectSubHeading, SidebarHeading, ProjectMainPoints, ContentImageContainer, ImageCaption, ProjectList, ProjectListItem, ListSpan, ProjectTrivia, TriviaParagraph } from './ProjectElement'
// import Header from '../../images/Twing Header.webp'
import Header from '../../images/Finku Retention Header.webp'
import Method from '../../images/Finku Retention Methodology.webp'
import Role from '../../images/Finku Retention Role.webp'
import Features from '../../images/Finku Retention Features.webp'
import RecordDuration from '../../images/Finku Retention Transaction Record.webp'
import Impact from '../../images/Finku Retention Impact.webp'
import Report from '../../images/Finku Retention Report.webp'
import Persona2 from '../../images/Twing Persona 2.webp'
import ExpertReview from '../../images/Twing Expert Review.webp'
import SurveyResult from '../../images/Twing Survey Result.webp'
import Brainstorming from '../../images/Twing Brainstorming Process.webp'
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
                                    <SidebarLink to="section1" smooth={true} duration={500} spy={true} exact={true} offset={-110}>Background</SidebarLink>
                                </SidebarItem>
                                <SidebarItem>
                                    <SidebarLink to="section2" smooth={true} duration={500} spy={true} exact={true} offset={-110}>1. Research Planning</SidebarLink>
                                </SidebarItem>
                                <SidebarItem>
                                    <SidebarLink to="section3" smooth={true} duration={500} spy={true} exact={true} offset={-110}>2. Participants Recruitment</SidebarLink>
                                </SidebarItem>
                                <SidebarItem>
                                    <SidebarLink to="section4" smooth={true} duration={500} spy={true} exact={true} offset={-110}>3. Interviews</SidebarLink>
                                </SidebarItem>
                                <SidebarItem>
                                    <SidebarLink to="section5" smooth={true} duration={500} spy={true} exact={true} offset={-110}>4. Analysis</SidebarLink>
                                </SidebarItem>
                                <SidebarItem>
                                    <SidebarLink to="section6" smooth={true} duration={500} spy={true} exact={true} offset={-110}>6. Shareback and Impact</SidebarLink>
                                </SidebarItem>
                                {/* <SidebarItem>
                                    <SidebarLink to="section4" smooth={true} duration={500} spy={true} exact={true} offset={-110}>Key takeaways</SidebarLink>
                                </SidebarItem> */}
                            </SidebarMenu>
                        </Sidebar>
                        <TextColumn initial='initial' animate='animate' variants={appearUp}>
                            <TextContainer>
                                <ProjectHeading>Uncovering the Cause of Low Retention in a Personal Financial Management App</ProjectHeading>
                                <ProjectSection id='section1'>
                                    <ProjectSubHeading>Background</ProjectSubHeading>
                                    <ProjectParagraph>Finku was facing a significant drop in power user retention after the first week of use. Users who continued to the third and fourth weeks were minimal. These findings indicate a need for deeper insights into user behaviour and expectations.</ProjectParagraph>
                                    <ProjectParagraph>The primary objective was to evaluate if Finku’s features aligned with user behaviour and expectations, and identify areas for improvement to enhance user retention.</ProjectParagraph>
                                    <ProjectMainPoints>My Role</ProjectMainPoints>
                                    <ProjectParagraph>I took on the role of a sole end-to-end researcher. My stakeholders were one Product Lead, a Product Manager, and a Product Designer.</ProjectParagraph>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={Role}
                                            alt="My Role"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Overview of the End-to-End Research Process</ImageCaption>
                                    </ContentImageContainer>
                                    
                                    {/* <ProjectTrivia>
                                        <TriviaParagraph>Most of the respondents claimed that they often experience CVS when using or after using their phones. But not all of them are aware of what’s happening. They just knew that it interfered with their daily life.</TriviaParagraph>
                                    </ProjectTrivia>*/}

                                </ProjectSection>
                                <ProjectSection id='section2'>
                                    <ProjectSubHeading>1. Research Planning</ProjectSubHeading>
                                    <ProjectParagraph>I started an initialisation meeting at the start of the project with stakeholders to dig deeper into the problem and to find out what kind of impact was expected from this research.</ProjectParagraph>
                                    <ProjectMainPoints>After that, I planned on how I will crack the case within a two-week time constraint:</ProjectMainPoints>
                                    <ProjectList>
                                        <ProjectListItem><ListSpan>Usage Data Analysis</ListSpan>: Analyse usage data using Amplitude to understand the behaviour patterns of users who churned and focus on what features they used and their frequency of use.</ProjectListItem>
                                        <ProjectListItem><ListSpan>In-Depth Interviews</ListSpan>: Conduct 30-minute interviews with 10 users who had churned. Aimed to gain qualitative insights into their experiences and pain points.</ProjectListItem>
                                        <ProjectListItem><ListSpan>Benchmarking</ListSpan>: Compare Finku’s features and performance with other leading financial tracking apps.</ProjectListItem>
                                    </ProjectList>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={Method}
                                            alt="Research Methodology"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Research Methodology</ImageCaption>
                                    </ContentImageContainer>
                                    <ProjectMainPoints>I scheduled check-up meetings twice every week with the stakeholders throughout the project for transparency.</ProjectMainPoints>
                                    <ProjectParagraph>My objectives were to ensure:</ProjectParagraph>
                                    <ProjectList>
                                        <ProjectListItem>Stakeholders' expectations were aligned with my research</ProjectListItem>
                                        <ProjectListItem>Stakeholders can empathise more with users by hearing directly the raw testimonials given by users in my interviews</ProjectListItem>
                                    </ProjectList>
                                    </ProjectSection>
                                    <ProjectSection id='section3'>
                                    <ProjectSubHeading>2. Participants Recruitment</ProjectSubHeading>
                                    <ProjectParagraph>I used MoEngage to send out interview invitations to over 100 Finku users who had stopped using the app. Initially, I aimed to interview at least five users per segment to ensure the reliability of the data.</ProjectParagraph> 
                                    </ProjectSection>
                                    <ProjectSection id='section4'>
                                    <ProjectSubHeading>3. Interviews</ProjectSubHeading>
                                    <ProjectParagraph>The main goals of the interview were to:</ProjectParagraph>
                                    <ProjectList>
                                        <ProjectListItem>Understand their background, including demographic info and personal finance management experience</ProjectListItem>
                                        <ProjectListItem>Understand their expectations when they installed Finku</ProjectListItem>
                                        <ProjectListItem>Understand their experience when using the features</ProjectListItem>
                                    </ProjectList>
                                    <ProjectParagraph>I stopped reaching out to people for interviews after the answers I got were saturated.</ProjectParagraph>
                                    </ProjectSection>
                                    <ProjectSection id='section5'>
                                    <ProjectSubHeading>4. Analysis</ProjectSubHeading>
                                    <ProjectTrivia>
                                        <TriviaParagraph>My analysis revealed that many users' expectations of Finku's manual transaction tracker weren't being met. They hoped for more a seamless way to record their finances in comparison to the existing methods that were available.</TriviaParagraph>
                                    </ProjectTrivia>
                                    <ProjectMainPoints>User Expectations and Behaviour:</ProjectMainPoints>
                                    <ProjectList>
                                        <ProjectListItem>Users primarily expected to use Finku for its financial tracking features</ProjectListItem>
                                        <ProjectListItem>Manual financial tracking was the most frequently used feature, as many users still used cash for transactions</ProjectListItem>
                                    </ProjectList>
                                    <ProjectMainPoints>User Experience:</ProjectMainPoints>
                                    <ProjectList>
                                        <ProjectListItem>Most users were new to financial management and found Finku’s interface to be non-intimidating and beginner-friendly</ProjectListItem>
                                        <ProjectListItem>Users found the manual financial tracking process to be complex and time-consuming, leading to frustration and eventual churn</ProjectListItem>
                                    </ProjectList>
                                    <ContentImageContainer>
                                    <ImageZoom
                                            src={Features}
                                            alt="Finku Retention Features"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Feature Usage Analysis</ImageCaption>
                                    </ContentImageContainer>
                                    <ProjectMainPoints>Additional Analysis:</ProjectMainPoints>
                                    <ProjectParagraph>Further evaluation confirmed that Finku’s manual financial tracking was slower compared to competitors which contributed significantly to user dissatisfaction.</ProjectParagraph>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={RecordDuration}
                                            alt="Finku Transaction Record's Duration in Comparison to Other Players"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Transaction Record's Duration in Comparison to Other Players</ImageCaption>
                                    </ContentImageContainer>
                                </ProjectSection>
                                <ProjectSection id='section6'>
                                    <ProjectSubHeading>Shareback and Impact</ProjectSubHeading>
                                    <ProjectMainPoints>I compiled a comprehensive report and discussed the findings with stakeholders, highlighting user pain points and areas for improvement.</ProjectMainPoints>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={Report}
                                            alt="Research Report"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Research Report</ImageCaption>
                                    </ContentImageContainer>
                                    <ProjectMainPoints>The research results in the development of two of Finku's major features.</ProjectMainPoints>
                                    <ProjectParagraph>It led to the simplification of Finku’s manual financial tracking feature that makes it twice as fast. Additionally, the research inspired the development and launch of an Optical Character Recognition (OCR) feature, which simplified transaction recording and further enhanced the user experience.</ProjectParagraph>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={Impact}
                                            alt="The Launch of Two New Features"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>The Launch of Two New Features</ImageCaption>
                                    </ContentImageContainer>
                                    <ProjectParagraph>Through thorough evaluative and strategic research, I identified critical areas for improvement in Finku’s features.</ProjectParagraph>
                                    <ProjectTrivia>
                                        <TriviaParagraph>By addressing user pain points and aligning the app’s functionalities with user expectations, we successfully increased retention rates for W3-W4 by over 40% and improved overall user satisfaction.</TriviaParagraph>
                                    </ProjectTrivia>
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
