import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import GoogleIcon from '../../asset/GoogleIcon.svg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CardType4 from '../InnerLandingPage/WebPractices/CardType4/CardType4';

const ValidatedCustomer = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ bgcolor: '#f8f8f8', pt: isMobile ? 8 : 17.5, px: isMobile ? 2.5 : 6, pb:15}}>
                
                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: isMobile ? 5 : 'noraml' }}>
                        <Typography sx={{ lineHeight: 1.3, color: '#181818', fontSize: isMobile ? '2rem' : '3.75rem', fontFamily: 'aeonik-reg' }}>And validated by our customers</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 1 : 1.5 }}>
                            <img src={GoogleIcon} width={isMobile ? '15rem' : 'noraml'} alt="" />
                            <Typography sx={{ fontFamily: 'aeonik-reg', fontWeight: 'bold', fontSize: isMobile ? '1rem' : '1.2rem' }}>5/5 (51 reviews)</Typography>
                            <ArrowOutwardIcon sx={{ fontWeight: 'bold', fontSize: isMobile ? '1.8rem' : '2.3rem' }} />
                        </Box>
                    </Box>
                
                <CardType4/>

            </Box>
        </>
    )
}

export default ValidatedCustomer
