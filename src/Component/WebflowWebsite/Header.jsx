import { Box, Button, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../InnerLandingPage/index.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



function Header() {

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
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box py={isMobile ? 7 : 18} px={isMobile ? 2.5 : 6}>
                <Button onClick={handleClick} disableRipple sx={{ py: isMobile ? 1.4 : 1.8, pr: isMobile ? 1.5 : 2, pl: isMobile ? 2 : 2.5, borderRadius: '0', border: 'none', bgcolor: '#181818', display: 'flex', gap: isMobile ? 3 : 4, '&:hover': { backgroundColor: '#222' } }}>
                    <Typography sx={{ color: '#f8f8f8', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1rem' : '1.25rem' }} >WEBFLOW DEVELOPMENT</Typography>
                    <ExpandMoreIcon sx={{ color: '#f8f8f8', fontSize: isMobile ? '1.7rem' : '2rem' }} />
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

                <Box mt={isMobile ? 3.5 : 5}>
                    <Typography sx={{ width: isMobile ? '100%' : '55%', pr: isMobile ? 2 : 'normal', fontFamily: 'aeonik', fontSize: isMobile ? '2.45rem' : '5rem', color: '#fff', lineHeight: isMobile ? '3.3rem' : '6.5rem' }}>
                        The Webflow agency to create your website.
                    </Typography>
                </Box>

                <Box mt={0.5} sx={{display:'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'start':'center', justifyContent:'space-between', gap:isMobile ? 6 : 'normal'}}>
                    <Typography sx={{ width:isMobile ? '100%':'50%', pr: isMobile ? 2 : 'normal', fontFamily: 'aeonik', fontSize: isMobile ? '1rem' : '1.25rem', color: '#bebebe', lineHeight: isMobile ? '' : '' }}>
                        Digidop is the first and only French webflow agency to be triply accredited: Webflow Expert, Client-First and Webflow Global Leader.
                    </Typography>
                    <ArrowDownwardIcon sx={{ color: '#fff', fontSize: isMobile ? '2.7rem' : '3.3rem' }} />
                </Box>
            </Box>
        </>
    )
}

export default Header
