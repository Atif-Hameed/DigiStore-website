import React from 'react'
import img1 from '../../../asset/slide1.jpg'
import img2 from '../../../asset/slide2.jpg'
import img3 from '../../../asset/slide3.jpg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import '../index.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'
import { Box, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import Marquee from "react-fast-marquee";


const Card1 = () => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const Button = styled('button')(() => ({
        background: 'linear-gradient(#fdd33c 0%, #fdd33c 0%)',
        backgroundSize: '100% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-size 0.35s ease-in',
        position: 'relative',

        '&:hover': {
            backgroundSize: '100% 100%',
        },
    }));

    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <img style={{ height: isMobile ? '50vh' : '70vh', width: isMobile ? '85vw' : isTablet ? '40vw' : '33vw' }} src={img1} alt="" />

                <Box sx={{ position: 'absolute', top: isTablet ? '2rem' : '4rem', left: 0, }}>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ lineHeight: isTablet ? '3rem' : '4rem', fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3.7rem', px: 1 }} >DIGI</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ lineHeight: isTablet ? '3rem' :  '4rem', fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3.7rem', px: 1 }} >ACCESSOIRES</Typography>
                    </Box>
                </Box>

                <Box sx={{cursor:'pointer', mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px' }}>
                    <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: isTablet ? '1.2rem' : '1.5rem', px: '8px', py: '8px', borderRadius: '7px', }}>ACCESSOIRES</Button>
                    <ArrowOutwardIcon sx={{ color: '#000', fontSize: isTablet ? '1.8rem' : '2.5rem' }} />
                </Box>
            </Box>
        </>
    )
}

const Card2 = () => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const Button = styled('button')(() => ({
        background: 'linear-gradient(#fdd33c 0%, #fdd33c 0%)',
        backgroundSize: '100% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-size 0.35s ease-in',
        position: 'relative',

        '&:hover': {
            backgroundSize: '100% 100%',
        },
    }));

    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <img style={{ height: isMobile ? '50vh' : '70vh', width: isMobile ? '85vw' : isTablet ? '40vw' : '33vw' }} src={img2} alt="" />

                <Box sx={{ position: 'absolute', bottom: '10rem', left: 0, }}>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ lineHeight: isTablet ? '3rem' : '4rem', fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: isMobile ? '2rem' : isTablet ? '3rem' : '3.7rem', px: 1 }} >DIGI</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ lineHeight: isTablet ? '3rem' : '4rem', fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: isMobile ? '2rem' : isTablet ? '3rem' : '3.7rem', px: 1 }} >CLOTHES</Typography>
                    </Box>
                </Box>

                <Box sx={{cursor:'pointer', mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px' }}>
                    <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: isTablet ? '1.2rem' : '1.5rem', px: '8px', py: '8px', borderRadius: '7px', }}>CLOTHES</Button>
                    <ArrowOutwardIcon sx={{ color: '#000', fontSize: isTablet ? '1.8rem' : '2.5rem' }} />
                </Box>
            </Box>


        </>
    )
}

const Card3 = () => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const Button = styled('button')(() => ({
        background: 'linear-gradient(#fdd33c 0%, #fdd33c 0%)',
        backgroundSize: '100% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-size 0.35s ease-in',
        position: 'relative',

        '&:hover': {
            backgroundSize: '100% 100%',
        },
    }));

    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <img style={{ height: isMobile ? '50vh' : '70vh', width: isMobile ? '85vw' : isTablet ? '40vw' : '33vw' }} src={img3} alt="" />

                <Box style={{ position: 'absolute', bottom: isTablet ? '8rem' : '13rem', left: '20%', }}>
                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: isTablet ? '1.5rem' : '2rem', px: 1 }} >NO CLOTHES ?</Typography>
                    </Box>
                </Box>

                <Box sx={{cursor:'pointer', mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px' }}>
                    <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: isTablet ? '1.2rem' : '1.5rem', px: '8px', py: '8px', borderRadius: '7px', }}>SHOP NOW</Button>
                    <ArrowOutwardIcon sx={{ color: '#000', fontSize: isTablet ? '1.8rem' : '2.5rem' }} />
                </Box>
            </Box>

        </>
    )
}

const Card4 = () => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const Button = styled('button')(() => ({
        background: 'linear-gradient(#fdd33c 0%, #fdd33c 0%)',
        backgroundSize: '100% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-size 0.35s ease-in',
        position: 'relative',

        '&:hover': {
            backgroundSize: '100% 100%',
        },
    }));

    return (
        <>
            <div style={{ width: isMobile ? '85vw' : isTablet ? '40vw' : '33vw', height: isMobile ? '50vh' : '70vh', backgroundColor: '#f1f1f1' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column', gap: "2rem" }}>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', mx: 'auto', textAlign: 'center', width: 'fit-content' }}>
                        <Typography sx={{ fontFamily: 'aeonik', fontWeight: 'bold', lineHeight: isTablet ? '4.5rem':'9rem', color: '#000', textAlign: 'center', fontSize: isMobile ? '3.8rem' : isTablet ? '4rem' : '8rem', px: 3 }} >SHOP</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', mx: 'auto', textAlign: 'center', width: 'fit-content' }}>
                        <Typography sx={{ fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: isMobile ? '20px' : isTablet ? '24px' :'28px' }} >COLLECTION DIGI 4.0</Typography>
                    </Box>

                </div>
                <Box sx={{cursor:'pointer', mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px' }}>
                    <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: isTablet ? '1.2rem' : '1.5rem', px: '8px', py: '8px', borderRadius: '7px', }}>SHOP NOW</Button>
                    <ArrowOutwardIcon sx={{ color: '#000', fontSize: isTablet ? '1.8rem' : '2.5rem' }} />
                </Box>
            </div>
        </>
    )
}


const Carousel = () => {

    return (
        <>

            <Marquee pauseOnHover={true} speed={60} style={{ overflow: 'hidden', width:'100%', overflowX:'hidden' }}>
                <Box sx={{ mx: 8 }}>
                    <Card1 />
                </Box>
                <Box sx={{ mx: 8 }}>
                    <Card2 />
                </Box>
                <Box sx={{ mx: 8 }}>
                    <Card3 />
                </Box>
                <Box sx={{ mx: 8 }}>
                    <Card4 />
                </Box>
            </Marquee>
        </>
    )
}

export default Carousel
