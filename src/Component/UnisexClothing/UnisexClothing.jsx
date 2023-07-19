import React, { useState } from 'react'
import InfinitSlider from '../LandingPage/InfinitSlider/InfinitSlider'
import Navbar from '../LandingPage/Navbar/Navbar'
import Footer from '../LandingPage/Footer/Footer'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import '../LandingPage/index.css'
import shirt1F from '../../asset/shirt1F.jpg'
import shirt1M from '../../asset/shirt1M.jpg'
import shirt2M from '../../asset/shirt2M.jpg'
import shirt3F from '../../asset/shirt3F.jpg'
import shirt3M from '../../asset/shirt3M.jpg'
import svgPic from '../../asset/shirtText.svg'


const UnisexClothing = () => {

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
                <Box sx={{ mt: isMobile ? '5rem' : '11rem', px: isMobile ? 2.5  : 6, display: 'flex', gap: 1.3 }}>
                    <Typography sx={{ fontFamily: '', fontSize: isMobile ? '2.8rem' : '6rem', fontWeight: '500' }} variant='h2'>VÊTEMENTS UNISEXES</Typography>
                   
                    <Box sx={{ backgroundColor: '#fdd33c', height: 'fit-content', px: isMobile ? 1 : 1.5 }}>
                        <Typography sx={{ fontSize: isMobile ? '1.3rem' : '1.8rem', fontFamily: 'aeonik' }}>3</Typography>
                    </Box>

                </Box>

                <Box sx={{mt: isMobile ? '3rem' : '7rem', mb: isMobile ? '6rem' : '13rem'}}>
                    <Grid container px={isMobile ? 2.5 : isTablet ? 2 : 6} spacing={3}>
                        <Grid item xl={3} sm={6} xs={12} p={0}>
                            <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(1) }} onMouseLeave={() => { handleLeave(1) }} >
                                {isHovered[1] ? (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt1F} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt1M} alt="" />
                                    </>
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>T-SHIRT WEBFLOW BUILDER</Typography>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>34,90 €</Typography>
                            </Box>
                        </Grid>

                        <Grid item xl={3} sm={6} xs={12}>
                            <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(2) }} onMouseLeave={() => { handleLeave(2) }} >
                                {isHovered[2] ? (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt1F} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt2M} alt="" />
                                    </>
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>T-SHIRT DESIGNER FIGMA</Typography>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>34,90 €</Typography>
                            </Box>
                        </Grid>

                        <Grid item xl={3} sm={6} xs={12}>
                            <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(3) }} onMouseLeave={() => { handleLeave(3) }} >
                                {isHovered[3] ? (
                                    <>
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt3F} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt3M} alt="" />
                                    </>
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>T-SHIRT 19 AVRIL</Typography>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>490 €</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Footer />
            </Box>
        </>
    )
}

export default UnisexClothing
