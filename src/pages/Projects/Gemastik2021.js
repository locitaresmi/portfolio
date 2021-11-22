import React from 'react'
import { ProjectContainer, ProjectWrapper, ImageContainer, Image, Sidebar, SidebarMenu, SidebarItem, SidebarLink, TextContainer, ProjectHeading, ProjectParagraph, ProjectRow, TextColumn, ProjectSection, ProjectSubHeading, SidebarHeading, ProjectMainPoints, ContentImageContainer, ImageCaption, ProjectList, ProjectListItem, ListSpan, ProjectTrivia, TriviaParagraph } from './ProjectElement'
import Header from '../../images/Twing Header.webp'
import Interview from '../../images/Twing Interview Process.webp'
import Process from '../../images/Twing Design Process.webp'
import Persona1 from '../../images/Twing Persona 1.webp'
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
                                    <SidebarLink to="section1" smooth={true} duration={500} spy={true} exact={true} offset={-110}>Understanding the problem</SidebarLink>
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
                                <ProjectParagraph>Twing was designed when my two friends and I were in a competition called GEMASTIK in 2021. It’s a national IT competition held annually by Indonesia’s Ministry of Education, Culture, Research, and Technology for university students. Our team was selected as the top 20 teams out of more than 700 teams in the UX Design category.</ProjectParagraph>
                                <ProjectList>
                                    <ProjectListItem><ListSpan>Role</ListSpan>: Team Lead, UX Researcher, UI Designer</ProjectListItem>
                                    <ProjectListItem><ListSpan>Duration</ListSpan>: 3 months (July 2021 - September 2021)</ProjectListItem>
                                    <ProjectListItem><ListSpan>Team Size</ListSpan>: 3 people</ProjectListItem>
                                    <ProjectListItem><ListSpan>Tools</ListSpan>: Figma, Figma Jam, Google Docs, Google Forms, Google Meets, Google Sheets, Framer, Maze, UXTweak, Zoom</ProjectListItem>
                                </ProjectList>
                                <ProjectSection id='section1'>
                                    <ProjectSubHeading>Understanding the problem</ProjectSubHeading>
                                    <ProjectMainPoints>Our team identified the problem of users’ behaviour regarding increased phone usage from surveys and interviews.</ProjectMainPoints>
                                    <ProjectParagraph>The problem emerged after noticing that people’s intensity on the phone had increased significantly in the past few years, primarily because of the Covid-19 pandemic. If previously people used more time on their phones for entertainment purposes, they now need more time to work or communicate. Because of that, people are becoming more at risk of getting CVS, one of the most common health problems people might get due to high screen time that affects their productivity on their phones.</ProjectParagraph>
                                    <ProjectParagraph>We conducted an online survey of 175 random Indonesians to know their behaviour when using their phones. Our main reason for conducting this survey was to validate our assumptions about high screen time and people experiencing CVS. It turned out that our assumptions were valid. You can see the result from the image below.</ProjectParagraph>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={SurveyResult}
                                            alt="Twing Survey Result"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Twing Survey Result</ImageCaption>
                                    </ContentImageContainer>
                                    <ProjectParagraph>After the survey, we conducted several interviews with ten people to deepen our understanding of the problem. From the interview, we learned that one of the most common reasons people keep experiencing CVS is that they lack consciousness when using their phones, mainly when they open social media or entertainment-related applications. This lack of consciousness leads to increased screen time and, not infrequently, bad postures, leading to CVS.</ProjectParagraph>
                                    <ProjectTrivia>
                                        <TriviaParagraph>Most of the respondents claimed that they often experience CVS when using or after using their phones. But not all of them are aware of what’s happening. They just knew that it interfered with their daily life.</TriviaParagraph>
                                    </ProjectTrivia>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={Interview}
                                            alt="Twing User Interview Process"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Twing User Interview Process</ImageCaption>
                                    </ContentImageContainer>
                                </ProjectSection>
                                <ProjectSection id='section2'>
                                    <ProjectSubHeading>The design process</ProjectSubHeading>
                                    <ProjectMainPoints>We used the User-Centered Design (UCD) methodology and approach during the whole process.</ProjectMainPoints>
                                    <ProjectParagraph>The User-Centered Design methodology was used to guide us through the design process. We tried to keep users’ participation as an essential part of the journey to match their needs and fulfil their expectations. To do that, we used several frameworks to help us throughout the whole process, including tree testing, card sorting, usability testing, and SUS questionnaires.</ProjectParagraph>
                                    <ContentImageContainer>
                                    <ImageZoom
                                            src={Process}
                                            alt="Twing Design Process"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Twing Design Process</ImageCaption>
                                    </ContentImageContainer>
                                    <ProjectParagraph>We categorised the users into two groups of personas based on the survey and interview that we’ve conducted earlier.  These two groups had problems that they were most likely to face. The first group represents people who mainly use their phones to fill their free time. The second group represents people who mainly use their phones to communicate or do other work-related activities.</ProjectParagraph>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={Persona1}
                                            alt="Twing Persona 1"
                                            zoom={zoom.current}
                                        />
                                    </ContentImageContainer>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={Persona2}
                                            alt="Twing Persona 2"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Twing Persona</ImageCaption>
                                    </ContentImageContainer>
                                </ProjectSection>
                                <ProjectSection id='section3'>
                                    <ProjectSubHeading>Specifying user requirements</ProjectSubHeading>
                                    <ProjectMainPoints>We proposed solutions primarily to increase users’ awareness of their phone usage. We used several brainstorming frameworks to help us along the way.</ProjectMainPoints>
                                    <ProjectParagraph>After the data collection process, we received a lot of feedback from our respondents, so we needed to break down the problems and sort out our priorities. We used several tools, such as an affinity diagram and a value-effort matrix. We chose these tools because they could help us to see a more holistic view of the problems.</ProjectParagraph>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={Brainstorming}
                                            alt="Twing Brainstorming Process"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Twing Brainstorming Process</ImageCaption>
                                    </ContentImageContainer>
                                    <ProjectParagraph>We decided to choose two out of five main problems that we had found. We chose these problems because they were the ones that aligned with our mission, which was to help the users solve their problems themselves since CVS has always been about digital users’ behaviour. These problems include:</ProjectParagraph>
                                    <ProjectList>
                                        <ProjectListItem>People often lose track of time when using their phones.</ProjectListItem>
                                        <ProjectListItem>It’s hard to form good smartphone habits alone because of the lack of consciousness.</ProjectListItem>
                                    </ProjectList>
                                    <ProjectParagraph>After we sorted the problems, we mapped our solutions into them. We did this by comparing our solutions with the existing ones and their limitations. After several brainstorming sessions and a lot of “How Might We?”s, we decided to go forth with these solutions:</ProjectParagraph>
                                    <ProjectList>
                                        <ProjectListItem>Remind the users of their smartphone usage time over time.</ProjectListItem>
                                        <ProjectListItem>Remind the users whenever they use their smartphones in the ‘wrong way.’</ProjectListItem>
                                    </ProjectList>
                                </ProjectSection>
                                <ProjectSection id='section4'>
                                    <ProjectSubHeading>The result</ProjectSubHeading>
                                    <ProjectMainPoints>Our solution was to develop an integrated notification system that would notify users if they didn’t use their phones properly. Users and experts from different fields helped us to evaluate this solution.</ProjectMainPoints>
                                    <ProjectParagraph>Based on our previous findings, we decided to develop a solution to help people maintain their awareness when using their phones. The solution was implemented with an integrated notification system that came with the application. The system will notify the user at a certain time and conditions, precisely when the phone isn’t being used properly (according to health recommendations for CVS prevention). The conditions include such factors as viewing distance, brightness contrast, time off from phone, etc.</ProjectParagraph>
                                    <ProjectTrivia>
                                        <TriviaParagraph>Most respondents said that the one thing that could distract them from their phones when they lose consciousness, besides their parent’s scolding, is push notifications, like Google Calendar.</TriviaParagraph>
                                    </ProjectTrivia>
                                    <ProjectParagraph>Finally, we evaluated our solution using usability testing for ten people from both personas. We also gathered feedback from three experts from different fields of study that correspond with our solution, including a UX researcher, an ophthalmologist, and a psychologist. The evaluation process was conducted two times, in the first and second iteration.</ProjectParagraph>
                                    <ContentImageContainer>
                                        <ImageZoom
                                            src={ExpertReview}
                                            alt="Twing Expert Review"
                                            zoom={zoom.current}
                                        />
                                        <ImageCaption>Twing Expert Review Process</ImageCaption>
                                    </ContentImageContainer>
                                    <ProjectParagraph>From this journey, I learned a lot of new things, mainly because we didn’t win the competition (lol). But I’m glad that I’ve found the joy in doing research. Here are some of the main takeaways that I’ve learned.</ProjectParagraph>
                                    <ProjectList>
                                        <ProjectListItem><ListSpan>User participation and feedback are mandatory, but the researcher is the one who has control over his research.</ListSpan> I was quite overwhelmed at first because our team received a lot of feedback from our users. Knowing what to put and what not to put into the design is necessary.</ProjectListItem>
                                        <ProjectListItem><ListSpan>Assumptions must be validated</ListSpan> (or at least supported). We did a lot of brainstorming throughout the journey, resulting in many assumptions about the solution, which we thought was perfect for the user. That kind of thought could lead to biases.</ProjectListItem>
                                        <ProjectListItem><ListSpan>Be realistic.</ListSpan> Sadly, we didn’t. We thought that ideas were everything that mattered in designing a product. In reality, not all ideas could be implemented (yet) because of technological limitations. Being realistic by knowing what technology that we’ll use is mandatory in product design.</ProjectListItem>
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
