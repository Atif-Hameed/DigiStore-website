import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../InnerLandingPage/index.css'
import morfoLogo from '../../asset/morfoLogo.svg'
import person from '../../asset/person.webp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StructQuestions from '../InnerLandingPage/Q&A/StructQuestions'



const MorfoTaining = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box bgcolor={'#f1f1f1'} py={10} px={isMobile ? 2.5 : 6} mt={'-10rem'}>
                <img src={morfoLogo} width={isMobile ? '210rem' :'265rem'} alt="" />
                <Box mt={7.5}>
                    <Typography sx={{ color: '#181818', fontSize:isMobile ? '2rem':'3.7rem', fontFamily: 'aeonik-reg',lineHeight:isMobile ? 'normal':'5rem' }}>"A top-notch team, from Thomas for the project structuring, to Pierre & Mérieux in the project deployment, to Florian for the Webflow development."</Typography>
                </Box>
                <Box mt={3.5}>
                    <img src={person} width={'80rem'} alt="" />
                    <Box mt={2} sx={{display:'flex', flexDirection:isMobile ? 'column' : 'rwo', justifyContent:'space-between', alignItems:isMobile? 'start':'end'}}>
                        <Box >
                            <Typography sx={{ color: '#181818', fontSize: isMobile ? '1.15rem': '1.4rem', fontFamily: 'aeonik-reg' }}>Pascal Asselin</Typography>
                            <Typography sx={{ color: '#181818', fontSize:isMobile ? '0.9rem': '1.1rem', fontFamily: 'aeonik' }}>Co-founder @Morfo</Typography>
                        </Box>
                        <Box sx={{display:'flex', alignItems:'center',gap:1}}>
                            <Typography sx={{ color: '#000', fontSize: isMobile ? '1.1rem': '1.3rem', fontFamily: 'aeonik-reg' }}>SEE THE CASE STUDY</Typography>
                            <ArrowForwardIcon sx={{ color: '#181818', fontSize: isMobile ? '2rem': '2.5rem' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <StructQuestions
             Mainheading = 'Questions about our Webflow and webdesign trainings?'
             Deatilheading = 'For questions about our trainings, you can consult our FAQ or contact our webflow and webdesigners trainers, we will get back to you.'
             Question1 = 'How long does a training course last Digidop ?'
             Question2 = 'What is the training methodology?'
             Question3 = 'Is the training adapted to professionals in reconversion?'
             Question4 = 'Is the training delivered face-to-face or online?'
             Question5 = 'Is this training recognized by a certification?'
            />
            
        </>
    )
}

export default MorfoTaining
