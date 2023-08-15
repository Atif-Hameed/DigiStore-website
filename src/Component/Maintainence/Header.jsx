import { Box, Button, Grid, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../InnerLandingPage/index.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import figmaImg from '../../asset/figmaLogo.svg'
import maintenanceImgBig from '../../asset/maintenanceImgBig.webp'
import maintenanceImgSmall from '../../asset/maintenanceImgSmall.webp'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CheckIcon from '@mui/icons-material/Check';

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
            <Grid container spacing={5} pb={ isMobile ? 0 :10}>
                <Grid item lg={6.75} sm={12}>
                    <Box sx={{ pt: isMobile ? 0 : 10, pl: isMobile ? 2.5 : 6.5, display: 'flex', flexDirection: 'column', alignItems: 'start' }}>

                        <Button onClick={handleClick} disableRipple sx={{ py: isMobile ? 1.5 : 1.8, pr: isMobile ? 1.5 : 2, pl: isMobile ? 2 : 2.5, borderRadius: '0', border: 'none', bgcolor: '#181818', display: 'flex', gap: isMobile ? 3 : 4, '&:hover': { backgroundColor: '#222' } }}>
                            <Typography sx={{ color: '#f8f8f8', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1rem' : '1.25rem' }} >WEBFLOW MAINTAINENCE</Typography>
                            <ExpandMoreIcon sx={{ color: '#f8f8f8', fontSize: isMobile ? '1.7rem' : '2rem' }} />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            sx={{ mt: 3, py: 0,}}
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
                            <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#222', width: '100%' }}>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%',px: 2, pr:16.5, py: 1.3, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#bebebe' }}>Design Figma</Typography>
                                </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%',px: 2, pr:16.5, py: 1.3, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#bebebe' }}>Webflow Development</Typography>
                                </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%',px: 2, pr:16.5, py: 1.3, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#bebebe' }}>Webflow Enterprise</Typography>
                                </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%',px: 2, pr:16.5, py: 1.3, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#bebebe' }}>Webflow E-commerce</Typography>                            </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%',px: 2, pr:16.5, py: 1.3, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#bebebe' }}>Webflow Training</Typography>
                                </MenuItem>
                            </Box>

                        </Menu>

                        <Box mt={isMobile ? 8 : 10}>
                            <Typography sx={{ pr: isMobile ? 2 : 'normal', fontFamily: 'aeonik', fontSize: isMobile ? '2.45rem' : '5rem', color: '#fff', lineHeight: isMobile ? '3.3rem' : '6.5rem' }}>
                            Full support for the maintenance of your Webflow site
                            </Typography>
                        </Box>

                        <Box mt={isMobile ? 4 : 5} sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 9 : 10 }}>
                            <Box sx={{display:'flex', flexDirection:'column', gap:2.5}}>
                                <Box sx={{display:'flex', alignItems:'center', gap:2.5}}>
                                    <CheckIcon sx={{color:'#bebebe', fontSize:isMobile ? '1.4rem':'1.7rem'}} />
                                    <Typography sx={{color:'#bebebe', fontSize: isMobile ? '1rem':'1.3rem', fontFamily:'aeonik-reg'}}>24/7 technical support</Typography>
                                </Box>
                                <Box sx={{display:'flex', alignItems:'center', gap:2.5}}>
                                    <CheckIcon sx={{color:'#bebebe', fontSize:isMobile ? '1.4rem':'1.7rem'}} />
                                    <Typography sx={{color:'#bebebe', fontSize:isMobile ? '1rem':'1.3rem', fontFamily:'aeonik-reg'}}>Training of teams</Typography>
                                </Box>
                                <Box sx={{display:'flex', alignItems:'center', gap:2.5}}>
                                    <CheckIcon sx={{color:'#bebebe', fontSize:isMobile ? '1.4rem':'1.7rem'}} />
                                    <Typography sx={{color:'#bebebe', fontSize:isMobile ? '1rem':'1.3rem', fontFamily:'aeonik-reg'}}>Slack channel and tracking Notion</Typography>
                                </Box>
                            </Box>
                            <ArrowDownwardIcon sx={{ color: '#fff', fontSize: isMobile ? '2.7rem' : '3.3rem' }} />
                        </Box>

                    </Box>
                </Grid>

                <Grid item lg={5.25} sm={12} width={'100%'}>
                    <Box sx={{ width: '100%', height: isMobile ? '24rem' : '73.5%', bgcolor: '#fdd33c', display: 'flex', flexDirection: 'column', justifyContent: isMobile ? 'end' : 'center' }}>
                        <Box sx={{ width: isMobile ? '19.5rem' : '33.35rem', height: isMobile ? '19rem' : '26.4rem' }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: `url(${maintenanceImgBig})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    position: 'relative'
                                }}
                            >
                                <img style={{ position: 'absolute', top: isMobile ? -10 : -55, right: '12.5%' }} width={isMobile ? '160rem' : '205rem'} src={maintenanceImgSmall} alt="" />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Header
