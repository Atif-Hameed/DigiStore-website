import { Box, Typography } from '@mui/material'
import React from 'react'
import InnerNavbar from './InnerNavbar/InnerNavbar'
import HeroSection from './HeroSection/HeroSection'
import PortfolioLogos from './PortfolioLogos/PortfolioLogos'

const InnerlandingPage = () => {
    return (
        <>
            <Box sx={{bgcolor: '#101010', position: 'relative' }}>
                <InnerNavbar />
                <HeroSection />
                <PortfolioLogos/>
            </Box>
        </>
    )
}

export default InnerlandingPage
