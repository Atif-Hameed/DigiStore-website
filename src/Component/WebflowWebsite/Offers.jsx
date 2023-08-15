import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../InnerLandingPage/index.css'
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Offers = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box bgcolor={'#f8f8f8'} m={0} mt={-0.5} pt={5} px={isMobile ? 2.5 :6}>

                <Box sx={{ display: 'flex', alignItems:isMobile ? 'start' : 'center', flexDirection:isMobile ? 'column' : 'row', justifyContent: 'space-between', width: '100%', gap:isMobile ? 4:'normal'}}>
                    <Typography sx={{ width:isMobile ? '100%' : '45%', fontFamily: 'aeonik-reg', color: '#181818', fontSize: isMobile ? '1.45rem':'3rem' }}>Offers adapted to your needs of creation of Web sites</Typography>
                    <Typography sx={{ width:isMobile ? '100%' : '30%', fontFamily: 'aeonik', color: '#4c4b49', fontSize:isMobile ? '0.9rem': '1.2rem' }}>Digidop is a webflow agency specialized in the creation and the referencing (SEO) of a website. With different web solutions, from webflow development to 360° support.</Typography>
                </Box>

                <Grid mt={isMobile ? 1 : 10} container spacing={ 5}>
                    <Grid item lg={6} sm={12} >
                        <Box py={9} px={isMobile ? 3:5} bgcolor={'#fdd33c'} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#101010', fontSize:isMobile ? '1.5rem':'3.1rem', lineHeight:isMobile ? 'normal':'4.1rem' }}>Development of the Webflow site</Typography>
                                <Box>
                                    <Typography sx={{ fontFamily: 'aeonik', color: '#101010', fontSize:isMobile ? '0.9rem': '1.3rem' }}>You already have a model and want to transform it into a professional website to be visible on search engines?</Typography>
                                    <Divider sx={{ mt:isMobile ? 3 : 5, bgcolor: '#000' }} />
                                </Box>
                            </Box>

                            <Box mt={isMobile ? 3 : 5} sx={{ display: 'flex', gap: 2.5, flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize:isMobile ? '1.45rem': '1.8rem' }} />
                                    <Typography sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize:isMobile ? '1rem': '1.3rem' }}>Development of your website</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize:isMobile ? '1.45rem': '1.8rem' }} />
                                    <Typography sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize:isMobile ? '1rem': '1.3rem' }}>Connection to your web hosting</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize:isMobile ? '1.45rem': '1.8rem' }} />
                                    <Typography sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize:isMobile ? '1rem': '1.3rem' }}>Integration of analytics tools (e.g. Google Analytics)</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize:isMobile ? '1.45rem': '1.8rem' }} />
                                    <Typography sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize:isMobile ? '1rem': '1.3rem' }}>Showcase, landing page or e-commerce sites</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize:isMobile ? '1.45rem': '1.8rem' }} />
                                    <Typography sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize:isMobile ? '1rem': '1.3rem' }}>SEO optimization of the site</Typography>
                                </Box>
                            </Box>

                            <Box mt={isMobile ? 4: 8} sx={{'&:hover':{'.text1':{textDecoration:'underline'}}, display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Typography className='text1' sx={{ fontWeight: '800', fontFamily: 'aeonik-reg', color: '#101010', fontSize:isMobile ? '1rem': '1.2rem' }}>Figma to Webflow</Typography>
                                <ArrowForwardIcon sx={{ fontSize:isMobile ? '2rem': '2.5rem' }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} sm={12} >
                        <Box py={9} px={isMobile ? 3: 5} bgcolor={'#181818'} height={isMobile ? 'unset':'81.5%'}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#f8f8f8', fontSize:isMobile ? '1.45rem': '3.1rem', lineHeight:isMobile ? 'normal':'4.1rem' }}>360° Webflow agency offer</Typography>
                                <Box>
                                    <Typography sx={{ fontFamily: 'aeonik', color: '#f8f8f8', fontSize:isMobile ? '1rem': '1.3rem' }}>No model yet? Don't panic. Take advantage of our web agency's expertise to accompany you. All the development offers</Typography>
                                    <Divider sx={{ mt:isMobile ? 3 : 5, bgcolor: '#fff' }} />
                                </Box>
                            </Box>

                            <Box mt={isMobile ? 3 :5} sx={{ display: 'flex', gap: 2.5, flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize:isMobile ? '1.45rem': '1.8rem', color:'#f8f8f8' }} />
                                    <Typography sx={{ fontWeight:isMobile ? 'normal' : '800', fontFamily: 'aeonik-reg', color: '#f8f8f8', fontSize:isMobile ? '1rem': '1.3rem' }}>Showcase, landing page or e-commerce sites</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize:isMobile ? '1.45rem': '1.8rem', color:'#f8f8f8' }} />
                                    <Typography sx={{ fontWeight:isMobile ? 'normal' : '800', fontFamily: 'aeonik-reg', color: '#f8f8f8', fontSize:isMobile ? '1rem': '1.3rem' }}>Creation or optimization of your visual identity (logo, graphic charter, art direction)</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize:isMobile ? '1.45rem': '1.8rem', color:'#f8f8f8' }} />
                                    <Typography sx={{ fontWeight:isMobile ? 'normal' : '800', fontFamily: 'aeonik-reg', color: '#f8f8f8', fontSize:isMobile ? '1rem': '1.3rem' }}>UX and UI design of your website</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2.5, alignItems: 'center' }}>
                                    <CheckIcon sx={{ fontSize:isMobile ? '1.45rem': '1.8rem', color:'#f8f8f8' }} />
                                    <Typography sx={{ fontWeight:isMobile ? 'normal' : '800', fontFamily: 'aeonik-reg', color: '#f8f8f8', fontSize:isMobile ? '1rem': '1.3rem' }}>Project manager dedicated to your new website project</Typography>
                                </Box>
                            </Box>

                            <Box mt={isMobile ? 4 :8} sx={{'&:hover':{'.text2':{textDecoration:'underline'}}, display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Typography className='text2' sx={{ fontWeight: '800', fontFamily:isMobile ? 'aeonik' : 'aeonik-reg', color: '#f8f8f8', fontSize:isMobile ? '1rem' : '1.2rem' }}>Let's create my future website together</Typography>
                                <ArrowForwardIcon sx={{ fontSize: '2.5rem', color: '#f8f8f8' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Offers
