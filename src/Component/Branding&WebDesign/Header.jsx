import { Box, Button, Grid, Menu, MenuItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../InnerLandingPage/index.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import figmaImg from '../../asset/figmaLogo.svg'
import brandImg from '../../asset/brandImg.webp'
import pointer from '../../asset/pointer.svg'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Header = () => {

    // const [open, setOpen] = useState(false)

    // const handleClick = () => {
    //     setOpen((prev) => !prev)
    // }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={6.75}>
                    <Box sx={{pt:10, pl: 6.5, display: 'flex', flexDirection: 'column', alignItems: 'start' }}>

                        <Button onClick={handleClick} disableRipple sx={{ borderRadius: '0', border: 'none', bgcolor: '#181818', display: 'flex', gap: 4, py: 1.8, pr: 2,pl:2.5, '&:hover': { backgroundColor: '#222' } }}>
                            <Typography sx={{ color: '#f8f8f8', fontFamily: 'aeonik-reg', fontSize: '1.25rem' }} >DESIGN FIGMA</Typography>
                            <ExpandMoreIcon sx={{ color: '#f8f8f8', fontSize: '2rem' }} />
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
                                    <Typography sx={{ width: '100%', px: 2, py: 2, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Webflow Development</Typography>
                                </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%', px: 2, py: 2, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Webflow Enterprise</Typography>
                                </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%', px: 2, py: 2, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Webflow E-commerce</Typography>
                                </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%', px: 2, py: 2, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Webflow Maintenance</Typography>                            </MenuItem>
                                <MenuItem disableGutters>
                                    <Typography sx={{ width: '100%', px: 2, py: 2, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#f8f8f8' }}>Webflow Training</Typography>
                                </MenuItem>
                            </Box>

                        </Menu>

                        <Box mt={10}>
                            <Typography sx={{ fontFamily: 'aeonik', fontSize: '5rem', color: '#fff', lineHeight: '6.5rem' }}>
                                Design on Figma for an optimal user experience
                            </Typography>
                        </Box>

                        <Box mt={5} sx={{display:'flex', flexDirection:'column', gap:10}}>
                            <Box ml={2}>
                            <img  src={figmaImg} width={'70rem'} alt="" />
                            </Box>
                            <ArrowDownwardIcon sx={{ color: '#fff', fontSize: '3.3rem' }} />
                        </Box>

                    </Box>
                </Grid>

                <Grid item xs={5.25} width={'100%'}>
                    <Box sx={{width:'100%', height:'75%', bgcolor:'#fdd33c', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <Box sx={{width:'33.35rem', height:'26.4rem'}}>
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
                                <img style={{position:'absolute',bottom:-55,left:'24.5%'}} width={'250rem'} src={pointer} alt="" />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Header
