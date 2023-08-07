import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../index.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import figmaLogo from '../../../asset/figmaLogo.svg'
import WLogo from '../../../asset/WLogog.svg'
import webflowLogo from '../../../asset/webflowLogo.svg'
import tickIcon from '../../../asset/tickIcon.svg'


const Card1 = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ cursor: 'pointer', bgcolor: '#181818', pl: isMobile ? 3 : 10, pr: isMobile ? 3 : 7.5, py: isMobile ? 1 : 13, pt:isMobile ? 3 : 'normal', display: 'flex', flexDirection: 'column', gap:isMobile ? 3 : 5 }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <img src={figmaLogo} width={isMobile ? '38rem' : '67rem'} alt="" />
                    <Box sx={{ bgcolor: '#222', width: 'fit-content', py: 0.8, px: 1.3 }}>
                        <Typography sx={{ fontFamily: 'aeonik', fontWeight: 'bold', fontSize: isMobile ? '1rem' : '1.2rem', color: '#fff', }}>
                            FIGMA DESIGN
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, '&:hover': { textDecoration: 'underline',color:'#fff' } }} >
                    <Typography sx={{ fontFamily: 'aeonik', lineHeight: 1.3, color: '#fff', fontSize: isMobile ? '1.2rem':'2.5rem', width: '80%' }}>
                        Branding and layout Figma
                    </Typography>
                    <ArrowForwardIcon sx={{ color: '#fff', fontSize: '5rem', width: '20%' }} />
                </Box>
            </Box>
        </>
    )
}


const Card2 = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ cursor: 'pointer', bgcolor: '#181818', pl:isMobile ? 3 : 10, pr: isMobile ? 3 : 7.5, py: isMobile ? 1 : 13, pt:isMobile ? 3 : 'normal', display: 'flex', flexDirection: 'column', gap:isMobile ? 3 : 5 }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <img src={WLogo} width={isMobile ? '70rem' : '100rem'} alt="" />
                    <Box sx={{ bgcolor: '#222', width: 'fit-content', py: 0.8, px: 1.3 }}>
                        <Typography sx={{ fontFamily: 'aeonik', fontWeight: 'bold', fontSize:isMobile ? '1rem' : '1.2rem', color: '#fff', }}>
                            WEBFLOW DEVELOPMENT
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap:isMobile ? 5 : 11, '&:hover': { textDecoration: 'underline',color:'#fff' } }} >
                    <Typography sx={{ fontFamily: 'aeonik', lineHeight: 1.3, color: '#fff', fontSize:isMobile ? '1.2rem':'2.5rem', width: '80%' }}>
                        Webflow development
                    </Typography>
                    <ArrowForwardIcon sx={{ color: '#fff', fontSize: '5rem', width: '20%' }} />
                </Box>
            </Box>
        </>
    )
}

const Card3 = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ cursor: 'pointer',height:'100%', bgcolor: '#181818', pl:isMobile ? 3 : 10, pr: isMobile ? 3 : 7.5,pt:isMobile ? 3 : 'normal', justifyContent: 'center', display: 'flex', flexDirection: 'column', gap:isMobile ? 3 : 5 }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <img src={webflowLogo} width={ isMobile ? '180rem' : '237rem'} alt="" />

                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, '&:hover': { textDecoration: 'underline',color:'#fff' } }} >
                    <Typography sx={{ fontFamily: 'aeonik', lineHeight: 1.3, color: '#fff', fontSize:isMobile ? '1.2rem':'2.5rem',}}>
                        Create a Webflow site with advanced features
                    </Typography>
                    <ArrowForwardIcon sx={{ color: '#fff', fontSize: '5rem', width: '20%' }} />
                </Box>
            </Box>
        </>
    )
}


const Card4 = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{mt:isMobile ? 3 : 'normal', display: 'flex', flexDirection: 'column', gap:isMobile ? 3 : 4 }} >
                <Box>
                    <Typography sx={{ color: '#838383', fontSize: isMobile ? '1rem' : '1.25rem', fontFamily: 'aeonik-reg', fontWeight: 'bold' }} >OUR SERVICES INCLUDE</Typography>
                    <Divider sx={{ mt: 1.5, backgroundColor: '#838383' }} />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap:isMobile ? 6 : 8, pb: 5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ lineHeight: 1.2, color: '#BEBEBE', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1.13rem' : '1.38rem' }}>Client-First developed websites</Typography>
                        <img src={tickIcon} alt="" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#BEBEBE', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1.1rem' : '1.38rem' }}>Easy to scale website (optimized CMS)</Typography>
                        <img src={tickIcon} alt="" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#BEBEBE', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1.13rem' : '1.38rem' }}>SEO best practices</Typography>
                        <img src={tickIcon} alt="" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#BEBEBE', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1.13rem' : '1.38rem' }}>Training of your teams</Typography>
                        <img src={tickIcon} alt="" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#BEBEBE', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1.13rem' : '1.38rem' }}>Expertise on conversion optimization</Typography>
                        <img src={tickIcon} alt="" />
                    </Box>
                </Box>

            </Box>
        </>
    )
}




const CardsType1 = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{px: isMobile ? '1.2rem':'3.1rem', py: isMobile ? '2rem' : '8.5rem' }}>

                <Box >
                    <Typography sx={{ color: '#838383', fontSize: isMobile ? '1.3rem' : '2.5rem', mb: 1 }} >01 Your website from A to Z.</Typography>
                    <Divider sx={{ backgroundColor: '#838383', }} />
                </Box>

                <Grid container sx={{mt: isMobile ? '0rem' : '2.7rem'}}  spacing={isMobile ? 6 : 5}>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Card1 />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Card2 />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Card3 />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Card4 />
                    </Grid>
                </Grid>

                
            </Box>
        </>
    )
}

export default CardsType1
