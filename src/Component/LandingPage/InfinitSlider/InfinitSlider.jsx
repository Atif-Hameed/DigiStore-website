import React from 'react'
import '../index.css'
import { Box, Typography } from '@mui/material'
import Marquee from "react-fast-marquee";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const FirstCollection = () => {
    return (
        <>
            <Box sx={{ display: 'flex', gap: '0.3rem', alignItems: 'center', color: '#fff',py:"3px" }} >
                <Typography variant='h5' sx={{ fontWeight: '500', fontSize: '1.8rem' }} >FIRST COLLECTION</Typography>
                <ArrowForwardIcon sx={{ fontSize: '30px' }} />
            </Box>
        </>
    )
}
const NotAvailable = () => {
    return (
        <>
            <Box sx={{ display: 'flex', gap: '0.3rem', alignItems: 'center', color: '#fff',py:"3px" }} >
                <Typography variant='h5' sx={{ fontWeight: '500', fontSize: '1.8rem' }} >NOW AVAILABLE</Typography>
                <ArrowForwardIcon sx={{ fontSize: '30px' }} />
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
            style={{backgroundColor:'#fdd33c'}}>
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
