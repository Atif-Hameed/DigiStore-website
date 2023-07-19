import React, { useState } from 'react'
import InfinitSlider from '../LandingPage/InfinitSlider/InfinitSlider'
import Navbar from '../LandingPage/Navbar/Navbar'
import Footer from '../LandingPage/Footer/Footer'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import '../LandingPage/index.css'
import newsImg from '../../asset/NewsImg.jpg'
import shirt1F from '../../asset/shirt1F.jpg'
import shirt1M from '../../asset/shirt1M.jpg'
import shirt2M from '../../asset/shirt2M.jpg'
import shirt3F from '../../asset/shirt3F.jpg'
import shirt3M from '../../asset/shirt3M.jpg'
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


const News = () => {

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
            <Box sx={{ display: 'flex', flexDirection:isMobile ? 'column' : 'row', gap: 3.3 }}>
                <Box sx={{ position: 'relative' }} >
                    <Box component={'img'} src={newsImg} width={ isMobile ? '100%' : '50rem'} height={ isMobile ? '31.8rem' : '33.5rem'} sx={{ objectFit: 'cover' }} />
                    <Box sx={{ position: 'absolute', left: 0, bottom: isMobile ? 90 : 70 }}>
                        <Typography sx={{ fontFamily: 'aeonik-reg', bgcolor: '#fff', width: 'fit-content', fontSize: isMobile ? '2.1rem' : '3rem', px: 2, lineHeight: '2.9rem' }} >ALL </Typography>
                        <Typography sx={{ fontFamily: 'aeonik-reg', bgcolor: '#fff', width: 'fit-content', fontSize: isMobile ? '2.1rem' : '3rem', px: 2, lineHeight: '2.9rem' }}>THE PRODUCTS</Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: isMobile ? 1 : 12 }}>
                    <Grid container px={isMobile ? 4 : isTablet ? 2 : 6} spacing={3}>
                        <Grid item sm={6} xs={12} p={0}>
                            <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(1) }} onMouseLeave={() => { handleLeave(1) }} >
                                {isHovered[1] ? (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '315rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '315rem'} src={shirt1F} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '315rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '315rem'} src={shirt1M} alt="" />
                                    </>
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>T-SHIRT WEBFLOW BUILDER</Typography>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>34,90 €</Typography>
                            </Box>
                        </Grid>

                        <Grid item sm={6} xs={12}>
                            <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(2) }} onMouseLeave={() => { handleLeave(2) }} >
                                {isHovered[2] ? (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '315rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '315rem'} src={shirt1F} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '315rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '315rem'} src={shirt2M} alt="" />
                                    </>
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>T-SHIRT DESIGNER FIGMA</Typography>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>34,90 €</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>


            <Box sx={{ position: 'relative' }}>
                <Navbar />

                <Box sx={{ mt: isMobile ? '5rem' : '11rem', px: isMobile ? 2.5 : 6, display: 'flex', gap: 1.3 }}>
                    <Typography sx={{ fontFamily: 'aeonik-regbold', fontSize: isMobile ? '2.8rem' : '6rem', fontWeight: 'bold' }} variant='h2'>NEW ARRIVALS</Typography>

                    <Box sx={{ backgroundColor: '#fdd33c', height: 'fit-content', px: isMobile ? 1 : 1.5 }}>
                        <Typography sx={{ fontSize: isMobile ? '1.3rem' : '1.8rem', fontFamily: 'aeonik', lineHeight: '2.5rem' }}>8</Typography>
                    </Box>

                </Box>


                <Box sx={{ mt: isMobile ? '3rem' : '7rem', mb: isMobile ? '6rem' : '13rem' }}>
                    <Grid container px={isMobile ? 2.5 : isTablet ? 2 : 6} spacing={3}>

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
                                        <img width={isMobile ? '100%' : '350rem'} src={shirt1M} alt="" />
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


                        <Grid item xl={6} sm={6} xs={12} p={0}>
                            <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(1) }} onMouseLeave={() => { handleLeave(1) }} >
                                {isHovered[1] ? (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '730rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '730rem'} src={shirt1F} alt="" />
                                    </>
                                ) : (
                                    <>
                                        <img src={svgPic} width={isMobile ? '100%' : '730rem'} style={{ position: 'absolute' }} alt="" />
                                        <img width={isMobile ? '100%' : '730rem'} src={shirt2M} alt="" />
                                    </>
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>T-SHIRT WEBFLOW BUILDER</Typography>
                                <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small' : 'large'}>34,90 €</Typography>
                            </Box>
                        </Grid>


                        <Grid item xl={6}>

                                          {/* NESTED GRID */}

                            <Grid container spacing={2}>
                                <Grid item xl={6} sm={6} xs={12}>
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

                                <Grid item xl={6} sm={6} xs={12}>
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

                                <Grid item xl={3} sm={2} xs={12}>
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
                            </Grid>


                        </Grid>



                    </Grid>
                </Box>

                <Footer />
            </Box>
        </>
    )
}

export default News
