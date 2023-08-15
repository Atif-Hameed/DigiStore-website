import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import figmaBg from '../../../asset/figmaBgBlack.svg'
import wLogo from '../../../asset/wBig.svg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import thumbnail from '../../../asset/thumbnail.webp'
import thumbnail2 from '../../../asset/thumbnail2.webp'
import youtube from '../../../asset/youtube.svg'
import ytLogo from '../../../asset/ytLogo.svg'
import tiktokLogo from '../../../asset/tiktokLogo.svg'
import instaLogo from '../../../asset/instaLogo.svg'
import Yheart from '../../../asset/YheartLogo.svg'
import linkedInLogo from '../../../asset/linkedInLogo.svg'
import '../index.css'

const Courses = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ py: isMobile ? 8 : 18, px:isMobile ? 2.7 : 6 }} >
                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#fff', fontSize: isMobile ? '1.9rem' : '3.7rem', width: isMobile ? '100%' : '75%', lineHeight:1.3 }} >Our training courses are <span style={{textDecorationThickness:'3px', textDecoration: 'underline', fontStyle:'italic',  }} >100% free</span> & accessible to all</Typography>
                <Grid container spacing={5} mt={8} >
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box sx={{pb:isMobile ? 2.5 :'normal', px: isMobile ? 4 : 5, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: 5, background: 'linear-gradient(#1b0061,#461892)' }} >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mt: isMobile ? 3:10}} >
                                <img src={figmaBg} width={isMobile ? '55rem' : '100rem'} alt="" />
                                <img src={wLogo} width={isMobile ? '55rem' : '100rem'} alt="" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 'noraml' : 3, justifyContent: isMobile ? 'space-between' : 'normal' }}>
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#fff', fontSize: isMobile ? '1.5rem' : '3.1rem' }}>Digidop Academy</Typography>
                                <ArrowOutwardIcon sx={{ fontSize: isMobile ? '3.5rem' : '4.3rem', color: "#fff" }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} mt={isMobile ? 2 : 'normal'}>
                        <Box>
                            <img src={thumbnail} width={'100%'} height={'100%'} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box sx={{cursor:'pointer', '&:hover':{border:'1px solid #fdd33c'}}}>
                            <Box >
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#838383', fontSize:isMobile ? '1rem' : '1.3rem', mb: 1 }} >TOP TUTO WEBFLOW</Typography>
                                <Divider sx={{ backgroundColor: '#838383', }} />
                            </Box>
                            <Box mt={5.5} mb={0} p={0}>
                                <img src={thumbnail2} width={'100%'} height={'100%'} alt="" />
                            </Box>
                            <Box sx={{ py:isMobile ? 2.8 : 3.2, bgcolor: '#181818', px:isMobile ? 2.5 : 4, display: 'flex', flexDirection: 'column', gap: 3.7 }}>
                                <img src={youtube} width={ isMobile ? '160px':'200px'} alt="" />
                                <Typography sx={{ color: '#bebebe', fontSize:isMobile ? '1.25rem' : '1.7rem' }} >Discover Wized, the tool to create a Web App - nocode - with Webflow.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        {/* <Box> */}
                            <Box >
                                <Typography sx={{ fontFamily: 'aeonik-reg', color: '#838383', fontSize:isMobile ? '1rem' : '1.3rem', mb: 1 }} >OUR NETWORKS</Typography>
                                <Divider sx={{ backgroundColor: '#838383', }} />
                            </Box>
                            <Box mt={isMobile ? 3.5 : 5.5} sx={{ display: 'flex', flexDirection:'column',}}>
                                <Box sx={{cursor:'pointer',py:isMobile ? 4 :4.7,px: isMobile ? 2.5 :4,display: 'flex', alignItems: 'center', justifyContent:'space-between','&:hover':{backgroundColor:'#181818'} }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center',gap:2 }}>
                                        <img src={ytLogo} width={isMobile ? '28rem' : ''} alt="" />
                                        <Typography sx={{ color: '#fff', fontSize:isMobile ? '1.25rem' : '2rem', fontFamily: 'aeonik-reg' }} >YouTube</Typography>
                                    </Box>
                                    <ArrowOutwardIcon sx={{ color: '#bebebe', fontSize: '2.2rem' }} />
                                </Box>

                                <Box sx={{cursor:'pointer',py:isMobile ? 4 :4.7,px:isMobile ? 2.5 :4, display: 'flex', alignItems: 'center', justifyContent:'space-between','&:hover':{backgroundColor:'#181818'} }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center',gap:2 }}>
                                        <img src={linkedInLogo} width={isMobile ? '25rem' :'30rem'} alt="" />
                                        <Typography sx={{ color: '#fff', fontSize:isMobile ? '1.25rem' : '2rem', fontFamily: 'aeonik-reg' }} >LinkedIn</Typography>
                                    </Box>
                                    <ArrowOutwardIcon sx={{ color: '#bebebe', fontSize: '2.2rem' }} />
                                </Box>

                                <Box sx={{cursor:'pointer',py:isMobile ? 4 :4.7,px:isMobile ? 2.5 :4, display: 'flex', alignItems: 'center', justifyContent:'space-between','&:hover':{backgroundColor:'#181818'} }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center',gap:2 }}>
                                        <img src={tiktokLogo} width={isMobile ? '25rem' :'30rem'} alt="" />
                                        <Typography sx={{ color: '#fff', fontSize:isMobile ? '1.25rem' : '2rem', fontFamily: 'aeonik-reg' }} >TikTok</Typography>
                                    </Box>
                                    <ArrowOutwardIcon sx={{ color: '#bebebe', fontSize: '2.2rem' }} />
                                </Box>

                                <Box sx={{cursor:'pointer',py:isMobile ? 4 :4.7,px:isMobile ? 2.5 :4, display: 'flex', alignItems: 'center', justifyContent:'space-between','&:hover':{backgroundColor:'#181818'} }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center',gap:2 }}>
                                        <img src={instaLogo} width={isMobile ? '26rem' :'33rem'} alt="" />
                                        <Typography sx={{ color: '#fff', fontSize:isMobile ? '1.25rem' : '2rem', fontFamily: 'aeonik-reg' }} >Instagram</Typography>
                                    </Box>
                                    <ArrowOutwardIcon sx={{ color: '#bebebe', fontSize: '2.2rem' }} />
                                </Box>

                                <Box sx={{cursor:'pointer',py:isMobile ? 4 :4.7,px:isMobile ? 2.5 :4, display: 'flex', alignItems: 'center', justifyContent:'space-between','&:hover':{backgroundColor:'#181818'} }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center',gap:2 }}>
                                        <img src={Yheart} width={isMobile ? '26rem' :'30rem'} alt="" />
                                        <Typography sx={{ color: '#fff', fontSize:isMobile ? '1.25rem' : '2rem', fontFamily: 'aeonik-reg' }} >Community Love</Typography>
                                    </Box>
                                    <ArrowOutwardIcon sx={{ color: '#bebebe', fontSize: '2.2rem' }} />
                                </Box>
                            </Box>
                        {/* </Box> */}
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default Courses
