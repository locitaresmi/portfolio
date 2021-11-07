import React from 'react'
import { ProjectContainer, ProjectWrapper, ImageContainer, Image, Sidebar, SidebarMenu, SidebarItem, SidebarLink, TextContainer, ProjectHeading, ProjectParagraph, ProjectRow, TextColumn, ProjectSection, ProjectSubHeading, SidebarHeading, ProjectMainPoints, ContentImage, ContentImageContainer, ProjectList, ProjectListItem, ListSpan, ProjectTrivia, TriviaParagraph } from './ProjectElement'
import Header from '../../images/Twing Header.jpg'
import Interview from '../../images/Twing Interview Process.jpg'
import Process from '../../images/Twing Design Process.jpg'
import Persona from '../../images/Twing Personas.png'
import ExpertReview from '../../images/Twing Expert Review.jpg'
import SurveyResult from '../../images/Twing Survey Result.jpg'
import ScrollToTop from '../../components/ScrollToTop'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer'

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

const Gemastik2021 = () => {

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
                                    <SidebarLink to="section1" smooth={true} duration={500} spy={true} exact={true} offset={-110}>Approaching the problem</SidebarLink>
                                </SidebarItem>
                                <SidebarItem>
                                    <SidebarLink to="section2" smooth={true} duration={500} spy={true} exact={true} offset={-110}>The design process</SidebarLink>
                                </SidebarItem>
                                <SidebarItem>
                                    <SidebarLink to="section3" smooth={true} duration={500} spy={true} exact={true} offset={-110}>Specifying user requirements</SidebarLink>
                                </SidebarItem>
                                <SidebarItem>
                                    <SidebarLink to="section4" smooth={true} duration={500} spy={true} exact={true} offset={-110}>The result</SidebarLink>
                                </SidebarItem>
                                {/* <SidebarItem>
                                    <SidebarLink to="section4" smooth={true} duration={500} spy={true} exact={true} offset={-110}>Key takeaways</SidebarLink>
                                </SidebarItem> */}
                            </SidebarMenu>
                        </Sidebar>
                        <TextColumn initial='initial' animate='animate' variants={appearUp}>
                            <TextContainer>
                                <ProjectHeading>Twing</ProjectHeading>
                                <ProjectParagraph>Twing is a mobile application that aims to increase people’s awareness of Computer Vision Syndrome (CVS) and prevent it from happening. It helps people to stay productive by reducing the unnoticed side-effect of CVS. It generates real-time analytics and suggestions of its user’s behaviour while using the phone.</ProjectParagraph>
                                {/* <ProjectTrivia>
                                    <TriviaParagraph>Twing was designed when my two friends and I were in a competition called GEMASTIK in 2021. It’s a national IT competition held annually by Indonesia’s Ministry of Education, Culture, Research, and Technology for universities student. Our team was selected as the top 20 teams out of more than 750 teams in the UX Design category.</TriviaParagraph>
                                </ProjectTrivia> */}
                                <ProjectParagraph>Twing was designed when my two friends and I were in a competition called GEMASTIK in 2021. It’s a national IT competition held annually by Indonesia’s Ministry of Education, Culture, Research, and Technology for universities student. Our team was selected as the top 20 teams out of more than 700 teams in the UX Design category.</ProjectParagraph>
                                <ProjectList>
                                    <ProjectListItem><ListSpan>Role</ListSpan>: Team Lead, UX Researcher, UI Designer</ProjectListItem>
                                    <ProjectListItem><ListSpan>Duration</ListSpan>: 3 months (July 2021 - September 2021)</ProjectListItem>
                                    <ProjectListItem><ListSpan>Team Size</ListSpan>: 3 people</ProjectListItem>
                                </ProjectList>
                                <ProjectSection id='section1'>
                                    <ProjectSubHeading>Approaching the problem</ProjectSubHeading>
                                    <ProjectMainPoints>Our team identified the problem of users’ behaviour regarding increased phone usage from a survey and several interviews.</ProjectMainPoints>
                                    <ProjectParagraph>The problem emerged after noticing that people’s intensity on the phone had increased significantly in the past few years, primarily because of the Covid-19 pandemic. If previously people used their phone mainly just to have some fun, nowadays they need more time on the phone to either work or communicate. Because of that, people are becoming more at risk of getting CVS, one of the most common health problems that people might get due to high screen time.</ProjectParagraph>
                                    <ProjectParagraph>We conducted an online survey of 175 random Indonesians to know their behaviour when using their phones. Our main reason for conducting this survey was to validate our assumptions about high screen time and people experiencing CVS. It turned out that our assumptions were valid.</ProjectParagraph>
                                    <ContentImageContainer>
                                        <ContentImage src={SurveyResult} />
                                    </ContentImageContainer>
                                    <ProjectParagraph>After that, we conducted several interviews with 10 people to deepen our understanding of the problem. From the interview, we learned that one of the most common reasons people keep experiencing CVS is that they lack consciousness when using their phones, mainly when they open social media or entertainment-related applications. This lack of consciousness leads to increased screen time and, not infrequently, bad postures, leading to CVS.</ProjectParagraph>
                                    <ProjectTrivia>
                                        <TriviaParagraph>Most of the respondents claimed that they have been experiencing CVS. But not all of them are aware of what’s happening. They just knew that it interfered with their daily life, even when they didn’t use their phones.</TriviaParagraph>
                                    </ProjectTrivia>
                                    <ContentImageContainer>
                                        <ContentImage src={Interview} />
                                    </ContentImageContainer>
                                </ProjectSection>
                                <ProjectSection id='section2'>
                                    <ProjectSubHeading>The design process</ProjectSubHeading>
                                    <ProjectMainPoints>We used the User-Centered Design (UCD) methodology and approach during the whole process.</ProjectMainPoints>
                                    <ProjectParagraph>The User-Centered Design methodology was used to guide us through the design process. We tried to keep users’ participation as an essential part of the journey to match their needs and fulfil their expectations. To do that, we used several frameworks to help us throughout the whole process, including tree testing, card sorting, usability testing, and SUS questionnaires.</ProjectParagraph>
                                    <ContentImageContainer>
                                        <ContentImage src={Process} />
                                    </ContentImageContainer>
                                    <ProjectParagraph>We categorised the users into two groups of personas based on the survey and interview that we’ve conducted earlier. The first group represents people who mainly use their phones to fill their free time. The second group represents people who mainly use their phones to communicate or do other work-related activities. These two groups were our two independent sample groups for the remaining steps.</ProjectParagraph>
                                    <ContentImageContainer>
                                        <ContentImage src={Persona} />
                                    </ContentImageContainer>
                                </ProjectSection>
                                <ProjectSection id='section3'>
                                    <ProjectSubHeading>Specifying user requirements</ProjectSubHeading>
                                    <ProjectMainPoints>Our solution was to develop an integrated notification system that would notify users if they didn’t use their phones properly. Users and experts from different fields have helped us to evaluate this solution.</ProjectMainPoints>
                                    <ProjectParagraph>Based on our previous findings, we decided to develop a solution to help people maintain their awareness when using their phones. The solution was implemented with an integrated notification system that came with the application. The system will notify the user at a certain time and conditions, precisely when the phone isn’t being used properly (according to health recommendations for CVS prevention). The conditions include such factors as viewing distance, brightness contrast, time off from phone, etc.</ProjectParagraph>
                                </ProjectSection>
                                <ProjectSection id='section4'>
                                    <ProjectSubHeading>The result</ProjectSubHeading>
                                    <ProjectMainPoints>Our solution was to develop an integrated notification system that would notify users if they didn’t use their phones properly. Users and experts from different fields have helped us to evaluate this solution.</ProjectMainPoints>
                                    <ProjectParagraph>Based on our previous findings, we decided to develop a solution to help people maintain their awareness when using their phones. The solution was implemented with an integrated notification system that came with the application. The system will notify the user at a certain time and conditions, precisely when the phone isn’t being used properly (according to health recommendations for CVS prevention). The conditions include such factors as viewing distance, brightness contrast, time off from phone, etc.</ProjectParagraph>
                                    <ProjectTrivia>
                                        <TriviaParagraph>Most respondents said that the one thing that could distract them from their phones when they lose consciousness, besides their parent’s scold, is push notifications, like Google Calendar’s.</TriviaParagraph>
                                    </ProjectTrivia>
                                    <ProjectParagraph>We evaluated our solution using usability testing for ten people from both personas. We also gathered feedback from three experts from different fields of study that correspond with our solution, including a UX researcher, an ophthalmologist, and a psychologist. The evaluation process was conducted two times, in the first and second iteration.</ProjectParagraph>
                                    <ContentImageContainer>
                                        <ContentImage src={ExpertReview} />
                                    </ContentImageContainer>
                                    <ProjectParagraph>From this journey, I learned a lot of new things, mainly because we didn’t win the competition. But I’m glad that I’ve found the joy in doing research. Here are some of the main takeaways that I’ve learned.</ProjectParagraph>
                                    <ProjectList>
                                        <ProjectListItem><ListSpan>User participation and feedback are mandatory, but the researcher is the one who has control over his research.</ListSpan> I was quite overwhelmed at first because our team received a lot of feedback from our users. Knowing what to put and what not to put into the design is necessary.</ProjectListItem>
                                        <ProjectListItem><ListSpan>Assumptions must be validated</ListSpan> (or at least supported). We did a lot of brainstorming throughout the journey, resulting in many assumptions about the solution, which we thought was perfect for the user. That kind of thought could lead to biases.</ProjectListItem>
                                    </ProjectList>
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

export default Gemastik2021
