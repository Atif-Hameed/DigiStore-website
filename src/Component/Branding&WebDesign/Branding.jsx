import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import InnerNavbar from '../InnerLandingPage/InnerNavbar/InnerNavbar'
import StructLogos from '../InnerLandingPage/PortfolioLogos/StructLogos'
import StructWebPractices from '../InnerLandingPage/WebPractices/StructWebPractices'
import CardType4 from '../InnerLandingPage/WebPractices/CardType4/CardType4'
import GoogleIcon from '../../asset/GoogleIcon.svg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Footer from '../InnerLandingPage/Footer/Footer'
import StructQuestions from '../InnerLandingPage/Q&A/StructQuestions'
import Header from './Header'
import Desgins from './Desgins'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StructServices from './Services/StructServices'
import BrandingServices from './Services/BrandingServices'
import Morfo from './MovingImages/Morfo'
import MovingImages from './MovingImages/MovingImages'
import ClickHere from './ClickHere'
import NextLvlBox from './Services/NextLvlBox'


const Branding = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ bgcolor: '#101010', position: 'relative' }}>

                <InnerNavbar />

                <Box mt={ isMobile ? 5 : 12.5}>
                    <Header />
                </Box>


                <StructLogos
                    padding={isMobile ? 0 : 15.3}
                />

                <Desgins />

                <BrandingServices />

                <StructWebPractices />

                <Morfo />

                <Box sx={{ bgcolor: '#f1f1f1', pt: isMobile ? 8 : 17.5, px: isMobile ? 2.5 : 6, pb: 15 }}>
                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: isMobile ? 5 : 'noraml' }}>
                        <Typography sx={{ lineHeight: 1.3, color: '#181818', fontSize: isMobile ? '2rem' : '3.75rem', fontFamily: 'aeonik-reg' }}>And validated by our customers</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 1 : 1.5 }}>
                            <img src={GoogleIcon} width={isMobile ? '15rem' : 'noraml'} alt="" />
                            <Typography sx={{ fontFamily: 'aeonik-reg', fontWeight: 'bold', fontSize: isMobile ? '1rem' : '1.2rem' }}>5/5 (51 reviews)</Typography>
                            <ArrowOutwardIcon sx={{ fontWeight: 'bold', fontSize: isMobile ? '1.8rem' : '2.3rem' }} />
                        </Box>
                    </Box>

                    <CardType4 />

                    <Box mt={14}>
                    <NextLvlBox/>
                    </Box>

                </Box>

                <StructQuestions
                    Mainheading='Questions about the design in Figma?'
                    Deatilheading='If you have any questions about our Figma web design services, check our FAQ or contact us directly. Our designers and graphic artists will get back to you.'
                    Question1='Why do a Design Sprint before starting the web mock-up?'
                    Question2='Will I have access to my new graphic design?'
                    Question3='How much back and forth can you do when designing?'
                    Question4='How are feedbacks managed during the prototyping phase?'
                    Question5='Can we work with your design teams?'
                />


                <ClickHere/>

                <Footer />
            </Box>
        </>
    )
}

export default Branding
