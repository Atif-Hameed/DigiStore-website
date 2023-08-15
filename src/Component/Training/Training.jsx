import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import InnerNavbar from '../InnerLandingPage/InnerNavbar/InnerNavbar'
import Header from './Header'
import TrainerTeam from './TrainerTeam'
import '../InnerLandingPage/index.css'
import OfferPrices from './OfferPrices'
import TrainingAccordians from './TrainingAccordians'
import TrainingLogos from './TrainingLogos'
import MorfoTaining from './MorfoTaining'
import ClickHere from '../Branding&WebDesign/ClickHere'
import Courses from '../InnerLandingPage/Courses/Courses'
import Footer from '../InnerLandingPage/Footer/Footer'

const Training = () => {

    const theme = useTheme()
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box bgcolor={'#101010'}>
                <InnerNavbar />

                <Box mt={isMobile ? 0 : 12.5}>
                    <Header />

                    <TrainerTeam />

                    <OfferPrices />

                    <TrainingAccordians />
        
                    <TrainingLogos
                    padding='2rem'
                    />

                    <MorfoTaining/>

                    <Courses/>

                    <ClickHere/>

                    <Footer/>
                </Box>

            </Box>
        </>
    )
}

export default Training
