import { AppBar, Box, Drawer, IconButton, List, ListItem, Paper, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Icon from '../../../asset/img2.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../index.css'
import './nav.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [openDrawer, setOpenDrawer] = useState();

    const toggleDrawer = () => {
        setOpenDrawer((prev) => !prev)
    }

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

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY >= 80) {
                navbar.style.top = '0';
            } else {
                navbar.style.top = '';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <AppBar elevation={0} className='navbar' sx={{ width: isMobile ? '100%' : isTablet ? '46%' : '76.1%', backgroundColor: '#fff', border: '3px solid #fdd33c', borderLeft: isMobile ? 'none' : 'normal', borderBottom: isMobile ? 'none' : 'normal', borderRight: 'none', borderTop: 'none', top: isMobile ? '36.3px' : isTablet ? '35px' : '44.5px' }} position={"fixed"}  >
                    <Box sx={{ pl: isMobile ? 2.3 : isTablet ? 'normal' : 2, py: isMobile ? 1.3 : isTablet ? 0.6 : 1, pr: isMobile ? 2.3 : isTablet ? 'normal' : 3, display: 'flex', justifyContent: isMobile ? 'space-between' : isTablet ? 'space-around' : 'space-between', alignItems: isTablet ? 'center' : 'normal' }}>

                        <Box sx={{ display: isTablet ? 'none' : 'flex', alignItems: 'center', gap: '1.9rem' }}>
                            <Link style={{ textDecoration: 'none' }} to="/">
                                <Typography variant="h5" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                    HOME
                                </Typography>
                            </Link>

                            <Link style={{ textDecoration: 'none' }} to="/UnisexClothing">
                                <Typography variant="h4" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                    UNISEX CLOTHING
                                </Typography>
                            </Link>

                            <Link style={{ textDecoration: 'none' }} to="/Accessories">
                                <Typography variant="h4" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                    ACCESSOIRES
                                </Typography>
                            </Link>

                            <Link style={{ textDecoration: 'none' }} to="/News" >
                                <Typography variant="h4" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                    NEWS
                                </Typography>
                            </Link>
                        </Box>


                        <IconButton onClick={toggleDrawer} sx={{ display: isTablet ? 'flex' : 'none', p: 0, pl: 1 }}>
                            {openDrawer ? <CloseIcon sx={{ color: '#000', fontSize: '2rem' }} /> : <MenuIcon sx={{ color: '#000', fontSize: '2rem' }} />}
                        </IconButton>
                        <Drawer sx={{ zIndex: 2 }} anchor="top" open={openDrawer} onClose={() => { setOpenDrawer(false) }}>
                            <Paper sx={{ mt: 13 }}>
                                <List sx={{ px: 2, pb: 2.5, display: 'flex', flexDirection: 'column', gap: 1.6 }}>
                                    <ListItem>
                                        <Link style={{ textDecoration: 'none' }} to="/">
                                            <Typography variant="h5" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.1rem', fontWeight: '500' }}>
                                                HOME
                                            </Typography>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link style={{ textDecoration: 'none' }} to="/UnisexClothing">
                                            <Typography variant="h4" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.1rem', fontWeight: '500' }}>
                                                UNISEX CLOTHING
                                            </Typography>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link style={{ textDecoration: 'none' }} to="/Accessories">
                                            <Typography variant="h4" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.1rem', fontWeight: '500' }}>
                                                ACCESSOIRES
                                            </Typography>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link style={{ textDecoration: 'none' }} to="/News" >
                                            <Typography variant="h4" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: '1.1rem', fontWeight: '500' }}>
                                                NEWS
                                            </Typography>
                                        </Link>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Drawer>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: isTablet ? '1rem' : '3rem', }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                <Typography variant="h4" component="div" sx={{ fontFamily: 'aeonik-reg', color: '#000', fontSize: isMobile ? '0.9rem' : isTablet ? '1.2rem' : '1.4rem', fontWeight: '500' }}>
                                    BASKET
                                </Typography>
                                <Box component={'img'} src={Icon} sx={{ width: isTablet ? '0.9rem' : '1.2rem' }} />
                            </Box>

                            <Link style={{ textDecoration: 'none' }} to="/InnerLandingPage" target='_blank'>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fdd33c', pl: isMobile ? '6px' : '8px', pr: '2px', py: '6px' }}>
                                    <Button disableElevation variant='contained' sx={{ fontFamily: 'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: isMobile ? '0.8rem' : isTablet ? '1rem' : '1.4rem', pl: isMobile ? '4px' : '8px', py: isMobile ? '4px' : '6px', borderRadius: '7px' }}>AGENCY</Button>
                                    <ArrowOutwardIcon sx={{ color: '#000', fontSize: isTablet ? '20px' : '28px' }} />
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
