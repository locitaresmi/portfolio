import React from 'react'
import ResumeSection from '../components/ResumeSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { motion } from 'framer-motion'

const ResumePage = () => {

    return (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: 0.2 }} exit={{ opacity:0 }}>
            <ScrollToTop />
            <ResumeSection />
            <Footer />
        </motion.div>
    )
}

export default ResumePage
