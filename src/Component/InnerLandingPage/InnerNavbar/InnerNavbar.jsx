import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Dialog, DialogContent, Divider, Drawer, IconButton, List, ListItem, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import MainLogo from '../../../asset/mainDigiLogo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import '../index.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Dialogue1 from './Dialogue1';
import Dialogue2 from './Dialogue2';
import Dialogue3 from './Dialogue3';



const InnerNavbar = () => {

    //  FOR DIALOGUE - 1
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    //  FOR DIALOGUE - 2
    const [open2, setOpen2] = useState(false)

    const handleOpen2 = () => {
        setOpen2(true)
    }

    const handleClose2 = () => {
        setOpen2(false)
    }


    //  FOR DIALOGUE - 3
    const [open3, setOpen3] = useState(false)

    const handleOpen3 = () => {
        setOpen3(true)
    }

    const handleClose3 = () => {
        setOpen3(false)
    }



    // FOR DRAWER
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleDrawer = () => {
        setOpenDrawer((openDrawer) => !openDrawer)
    }


    // FOR ACCORDIAN MOBILE NAVBAR - 1
    const [expanded, setExpended] = useState(false)

    const handleExpand = () => {
        setExpended((prevExpande) => !prevExpande);
    }


    // FOR ACCORDIAN MOBILE NAVBAR - 2
    const [expanded2, setExpended2] = useState(false)

    const handleExpand2 = () => {
        setExpended2((prevExpande) => !prevExpande);
    }


    // FOR ACCORDIAN MOBILE NAVBAR - 3
    const [expanded3, setExpended3] = useState(false)

    const handleExpand3 = () => {
        setExpended3((prevExpande) => !prevExpande);
    }

    const theme = useTheme()
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <AppBar elevation={0} sx={{ bgcolor: '#101010', pl: isMobile ? 2.3 : 6.3, pr: isMobile ? 1.8 : 5.3, py: isMobile ? 0.8 : 0.9 }} position={isMobile ? 'sticky' : 'fixed'} >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3.5 }}>

                        <Box mt={isMobile ? 'normal' : 0.8}>
                            <Link to="/InnerLandingPage"  >
                                <img src={MainLogo} alt="" style={{ width: isMobile ? '8.05rem' : '10.05rem' }} />
                            </Link>
                        </Box>

                        <Box sx={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: 0 }}>

                            <Box onClick={handleOpen} sx={{
                                py: 3.8, px: 2.5, display: 'flex', gap: 1.5, alignItems: 'center', cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: '#ffffff0a',
                                    '.navBox1': { opacity: 1 }
                                }
                            }}>
                                <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>SERVICES</Typography>
                                <ArrowDownwardIcon className='navBox1' sx={{ color: '#fff', opacity: 0, fontSize: '1.2rem' }} />
                            </Box>

                            {/* DIALOGUE - 1 */}
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                disableScrollLock={true}
                                autoFocus="false"
                                fullScreen
                                BackdropProps={{
                                    style: {
                                        backdropFilter: 'blur(8px)',
                                        marginTop: '8rem',
                                    }
                                }}
                                sx={{
                                    '& .MuiDialog-paper': {
                                        backgroundColor: '#101010',
                                        height: '78%',
                                        mt: '3rem',
                                        p: 0,
                                    },
                                    '& .MuiDialogContent-root': {
                                        padding: 0
                                    }
                                }}
                            >
                                <DialogContent sx={{ height: '100%' }}>

                                    <Dialogue1 />

                                </DialogContent>
                            </Dialog>

                            <Box onClick={handleOpen2} sx={{
                                py: 3.8, px: 2.5, display: 'flex', gap: 1.5, alignItems: 'center', cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: '#ffffff0a',
                                    '.navBox1': { opacity: 1 }
                                }
                            }}>
                                <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>AGENCY</Typography>
                                <ArrowDownwardIcon className='navBox1' sx={{ color: '#fff', opacity: 0, fontSize: '1.2rem' }} />
                            </Box>

                            {/* DIALOGUE - 2 */}
                            <Dialog
                                open={open2}
                                onClose={handleClose2}
                                disableScrollLock={true}
                                autoFocus="false"
                                fullScreen
                                BackdropProps={{
                                    style: {
                                        backdropFilter: 'blur(8px)',
                                        marginTop: '8rem',
                                    }
                                }}
                                sx={{
                                    '& .MuiDialog-paper': {
                                        backgroundColor: '#101010',
                                        height: '76%',
                                        mt: '3rem',
                                        p: 0,
                                    },
                                    '& .MuiDialogContent-root': {
                                        padding: 0
                                    }
                                }}

                            >
                                <DialogContent sx={{ height: '100%' }}>

                                    <Dialogue2 />

                                </DialogContent>
                            </Dialog>

                            <Box onClick={handleOpen3} sx={{
                                py: 3.8, px: 2.5, display: 'flex', gap: 1.5, alignItems: 'center', cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: '#ffffff0a',
                                    '.navBox1': { opacity: 1 }
                                }
                            }}>
                                <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>RESOURCES</Typography>
                                <ArrowDownwardIcon className='navBox1' sx={{ color: '#fff', opacity: 0, fontSize: '1.2rem' }} />
                            </Box>

                            {/* DIALOGUE -3 */}
                            <Dialog
                                open={open3}
                                onClose={handleClose3}
                                disableScrollLock={true}
                                autoFocus="false"
                                fullScreen
                                BackdropProps={{
                                    style: {
                                        backdropFilter: 'blur(8px)',
                                        marginTop: '8rem',
                                    }
                                }}
                                sx={{
                                    '& .MuiDialog-paper': {
                                        backgroundColor: '#101010',
                                        height: '78%',
                                        mt: '3rem',
                                        p: 0,
                                    },
                                    '& .MuiDialogContent-root': {
                                        padding: 0
                                    }
                                }}

                            >
                                <DialogContent sx={{ height: '100%' }}>

                                    <Dialogue3 />

                                </DialogContent>

                            </Dialog>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 0 : 2 }}>

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

                        <Button sx={{display:'flex', flexDirection:'column', cursor:'pointer', '&:hover':{'.fr':{opacity:1}}, mb: isMobile ? 1 : 'normal', color: '#fff', fontSize: isMobile ? '0.9rem' : '1.06rem', fontFamily: 'aeonik-reg', fontWeight: 'bold' }}>
                            EN
                            <Typography className='fr' sx={{bgcolor:'#101010', position:'absolute', top:45, opacity:0, py:1, px:2, color: '#fff', fontSize: isMobile ? '0.9rem' : '1.06rem', fontFamily: 'aeonik-reg', fontWeight: 'bold'}}>FR</Typography>
                        </Button>

                        <IconButton onClick={handleDrawer} sx={{ display: isMobile ? 'initial' : 'none' }} >
                            <MenuIcon sx={{ display: openDrawer ? 'none' : 'initial', color: '#fff', fontSize: '2.2rem' }} />
                            <CloseIcon sx={{ display: openDrawer ? 'initial' : 'none', color: '#fff', fontSize: '2.2rem' }} />
                        </IconButton>

                        <Drawer sx={{ zIndex: 2 }} open={openDrawer} anchor='top' onClose={() => setOpenDrawer(false)}>
                            <Paper sx={{ mt: 5}}>
                                <List sx={{ bgcolor: '#000', height: '93.2vh', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>

                                    <Box sx={{ px: 0.53, display: 'flex', flexDirection: 'column', gap: 0.5 }}>

                                        <ListItem>
                                            <Box width={'100%'}>
                                                <Divider sx={{ mt: 3, bgcolor: '#838383' }} />
                                            </Box>
                                        </ListItem>

                                        <ListItem sx={{ py: 0 }}>
                                            <Box width={'100%'} overflow={'scroll'}>
                                                <Accordion expanded={expanded} onChange={handleExpand} sx={{ bgcolor: '#000', overflowY:'scroll' }}>
                                                    <AccordionSummary
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        sx={{ p: 0, m: 0 }}
                                                    >
                                                        <Box sx={{ p: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                            <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>SERVICES</Typography>
                                                            <IconButton sx={{ p: 0 }}>
                                                                {expanded ? <ArrowDownwardIcon sx={{ color: '#fdc33c' }} /> : <ArrowForwardIcon sx={{ color: '#fff' }} />}
                                                            </IconButton>
                                                        </Box>
                                                    </AccordionSummary>
                                                    <AccordionDetails sx={{ bgcolor: '#222' }}>
                                                        <Dialogue1 />
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Divider sx={{ mt: 2, bgcolor: '#838383' }} />
                                            </Box>
                                        </ListItem>

                                        <ListItem sx={{ py: 0 }}>
                                            <Box width={'100%'}>
                                                <Accordion expanded={expanded2} onChange={handleExpand2} sx={{ bgcolor: '#000', overflowY:'scroll' }}>
                                                    <AccordionSummary
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        sx={{ p: 0, m: 0 }}
                                                    >
                                                        <Box sx={{ p: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                            <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>AGENCY</Typography>
                                                            <IconButton sx={{ p: 0 }}>
                                                                {expanded2 ? <ArrowDownwardIcon sx={{ color: '#fdc33c' }} /> : <ArrowForwardIcon sx={{ color: '#fff' }} />}
                                                            </IconButton>
                                                        </Box>
                                                    </AccordionSummary>
                                                    <AccordionDetails sx={{ bgcolor: '#222' }}>
                                                        <Dialogue2 />
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Divider sx={{ mt: 2, bgcolor: '#838383' }} />
                                            </Box>
                                        </ListItem>

                                        <ListItem>
                                            <Box width={'100%'}>
                                                <Accordion expanded={expanded3} onChange={handleExpand3} sx={{ bgcolor: '#000', overflowY:'scroll'}}>
                                                    <AccordionSummary
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        sx={{ p: 0, m: 0 }}
                                                    >
                                                        <Box sx={{ p: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                            <Typography sx={{ fontSize: '1.23rem', color: '#f8f8f8', fontFamily: 'aeonik-reg' }}>RESOURCES</Typography>
                                                            <IconButton sx={{ p: 0 }}>
                                                                {expanded3 ? <ArrowDownwardIcon sx={{ color: '#fdc33c' }} /> : <ArrowForwardIcon sx={{ color: '#fff' }} />}
                                                            </IconButton>
                                                        </Box>
                                                    </AccordionSummary>
                                                    <AccordionDetails sx={{ bgcolor: '#222' }}>
                                                        <Dialogue3 />
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Divider sx={{ mt: 2, bgcolor: '#838383' }} />
                                            </Box>
                                        </ListItem>

                                    </Box>

                                    <Box px={2.5} pb={10}>
                                        <Box sx={{ bgcolor: '#181818', width: '100%', py: 1.5 }} >
                                            <Typography sx={{ textAlign: 'center', color: '#f8f8f8', fontSize: '1rem', fontFamily: 'aeonik-reg', }}>Portfolio</Typography>
                                        </Box>
                                        <Box sx={{ mt: 2, bgcolor: '#fdd33c', width: '100%', py: 1.5 }} >
                                            <Typography sx={{ textAlign: 'center', color: '#181818', fontSize: '1rem', fontFamily: 'aeonik-reg', }}>Contact Us</Typography>
                                        </Box>
                                    </Box>

                                </List>
                            </Paper>
                        </Drawer>

                    </Box>


                </Box>
            </AppBar>
        </>
    )
}

export default InnerNavbar
