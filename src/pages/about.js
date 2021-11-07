import React from 'react'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { motion } from 'framer-motion'

const AboutPage = () => {

    return (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: 0.2 }} exit={{ opacity:0 }}>
            <ScrollToTop />
            <AboutSection />
            <Footer />
        </motion.div>
    )
}

export default AboutPage
