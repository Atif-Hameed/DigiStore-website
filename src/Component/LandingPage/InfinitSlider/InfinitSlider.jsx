import React from 'react'
import '../index.css'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Marquee from "react-fast-marquee";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const FirstCollection = () => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ display: 'flex', gap: '0.3rem', alignItems: 'center', color: '#fff', py: "3px" }} >
                <Typography variant='h5' sx={{ fontWeight: '500', fontSize: isTablet ? '1.4rem' : '1.8rem' }} >FIRST COLLECTION</Typography>
                <ArrowForwardIcon sx={{ fontSize: isTablet ? '25px' : '30px' }} />
            </Box>
        </>
    )
}
const NotAvailable = () => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ display: 'flex', gap: '0.3rem', alignItems: 'center', color: '#fff', py: "3px" }} >
                <Typography variant='h5' sx={{ fontWeight: '500', fontSize: isTablet ? '1.4rem' : '1.8rem' }} >NOW AVAILABLE</Typography>
                <ArrowForwardIcon sx={{ fontSize: isTablet ? '25px' : '30px'  }} />
            </Box>
        </>
    )
}


const InfinitSlider = () => {
    return (
        <>
            <Marquee
                speed={30}
                direction='right'
                style={{ backgroundColor: '#fdd33c' }}>
                <FirstCollection />
                <NotAvailable />
                <FirstCollection />
                <NotAvailable />
                <FirstCollection />
                <NotAvailable />
                <FirstCollection />
                <NotAvailable />
                <FirstCollection />
                <NotAvailable />
            </Marquee>
        </>
    )
}

export default InfinitSlider
