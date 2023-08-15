import {Box,Divider, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../index.css'
import bigW from '../../../asset/wBig.svg'
import Certifcate from '../../../asset/certifIcon.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';


const Dialogue1 = () => {

    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box px={isMobile ? 0 : 6} height={'100%'}>
                <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'start' : 'center', justifyContent: 'space-between' }} >

                    <Box sx={{ width: isMobile ? '100%' : '62%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 7 }}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4.5 }}>

                            <Link to="/Branding" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem' : '1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>BRANDING & WEBDESIGN</Typography>
                            </Link>

                            <Link to="/WebflowWebsite" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem' : '1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>WEBFLOW WEBSITE</Typography>
                            </Link>

                            <Link to="/Training" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem' : '1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>TRAINING</Typography>
                            </Link>

                            <Link to="/Maintainence" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem' : '1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>MAINTENANCE</Typography>
                            </Link>

                            <Link to="/Enterprise" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem' : '1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>ENTERPRISE</Typography>
                            </Link>

                        </Box>

                        <Box sx={{ width: isMobile ? '100%' : '23.4rem', mt: 0.8, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ "&:hover": { color: '#fff', '& .arrow1': { color: '#fff' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography className='arrow1' sx={{ color: '#bebebe', fontSize: isMobile ? '1rem' : '1.2rem', fontFamily: 'aeonik' }}>All our services</Typography>
                                <ArrowForwardIcon className='arrow1' sx={{ color: '#bebebe' }} />
                            </Box>
                            <Divider sx={{ bgcolor: '#4c4b49' }} />

                            <Box sx={{ "&:hover": { color: '#fff', '& .arrow2': { color: '#fff' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography className='arrow2' sx={{ "&:hover": { color: '#fff' }, cursor: 'pointer', color: '#bebebe', fontSize: isMobile ? '1rem' : '1.2rem', fontFamily: 'aeonik' }}>La DigiCalidad</Typography>
                                <ArrowForwardIcon className='arrow2' sx={{ color: '#bebebe' }} />
                            </Box>
                            <Divider sx={{ bgcolor: '#4c4b49' }} />
                        </Box>

                    </Box>

                    <Box sx={{ mt: isMobile ? 2 : 'normal', width: isMobile ? '100%' : '38%', height: '100%' }}>
                        <Box sx={{ bgcolor: '#4353ff', height: isMobile ? '70%' : '50%', position: 'relative' }}>
                            <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem', color: '#fff', position: 'absolute', right: 20, top: 15 }} />
                            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={bigW} width={isMobile ? '80rem' : '150rem'} alt="" />
                                <Typography sx={{ color: '#fff', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1rem' : '1.2rem' }} >Certified Webflow Expert</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ bgcolor: '#f8f8f8', height: isMobile ? '70%' : '50%', position: 'relative' }}>
                            <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem', color: '#000', position: 'absolute', right: 20, top: 15 }} />
                            <Box sx={{ gap: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Certifcate} width={isMobile ? '55rem' : '92rem'} alt="" />
                                <Typography sx={{ color: '#000', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1rem' : '1.2rem' }} >Client-First Ambassador</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Dialogue1