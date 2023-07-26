import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BigCarousel1 from '../../../asset/BigCarousel1.webp'
import BigCarousel2 from '../../../asset/BigCarousel2.webp'
import BigCarousel3 from '../../../asset/BigCarousel3.webp'
import BigCarousel4 from '../../../asset/BigCarousel4.webp'
import BigCarousel5 from '../../../asset/shirt1F.jpg'
import BigCarousel6 from '../../../asset/shirt2M.jpg'
import BigCarousel7 from '../../../asset/shirt3F.jpg'
import BigCarousel8 from '../../../asset/shirt4F.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './CarouselStyle.css'
import '../index.css'
import { Box, Typography } from "@mui/material";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            autoplay: true,
            autoplaySpeed: 2500,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <div className="slick-prev"><ArrowBackIcon sx={{ fontSize: '4.5rem' }} /></div>,
            nextArrow: <div className="slick-next"><ArrowForwardIcon sx={{ fontSize: '4.5rem' }} /></div>,
        };
        return (

            <div style={{ width: '75vw', height: '100%', margin: 0 }}>
                <Slider {...settings}>
                    <div>
                        <img width={'100%'} src={BigCarousel1} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Typography sx={{ fontFamily: 'aeonik', color: '#ffffffb0', fontSize: '1.2rem' }} >Tempact Ventures</Typography>
                            <Typography sx={{ color: '#ffffffb0', fontSize: '1.2rem' }} >29/03/2023</Typography>
                        </Box>
                    </div>
                    <div>
                        <img width={'100%'} src={BigCarousel2} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Typography sx={{ fontFamily: 'aeonik', color: '#ffffffb0', fontSize: '1.2rem' }} >Streamnative</Typography>
                            <Typography sx={{ color: '#ffffffb0', fontSize: '1.2rem' }} >18/01/2023</Typography>
                        </Box>
                    </div>
                    <div>
                        <img width={'100%'} src={BigCarousel3} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Typography sx={{ fontFamily: 'aeonik', color: '#ffffffb0', fontSize: '1.2rem' }} >Join Lion</Typography>
                            <Typography sx={{ color: '#ffffffb0', fontSize: '1.2rem' }} >04/11/2022</Typography>
                        </Box>
                    </div>
                    <div>
                        <img width={'100%'} src={BigCarousel4} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Typography sx={{ fontFamily: 'aeonik', color: '#ffffffb0', fontSize: '1.2rem' }} >Morfo</Typography>
                            <Typography sx={{ color: '#ffffffb0', fontSize: '1.2rem' }} >07/12/2022</Typography>
                        </Box>
                    </div>
                </Slider>
            </div>

        );
    }
}