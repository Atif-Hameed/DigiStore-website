import { Box, Button, Divider, Grid, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import logo from '../../../asset/logo.svg'
import '../index.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Footer = () => {

    const theme = useTheme()
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
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: isMobile ? 3 : 6, pr:isMobile ? 0.4 :'normal', py: isMobile ? 2.5 : isTablet ? 6 : 8, backgroundColor: '#fdd33c' }}>
                    <Typography sx={{ fontSize: isMobile ? '1.3rem' : isTablet ? '2.8rem' : '3.8rem', fontFamily: 'aeonik-reg-bold' }}>Ready to have a site that converts?</Typography>
                    <ArrowOutwardIcon sx={{ fontSize: isMobile ? '4.2rem' : isTablet ? '4.8rem' : '6.5rem' }} />
                </Box>

                <Box sx={{ px: isMobile ? 2.5 : 6, backgroundColor: '#000' }}>

                    <Box sx={{ display: 'flex', flexDirection : isTablet ? 'column' : 'row', gap: isTablet ? '3rem' : 'normal', pt: isMobile ? 8 : 13, justifyContent: 'space-between', }}>

                        <Box>
                            <Box component={'img'} width={ isMobile ? '4rem' : '5rem'} src={logo} />
                        </Box>

                        <Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>

                                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', gap: isMobile ? 3 : 10 }}>
                                    <Box sx={{ cursor: 'pointer', '&:hover .divider': { bgcolor: '#fdd33c' } }}>
                                        <Typography sx={{ color: '#fff', fontFamily: 'aeonik-reg', fontSize: isMobile ? '0.95rem' : isTablet? '1.1rem':'1.3rem' }} >UNISEX CLOTHING</Typography>
                                        <br />
                                        <Divider className='divider' sx={{ width: isMobile ? '9rem' : isTablet ? '18rem' : '23rem', bgcolor: '#fff' }} />
                                    </Box>
                                    <Box sx={{ cursor: 'pointer', '&:hover .divider2': { bgcolor: '#fdd33c' } }}>
                                        <Typography sx={{ color: '#fff', fontFamily: 'aeonik-reg', fontSize: isMobile ? '0.95rem' : isTablet? '1.1rem':'1.3rem' }} >ACCESSOIRES</Typography>
                                        <br />
                                        <Divider className='divider2' sx={{ width: isMobile ? '9rem' : isTablet ? '18rem' : '23rem', bgcolor: '#fff' }} />
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', gap: isMobile ? 3 : 10 }}>
                                    <Box sx={{ cursor: 'pointer', '&:hover .divider3': { bgcolor: '#fdd33c' } }}>
                                        <Typography sx={{ color: '#fff', fontFamily: 'aeonik-reg', fontSize: isMobile ? '0.95rem' :  isTablet? '1.1rem':'1.3rem' }} >NEWS</Typography>
                                        <br />
                                        <Divider className='divider3' sx={{ width: isMobile ? '9rem' : isTablet ? '18rem' : '23rem', bgcolor: '#fff' }} />
                                    </Box>
                                    <Box sx={{ cursor: 'pointer', '&:hover .divider4': { bgcolor: '#fdd33c' } }}>
                                        <Typography sx={{ color: '#fff', fontFamily: 'aeonik-reg', fontSize: isMobile ? '0.95rem' :  isTablet? '1.1rem':'1.3rem' }} >BASKET</Typography>
                                        <br />
                                        <Divider className='divider4' sx={{ width: isMobile ? '9rem' : isTablet ? '18rem' : '23rem', bgcolor: '#fff' }} />
                                    </Box>
                                </Box>

                            </Box>
                        </Box>

                        <Box>
                            <Typography sx={{ color: '#fff', fontSize: isMobile ? '1rem' : '1.3rem' }}>The best Webflow sites</Typography>
                            <Box sx={{ mt: 3, mb: isMobile ? 7 : 20, width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', px: isMobile ? '10px' : '15px', pr: '2px', py: '6px', }}>
                                <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: isMobile ? '1.1rem' : '1.3rem', px: '8px', py: '9px', borderRadius: '7px', }}>DISCOVER THE AGENCY</Button>
                                <ArrowOutwardIcon sx={{ color: '#000', fontSize: '2rem' }} />
                            </Box>
                        </Box>

                    </Box>

                    <Divider sx={{ width: '100%', bgcolor: '#fff' }} />

                    <Box sx={{py: isTablet ? 4 : 6, pb:isMobile ? 8 : 'normal', gap:isTablet ? 2 :'normal', display:'flex', flexDirection: isTablet ? 'column-reverse' : 'row', alignItems: isTablet ? 'start' : 'center', justifyContent: isTablet ? 'flex-start' : 'space-between'}}>
                        <Box>
                            <Box sx={{color:'#fff', display:'flex', flexDirection : isMobile ? 'column' : 'row', gap: isMobile ? 2 :4,}}>
                                <Typography sx={{fontSize: isTablet ? '0.9rem' : '1.1rem',textDecoration:'underline',cursor:'pointer'}}>Legal Notice</Typography>
                                <Typography sx={{fontSize: isTablet ? '0.9rem' : '1.1rem',textDecoration:'underline',cursor:'pointer'}}>Privacy Policy</Typography>
                                <Typography sx={{fontSize: isTablet ? '0.9rem' : '1.1rem',textDecoration:'underline',cursor:'pointer'}}>CGV</Typography>
                                <Typography sx={{fontSize: isTablet ? '0.9rem' : '1.1rem',textDecoration:'underline',cursor:'pointer'}}>Cookies</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{color:'#fff',fontSize: isTablet ? '0.9rem' : '1.1rem'}}>Copyright Digidop. 2023</Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Footer
