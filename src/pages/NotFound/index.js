import React from 'react'
import { NotFoundContainer, NotFoundContent, NotFoundH1, NotFoundImage, NotFoundImageContainer, NotFoundParagraph, LinkSpan } from './NotFound'
import Rocks from '../../images/Rocks.svg'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer'

const NotFound = () => {
    return (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: 0.2 }} exit={{ opacity:0 }}>
            <NotFoundContainer>
            <NotFoundContent>
                <NotFoundH1>Oh, no! The page has gone missing</NotFoundH1>
                <NotFoundParagraph>I left no stone unturned in my search for the page. Maybe try going back to the <LinkSpan href="/">homepage</LinkSpan> instead?</NotFoundParagraph>
                <NotFoundImageContainer>
                    <NotFoundImage src={Rocks}/>
                </NotFoundImageContainer>
            </NotFoundContent>
            </NotFoundContainer>
            <Footer />
        </motion.div>
    )
}

export default NotFound
