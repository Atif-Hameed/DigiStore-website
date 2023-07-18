import { Box, Button, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import './index.css'
import InfinitSlider from './InfinitSlider/InfinitSlider'
import bannerImg from '../../asset/img1.jpg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Navbar from './Navbar/Navbar'
import shirt1 from '../../asset/shirt1.png'
import shirt2 from '../../asset/shirt2.png'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import Carousel from './Carousel/Carousel'
import Articles from './Articles/Articles'
import Footer from './Footer/Footer'




const LandingPage = () => {

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

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>

      {/* TOP INFINIT SLIDER */}
      <InfinitSlider />

      <Box sx={{ position: 'relative' }} className="banner-img">

        <Box className='overlay' ></Box>

        {/* NAVBAR */}
        <Box >
          <Navbar />
        </Box>

        {/* HERO MAIN HEADING */}
        <Box sx={{ display: 'flex', flexDirection: isTablet ? 'column' : 'row', alignItems:  isTablet ? 'center' : 'end', gap: isMobile ? '3rem' : isTablet ? '2rem':'5rem', mt: isMobile ? '32rem' : isTablet ? '7rem' : '10.6rem',}}>
          <Box>
            <Typography variant='h4' sx={{ fontFamily: 'aeonik-regbold', lineHeight: isMobile ? '2.9rem' : isTablet ? '4.8rem' : '6rem', fontWeight: 'bold', fontSize:  isMobile ? '2.7rem' : isTablet ? '4.8rem' : '6rem' , backgroundColor: '#fff', display: 'inline-block', px: 1.8, pt: isMobile ? 0.5 : 1 }}>DIGI 4.0</Typography>
            <br />
            <Typography sx={{ fontFamily: 'aeonik-regbold', lineHeight: isMobile ? '2.9rem' : isTablet ? '4.8rem' : '6rem', fontWeight: 'bold', fontSize: isMobile ? '2.7em' : isTablet ? '4.8rem' : '6rem', backgroundColor: '#fff', display: 'inline-block', px: 1.8, pb: isMobile ? 0.5 : 1.5 }}>COLLECTION</Typography>
          </Box>
          <Box sx={{mb:1, display: 'flex', alignItems: 'center', gap: isTablet ? '0.3rem':'0.5rem', backgroundColor: '#fdd33c', px: isTablet ? '12px':'18px', pr: isTablet ? '3px':'6px', py: isTablet ? '4px' :'6px' }}>
            <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: isTablet ? '1.2rem' : '1.5rem', px: '8px', py: '8px', borderRadius: '7px', }}>SHOP NOW</Button>
            <ArrowOutwardIcon sx={{ color: '#000', fontSize: isTablet ? '1.7rem' : '2.2rem' }} />
          </Box>
        </Box>



        {/* SIDE WALL TEXT */}
        <Box sx={{ display:{lg:'flex',md:'none',xs:'none'}, flexDirection: 'column', position: 'absolute', right: 0, bottom: 70, gap: '0.3rem' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <ArrowUpwardIcon sx={{ color: '#fff', fontSize: '1.8rem' }} />
            <Typography sx={{ fontFamily: 'aeonik-reg', fontWeight: '500', color: '#fff', textOrientation: 'mixed', writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '1.85rem' }}>FIRST COLLECTION</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <ArrowUpwardIcon sx={{ color: '#fff', fontSize: '1.8rem' }} />
            <Typography sx={{ fontFamily: 'aeonik-reg', fontWeight: '500', color: '#fff', textOrientation: 'mixed', writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontSize: '1.85rem' }}>NOW AVAILABLE</Typography>
          </Box>
        </Box>



        {/* BOTTOM WALL TEXT */}
        <Box sx={{ display: {lg:'flex',md:'none',xs:'none'}, position: 'absolute', right: 50, bottom: 0, gap: '0.3rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Typography sx={{ fontFamily: 'aeonik-reg', fontWeight: '500', color: '#fff', fontSize: '1.8rem' }}>NOW AVAILABLE</Typography>
            <ArrowForwardIcon sx={{ color: '#fff', fontSize: '1.8rem' }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Typography sx={{ fontFamily: 'aeonik-reg', fontWeight: '500', color: '#fff', fontSize: '1.8rem' }}>FIRST COLLECTION</Typography>
            <ArrowForwardIcon sx={{ color: '#fff', fontSize: '1.8rem' }} />
          </Box>
          <Typography sx={{ fontFamily: 'aeonik-reg', fontWeight: '500', color: '#fff', fontSize: '1.8rem' }}>NOW AVAILABLE</Typography>
        </Box>

      </Box>


      {/* CENTER SMALL TEXT FIRST */}
      <Box sx={{ mt: isTablet ? '4rem' : '9rem', mb: isTablet ? '3rem' : '5rem' }}>
        <Typography sx={{ fontFamily: 'aeonik-reg-bold', color: '#000', textAlign: 'center', fontSize: '1.5rem' }}>DISCOVER THE COLLECTION</Typography>
        <Box sx={{ backgroundColor: '#fdd33c', color: '#000', mx: 'auto', textAlign: 'center', width: 'fit-content', px: 1 }}>
          <Typography sx={{ fontFamily: 'aeonik-reg-bold', color: '#000', textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold' }} >DIGIDOP</Typography>
        </Box>
      </Box>


      {/* MAIN IMAGES SLIDER */}
      <Slider>
        <Carousel />
      </Slider>



      {/* Big SHirts with BLACK BG */}
      <Box sx={{ width: '100%', height: '100%', backgroundColor: '#000', mt: isMobile ? '3rem' : '8rem', py: isMobile ? '6rem' : '11rem' }} >
        <Box sx={{ display: 'flex', gap: isMobile ? 8 : 'normal', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-around' }}>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? 8 : 13 }}>
            <Box position={'relative'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: isMobile ? '100%' : '120%' }}>
              <Box component={'img'} src={shirt1} width={isMobile ? '22rem' : isTablet ? '18rem' : '29rem'} />
              <Box sx={{ display: 'flex', position: 'absolute', bottom: isMobile ? '-2rem' : '-4rem', flexDirection: 'column', alignItems: 'center' }}>
                <Typography sx={{ fontFamily: 'aeonik-reg-bold', backgroundColor: '#fff', textAlign: 'center', width: 'fit-content', fontSize: isMobile ? '1.6rem' : isTablet ? '3rem' :  '3.7rem', lineHeight: isMobile ? '2.3rem' : isTablet ? '3rem' :  '4rem' }}>T-SHIRT</Typography>
                <Typography sx={{ fontFamily: 'aeonik-reg-bold', backgroundColor: '#fff', textAlign: 'center', width: 'fit-content', fontSize: isMobile ? '1.6rem' : isTablet ? '3rem' :  '3.7rem', lineHeight: isMobile ? '2.3rem' : isTablet ? '3rem' :  '4rem' }}>FIGMA DESIGNER</Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px', }}>
              <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: isTablet ? '1.2rem' : '1.5rem', px: '8px', py: '8px', borderRadius: '7px', }}>SHOP NOW</Button>
              <ArrowOutwardIcon sx={{ color: '#000', fontSize: isTablet ? '1.8rem' : '2.5rem' }} />
            </Box>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? 8 :  13 }}>
              <Box position={'relative'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: isMobile ? '100%' : '120%' }}>
                <Box component={'img'} src={shirt2} width={isMobile ? '22rem' : isTablet ? '18rem' :'29rem'} />
                <Box sx={{ display: 'flex', position: 'absolute', bottom:isMobile ? '-2rem' : '-4rem', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography sx={{ fontFamily: 'aeonik-reg-bold', backgroundColor: '#fff', textAlign: 'center', width: 'fit-content', fontSize: isMobile ? '1.6rem' : isTablet ? '3rem' : '3.7rem', lineHeight: isMobile ? '2.3rem' : isTablet ? '3rem' : '4rem' }}>T-SHIRT</Typography>
                  <Typography sx={{ fontFamily: 'aeonik-reg-bold', backgroundColor: '#fff', textAlign: 'center', width: 'fit-content', fontSize: isMobile ? '1.6rem' : isTablet ? '3rem' : '3.7rem', lineHeight: isMobile ? '2.3rem' : isTablet ? '3rem' : '4rem' }}>WEBFLOW BUILDER</Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 1, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px', }}>
                <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: isTablet ? '1.2rem' : '1.5rem', px: '8px', py: '8px', borderRadius: '7px', }}>SHOP NOW</Button>
                <ArrowOutwardIcon sx={{ color: '#000', fontSize: isTablet ? '1.8rem' : '2.5rem' }} />
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>



      {/* CENTER SMALL SEcond */}
      <Box sx={{ mt: isTablet ? '5rem' : '9rem', mb: isMobile ? '2rem' : '5rem' }}>
        <Typography sx={{ fontFamily: 'aeonik-reg-bold', color: '#000', textAlign: 'center', fontSize: isMobile ? '1.3rem' : '1.5rem' }}>ALL OUR ARTICLES</Typography>
        <Box sx={{ backgroundColor: '#fdd33c', color: '#000', mx: 'auto', textAlign: 'center', width: 'fit-content', px: 1 }}>
          <Typography sx={{ fontFamily: 'aeonik-reg-bold', color: '#000', textAlign: 'center', fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: 'bold' }} >DIGIDOP</Typography>
        </Box>
      </Box>


      {/* SHIRTS ARTICELS */}
      <Articles />


      {/* Button */}
      <Box sx={{ mx: isMobile ? 2 : 6, mt: isMobile ? 5 : 10, mb: isMobile ? 10 : 20, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: '15px', pr: '2px', py: '6px', }}>
        <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: '1.3rem', px: '8px', py: '8px', borderRadius: '7px', }}>SEE MORE</Button>
        <ArrowOutwardIcon sx={{ color: '#000', fontSize: '2rem' }} />
      </Box>


      {/* FOOTER */}
      <Footer />

    </>
  )
}

export default LandingPage
