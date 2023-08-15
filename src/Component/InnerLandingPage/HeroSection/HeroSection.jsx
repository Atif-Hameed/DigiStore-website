import React from 'react'
import '../index.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import figmaSmall from '../../../asset/figmaSmall.svg'
import CarouselBig from './CarouselBig'
import wSmall from '../../../asset/wSamll.svg'
import boxSmall from '../../../asset/boxSmall.svg'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import './CarouselStyle.css'


const HeroSection = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box className="bgHands" sx={{width: '100%', mt: 12.5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ mt:isMobile ? 17.5 : 14.3,px:isMobile? 2.5 : 'normal', display: 'flex', flexDirection: 'column', alignItems: 'center', gap:isMobile ? 27 : 19.5 }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'start' : 'center', gap:isMobile ? 4 : 5.3 }}>
                        <Box>
                            <Typography sx={{ fontFamily: 'aeonik', textAlign:isMobile? 'start' : 'center', color: '#fff', fontSize: isMobile ? '2.45rem' : '4.9rem', lineHeight: isMobile ? '3.2rem' : '6.4rem' }}>Let's create your</Typography>
                            <Typography sx={{ fontFamily: 'aeonik', color: '#fff', fontSize: isMobile ? '2.45rem' : '4.9rem', lineHeight: isMobile ? '3.2rem' : '6.4rem' }}>website together.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap:isMobile ? 2.8 : 4, flexWrap: 'wrap' }}>
                            <Box sx={{cursor:'pointer', '&:hover':{'.text2':{textDecoration:'underline'}}, display: 'flex', alignItems: 'center', gap:isMobile ? 1.3 : 1.8 }}>
                                <Typography className='text1' sx={{ fontFamily: 'aeonik', color: '#fff', fontSize:isMobile ? '1.15rem' : '1.38rem' }}>Services</Typography>
                                <ArrowOutwardIcon sx={{ color: '#fdd33c', fontSize:isMobile? '28px' : '35px' }} />
                            </Box>
                            <Box sx={{cursor:'pointer', '&:hover':{'.text2':{textDecoration:'underline'}}, display: 'flex', alignItems: 'center', gap:isMobile ? 1.3 : 1.8 }}>
                                <Typography className='text1' sx={{ fontFamily: 'aeonik', color: '#fff', fontSize:isMobile ? '1.15rem' : '1.38rem' }}>Portoflio</Typography>
                                <ArrowOutwardIcon sx={{ color: '#fdd33c', fontSize:isMobile? '28px' : '35px' }} />
                            </Box>
                            <Box sx={{cursor:'pointer', '&:hover':{'.text3':{textDecoration:'underline'}}, mt:isMobile ? 1 : 'normal', display: 'flex', alignItems: 'center', gap:isMobile ? 1.3 : 1.8    }}>
                                <Typography className='text3' sx={{ fontFamily: 'aeonik', color: '#fff', fontSize:isMobile ? '1.15rem' : '1.38rem' }}>Contact</Typography>
                                <ArrowOutwardIcon sx={{ color: '#fdd33c', fontSize:isMobile? '28px' : '35px' }} />
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.4, flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap:isMobile ? 1.2: 1.4 }}>
                            <img src={figmaSmall} width={isMobile ? '17rem':'20rem'} alt="" />
                            <Typography sx={{ color: '#BEBEBE', fontSize:isMobile ? '0.85rem': '1.06rem', fontWeight: '', }}>Professional agency</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap:isMobile ? 1.2: 1.4 }}>
                            <img src={wSmall} width={isMobile ? '17rem':'20rem'} alt="" />
                            <Typography sx={{ color: '#BEBEBE', fontSize:isMobile ? '0.85rem': '1.06rem', fontWeight: '', }}>Enterprise Partner</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap:isMobile ? 1.2: 1.4 }}>
                            <img src={boxSmall} width={isMobile ? '17rem':'20rem'} alt="" />
                            <Typography sx={{ color: '#BEBEBE', fontSize:isMobile ? '0.85rem': '1.06rem', fontWeight: '', }}>Client-First certified</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ mt:isMobile ? 13 : 30, }}>
                    <CarouselBig />
                </Box>
            </Box>

        </>
    )
}

export default HeroSection
