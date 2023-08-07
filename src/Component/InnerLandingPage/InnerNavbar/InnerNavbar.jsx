import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Logo from '../../../asset/logo.svg'
import MainLogo from '../../../asset/mainDigiLogo.svg'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import '../index.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from 'react'
import { Link } from 'react-router-dom';


const InnerNavbar = () => {

    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    const [openDrawer, setOpenDrawer] = useState(false)

    const handleDrawer = () => {
        setOpenDrawer((openDrawer) => !openDrawer)
    }

    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <AppBar elevation={0} sx={{ bgcolor: '#101010', pl: isMobile ? 2 : 6.3, pr: isMobile ? 2 : 5, py: 1.1 }} position={isMobile ? 'sticky' : 'fixed'} >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3.5 }}>
                        <Box >
                            <img src={MainLogo} alt="" style={{width: '10.05rem'}}  />
                        </Box>
                        <Box sx={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: 0 }}>

                            <Link to='/Carousel' >
                            <Box sx={{
                                py: 3.8, px: 2.5, display: 'flex', gap: 1.5, alignItems: 'center', cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: '#ffffff0a',
                                    '.navBox1': { opacity: 1 }
                                }
                            }}>
                                <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>SERVICES</Typography>
                                <ArrowDownwardIcon className='navBox1' sx={{ color: '#fff', opacity: 0, fontSize: '1.2rem' }} />
                            </Box>
                            </Link>

                            <Box sx={{
                                py: 3.8, px: 2.5, display: 'flex', gap: 1.5, alignItems: 'center', cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: '#ffffff0a',
                                    '.navBox1': { opacity: 1 }
                                }
                            }}>
                                <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>AGENCY</Typography>
                                <ArrowDownwardIcon className='navBox1' sx={{ color: '#fff', opacity: 0, fontSize: '1.2rem' }} />
                            </Box>

                            <Box sx={{
                                py: 3.8, px: 2.5, display: 'flex', gap: 1.5, alignItems: 'center', cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: '#ffffff0a',
                                    '.navBox1': { opacity: 1 }
                                }
                            }}>
                                <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>RESOURCES</Typography>
                                <ArrowDownwardIcon className='navBox1' sx={{ color: '#fff', opacity: 0, fontSize: '1.2rem' }} />
                            </Box>

                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      
                        <Box sx={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: 2.7 }}>

                            <Box sx={{
                                py: 2, px: 3.5, display: 'flex', gap: 1.5, alignItems: 'center', cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: '#ffffff0a',
                                    '.navBox1': { opacity: 1 }
                                }
                            }}>
                                <Typography sx={{ fontSize: '1.23rem', fontFamily: 'aeonik', fontWeight: '800' }}>Portfolio</Typography>
                            </Box>

                            <Button sx={{ fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'aeonik-reg', bgcolor: '#fdd33c', color: '#000', borderRadius: '0', px: 3.8, py: 1.7, textTransform: 'initial', '&:hover': { backgroundColor: '#dcb52b' }, }}>
                                Contact us
                            </Button>
                        </Box>
                      
                        <Button sx={{ color: '#fff', fontSize: '1.06rem', fontFamily: 'aeonik-reg', fontWeight: 'bold' }}>
                            EN
                        </Button>

                        <IconButton onClick={handleDrawer} sx={{ display: isMobile ? 'initial' : 'none' }} >
                            <MenuIcon sx={{ color: '#fff', fontSize:'2.2rem' }} />
                        </IconButton>

                        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                            <List>

                                <ListItem>
                                    <Box sx={{
                                        py: 3.8, px: 2.5, display: 'flex', gap: 1.5, alignItems: 'center', cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: '#ffffff0a',
                                            '.navBox1': { opacity: 1 }
                                        }
                                    }}>
                                        <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>SERVICES</Typography>
                                        <ArrowDownwardIcon className='navBox1' sx={{ color: '#fff', opacity: 0, fontSize: '1.2rem' }} />
                                    </Box>
                                </ListItem>

                                <ListItem>
                                    <Box sx={{
                                        py: 3.8, px: 2.5, display: 'flex', gap: 1.5, alignItems: 'center', cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: '#ffffff0a',
                                            '.navBox1': { opacity: 1 }
                                        }
                                    }}>
                                        <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>AGENCY</Typography>
                                        <ArrowDownwardIcon className='navBox1' sx={{ color: '#fff', opacity: 0, fontSize: '1.2rem' }} />
                                    </Box>
                                </ListItem>

                                <ListItem>
                                    <Box sx={{
                                        py: 3.8, px: 2.5, display: 'flex', gap: 1.5, alignItems: 'center', cursor: 'pointer',
                                        '&:hover': {
                                            backgroundColor: '#ffffff0a',
                                            '.navBox1': { opacity: 1 }
                                        }
                                    }}>
                                        <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>RESOURCES</Typography>
                                        <ArrowDownwardIcon className='navBox1' sx={{ color: '#fff', opacity: 0, fontSize: '1.2rem' }} />
                                    </Box>
                                </ListItem>

                            </List>
                        </Drawer>

                    </Box>


                </Box>
            </AppBar>
        </>
    )
}

export default InnerNavbar
