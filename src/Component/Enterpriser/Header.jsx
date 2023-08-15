import { Box, Button,Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../InnerLandingPage/index.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ppIcon from '../../asset/PpIcon.svg'
import BgDots from '../../asset/BgDots.svg'
import EnterpriseBg from '../../asset/enterpriseBg.webp'
import certifIcon from '../../asset/certifIconWhite.svg'

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
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ pt: isMobile ? 0 : 10, px: isMobile ? 2.5 : 6.5, display: 'flex', flexDirection: 'column', alignItems: 'start' }}>

                <Button onClick={handleClick} disableRipple sx={{ py: isMobile ? 1.5 : 1.8, pr: isMobile ? 1.5 : 2, pl: isMobile ? 2 : 2.5, borderRadius: '0', border: 'none', bgcolor: '#181818', display: 'flex', gap: isMobile ? 3 : 4, '&:hover': { backgroundColor: '#222' } }}>
                    <Typography sx={{ color: '#f8f8f8', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1rem' : '1.25rem' }} >WEBFLOW Enterprise</Typography>
                    <ExpandMoreIcon sx={{ color: '#f8f8f8', fontSize: isMobile ? '1.7rem' : '2rem' }} />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{ mt: 3, py: 0, }}
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
                            <Typography sx={{ width: '100%', px: 2, pr: 13, py: 1.3, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#bebebe' }}>Design Figma</Typography>
                        </MenuItem>
                        <MenuItem disableGutters>
                            <Typography sx={{ width: '100%', px: 2, pr: 13, py: 1.3, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#bebebe' }}>Webflow Development</Typography>
                        </MenuItem>
                        <MenuItem disableGutters>
                            <Typography sx={{ width: '100%', px: 2, pr: 13, py: 1.3, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#bebebe' }}>Webflow Enterprise</Typography>
                        </MenuItem>
                        <MenuItem disableGutters>
                            <Typography sx={{ width: '100%', px: 2, pr: 13, py: 1.3, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#bebebe' }}>Webflow E-commerce</Typography>                            </MenuItem>
                        <MenuItem disableGutters>
                            <Typography sx={{ width: '100%', px: 2, pr: 13, py: 1.3, m: 0, '&:hover': { border: '1px solid #fdc33c', color: '#fdc33c' }, cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'aeonik', color: '#bebebe' }}>Webflow Training</Typography>
                        </MenuItem>
                    </Box>

                </Menu>

                <Box mt={isMobile ? 4 : 5} sx={{
                    background: `url(${BgDots})`,
                    backgroundSize: isMobile? 'contain': 'cover',
                    backgroundPosition:'top',
                    width: '100%',
                    height: '100%',
                }}>
                    <Box sx={{display: 'flex', gap: isMobile? 6: 30, alignItems: isMobile? 'start':'end',flexDirection:isMobile ? 'column':'row'}}>
                        <Typography sx={{ pr: isMobile ? 2 : 'normal', fontFamily: 'aeonik', fontSize: isMobile ? '2.45rem' : '5rem', color: '#fff', lineHeight: isMobile ? '3.3rem' : '6.5rem' }}>
                            Webflow development for large companies
                        </Typography>
                        <Box sx={{ display: 'flex', gap: isMobile? 2 : 3 }}>
                            <img src={ppIcon} width={isMobile? '90rem':'150rem'} alt="" />
                            <img src={certifIcon} width={isMobile? '60rem':'100rem'} alt="" />
                        </Box>
                    </Box>

                    <Box mt={ isMobile? 8 : 18}>
                        <img src={EnterpriseBg} width={'100%'} alt="" />
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Header
