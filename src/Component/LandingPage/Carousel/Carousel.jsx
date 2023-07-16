import React from 'react'
import Slider from 'react-slick';
import img1 from '../../../asset/slide1.jpg'
import img2 from '../../../asset/slide2.jpg'
import img3 from '../../../asset/slide3.jpg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import '../index.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'
import { Box, Button, Typography } from '@mui/material';
import Marquee from "react-fast-marquee";


const Card1 = () => {
    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <img style={{ height: '70vh', width: '30vw' }} src={img1} alt="" />

                <Box sx={{ position: 'absolute', top: '4rem', left: 0, }}>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ lineHeight: '4rem', fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: '3.7rem', px: 1 }} >DIGI</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ lineHeight: '4rem', fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: '3.7rem', px: 1 }} >ACCESSOIRES</Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px' }}>
                    <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: '1.5rem', px: '8px', py: '3px', borderRadius: '7px', }}>ACCESSOIRES</Button>
                    <ArrowOutwardIcon sx={{ color: '#000', fontSize: '2.5rem' }} />
                </Box>
            </Box>
        </>
    )
}

const Card2 = (props) => {
    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <img style={{ height: '70vh', width: '30vw' }} src={img2} alt="" />

                <Box sx={{ position: 'absolute', bottom: '10rem', left: 0, }}>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ lineHeight: '4rem', fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: '3.7rem', px: 1 }} >DIGI</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ lineHeight: '4rem', fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: '3.7rem', px: 1 }} >CLOTHES</Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px' }}>
                    <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: '1.5rem', px: '8px', py: '3px', borderRadius: '7px', }}>CLOTHES</Button>
                    <ArrowOutwardIcon sx={{ color: '#000', fontSize: '2.5rem' }} />
                </Box>
            </Box>

            {/* <div style={{ position: 'relative' }}>
                <img style={{ height: '70vh', width: '100%' }} src={img2} alt="" />

                <div style={{ position: 'absolute', bottom: '10rem', left: 0, }}>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ lineHeight: '4rem', fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: '3.7rem', px: 1 }} >DIGI</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ lineHeight: '4rem', fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: '3.7rem', px: 1 }} >CLOTHES</Typography>
                    </Box>
                </div>

                <Box sx={{ mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px' }}>
                    <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: '1.5rem', px: '8px', py: '3px', borderRadius: '7px', }}>CLOTHES</Button>
                    <ArrowOutwardIcon sx={{ color: '#000', fontSize: '2.5rem' }} />
                </Box>
            </div> */}
        </>
    )
}

const Card3 = (props) => {
    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <img style={{ height: '70vh', width: '30vw' }} src={img3} alt="" />

                <Box style={{ position: 'absolute', bottom: '13rem', left: '26%', }}>
                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: '2rem', px: 1 }} >NO CLOTHES ?</Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px' }}>
                    <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: '1.5rem', px: '8px', py: '3px', borderRadius: '7px', }}>SHOP NOW</Button>
                    <ArrowOutwardIcon sx={{ color: '#000', fontSize: '2.5rem' }} />
                </Box>
            </Box>

            {/* <div style={{ position: 'relative', height: '70vh', }}>
                <img style={{ height: '100%', width: '100%' }} src={img3} alt="" />

                <div style={{ position: 'absolute', bottom: '13rem', left: '26%', }}>
                    <Box sx={{ backgroundColor: '#fff', color: '#000', width: 'fit-content' }}>
                        <Typography sx={{ fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: '2rem', px: 1 }} >NO CLOTHES ?</Typography>
                    </Box>
                </div>

                <Box sx={{ mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px' }}>
                    <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: '1.5rem', px: '8px', py: '3px', borderRadius: '7px', }}>SHOP NOW</Button>
                    <ArrowOutwardIcon sx={{ color: '#000', fontSize: '2.5rem' }} />
                </Box>
            </div> */}
        </>
    )
}

const Card4 = (props) => {
    return (
        <>
            <div style={{ width: '30vw', height: '70vh', backgroundColor: '#f1f1f1' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column', gap: "2rem" }}>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', mx: 'auto', textAlign: 'center', width: 'fit-content' }}>
                        <Typography sx={{ fontFamily: 'aeonik', fontWeight: 'bold', lineHeight: '9rem', color: '#000', textAlign: 'center', fontSize: '8rem', px: 3 }} >SHOP</Typography>
                    </Box>

                    <Box sx={{ backgroundColor: '#fff', color: '#000', mx: 'auto', textAlign: 'center', width: 'fit-content' }}>
                        <Typography sx={{ fontFamily: 'aeonik-regbold', fontWeight: 'bold', color: '#000', textAlign: 'center', fontSize: '28px' }} >COLLECTION DIGI 4.0</Typography>
                    </Box>

                </div>
                <Box sx={{ mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px' }}>
                    <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: '1.5rem', px: '8px', py: '3px', borderRadius: '7px', }}>SHOP NOW</Button>
                    <ArrowOutwardIcon sx={{ color: '#000', fontSize: '2.5rem' }} />
                </Box>
            </div>
        </>
    )
}


const Carousel = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 100,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        swipeToSlide: true,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            {/* <Slider className='Slides' {...settings}>
                <div style={{}}>
                    <Card1 />
                </div>

                <div style={{}}>
                    <Card2 />
                </div>

                <div style={{}}>
                    <Card3 />
                </div>

                <div style={{}}>
                    <Card4 />
                </div>

                <div style={{}}>
                    <Card1 />
                </div>

                <div style={{}}>
                    <Card2 />
                </div>

                <div style={{}}>
                    <Card3 />
                </div>

                <div style={{}}>
                    <Card4 />
                </div>

            </Slider> */}

            <Marquee pauseOnHover={true} speed={60} style={{overflow:'hidden'}}>
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
