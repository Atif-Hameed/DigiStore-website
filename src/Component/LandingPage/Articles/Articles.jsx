import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import shirt1M from '../../../asset/shirt1M.jpg'
import shirt1F from '../../../asset/shirt1F.jpg'
import shirt2M from '../../../asset/shirt2M.jpg'
import shirt3F from '../../../asset/shirt3F.jpg'
import shirt3M from '../../../asset/shirt3M.jpg'
import shirt4M from '../../../asset/shirt4M.jpg'
import shirt4F from '../../../asset/shirt4F.jpg'
import shirt5F from '../../../asset/shirt5F.jpg'
import shirt5M from '../../../asset/shirt5M.jpg'
import shirt6F from '../../../asset/shirt6F.jpg'
import shirt6M from '../../../asset/shirt6M.jpg'
import shirt7F from '../../../asset/shirt7F.jpg'
import shirt7M from '../../../asset/shirt7M.jpg'
import cupM from '../../../asset/cupM.png'
import svgPic from '../../../asset/shirtText.svg'
import '../index.css'

const Articles = () => {

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
            <Grid container px={ isTablet ? 2 : 6} spacing={4}>
                <Grid item xl={3} sm={6} xs={12} p={0}>
                    <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(1) }} onMouseLeave={() => { handleLeave(1) }} >
                        {isHovered[1] ? (
                            <>
                                <img src={svgPic} width={isMobile?'100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' : '350rem'} src={shirt1F} alt="" />
                            </>
                        ) : (
                            <>
                                <img src={svgPic} width={isMobile?'100%' : '350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' : '350rem'} src={shirt1M} alt="" />
                            </>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography fontFamily={'aeonik-reg'} fontSize={ isMobile ? 'small':'large'}>T-SHIRT WEBFLOW BUILDER</Typography>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}>34,90 €</Typography>
                    </Box>
                </Grid>

                <Grid item xl={3} sm={6} xs={12}>
                    <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(2) }} onMouseLeave={() => { handleLeave(2) }} >
                        {isHovered[2] ? (
                            <>
                                <img src={svgPic} width={isMobile?'100%' :'350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' :'350rem'} src={shirt1F} alt="" />
                            </>
                        ) : (
                            <>
                                <img src={svgPic} width={isMobile?'100%' :'350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' :'350rem'} src={shirt2M} alt="" />
                            </>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}>T-SHIRT DESIGNER FIGMA</Typography>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}>34,90 €</Typography>
                    </Box>
                </Grid>

                <Grid item xl={3} sm={6} xs={12}>
                    <Box position={'relative'} sx={{ cursor: 'pointer' }} width={'fit-content'} onMouseEnter={() => { handleHover(3) }} onMouseLeave={() => { handleLeave(3) }} >
                        {isHovered[3] ? (
                            <>
                                <img width={isMobile?'100%' :'350rem'} src={shirt3F} alt="" />
                            </>
                        ) : (
                            <>
                                <img width={isMobile?'100%' :'350rem'} src={shirt3M} alt="" />
                            </>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}>T-SHIRT 19 AVRIL</Typography>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}>490 €</Typography>
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
                                <img src={svgPic} width={isMobile?'100%' :'350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' :'350rem'} src={shirt4F} alt="" />
                            </>
                        ) : (
                            <>
                                <img src={svgPic} width={isMobile?'100%' :'350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' :'350rem'} src={shirt4M} alt="" />
                            </>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}>GREEN AURA CAP</Typography>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}> 35 €</Typography>
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
                                <img src={svgPic} width={isMobile?'100%' :'350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' :'350rem'} src={shirt5F} alt="" />
                            </>
                        ) : (
                            <>
                                <img src={svgPic} width={isMobile?'100%' :'350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' :'350rem'} src={shirt5M} alt="" />
                            </>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}>AURA FIGMA DESIGNER CAP</Typography>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}> 35 €</Typography>
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
                                <img src={svgPic} width={isMobile?'100%' :'350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' :'350rem'} src={shirt6F} alt="" />
                            </>
                        ) : (
                            <>
                                <img src={svgPic} width={isMobile?'100%' :'350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' :'350rem'} src={shirt6M} alt="" />
                            </>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}>STICKERS BUILDER</Typography>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}> 8 €</Typography>
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
                                <img src={svgPic} width={isMobile?'100%' :'350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' :'350rem'} src={shirt7F} alt="" />
                            </>
                        ) : (
                            <>
                                <img src={svgPic} width={isMobile?'100%' :'350rem'} style={{ position: 'absolute' }} alt="" />
                                <img width={isMobile?'100%' :'350rem'} src={shirt7M} alt="" />
                            </>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}>STICKERS AURA</Typography>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}> 8 €</Typography>
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
                        <img width={isMobile?'100%' :'350rem'} src={cupM} alt="" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}>DIGIDOP MUG</Typography>
                        <Typography fontFamily={'aeonik-reg'} fontSize={isMobile ? 'small':'large'}> 20 €</Typography>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Articles
