import React from 'react'
import InnerNavbar from '../InnerLandingPage/InnerNavbar/InnerNavbar'
import Header from './Header'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import StructLogos from '../InnerLandingPage/PortfolioLogos/StructLogos'
import Plateforms from './Plateforms'
import VideoBig from './VideoBig'
import StructQuestions from '../InnerLandingPage/Q&A/StructQuestions'
import EnterpriseAccordian from './EnterpriseAccordian'
import StructWebPractices from '../InnerLandingPage/WebPractices/StructWebPractices'
import Morfo from '../Branding&WebDesign/MovingImages/Morfo'
import ValidatedCustomer from '../Maintainence/ValidatedCustomer'
import NextLvlBox from '../Branding&WebDesign/Services/NextLvlBox'
import ClickHere from '../Branding&WebDesign/ClickHere'
import Footer from '../InnerLandingPage/Footer/Footer'

function Enterpriser() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ bgcolor: '#101010', position: 'relative' }}>
                <InnerNavbar />

                <Box mt={isMobile ? 3 : 12.5}>
                    <Header />
                </Box>

                <StructLogos />

                <Plateforms />

                <VideoBig />

                <EnterpriseAccordian />

                <StructWebPractices />

                <Morfo />

                <ValidatedCustomer />

                <Box sx={{ bgcolor: '#f8f8f8', px: isMobile ? 2.5 : 6, pb: 15 }}>
                    <NextLvlBox />
                </Box>

                <StructQuestions
                    Mainheading='Questions about Webflow Enterprise?'
                    Deatilheading='If you have any questions about our Webflow integration services, check out our FAQ or contact us directly. We are here to help you.'
                    Question1='What is the difference between a Webflow business and enterprise plan?'
                    Question2='How much does a Webflow Enterprise plan cost (Webflow Pricing)'
                    Question3='What is the Webflow Enterprise Partner Program and how is Digidop part of it?'
                    Question4='What is the price of a Enterprise?'
                    Question5='How long does a project last?'
                />

                <ClickHere/>

                <Footer/>
            </Box>
        </>
    )
}

export default Enterpriser
