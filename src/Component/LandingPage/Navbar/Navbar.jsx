import { AppBar, Box, Button, Toolbar, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Icon from '../../../asset/img2.png'
import MenuIcon from '@mui/icons-material/Menu';
import '../index.css'

const Navbar = () => {

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

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'end',  }}>
                <AppBar sx={{ width: isTablet ? '46%' : '76.1%', backgroundColor: '#fff', border: '3px solid #fdd33c', borderRight: 'none', borderTop: 'none', top:'44.5px' }} position= {isTablet ? "static" : "fixed"}  >
                    <Box sx={{ pl: isTablet ? 'normal' : 2, py: isTablet ? 0.6 : 1, pr: isTablet ? 'normal' : 3, display: 'flex', justifyContent: isTablet ? 'space-around' : 'space-between', alignItems: isTablet ? 'center' : 'normal' }}>
                        
                        <Box sx={{ display: isTablet ? 'none' : 'flex', alignItems: 'center', gap: '1.9rem' }}>
                            <Typography variant="h5" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                HOME
                            </Typography>

                            <Typography variant="h4" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                UNISEX CLOTHING
                            </Typography>

                            <Typography variant="h4" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                ACCESSOIRES
                            </Typography>

                            <Typography variant="h4" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                NEWS
                            </Typography>
                        </Box>

                        <Box sx={{display: isTablet ? 'flex' : 'none',}} >
                            <MenuIcon sx={{color:'#000', fontSize:'2rem'}}/>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: isTablet ? '1rem' : '3rem', }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                <Typography variant="h4" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: isTablet ? '1.2rem':'1.4rem', fontWeight: '500' }}>
                                    BASKET
                                </Typography>
                                <Box component={'img'} src={Icon} sx={{ width: isTablet ? '1rem' : '1.2rem' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', pl: '8px', pr: '2px', py: '6px' }}>
                                <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: isTablet ? '1rem':'1.4rem', pl: '8px', py: '6px', borderRadius: '7px' }}>AGENCY</Button>
                                <ArrowOutwardIcon sx={{ color: '#000', fontSize: isTablet ? '20px':'28px'  }} />
                            </Box>
                        </Box>
                    </Box>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
