import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function NextLvlBox() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ bgcolor: '#181818', px: isMobile ? 3 : 7.6, py: isMobile ? 4 : 9 }}>
                <Grid container alignItems={'center'}>
                    <Grid item lg={7.4} sm={12}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography sx={{ color: '#f8f8f8', fontSize: isMobile ? '1.5rem' : '3rem', fontFamily: 'aeonik-reg' }}>Ready to take your website to the next level?</Typography>
                            <Typography sx={{ color: '#bebebe', fontSize: isMobile ? '1.1rem' : '1.35rem', fontFamily: 'aeonik' }}>Improve your online visibility thanks to Digidop's experience, excellence and reactivity!</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={4.6} sm={12} mt={isMobile ? 4 : 'normal'}>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Box sx={{ px: isMobile ? 3 : 3.7, py: isMobile ? 1.7 : 2, width: 'fit-content', bgcolor: '#fdd33c', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography sx={{ fontFamily: 'aeonik-reg', fontSize: isMobile ? '1.1rem' : '1.3rem' }}>Contact us</Typography>
                                <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.6rem' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default NextLvlBox
