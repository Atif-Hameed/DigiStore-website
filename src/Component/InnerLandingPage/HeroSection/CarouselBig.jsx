import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import BigCarousel1 from '../../../asset/BigCarousel1.webp'
import BigCarousel2 from '../../../asset/BigCarousel2.webp'
import BigCarousel3 from '../../../asset/BigCarousel3.webp'
import BigCarousel4 from '../../../asset/BigCarousel4.webp'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './CarouselStyle.css'
import '../index.css'
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";



const SimpleSlider = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <div className="slick-prev"><ArrowBackIcon sx={{ display: isMobile ? 'none' : 'initial', fontSize: '4.5rem' }} /></div>,
        nextArrow: <div className="slick-next"><ArrowForwardIcon sx={{ display: isMobile ? 'none' : 'initial', fontSize: '4.5rem' }} /></div>,
    };

    return (
        <>

            <div style={{ margin: 0, overflow: isMobile ? 'hidden' : 'normal' }}>
                <div style={{ width: isMobile ? '90vw' : '75vw', padding: '0', margin: '0 auto' }}>
                    <Slider {...settings}>
                        <div>
                            <img src={BigCarousel1} alt='' width={'100%'} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                <Typography sx={{ fontFamily: 'aeonik', color: '#ffffffb0', fontSize: '1.2rem' }} >Tempact Ventures</Typography>
                                <Typography sx={{ color: '#ffffffb0', fontSize: '1.2rem' }} >29/03/2023</Typography>
                            </Box>
                        </div>
                        <div>
                            <img src={BigCarousel2} alt='' width={'100%'} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                <Typography sx={{ fontFamily: 'aeonik', color: '#ffffffb0', fontSize: '1.2rem' }} >Streamnative</Typography>
                                <Typography sx={{ color: '#ffffffb0', fontSize: '1.2rem' }} >18/01/2023</Typography>
                            </Box>
                        </div>
                        <div>
                            <img src={BigCarousel3} alt='' width={'100%'} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                <Typography sx={{ fontFamily: 'aeonik', color: '#ffffffb0', fontSize: '1.2rem' }} >Join Lion</Typography>
                                <Typography sx={{ color: '#ffffffb0', fontSize: '1.2rem' }} >04/11/2022</Typography>
                            </Box>
                        </div>
                        <div>
                            <img width={'100%'} alt='' src={BigCarousel4} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                <Typography sx={{ fontFamily: 'aeonik', color: '#ffffffb0', fontSize: '1.2rem' }} >Morfo</Typography>
                                <Typography sx={{ color: '#ffffffb0', fontSize: '1.2rem' }} >07/12/2022</Typography>
                            </Box>
                        </div>

                    </Slider>
                </div>
            </div>

        </>
    )
}

export default SimpleSlider;

