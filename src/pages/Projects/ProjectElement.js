import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { motion } from 'framer-motion'

export const ProjectContainer = styled.div`

`

export const ProjectWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: fit-content;
    width: 100%;
    margin: 0 0 30px 0;
    padding: 0;
    justify-content: center;
    /* align-items: center; */

    @media screen and (max-width:768px) {
        height: fit-content;
    }
`

export const ImageContainer = styled.div`
    width: inherit;
    max-height: 400px;

    @media screen and (max-width:768px) {
        height: fit-content;
        max-height: inherit;
    }
`

export const Image = styled.img`
    width: inherit;
    height: inherit;
    margin: 0;
    padding: 0;

    @media screen and (min-width:768px) {
        max-height: inherit;
    }

`

export const ContentImageContainer = styled.div`
    max-width: inherit;
    margin: 35px 0 35px 0;
    /* max-height: 400px; */

    @media screen and (max-width:768px) {
        max-width: 100%;
        /* max-height: inherit; */
    }
`

// export const ContentImage = styled.img`
//     max-width: inherit;
//     /* height: inherit; */
//     margin: 0;
//     padding: 0;
//     cursor: zoom-in;

//     /* @media screen and (min-width:768px) {
//         max-height: inherit;
//     } */

// `

export const ImageCaption = styled.p`
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
`

export const TextContainer = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 24px 0 24px 0;
    width: 100%;
    max-width: 600px;
`

export const ProjectHeading = styled.h1`
    margin-bottom: 32px;

    @media screen and (max-width:768px) {
        margin-top: 36px;
        margin-bottom: 18px;
    }
`


export const ProjectSubHeading = styled.h2`
    margin-bottom: 32px;
    margin-top: 32px;
`

export const ProjectMainPoints = styled.h3`
    margin-bottom: 24px;
`

export const ProjectParagraph = styled.p`
    margin-bottom: 24px;
`

export const ProjectRow = styled.div`
    display: grid;
    /* grid-auto-columns: minmax(auto, 1fr); */
    grid-template-columns: 1.2fr 0.6fr ;
    /* align-items: center; */
    grid-template-areas: 'col1 col2';
    width: 100%;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas: 'col1';
    }
`

export const TextColumn =  styled(motion.div)`
    margin: 15px 0 15px 0;
    padding: 0 24px 0 24px;
    grid-area: col1;
    /* max-width: 650px; */

    @media screen and (max-width:768px) {
        max-width: 100%;
        padding: 0;
        margin-top: -52px;
    }

    @media screen and (max-width:480px) {
        padding: 0 45px 0 45px;
    }
`

export const ImageColumn = styled.div`
    padding: 0;
    grid-area: col2;
    padding-left: 24px;
    max-width: 550px;

    @media screen and (max-width:768px) {
        max-width: 100%;
        width: 100%;
        height: auto;
        padding: 0;
    }
`

export const Sidebar = styled(motion.div)`
    margin: 15px 0 15px 0;
    /* padding: 0 24px 0 24px; */
    grid-area: col2;
    /* max-width: 300px; */

    @media screen and (max-width:768px) {
        max-width: 100%;
        padding: 0;
        margin-top: -52px;
    }
`

export const SidebarMenu = styled.ul`
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 90px;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-right: -22px;
    padding: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const SidebarItem = styled.li`
    margin-bottom: 20px;
`

export const SidebarLink = styled(LinkS)`
    color: #393232;
    opacity: 0.5;
    display: flex;
    /* align-items: center; */
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;

    &:hover {
        opacity: 1;
    }

    &.active {
        opacity: 1;
        transition: 0.05s ease-in-out;
        font-weight: 600;
    }
`

export const ProjectSection = styled.div`
    max-width: inherit;
`

export const SidebarHeading = styled.h3`
    padding-left: 54px;
    margin-top: 28px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ProjectList = styled.ul`
    list-style-position: inside;
    margin-bottom: 24px;
`

export const ProjectListItem = styled.li`
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 24px;
    color: #393232;
`

export const ListSpan = styled.span`
    font-weight: 600;
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 24px;
    color: #393232;
`

export const ProjectTrivia = styled.div`
    background-color: #F2EDD7;
    padding: 24px;
    margin-bottom: 24px;
`

export const TriviaParagraph = styled.p`

`