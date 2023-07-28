import { Box, Typography } from '@mui/material'
import React from 'react'
import InnerNavbar from './InnerNavbar/InnerNavbar'
import HeroSection from './HeroSection/HeroSection'
import PortfolioLogos from './PortfolioLogos/PortfolioLogos'
import CardsType1 from './CardsType1/CardsType1'

const InnerlandingPage = () => {
    return (
        <>
            <Box sx={{bgcolor: '#101010', position: 'relative' }}>
                <InnerNavbar />
                <HeroSection />
                <PortfolioLogos/>
                <CardsType1/>
            </Box>
        </>
    )
}

export default InnerlandingPage
