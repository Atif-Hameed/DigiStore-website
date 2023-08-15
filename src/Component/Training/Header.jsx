import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import bgVideo from '../../asset/video/bgVideo.mp4'
import '../InnerLandingPage/index.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Header = () => {

    const theme = useTheme()
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box width={'100%'} height={isMobile ? '30rem':'100vh'} position={'relative'}>
                <Box sx={{
                    position: 'absolute', width: '100%', height:isMobile ? '53%': '100%',
                    background:'linear-gradient(rgba(16,16,16,0), rgba(16,16,16,.7) 68%, #101010 96% )', left: 0, top: 0
                }}
                ></Box>
                <video src={bgVideo} autoPlay muted loop style={{padding:0, margin:0, height:isMobile ? '53%': '100%', width: '100%', objectFit:'cover' }} />
                <Box p={0} m={0} mt={isMobile ? 8 : 18} px={ isMobile ? 2.5:6} sx={{ position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'column', gap: isMobile ? 3 : 5 }}>

                    <Typography sx={{ fontFamily: 'aeonik', width:isMobile ? '100%': '70%', color: '#f8f8f8', fontSize:isMobile ? '2.45rem':'4.9rem', lineHeight: isMobile ? '3.2rem':'6.5rem' }}>Webflow and Webdesign training</Typography>
                    <Typography sx={{ fontFamily: 'aeonik-reg', width: isMobile ? '100%': '48%', color: '#bebebe', fontSize:isMobile ? '1.25rem': '1.9rem' }}>Training delivered by recognized experts on the creation of a responsive website and e-commerce on Webflow.</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems : isMobile ? 'center' :'normal' }}>
                        <Box mt={isMobile ? 0 : 3.8} sx={{ px: isMobile ? 3 : 3.7, py: isMobile ? 1.7 : 1.9, width: 'fit-content', bgcolor: '#fdd33c', display: 'flex', alignItems: 'center', gap: 1.35 }}>
                            <Typography sx={{ fontFamily: 'aeonik-reg', fontSize: isMobile ? '1.1rem' : '1.25rem' }}>Contact us</Typography>
                            <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.6rem' }} />
                        </Box>
                        <ArrowForwardIcon sx={{ color: '#f8f8f8', fontSize: isMobile ? '3.8rem' : '6.6rem', transform: 'rotate(90deg)' }} />
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Header
