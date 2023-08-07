import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../index.css'
import MainLogo from '../../../asset/mainDigiLogo.svg'
import linkedLogo from '../../../asset/linkedInLogo.svg'
import instaLogo from '../../../asset/instaLogo.svg'
import tiktokLogo from '../../../asset/tiktokLogo.svg'
import wLogo from '../../../asset/wBig.svg'
import ytLogo from '../../../asset/ytLogo.svg'
import figmaLogo from '../../../asset/figmaLogo.svg'
import './footer.css'


const Footer = () => {

    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box sx={{ pt: isMobile ? 7 : 13, px: isMobile ? 2.5 : 6, bgcolor: '#181818' }}>

                <Grid container spacing={5}>

                    <Grid item xs={12} sm={6} lg={3} >
                        <Box >
                            <Typography sx={{ fontFamily: 'aeonik-reg', color: '#bebebe', fontSize: isMobile ? '1rem' : '1.25rem', mb: 1, fontWeight: 'bold' }} >SERVICES</Typography>
                            <Divider sx={{ backgroundColor: '#222', }} />
                        </Box>
                        <Box sx={{ mt: isMobile ? 2.5 : 4, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik', fontSize:isMobile ? '0.8rem' : '0.9rem' }} >WEBSITE</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Branding & Design Figma</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Webflow development</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Webflow Enterprise</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Webflow E-Commerce</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >All our services</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik', fontSize: isMobile ? '0.8rem' : '0.9rem' }} >ACCOMPANIMENT</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Webflow training</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Webflow Maintenance</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >All our accompaniments</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik', fontSize: isMobile ? '0.8rem' : '0.9rem' }} >CUSTOMIZED SOLUTIONS</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Fundraising</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Investment funds</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Saas</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Impact Company</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Start-up</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >All our solutions</Typography>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} lg={3} >
                        <Box >
                            <Typography sx={{ fontFamily: 'aeonik-reg', color: '#bebebe', fontSize:isMobile ? '1rem' : '1.25rem', mb: 1, fontWeight: 'bold' }} >EXPERTISES</Typography>
                            <Divider sx={{ backgroundColor: '#222', }} />
                        </Box>
                        <Box sx={{ mt:isMobile ? 2.5 : 4, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik', fontSize:isMobile ? '0.8rem' : isMobile ? '0.8rem' : '0.9rem' }} >EXPERTISE</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Webflow expertise</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Client-First Ambassador</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Digicalidad quality charter</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >All our expertise</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik', fontSize: isMobile ? '0.8rem' : '0.9rem' }} >ACHIEVEMENTS</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize: '1.26rem' }} >Portfolio</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize: '1.26rem' }} >Customer Reviews</Typography>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} lg={3} >
                        <Box >
                            <Typography sx={{ fontFamily: 'aeonik-reg', color: '#bebebe', fontSize:isMobile ? '1rem' : '1.25rem', mb: 1, fontWeight: 'bold' }} >RESOURCES</Typography>
                            <Divider sx={{ backgroundColor: '#222', }} />
                        </Box>
                        <Box sx={{ mt:isMobile ? 2.5 : 4, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik', fontSize:isMobile ? '0.8rem' : isMobile ? '0.8rem' : '0.9rem' }} >CONTENTS</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Blog</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Toolbox</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Templates</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Webflow x Figma</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik', fontSize: isMobile ? '0.8rem' : '0.9rem' }} >WEBFLOW</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Why Webflow?</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Webflow documentation</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Compare Webflow</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik', fontSize: isMobile ? '0.8rem' : '0.9rem' }} >FIGMA</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Why Figma?</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Figma documentation</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Compare Figma</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik', fontSize: isMobile ? '0.8rem' : '0.9rem' }} >ACADEMY</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Digidop training courses</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Digidop TV</Typography>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} lg={3} >
                        <Box >
                            <Typography sx={{ fontFamily: 'aeonik-reg', color: '#bebebe', fontSize:isMobile ? '1rem' : '1.25rem', mb: 1, fontWeight: 'bold' }} >THE AGENCY</Typography>
                            <Divider sx={{ backgroundColor: '#222', }} />
                        </Box>
                        <Box sx={{ mt:isMobile ? 2.5 : 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik', fontSize:isMobile ? '0.8rem' : isMobile ? '0.8rem' : '0.9rem' }} >DISCOVER</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >History</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Team</Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Digi'Store</Typography>
                                    <Typography sx={{ bgcolor: '#fddc33', width: 'fit-content', px: 1, py: 0.5, fontFamily: 'aeonik' }} >NEW!</Typography>
                                </Box>

                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Press & media kit</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >News</Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Join us</Typography>
                                    <Typography sx={{ bgcolor: '#fddc33', width: 'fit-content', px: 1, py: 0.8, fontFamily: 'aeonik-reg' }} >We are recruiting!</Typography>
                                </Box>

                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Faq</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Site Map</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik', fontSize: isMobile ? '0.8rem' : '0.9rem' }} >CONTACT</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Sales Contact</Typography>
                                <Typography className='links' sx={{ color: '#bebebe', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1rem' : '1.26rem' }} >Contact Partner</Typography>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>



                <Box sx={{ mt:isMobile ? 7 : 14, pt: isMobile ? 3 : 4, pb:isMobile ? 6 : 12, gap:isMobile ? 3 : 'normal', borderTop: '1px solid #222', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems:isMobile ? 'start' : 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <img src={MainLogo} width={isMobile ? '160rem':'200rem'} alt="" />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection : isMobile ? 'column' : 'row', alignItems: isMobile ? 'start' : 'center', gap: isMobile ? 3 : 32 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 3.2 : 3.8 }}>
                            <img src={linkedLogo} width={isMobile ? '25rem':'33rem'} alt="" />
                            <img src={tiktokLogo} width={isMobile ? '25rem':'33rem'} alt="" />
                            <img src={instaLogo} width={isMobile ? '25rem':'33rem'} alt="" />
                            <img src={ytLogo} width={isMobile ? '25.5rem':''} alt="" />
                            <img src={wLogo} width={isMobile ? '25rem':'33rem'} alt="" />
                            <img src={figmaLogo} width={isMobile ? '18.5rem':'23rem'} alt="" />
                        </Box>
                        <Box>
                            <Typography sx={{ color: '#4c4b49', fontFamily: 'aeonik-reg', fontSize:isMobile ? '0.98rem' : '1.25rem', wordSpacing: 2.5 }}>© 2023 Digidop - Legal - Cookie</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Footer
