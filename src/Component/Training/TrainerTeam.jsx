import { Box, Divider, Grid, Typography, isMuiElement, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../InnerLandingPage/index.css'
import personImg1 from '../../asset/personImg1.webp'
import personImg2 from '../../asset/personImg2.webp'
import personImg3 from '../../asset/personImg3.webp'
import ppIcon from '../../asset/PpIcon.svg'
import certifIcon from '../../asset/certifIconWhite.svg'
import figmaLogo from '../../asset/figmaLogo.svg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Card = (props) => {

    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box py={isMobile ? 2.5 : 3} bgcolor={'#181818'} sx={{ cursor: 'pointer', '&:hover': { border: '1px solid #fdd33c', '.arrow': { color: '#fdd33c' } } }}>
                <Box sx={{ display: 'flex', justifyContent: 'end', px: isMobile ? 2 : 3 }}>
                    <ArrowOutwardIcon className='arrow' sx={{ color: '#bebebe', fontSize: isMobile ? '1.9rem' : '2.2rem' }} />
                </Box>
                <Box mt={isMobile ? -8 : -7}>
                    {props.img1}
                </Box>
                <Box mt={ isMobile ? 2:3} px={ isMobile ? 2.5 : 4} sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 2 : 2.7 }}>

                    <Typography sx={{ fontFamily: 'aeonik', color: '#fff', fontSize:isMobile ? '1.25rem' : '1.8rem' }}>
                        {props.heading}
                    </Typography>
                    <Typography sx={{ fontFamily: 'aeonik-reg', width: 'fit-content', color: '#bebebe', fontSize: isMobile ? '1rem' : '1.1rem', py: 1, px: 1.1, bgcolor: '#222' }}>
                        {props.Box}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2.5 }}>
                        {props.img2}
                        {props.img3}


                    </Box>

                </Box>
            </Box>
        </>
    )
}


function TrainerTeam() {

    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box>
                <Box py={10} px={isMobile ? 2.5 : 6}>
                    <Typography sx={{ color: '#838383', mb: 0.7, fontFamily: 'aeonik', fontSize: isMobile ? '1.2rem' : '2.45rem' }}>Our trainers</Typography>
                    <Divider sx={{ bgcolor: '#4c4b49' }} />

                    <Grid mt={isMobile ? 0 : 5} container spacing={5}>
                        <Grid item lg={4} sm={12} >
                            <Card
                                heading='Florian Bodelot'
                                Box='CO-FOUNDER'
                                img1={<img src={personImg1} style={{ objectFit: 'cover' }} height={isMobile ? '100%' :'470rem'} width={'100%'} alt="" />}
                                img2={<img src={ppIcon} width={isMobile ? '65rem' :'80rem'} alt="" />}
                                img3={<img src={certifIcon} width={isMobile ? '45rem' :'50rem'} alt="" />}
                            />
                        </Grid>
                        <Grid item lg={4} sm={12} >
                            <Card
                                heading='Thomas Labonne'
                                Box='CO-FOUNDER'
                                img1={<img src={personImg2} style={{ objectFit: 'cover' }} height={isMobile ? '100%' :'470rem'} width={'100%'} alt="" />}
                                img2={<img src={figmaLogo} width={isMobile ? '28rem' :'34rem'} alt="" />}
                            />
                        </Grid>
                        <Grid item lg={4} sm={12} >
                            <Card
                                heading='Thibaut Legrand'
                                Box='WEBFLOW DEVELOPER & SEO'
                                img1={<img src={personImg3} style={{ objectFit: 'cover', }} height={isMobile ? '90%' :'470rem'} width={'100%'} alt="" />}
                                img2={<img src={ppIcon} width={isMobile ? '65rem' :'80rem'} alt="" />}
                                img3={<img src={certifIcon} width={isMobile ? '45rem' :'50rem'} alt="" />}
                            />
                        </Grid>
                    </Grid>

                    <Typography mt={5} sx={{ color: '#bebebe', mb: 0.7, fontFamily: 'aeonik', fontSize:isMobile ? '0.8rem' : '1.1rem' }}>Webflow Expert Certification - Client-First Certification and Client-First Ambassadors</Typography>

                </Box>
            </Box>
        </>
    )
}

export default TrainerTeam
