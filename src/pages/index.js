import React from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/ProjectSection'
import { project1, project3 } from '../components/ProjectSection/Data'
import ScrollToTop from '../components/ScrollToTop'
import { motion } from 'framer-motion'

const Home = () => {

    return (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: 0.2 }} exit={{ opacity:0 }}>
            <ScrollToTop />
            <HeroSection />
            <ProjectSection {...project1}/>
            <ProjectSection {...project3}/>
            <Footer />
        </motion.div>
    )
}

export default Home
