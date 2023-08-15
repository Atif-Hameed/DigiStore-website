import { Box } from '@mui/material'
import React from 'react'
import InnerNavbar from './InnerNavbar/InnerNavbar'
import HeroSection from './HeroSection/HeroSection'
import PortfolioLogos from './PortfolioLogos/PortfolioLogos'
import CardsType1 from './CardsType1/CardsType1'
import CardsType2 from './CardsType2/CardsType2'
import WebPractices from './WebPractices/WebPractices'
import Courses from './Courses/Courses'
import Questions from './Q&A/Questions'
import Footer from './Footer/Footer'

const InnerlandingPage = () => {
    return (
        <>
            <Box sx={{bgcolor: '#101010', position: 'relative' }}>
                <InnerNavbar />
                <HeroSection />
                <PortfolioLogos/>
                <CardsType1/>
                <CardsType2/>
                <WebPractices/>
                <Courses/>
                <Questions/>
                <Footer/>
            </Box>
        </>
    )
}

export default InnerlandingPage
