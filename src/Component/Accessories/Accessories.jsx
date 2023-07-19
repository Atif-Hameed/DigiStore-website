import React, { useState } from 'react'
import InfinitSlider from '../LandingPage/InfinitSlider/InfinitSlider'
import Navbar from '../LandingPage/Navbar/Navbar'
import Footer from '../LandingPage/Footer/Footer'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import '../LandingPage/index.css'
import shirt4F from '../../asset/shirt4F.jpg'
import shirt4M from '../../asset/shirt4M.jpg'
import shirt5F from '../../asset/shirt5F.jpg'
import shirt5M from '../../asset/shirt5M.jpg'
import shirt6F from '../../asset/shirt6F.jpg'
import shirt6M from '../../asset/shirt6M.jpg'
import shirt7F from '../../asset/shirt7F.jpg'
import shirt7M from '../../asset/shirt7M.jpg'
import cupM from '../../asset/cupM.png'
import svgPic from '../../asset/shirtText.svg'


const Accessories = () => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = (boxIndex) => {
        setIsHovered((prevHoverStat) => ({
            ...prevHoverStat,
            [boxIndex]: true,
        }));
    }

    const handleLeave = (boxIndex) => {
        setIsHovered((prevHoverStat) => ({
            ...prevHoverStat,
            [boxIndex]: false,
        }));
    }

    return (
        <>
            <InfinitSlider />
            <Box sx={{ position: 'relative' }}>
                <Navbar />
                <Box sx={{ mt: isMobile ? '5rem' : '11rem', px: isMobile ? 2.5 : 6, display: 'flex', gap: 1.3 }}>
                    <Typography sx={{ fontFamily: 'aeonik-regbold', fontSize: isMobile ? '2.8rem' : '6rem', fontWeight: 'bold' }} variant='h2'>ACCESSOIRES</Typography>

                    <Box sx={{ backgroundColor: '#fdd33c', height: 'fit-content', px: isMobile ? 1 : 1.5 }}>
                        <Typography sx={{ fontSize: isMobile ? '1.3rem' : '1.8rem', fontFamily: 'aeonik' }}>6</Typography>
                    </Box>

                </Box>

                <Box sx={{ mt: isMobile ? '3rem' : '7rem', mb: isMobile ? '6rem' : '13rem' }}>
                    <Grid container px={isMobile ? 2.5 : isTablet ? 2 : 6} spacing={3}>
                        <Grid item xl={3} sm={6} xs={12}>
                            <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(4) }} onMouseLeave={() => { handleLeave(4) }} >
                                <Box sx={{
                                    backgroundColor: 'rgba(0,0,0, 0.45)',
                                    height: '100%',
                                    zIndex: 2,
                                    position: 'absolute',
                                    width: '100%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                                >
                                    <Box sx={{ backgroundColor: '#fdd33c', fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.65rem', px: 1, py: 0.5 }}>SOLD OUT</Box>
                                </Box>
                                {isHovered[4] ? (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt4F} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt4M} alt="" />
                                    </>
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>GREEN AURA CAP</Typography>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}> 35 €</Typography>
                            </Box>
                        </Grid>

                        <Grid item xl={3} sm={6} xs={12}>
                            <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(5) }} onMouseLeave={() => { handleLeave(5) }} >
                                <Box sx={{
                                    backgroundColor: 'rgba(0,0,0, 0.45)',
                                    height: '100%',
                                    zIndex: 2,
                                    position: 'absolute',
                                    width: '100%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                                >
                                    <Box sx={{ backgroundColor: '#fdd33c', fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.65rem', px: 1, py: 0.5 }}>SOLD OUT</Box>
                                </Box>
                                {isHovered[5] ? (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt5F} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt5M} alt="" />
                                    </>
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>AURA FIGMA DESIGNER CAP</Typography>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}> 35 €</Typography>
                            </Box>
                        </Grid>

                        <Grid item xl={3} sm={6} xs={12}>
                            <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(6) }} onMouseLeave={() => { handleLeave(6) }} >
                                <Box sx={{
                                    backgroundColor: 'rgba(0,0,0, 0.45)',
                                    height: '100%',
                                    zIndex: 2,
                                    position: 'absolute',
                                    width: '100%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                                >
                                    <Box sx={{ backgroundColor: '#fdd33c', fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.65rem', px: 1, py: 0.5 }}>SOLD OUT</Box>
                                </Box>
                                {isHovered[6] ? (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt6F} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt6M} alt="" />
                                    </>
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>STICKERS BUILDER</Typography>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}> 8 €</Typography>
                            </Box>
                        </Grid>

                        <Grid item xl={3} sm={6} xs={12}>
                            <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(7) }} onMouseLeave={() => { handleLeave(7) }} >
                                <Box sx={{
                                    backgroundColor: 'rgba(0,0,0, 0.45)',
                                    height: '100%',
                                    zIndex: 2,
                                    position: 'absolute',
                                    width: '100%',
                                }}
                                >
                                </Box>
                                {isHovered[7] ? (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt7F} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt7M} alt="" />
                                    </>
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>STICKERS AURA</Typography>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}> 8 €</Typography>
                            </Box>
                        </Grid>

                        <Grid item xl={3} sm={6} xs={12}>
                            <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} >
                                <Box sx={{
                                    backgroundColor: 'rgba(0,0,0, 0.45)',
                                    height: '100%',
                                    zIndex: 2,
                                    position: 'absolute',
                                    width: '100%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                                >
                                    <Box sx={{ backgroundColor: '#fdd33c', fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.65rem', px: 1, py: 0.5 }}>SOLD OUT</Box>
                                </Box>
                                <img width={isMobile ? '100%' : '350rem'} src={cupM} alt="" />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>DIGIDOP MUG</Typography>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}> 20 €</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Footer />
            </Box>
        </>
    )
}

export default Accessories
