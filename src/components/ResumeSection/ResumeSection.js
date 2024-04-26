import styled from 'styled-components'

export const ResumeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px 30px 30px;
    height: fit-content;
    position: relative;
    z-index: 1;
    flex-direction: column;
`

export const ResumeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: relative;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;
`

export const ResumeH1 = styled.h1`
    text-align: center;
`

export const ResumeLink = styled.a`
    margin-top: 24px;
    color: #393232;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const ResumeDisplay = styled.iframe`
    width: 840px; 
    height: 1070px; 

    @media screen and (max-width: 768px) {
        width: 600px; 
        height: 770px;
    }

    @media screen and (max-width: 480px) {
        width: 380px; 
        height: 490px;
    }
`