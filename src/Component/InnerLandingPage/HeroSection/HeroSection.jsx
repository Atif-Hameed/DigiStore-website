import React from 'react'
import '../index.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import figmaSmall from '../../../asset/figmaSmall.svg'
// import hands from '../../../asset/handsSvg.svg'
import CarouselBig from './CarouselBig'
import wSmall from '../../../asset/wSamll.svg'
import boxSmall from '../../../asset/boxSmall.svg'
import { Box, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import './CarouselStyle.css'


const HeroSection = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box className="bgHands" sx={{ width: '100%', mt: 12.5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ mt: 14.3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 19 }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                        <Box>
                            <Typography sx={{ fontFamily: 'aeonik', textAlign: 'center', color: '#fff', fontSize: isMobile ? '3rem' : '4.9rem', lineHeight: isMobile ? '4rem' : '6.4rem' }}>Let's create your</Typography>
                            <Typography sx={{ fontFamily: 'aeonik', color: '#fff', fontSize: isMobile ? '3rem' : '4.9rem', lineHeight: isMobile ? '4rem' : '6.4rem' }}>website together.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography sx={{ fontFamily: 'aeonik', color: '#fff', fontSize: '1.38rem' }}>Services</Typography>
                                <ArrowOutwardIcon sx={{ color: '#fdd33c', fontSize: '35px' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography sx={{ fontFamily: 'aeonik', color: '#fff', fontSize: '1.38rem' }}>Portoflio</Typography>
                                <ArrowOutwardIcon sx={{ color: '#fdd33c', fontSize: '35px' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography sx={{ fontFamily: 'aeonik', color: '#fff', fontSize: '1.38rem' }}>Contact</Typography>
                                <ArrowOutwardIcon sx={{ color: '#fdd33c', fontSize: '35px' }} />
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.4, flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.4 }}>
                            <img src={figmaSmall} width={'20rem'} alt="" />
                            <Typography sx={{ color: '#BEBEBE', fontSize: '1.06rem', fontWeight: '', }}>Professional agency</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.4 }}>
                            <img src={wSmall} width={'20rem'} alt="" />
                            <Typography sx={{ color: '#BEBEBE', fontSize: '1.06rem', fontWeight: '', }}>Enterprise Partner</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.4 }}>
                            <img src={boxSmall} width={'20rem'} alt="" />
                            <Typography sx={{ color: '#BEBEBE', fontSize: '1.06rem', fontWeight: '', }}>Client-First certified</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ mt: 30, }}>
                    <CarouselBig />
                </Box>
            </Box>

        </>
    )
}

export default HeroSection
