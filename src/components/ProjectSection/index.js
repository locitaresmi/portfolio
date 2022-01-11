import React from 'react'
import { useEffect } from 'react'
import { ProjectContainer, ProjectWrapper, ProjectRow, ProjectColumn1, ProjectColumn2, ProjectYear, ProjectTitle, ProjectIssuer, ImgWrap, ProjectImg, ImgOverlay, AdditionalDescription, ProjectLink } from './ProjectSectionElement'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

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

const ProjectSection = ({id, projectYear, projectTitle, projectIssuer, projectImg, productName, productDescription, alt, overlaytext}) => {
    
    const { ref, inView } = useInView();
    const right = useAnimation();

    useEffect(() => {
        if (inView){
            right.start({
                ...appearRight.animate
            });
        }
    });

    const up = useAnimation();

    useEffect(() => {
        if (inView){
            up.start({
                ...appearUp.animate
            });
        }
    });

    return (
        <ProjectContainer>
            <ProjectWrapper>
                <ProjectRow ref={ref}>
                    <ProjectColumn1 initial={appearRight.initial} animate={right}>
                        <ProjectYear>{projectYear}</ProjectYear>
                        <ProjectTitle>{projectTitle}</ProjectTitle>
                        <ProjectIssuer>{projectIssuer}</ProjectIssuer>
                    </ProjectColumn1>
                    <ProjectColumn2 initial={appearUp.initial} animate={up}>
                        <ImgWrap>
                            <ProjectLink to={"/" + id}>
                                <ProjectImg src={projectImg} alt={alt}/>
                                <ImgOverlay>
                                    {/* <ProductName>{productName}</ProductName>
                                    <ProductDescription>{productDescription}</ProductDescription> */}
                                    <AdditionalDescription>{overlaytext}</AdditionalDescription>
                                </ImgOverlay>
                            </ProjectLink>
                        </ImgWrap>
                    </ProjectColumn2>
                </ProjectRow>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default ProjectSection
