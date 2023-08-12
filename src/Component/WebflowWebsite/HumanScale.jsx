import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../InnerLandingPage/index.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import tickBox from '../../asset/tickBox.svg'
import shootingImg from '../../asset/shootingImg.webp'


function HumanScale() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box px={isMobile ? 2.5 : 6} py={isMobile ? 8 :20}>

                <Grid container spacing={isMobile  ? 4 : 15}>
                    <Grid item lg={6} sm={12} >
                        <Box >
                            <Typography sx={{ color: '#f8f8f8', fontSize: isMobile ? '1.9rem' : '3.6rem', fontFamily: 'aeonik-reg' }}>A webflow agency, on a human scale.</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={6} sm={12} >
                        <Box>
                            <Typography sx={{ color: '#bebebe', fontSize:isMobile ? '0.98rem':'1.3rem', fontFamily: 'aeonik' }}>Recognized by our peers as the French benchmark for Webflow website development - Client-First Ambassador, Webflow Expert, Global Webflow Community leader.</Typography>

                            <Box mt={isMobile ? 3 : 5} sx={{ '&:hover': { '.text': { textDecoration: 'underline' } }, display: 'flex', alignItems: 'center', alignSelf: isMobile ? 'start' : 'end', gap: 1 }}>
                                <Typography className='text' sx={{ fontSize: isMobile ? '1.1rem' : '1.3rem', fontFamily: 'aeonik-reg', color: '#fff' }}>
                                    Discover our history
                                </Typography>
                                <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem', color: '#f1f1f1' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid mt={2} container spacing={ isMobile ? 5 :12}>
                    <Grid item lg={4.3} sm={12} >
                        <Box>
                            <Typography sx={{ color: '#bebebe', fontSize:isMobile ? '1rem' : '1.3rem', fontFamily: 'aeonik-reg' }}>DIGIDOP IS...</Typography>
                            <Divider sx={{mt: isMobile ? 1 :2, bgcolor: '#bebebe' }} />
                        </Box>
                        <Box mt={isMobile ? 3 : 5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? 6 : 7 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={{ color: '#bebebe', fontSize:isMobile ? '1.11rem' : '1.4rem', fontFamily: 'aeonik-reg' }}>A team composed of UX/UI designer, product designer and webflow developer 100% internalized</Typography>
                                <img src={tickBox} width={'70rem'} alt="" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
                                <Typography sx={{ color: '#bebebe', fontSize:isMobile ? '1.11rem' : '1.4rem', fontFamily: 'aeonik-reg' }}>The guarantee that your project will not be entrusted to freelancers</Typography>
                                <img src={tickBox} width={'50rem'} alt="" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
                                <Typography sx={{ color: '#bebebe', fontSize:isMobile ? '1.11rem' : '1.4rem', fontFamily: 'aeonik-reg' }}>A remote team with the HQ of the webflow agency in Paris</Typography>
                                <img src={tickBox} width={'45rem'} alt="" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
                                <Typography sx={{ color: '#bebebe', fontSize:isMobile ? '1.11rem' : '1.4rem', fontFamily: 'aeonik-reg' }}>An internationally recognized French webflow agency</Typography>
                                <img src={tickBox} width={'45rem'} alt="" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={7.7} sm={12} height={'100%'} width={'100%'}>
                        <Box 
                        sx={{
                            background:`url(${shootingImg})`,
                            backgroundSize:'cover',
                            width:'100%',
                            height:isMobile ? '100%' :'93%',
                            backgroundPosition:'center'
                        }}
                        >
                            <img src={shootingImg} width={'100%'} height={'90%'} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default HumanScale
