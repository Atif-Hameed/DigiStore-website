import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../../InnerLandingPage/index.css'
import movingImg1 from '../../../asset/movingImg1.webp'
import movingImg2 from '../../../asset/movingImg2.webp'
import movingImg3 from '../../../asset/movingImg3.webp'
import movingImg4 from '../../../asset/movingImg4.webp'
import { Parallax } from 'react-scroll-parallax'

//  USED PARALLAX LIBRARY     \\

const MovingImages = () => {

  const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <>
      <Box bgcolor={'#f1f1f1'} pt={5}>
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 5, overflow: 'hidden' }}>
          
          <Typography sx={{fontStyle:'italic', zIndex:3, fontFamily:'aeonik',
          bottom:0, left:'50%', textUnderlineOffset: isMobile ? '10px':'30px', transform:'translate(-50%, -50%)',
          position:'absolute', color: '#fff', cursor: 'pointer', fontSize:isMobile ? '4.7rem': '10.5rem', textDecoration: 'underline' }}>
            portfolio
          </Typography>
          
          
                                           {/* OVERLAY */}
          <Box sx={{
            zIndex: 2, position: 'absolute', width: '100%', height: '100%', top: 0, left: 0,
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 1) 100%)'
          }}></Box>

          <Parallax translateX={['-50px', '0px']}>
            <Box sx={{ width: '100vw', height: isMobile ? '6.5rem':'24.7rem' }}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${movingImg1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </Box>
            </Box>
          </Parallax>

          <Parallax translateX={['60px', '0px']}>
            <Box sx={{ width: '100%', height: isMobile ? '6.5rem': '24.7rem' }}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${movingImg2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </Box>
            </Box>
          </Parallax>

          <Parallax translateX={['-30px', '0px']}>
            <Box sx={{ width: '100%', height: isMobile ? '6.5rem': '24.7rem' }}>
              <Box
                sx={{
                  width: '110%',
                  height: '100%',
                  backgroundImage: `url(${movingImg3})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              >
              </Box>
            </Box>
          </Parallax>

          <Parallax translateX={['0px', '-100px']}>
            <Box sx={{ width: '100%', height: isMobile ? '6.5rem': '24.7rem' }}>
              <Box
                sx={{
                  width: '107%',
                  height: '107%',
                  backgroundImage: `url(${movingImg4})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </Box>
            </Box>
          </Parallax>

        </Box>
      </Box>
    </>
  )
}

export default MovingImages
