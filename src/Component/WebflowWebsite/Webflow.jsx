import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Header from './Header'
import InnerNavbar from '../InnerLandingPage/InnerNavbar/InnerNavbar'
import Logos from './Logos'
import Realization from './Realization'
import GoogleIcon from '../../asset/GoogleIcon.svg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WebflowAccordians from './WebflowAccordians'
import HumanScale from './HumanScale'
import Morfo from '../Branding&WebDesign/MovingImages/Morfo'
import StructWebPractices from '../InnerLandingPage/WebPractices/StructWebPractices'
import Offers from './Offers'
import CardType4 from '../InnerLandingPage/WebPractices/CardType4/CardType4'
import NextLvlBox from '../Branding&WebDesign/Services/NextLvlBox'
import StructQuestions from '../InnerLandingPage/Q&A/StructQuestions'
import ClickHere from '../Branding&WebDesign/ClickHere'
import Footer from '../InnerLandingPage/Footer/Footer'
import Collaborate from '../Branding&WebDesign/MovingImages/Collaborate'

function Webflow() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box bgcolor={'#101010'} position={'relative'}>

                <InnerNavbar />

                <Box mt={isMobile ? 0 : 12.5}>
                    <Header />
                </Box>

                <Logos />

                <Realization />

                <WebflowAccordians />

                <Box sx={{ cursor: 'pointer', display: 'flex', px: isMobile ? 2.5 : 6, alignItems: 'center', justifyContent: 'space-between', py: isMobile ? 3 : 6, backgroundColor: '#fdd33c', '&:hover': { '.contact': { textDecoration: 'underline' } } }}>
                    <Typography className='contact' sx={{ cursor: 'pointer', fontSize: isMobile ? '2rem' : '3.8rem', fontFamily: 'aeonik-reg-bold' }}>Contact our webflow agency</Typography>
                    <ArrowOutwardIcon sx={{ fontSize: isMobile ? '3.8rem' : '4.5rem' }} />
                </Box>

                <HumanScale />

                <StructWebPractices />

                <Morfo />

                <Offers />

                <Collaborate />

                <Box bgcolor={'#f8f8f8'} mt={-1.6} px={isMobile ?2.5 : 6} py={10}>

                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: isMobile ? 5 : 'noraml' }}>
                        <Typography sx={{ lineHeight: 1.3, color: '#181818', fontSize: isMobile ? '2rem' : '3.75rem', fontFamily: 'aeonik-reg' }}>An expertise recognized by our customers</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 1 : 1.5 }}>
                            <img src={GoogleIcon} width={isMobile ? '15rem' : 'noraml'} alt="" />
                            <Typography sx={{ fontFamily: 'aeonik-reg', fontWeight: 'bold', fontSize: isMobile ? '1rem' : '1.2rem' }}>5/5 (51 reviews)</Typography>
                            <ArrowOutwardIcon sx={{ fontWeight: 'bold', fontSize: isMobile ? '1.8rem' : '2.3rem' }} />
                        </Box>
                    </Box>

                    <CardType4 />

                    <Box mt={28} >
                        <NextLvlBox />
                    </Box>
                </Box>

                <StructQuestions
                    Mainheading='Questions about creating Webflow sites?'
                    Deatilheading={<span>If you have any questions about our Webflow integration services, please consult our FAQ or <span style={{ textDecoration: 'underline', color: 'blue' }}>contact us directly.</span> Our web development experts are here to help you.</span>}
                    Question1='Do I have to call Digidop for each new modification of the site?'
                    Question2='What is the price for a website at Digidop ?'
                    Question3='Is there an annual follow-up for my site?'
                    Question4='How long will it take for my website to go live?'
                    Question5='Is my site secure?'
                />

                <ClickHere />

                <Footer />

            </Box>
        </>
    )
}

export default Webflow
