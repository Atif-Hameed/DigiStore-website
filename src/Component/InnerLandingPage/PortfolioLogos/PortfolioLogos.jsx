import { Box, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../index.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StructLogos from './StructLogos'



const PortfolioLogos = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))


    return (
        <>
            <StructLogos
                hading={<>
                    <Box sx={{ bgcolor: '#fdd33c', py: isMobile ? 3.6 : 7, px: isMobile ? 2.5 : 6.2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ color: '#181818', fontFamily: 'aeonik-reg', fontSize: isMobile ? '2rem' : '3.7rem', fontWeight: '500' }}>See our portfolio</Typography>
                        <ArrowOutwardIcon sx={{ color: '#181818', fontSize: isMobile ? '3.5rem' : '4.5rem' }} />
                    </Box>
                </>}
                paragraph={<>
                    <Box sx={{ bgcolor: '#f8f8f8', px: isMobile ? 3 : 19, py: isMobile ? 8 : 18 }}>
                        <Typography sx={{ fontSize: isMobile ? '2.4rem' : '4.85rem', lineHeight: 1.3, fontFamily: 'aeonik', color: '#181818' }}>
                            "At Digidop, we create more than just websites. We craft personalized digital experiences, propelling your success online."
                        </Typography>
                    </Box>
                </>}
            />
        </>
    )
}

export default PortfolioLogos
