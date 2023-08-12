import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RealizationCard from './RealizationCards';
import certImg from '../../asset/certifIcon.svg'
import wImg from '../../asset/webflowW.svg'


const Realization = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box bgcolor={'#f1f1f1'} pt={isMobile ? 8 : 18} pb={isMobile ? 8 : 'normal'} px={isMobile ? 2.5 : 6}>

                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: isMobile ? 5 : 'normal' }}>
                    <Box width={isMobile ? '100%' : '50%'}>
                        <Typography sx={{ fontSize: isMobile ? '1.45rem' : '3.2rem', fontFamily: 'aeonik-reg', color: '#181818', lineHeight: isMobile ? 'normal' : '5rem' }}>Webflow, for the realization of a site design to the pixel.</Typography>
                    </Box>

                    <Box onClick={() => window.location.replace("/#scrollTarget")} sx={{ '&:hover': { '.text': { textDecoration: 'underline' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', alignSelf: isMobile ? 'start' : 'end', gap: 1 }}>
                        <Typography className='text' sx={{ fontSize: isMobile ? '1rem' : '1.3rem', fontFamily: 'aeonik-reg', color: '#101010' }}>The promise of our agency Webflow</Typography>
                        <ArrowDownwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem' }} />
                    </Box>
                </Box>

                <Box mt={ isMobile ? 5 : 13}>
                    <RealizationCard />
                </Box>

                <Grid container mt={10}>
                    <Grid item lg={6} sm={12} >
                        <Box bgcolor={'#f8f8f8'} pt={isMobile ? 2.5 : 5} pb={7} px={isMobile ? 2 : 5} height={isMobile ? '550px' :'485px'}>
                            <Typography sx={{ textAlign: 'end', fontSize: isMobile ? '0.85rem' : '1.4rem', fontFamily: 'aeonik', color: '#181818' }}>Webflow Client-First Certification</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Box width={isMobile ? '100%' :'60%'} sx={{ gap: 4, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                    <img src={certImg} width={isMobile ? '180rem' : '220rem'} alt="" />
                                    <Typography sx={{ textAlign: 'center', fontSize: isMobile ? '1.1rem' : '1.4rem', fontFamily: 'aeonik', color: '#181818' }}>The best methodology to design a scalable site on Webflow.</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} sm={12} >
                        <Box bgcolor={'#4353ff'} pt={isMobile ? 2.5 : 5} pb={7} px={isMobile ? 2 :5} height={isMobile ? '560px' :'485px'}>
                            <Typography sx={{ textAlign: 'end', fontSize: isMobile ? '0.85rem' : '1.4rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Webflow Expert Certification</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Box width={isMobile ? '100%' :'60%'} sx={{display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                    <img src={wImg} width={isMobile ? '190rem' :'245rem'} alt="" />
                                    <Typography sx={{ textAlign: 'center', fontSize: isMobile ? '1.1rem' : '1.4rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Our agency is officially an expert in the creation tool since 2021.</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Realization
