import { Box, Button, Grid, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../InnerLandingPage/index.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import figmaImg from '../../asset/figmaLogo.svg'
import brandImg from '../../asset/brandImg.webp'
import pointer from '../../asset/pointer.svg'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Grid container spacing={5}>
                <Grid item lg={6.75} sm={12}>
                    <Box sx={{pt: isMobile ? 0 : 10, pl: isMobile ? 2.5 : 6.5, display: 'flex', flexDirection: 'column', alignItems: 'start' }}>

                        <Button onClick={handleClick} disableRipple sx={{py: isMobile ? 1.5 : 1.8, pr: isMobile ? 1.5 : 2, pl: isMobile ? 2 :2.5, borderRadius: '0', border: 'none', bgcolor: '#181818', display: 'flex', gap:isMobile ? 3 : 4,  '&:hover': { backgroundColor: '#222' } }}>
                            <Typography sx={{ color: '#f8f8f8', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1rem':'1.25rem' }} >DESIGN FIGMA</Typography>
                            <ExpandMoreIcon sx={{ color: '#f8f8f8', fontSize:isMobile ? '1.7rem':'2rem' }} />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            sx={{ mt: 3, py: 0 }}
                            PaperProps={{
                                style: {
                                    borderRadius: '0',
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                    padding: 0,
                                    margin: 0
                                }
                            }}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                style: {
                                    padding: 0,
                                    margin: 0
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#222', width: 'fit-content' }}>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%', px: isMobile ? 1.5 : 2, py:isMobile ? 1.5 : 2, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: isMobile ? '1rem' : '1.2rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Webflow Development</Typography>
                                </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%', px: isMobile ? 1.5 : 2, py:isMobile ? 1.5 : 2, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize:isMobile ? '1rem' : '1.2rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Webflow Enterprise</Typography>
                                </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%', px: isMobile ? 1.5 : 2, py:isMobile ? 1.5 : 2, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize:isMobile ? '1rem' : '1.2rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Webflow E-commerce</Typography>
                                </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%', px: isMobile ? 1.5 : 2, py:isMobile ? 1.5 : 2, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize:isMobile ? '1rem' : '1.2rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Webflow Maintenance</Typography>                            </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%', px: isMobile ? 1.5 : 2, py:isMobile ? 1.5 : 2, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize:isMobile ? '1rem' : '1.2rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Webflow Training</Typography>
                                </MenuItem>
                            </Box>

                        </Menu>

                        <Box mt={isMobile ? 8 : 10}>
                            <Typography sx={{pr:isMobile ? 2 :'normal', fontFamily: 'aeonik', fontSize: isMobile ? '2.45rem':'5rem', color: '#fff', lineHeight: isMobile ? '3.3rem':'6.5rem' }}>
                                Design on Figma for an optimal user experience
                            </Typography>
                        </Box>

                        <Box mt={isMobile ? 4 : 5} sx={{display:'flex', flexDirection:'column', gap: isMobile ? 7 : 10}}>
                            <Box ml={isMobile ? 1 : 2}>
                            <img  src={figmaImg} width={isMobile ? '37rem' :'70rem'} alt="" />
                            </Box>
                            <ArrowDownwardIcon sx={{ color: '#fff', fontSize:isMobile ? '2.7rem' : '3.3rem' }} />
                        </Box>

                    </Box>
                </Grid>

                <Grid item lg={5.25} sm={12} width={'100%'}>
                    <Box sx={{width:'100%', height:isMobile? '26rem':'75%', bgcolor:'#fdd33c', display:'flex', flexDirection:'column', justifyContent: isMobile ? 'end':'center'}}>
                        <Box sx={{width: isMobile ? '19rem' : '33.35rem', height:isMobile ? '21rem':'26.4rem'}}>
                            <Box
                            sx={{
                                width:'100%',
                                height:'100%',
                                backgroundImage:`url(${brandImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position:'relative'
                            }}
                            >
                                <img style={{position:'absolute',bottom:isMobile ? 20:-55,left:'24.5%'}} width={isMobile ? '200rem':'250rem'} src={pointer} alt="" />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Header
