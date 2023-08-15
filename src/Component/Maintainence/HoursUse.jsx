import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import slackLogo from '../../asset/slackLogo.svg'
import loomLogo from '../../asset/loomLogo.svg'
import conceptLogo from '../../asset/conceptLogo.svg'
import googleMeetLogo from '../../asset/googleMeetLogo.svg'
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function HoursUse() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box bgcolor={'#f1f1f1'} m={0} mt={-0.5} pb={isMobile ? 10 : 20} pt={isMobile ? 8:5} px={isMobile ? 2.5 : 6}>
                <Box sx={{ display: 'flex', alignItems: isMobile ? 'start' : 'center', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', width: '100%', gap: isMobile ? 4 : 'normal' }}>
                    <Typography sx={{ width: isMobile ? '100%' : '45%', fontFamily: 'aeonik-reg', color: '#181818', fontSize: isMobile ? '2rem' : '3.5rem', lineHeight: isMobile ? '3rem' : 'normal' }}>Hours to use as you wish</Typography>

                    <Box width={isMobile ? '100%' : '32%'}>
                        <Typography sx={{ fontFamily: 'aeonik', color: '#4c4b49', fontSize: isMobile ? '1rem' : '1.2rem' }}>If we have developed your Webflow site, it is easier for us to intervene. You will therefore benefit from a partner price.</Typography>
                        <Box mt={isMobile ? 2 : 3} sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 2 : 3 }}>
                            <img src={slackLogo} width={isMobile ? '40rem' : '50rem'} alt="" />
                            <img src={googleMeetLogo} width={isMobile ? '40rem' : '50rem'} alt="" />
                            <img src={loomLogo} width={isMobile ? '40rem' : '50rem'} alt="" />
                            <img src={conceptLogo} width={isMobile ? '40rem' : '50rem'} alt="" />
                        </Box>
                    </Box>
                </Box>

                <Grid mt={isMobile ? 0:5} container spacing={5} >
                    <Grid item lg={6} sm={12} >
                        <Box>
                            <Typography mb={1.5} sx={{ color: '#838383', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem': '1.25rem' }}>DESIGN SUPPORT</Typography>

                            <Box sx={{ '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', alignItems: 'center', gap:isMobile ? 1: 1.6, py: 4, borderTop: '1px solid #838383' }}>
                                <CheckIcon sx={{ color: '#4c4b49', fontSize:isMobile ? '1.5rem': '1.7rem' }} />
                                <Typography className='text1' sx={{ color: '#4c4b49', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.15rem': '1.3rem' }}>Design of web models</Typography>
                            </Box>
                            <Box sx={{ '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', alignItems: 'center', gap:isMobile ? 1: 1.6, py: 4, borderTop: '1px solid #838383' }}>
                                <CheckIcon sx={{ color: '#4c4b49', fontSize:isMobile ? '1.5rem': '1.7rem' }} />
                                <Typography className='text1' sx={{ color: '#4c4b49', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.15rem': '1.3rem' }}>Help in creating engaging visual content</Typography>
                            </Box>
                            <Box sx={{ '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', alignItems: 'center', gap:isMobile ? 1: 1.6, py: 4, borderTop: '1px solid #838383' }}>
                                <CheckIcon sx={{ color: '#4c4b49', fontSize:isMobile ? '1.5rem': '1.7rem' }} />
                                <Typography className='text1' sx={{ color: '#4c4b49', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.15rem': '1.3rem' }}>Optimization of ergonomics and navigation</Typography>
                            </Box>
                            <Box sx={{ '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', alignItems: 'center', gap:isMobile ? 1: 1.6, py: 4, borderTop: '1px solid #838383' }}>
                                <CheckIcon sx={{ color: '#4c4b49', fontSize:isMobile ? '1.5rem': '1.7rem' }} />
                                <Typography className='text1' sx={{ color: '#4c4b49', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.15rem': '1.3rem' }}>Tips and suggestions for improving the design and layout</Typography>
                            </Box>
                            <Box sx={{ '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', alignItems: 'center', gap:isMobile ? 1: 1.6, py: 4, borderTop: '1px solid #838383' }}>
                                <CheckIcon sx={{ color: '#4c4b49', fontSize:isMobile ? '1.5rem': '1.7rem' }} />
                                <Typography className='text1' sx={{ color: '#4c4b49', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.15rem': '1.3rem' }}>Web design training</Typography>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item lg={6} sm={12} >
                        <Box>
                            <Typography mb={1.5} sx={{ color: '#838383', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem': '1.25rem' }}>WEBFLOW SUPPORT</Typography>

                            <Box sx={{ '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', alignItems: 'center', gap:isMobile ? 1: 1.6, py: 4, borderTop: '1px solid #838383' }}>
                                <CheckIcon sx={{ color: '#4c4b49', fontSize:isMobile ? '1.5rem': '1.7rem' }} />
                                <Typography className='text1' sx={{ color: '#4c4b49', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.15rem': '1.3rem' }}>Creation of new sections and pages</Typography>
                            </Box>
                            <Box sx={{ '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', alignItems: 'center', gap:isMobile ? 1: 1.6, py: 4, borderTop: '1px solid #838383' }}>
                                <CheckIcon sx={{ color: '#4c4b49', fontSize:isMobile ? '1.5rem': '1.7rem' }} />
                                <Typography className='text1' sx={{ color: '#4c4b49', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.15rem': '1.3rem' }}>Support for third-party script and API integration</Typography>
                            </Box>
                            <Box sx={{ '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', alignItems: 'center', gap:isMobile ? 1: 1.6, py: 4, borderTop: '1px solid #838383' }}>
                                <CheckIcon sx={{ color: '#4c4b49', fontSize:isMobile ? '1.5rem': '1.7rem' }} />
                                <Typography className='text1' sx={{ color: '#4c4b49', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.15rem': '1.3rem' }}>Optimization of the technical performance of the site</Typography>
                            </Box>
                            <Box sx={{ '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', alignItems: 'center', gap:isMobile ? 1: 1.6, py: 4, borderTop: '1px solid #838383' }}>
                                <CheckIcon sx={{ color: '#4c4b49', fontSize:isMobile ? '1.5rem': '1.7rem' }} />
                                <Typography className='text1' sx={{ color: '#4c4b49', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.15rem': '1.3rem' }}>Debugging of any technical problem related to your Webflow site</Typography>
                            </Box>
                            <Box sx={{ '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', alignItems: 'center', gap:isMobile ? 1: 1.6, py: 4, borderTop: '1px solid #838383' }}>
                                <CheckIcon sx={{ color: '#4c4b49', fontSize:isMobile ? '1.5rem': '1.7rem' }} />
                                <Typography className='text1' sx={{ color: '#4c4b49', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.15rem': '1.3rem' }}>Training of teams on editing in Webflow</Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>



                <Grid mt={isMobile ? 0 : 5} container spacing={5}>
                    <Grid item lg={6} sm={12} >
                        <Box py={9} px={isMobile ? 3 : 5} bgcolor={'#fdd33c'} >
                            
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#101010', fontSize: isMobile ? '1.5rem' : '3.1rem', lineHeight: isMobile ? 'normal' : '4.1rem' }}>Customers Digidop</Typography>
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#101010', fontSize: isMobile ? '1.5rem' : '1.55rem', lineHeight: isMobile ? 'normal' : '4.7rem' }}>120€/h</Typography>
                                <Box>
                                    <Typography sx={{ fontFamily: 'aeonik', color: '#101010', fontSize: isMobile ? '0.9rem' : '1.2rem' }}>We will determine how many hours it will take to solve your problem and execute it in record time.</Typography>
                                    <Divider sx={{display:isMobile ? 'none':'normal', mt: isMobile ? 3 : 5, bgcolor: '#000' }} />
                                </Box>
                            </Box>

                            <Box mt={isMobile ? 4 : 8} sx={{ cursor: 'pointer', '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Typography className='text1' sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize: isMobile ? '1rem' : '1.2rem' }}>Contact the agency</Typography>
                                <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem' }} />
                            </Box>

                        </Box>
                    </Grid>

                    <Grid item lg={6} sm={12} >
                        <Box py={9} px={isMobile ? 3 : 5} bgcolor={'#181818'} >
                            
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#f8f8f8', fontSize: isMobile ? '1.5rem' : '3.1rem', lineHeight: isMobile ? 'normal' : '4.1rem' }}>New clients</Typography>
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#f8f8f8', fontSize: isMobile ? '1.5rem' : '1.55rem', lineHeight: isMobile ? 'normal' : '4.7rem' }}>150€/h</Typography>
                                <Box>
                                    <Typography sx={{ fontFamily: 'aeonik', color: '#f8f8f8', fontSize: isMobile ? '0.9rem' : '1.2rem' }}>If you opt for our maintenance package, you can use training hours to understand Webflow.</Typography>
                                    <Divider sx={{display:isMobile ? 'none':'normal', mt: isMobile ? 3 : 5, bgcolor: '#f8f8f8' }} />
                                </Box>
                            </Box>

                            <Box mt={isMobile ? 4 : 8} sx={{ cursor: 'pointer', '&:hover': { '.text1': { textDecoration: 'underline' } }, display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Typography className='text1' sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#f8f8f8', fontSize: isMobile ? '1rem' : '1.2rem' }}>Contact the agency</Typography>
                                <ArrowForwardIcon sx={{color:'#f8f8f8', fontSize: isMobile ? '2rem' : '2.5rem' }} />
                            </Box>

                        </Box>
                    </Grid>
                   
                </Grid>
            </Box>
        </>
    )
}

export default HoursUse
