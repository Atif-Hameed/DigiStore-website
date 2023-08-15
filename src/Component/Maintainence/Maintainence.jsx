import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Header from './Header'
import InnerNavbar from '../InnerLandingPage/InnerNavbar/InnerNavbar'
import HoursUse from './HoursUse'
import Courses from '../InnerLandingPage/Courses/Courses'
import StructWebPractices from '../InnerLandingPage/WebPractices/StructWebPractices'
import Morfo from '../Branding&WebDesign/MovingImages/Morfo'
import NextLvlBox from '../Branding&WebDesign/Services/NextLvlBox'
import StructQuestions from '../InnerLandingPage/Q&A/StructQuestions'
import ClickHere from '../Branding&WebDesign/ClickHere'
import Footer from '../InnerLandingPage/Footer/Footer'
import ValidatedCustomer from './ValidatedCustomer'

function Maintainence() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ bgcolor: '#101010', position: 'relative' }}>
                <InnerNavbar />

                <Box mt={isMobile ? 5 : 12.5}>
                    <Header />
                </Box>

                <HoursUse />

                <Courses />

                <StructWebPractices />

                <Morfo />

                <ValidatedCustomer/>

                <Box sx={{ bgcolor: '#f8f8f8', px: isMobile ? 2.5 : 6, pb: 15 }}>
                    <NextLvlBox />
                </Box>

                <StructQuestions
                    Mainheading='Questions about our Webflow support offering?'
                    Deatilheading='If you have any questions about our Webflow agency services, check out our FAQ or contact us directly. We are here to help you.'
                    Question1='Why choose Digidop to troubleshoot my Webflow site?'
                    Question2='If I have a problem with my Webflow site, are you available quickly?'
                    Question3='Who is the Webflow support offer aimed at?'
                    Question4='How to use the dop heures for a Webflow maintenance?'
                    Question5='How does a Webflow helpdesk work?'
                />

                <ClickHere/>

                <Footer/>

            </Box>
        </>
    )
}

export default Maintainence
