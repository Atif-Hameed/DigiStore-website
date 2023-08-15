import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import BigVideo from '../../asset/videoThumb.webp'
import '../InnerLandingPage/index.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function VideoBig() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{cursor:'pointer'}} width={'100%'} height={ isMobile ? '62vh':'100vh'}>
                <Box position={'relative'} sx={{
                    backgroundImage: `url(${BigVideo})`,
                    backgroundSize:'cover',
                    borderBottom:isMobile ? '0.05rem solid #f8f8f8':'none',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%'
                }}
                >
                    <Box sx={{
                        position:'absolute', left:0, top:0, width:'100%', height:'100%',
                        background:'linear-gradient(rgba(16,16,16,0),rgba(16,16,16,.7) 68%,#101010 96%)',
                    }}
                    ></Box>

                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: '#fdd33c', py:isMobile ? 1.5: 2.5, px: 3, display: 'flex', gap:isMobile ? 1: 2, alignItems: 'center', width: isMobile ? '50%':'fit-content' }}>
                        <Typography sx={{ fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.2rem': '1.5rem' }} >Watch the video</Typography>
                        <PlayCircleIcon sx={{ fontSize: '2rem' }} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default VideoBig
