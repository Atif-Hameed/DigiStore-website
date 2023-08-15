import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../InnerLandingPage/index.css'
import CheckIcon from '@mui/icons-material/Check';
import slackLogo from '../../asset/slackLogo.svg'
import loomLogo from '../../asset/loomLogo.svg'
import conceptLogo from '../../asset/conceptLogo.svg'
import googleMeetLogo from '../../asset/googleMeetLogo.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const OfferPrices = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box bgcolor={'#f8f8f8'} m={0} mt={-0.5} pb={isMobile ? 10 : 20} pt={5} px={isMobile ? 2.5 : 6}>

                <Box sx={{display: 'flex', alignItems: isMobile ? 'start' : 'center', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', width: '100%', gap: isMobile ? 4 : 'normal' }}>
                    <Typography sx={{ width: isMobile ? '100%' : '45%', fontFamily: 'aeonik-reg', color: '#181818', fontSize: isMobile ? '2rem' : '3.5rem', lineHeight: isMobile ? '3rem' : 'normal' }}>Our offers and prices for webdesign and development training</Typography>
                    
                    <Box width={isMobile ? '100%' : '32%'}>
                        <Typography sx={{ fontFamily: 'aeonik-reg', color: '#4c4b49', fontSize: isMobile ? '1rem' : '1.2rem' }}>Our experts train you remotely with the best tools. Live, asynchronous, or online, learn to master your Webflow website.</Typography>
                        <Box mt={isMobile ? 2:3} sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 2 : 3 }}>
                            <img src={slackLogo} width={isMobile ? '40rem' :'50rem'} alt="" />
                            <img src={googleMeetLogo} width={isMobile ? '40rem' :'50rem'} alt="" />
                            <img src={loomLogo} width={isMobile ? '40rem' :'50rem'} alt="" />
                            <img src={conceptLogo} width={isMobile ? '40rem' :'50rem'} alt="" />
                        </Box>
                    </Box>
                </Box>

                <Grid mt={isMobile ? 0 : 5} container spacing={5}>
                    <Grid item lg={6} sm={12} >
                        <Box py={9} px={isMobile ? 3 : 5} bgcolor={'#fdd33c'} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#101010', fontSize: isMobile ? '1.5rem' : '3.1rem', lineHeight: isMobile ? 'normal' : '4.1rem' }}>Webflow & Webdesign initiation</Typography>
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#101010', fontSize: isMobile ? '1.5rem' : '3.7rem', lineHeight: isMobile ? 'normal' : '4.7rem' }}>1 300 €</Typography>
                                <Box>
                                    <Typography sx={{ fontFamily: 'aeonik', color: '#101010', fontSize: isMobile ? '0.9rem' : '1.2rem' }}>Between training and practice, our initiation to the Webflow designer aims to provide you with a solid foundation for the development of your future website.</Typography>
                                    <Divider sx={{ mt: isMobile ? 3 : 5, bgcolor: '#000' }} />
                                </Box>
                            </Box>

                            <Box mt={isMobile ? 3 : 5} sx={{ display: 'flex', gap: 2.5, flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize: isMobile ? '1.45rem' : '1.8rem' }} />
                                    <Typography sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize: isMobile ? '1rem' : '1.3rem' }}>Introduction to the Webflow designer</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize: isMobile ? '1.45rem' : '1.8rem' }} />
                                    <Typography sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize: isMobile ? '1rem' : '1.3rem' }}>Understanding of HTML and CSS</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize: isMobile ? '1.45rem' : '1.8rem' }} />
                                    <Typography sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize: isMobile ? '1rem' : '1.3rem' }}>Web design fundamentals</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize: isMobile ? '1.45rem' : '1.8rem' }} />
                                    <Typography sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize: isMobile ? '1rem' : '1.3rem' }}>Creation of a Client-First design system</Typography>
                                </Box>

                            </Box>

                            <Box mt={isMobile ? 4 : 8} sx={{ cursor: 'pointer', '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Typography className='text1' sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize: isMobile ? '1rem' : '1.2rem' }}>Start training</Typography>
                                <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem' }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} sm={12} >
                        <Box py={9} px={isMobile ? 3 : 5} bgcolor={'#181818'} height={isMobile ? 'unset' : '83%'}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#f8f8f8', fontSize: isMobile ? '1.45rem' : '3.1rem', lineHeight: isMobile ? 'normal' : '4.1rem' }}>Webflow & SEO Training for Companies</Typography>
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#838383', fontSize: isMobile ? '1.5rem' : '3.7rem', lineHeight: isMobile ? 'normal' : '4.7rem' }}>On request</Typography>
                                <Box>
                                    <Typography sx={{ fontFamily: 'aeonik', color: '#f8f8f8', fontSize: isMobile ? '1rem' : '1.2rem' }}>Get your staff proficient in Webflow and SEO. We train designers, marketing teams and web developers to use the best web practices in Webflow.</Typography>
                                    <Divider sx={{ mt: isMobile ? 3 : 5, bgcolor: '#fff' }} />
                                </Box>
                            </Box>

                            <Box mt={isMobile ? 3 : 5} sx={{ display: 'flex', gap: 2.5, flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize: isMobile ? '1.45rem' : '1.8rem', color: '#f8f8f8' }} />
                                    <Typography sx={{ fontWeight: isMobile ? 'normal' : '800', fontFamily: 'aeonik', color: '#f8f8f8', fontSize: isMobile ? '1rem' : '1.3rem' }}>Scaling of the website</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize: isMobile ? '1.45rem' : '1.8rem', color: '#f8f8f8' }} />
                                    <Typography sx={{ fontWeight: isMobile ? 'normal' : '800', fontFamily: 'aeonik', color: '#f8f8f8', fontSize: isMobile ? '1rem' : '1.3rem' }}>Use of component libraries</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize: isMobile ? '1.45rem' : '1.8rem', color: '#f8f8f8' }} />
                                    <Typography sx={{ fontWeight: isMobile ? 'normal' : '800', fontFamily: 'aeonik', color: '#f8f8f8', fontSize: isMobile ? '1rem' : '1.3rem' }}>Use of the Webflow editor and designer modes</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize: isMobile ? '1.45rem' : '1.8rem', color: '#f8f8f8' }} />
                                    <Typography sx={{ fontWeight: isMobile ? 'normal' : '800', fontFamily: 'aeonik', color: '#f8f8f8', fontSize: isMobile ? '1rem' : '1.3rem' }}>SEO optimization of the site</Typography>
                                </Box>
                            </Box>

                            <Box mt={isMobile ? 4 : 8} sx={{cursor:'pointer', '&:hover': { '.text2': { textDecoration: 'underline' } }, display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Typography className='text2' sx={{ fontWeight: '800', fontFamily: 'aeonik', color: '#f8f8f8', fontSize: isMobile ? '1rem' : '1.2rem' }}>Start training</Typography>
                                <ArrowForwardIcon sx={{ fontSize: '2.5rem', color: '#f8f8f8' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default OfferPrices
