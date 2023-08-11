import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../../InnerLandingPage/index.css'
import morfoLogo from '../../../asset/morfoLogo.svg'
import person from '../../../asset/person.webp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MovingImages from './MovingImages'
import Agency360 from './Agency360'
import Collaborate from './Collaborate'


const Morfo = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box bgcolor={'#f1f1f1'} py={10} px={isMobile ? 2.5 : 6} mt={'-10rem'}>
                <img src={morfoLogo} width={'265rem'} alt="" />
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

            <MovingImages />
        
            <Agency360 />

            <Collaborate />
        </>
    )
}

export default Morfo
