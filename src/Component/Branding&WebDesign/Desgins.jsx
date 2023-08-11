import React from 'react'
import DesignbigImg from '../../asset/designBigImg.webp'
import DesignColor from '../../asset/designColorImg.webp'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import '../InnerLandingPage/index.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DesignCard from './DesignCards'
import { Link } from 'react-router-dom'


const Desgins = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box bgcolor={'#f1f1f1'} pt={isMobile ? 8 : 18} px={isMobile ? 2.5 : 6}>

                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: isMobile ? 5 : 'normal' }}>
                    <Box width={isMobile ? '100%' : '45%'}>
                        <Typography sx={{ fontSize: isMobile ? '1.95rem' : '3.7rem', fontFamily: 'aeonik-reg', color: '#181818', lineHeight: isMobile ? 'normal' : '5rem' }}>Convert with innovative and impactful design</Typography>
                    </Box>

                    {/* <a href='#scrollTarget' style={{scrollBehavior:'smooth'}}> */}
                        <Box onClick={() => window.location.replace("/#scrollTarget")} sx={{ '&:hover': { '.text': { textDecoration: 'underline' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', alignSelf: isMobile ? 'start' : 'end', gap: 1 }}>
                            <Typography className='text' sx={{ fontSize: isMobile ? '1rem' : '1.3rem', fontFamily: 'aeonik-reg', color: '#101010' }}>Scroll down to learn more</Typography>
                            <ArrowDownwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem' }} />
                        </Box>
                    {/* </a> */}
                </Box>

                <Box mt={isMobile ? 7 : 12}>
                    <DesignCard />
                </Box>

                <Box width={'100%'} height={isMobile ? '18vh' : '89.5vh'}>
                    <Box mt={isMobile ? 11 : 20} position={'relative'}
                        sx={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${DesignbigImg})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <img src={DesignColor} style={{ position: 'absolute', right: isMobile ? '2.2rem' : '9.35rem', top: isMobile ? '-1.5rem' : '-5rem' }} width={isMobile ? '38rem' : '148rem'} alt="" />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default Desgins
