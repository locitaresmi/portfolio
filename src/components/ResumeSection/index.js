import React from 'react'
import { ResumeContainer, ResumeContent, ResumeH1, ResumeLink, ResumeDisplay } from './ResumeSection'

const ResumeSection = () => {
    return (
        <ResumeContainer>
        <ResumeContent>
            <ResumeH1>This is my resume</ResumeH1>
            <ResumeLink href='https://drive.google.com/file/d/1Kuue2HuOApXIXmGvPdUVvNNuPNaLrc4l/preview' target="_blank">Click here if the PDF won't appear</ResumeLink>
        </ResumeContent>
        <ResumeDisplay title="Wening Dyah Locitaresmi's CV" src="https://drive.google.com/file/d/1Kuue2HuOApXIXmGvPdUVvNNuPNaLrc4l/preview" allow="autoplay"></ResumeDisplay>
    </ResumeContainer>
)
}

export default ResumeSection
