import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../InnerLandingPage/index.css'


function ClickHere() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))


    return (
        <>
            <Box width={'100%'} py={ isMobile ? 8 : 16}>
                <Box sx={{display:'flex', alignItems:'center',gap:3, flexDirection:'column', justifyContent:'center'}}>
                   
                    <Typography sx={{ textAlign: 'center', fontFamily: 'aeonik', 
                    color: '#fff',lineHeight:isMobile ? 'normal':'6.5rem', cursor: 'pointer', fontSize:isMobile ? '2.5rem' : '4.9rem', width:isMobile ? '90%' : '60%',
                    background:'linear-gradient(#fff,rgba(255,255,255,.4))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',
                     }}>
                        You are one click away from making the best decision for your site.
                    </Typography>


                    <Typography sx={{
                        fontStyle: 'italic', fontFamily: 'aeonik', color: '#fff', lineHeight: isMobile ? '5rem' :'11rem',
                        cursor: 'pointer', fontSize:isMobile ? '4.8rem':'10.5rem', borderBottom: '8px solid #fff', width: 'fit-content'
                    }}>
                        right here
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default ClickHere
