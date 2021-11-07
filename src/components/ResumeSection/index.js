import React from 'react'
import { ResumeContainer, ResumeContent, ResumeH1, ResumeLink, ResumeDisplay } from './ResumeSection'

const ResumeSection = () => {
    return (
        <ResumeContainer>
        <ResumeContent>
            <ResumeH1>This is my resume</ResumeH1>
            <ResumeLink to={{ pathname: "https://drive.google.com/file/d/1xvtqsdT6bdjSmku4_vhdEiYjUD90rBnD/view" }} target="_blank">Click here if the PDF won't appear</ResumeLink>
        </ResumeContent>
        <ResumeDisplay title="Wening Dyah Locitaresmi's CV" src="https://drive.google.com/file/d/1xvtqsdT6bdjSmku4_vhdEiYjUD90rBnD/preview" allow="autoplay"></ResumeDisplay>
    </ResumeContainer>
)
}

export default ResumeSection
