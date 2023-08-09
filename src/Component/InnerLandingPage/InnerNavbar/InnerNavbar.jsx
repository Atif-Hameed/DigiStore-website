import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, Grid, IconButton, List, ListItem, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Logo from '../../../asset/logo.svg'
import MainLogo from '../../../asset/mainDigiLogo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import '../index.css'
import linkedLogo from '../../../asset/linkedInLogo.svg'
import instaLogo from '../../../asset/instaLogo.svg'
import tiktokLogo from '../../../asset/tiktokLogo.svg'
import wLogo from '../../../asset/wBig.svg'
import ytLogo from '../../../asset/ytLogo.svg'
import figmaLogo from '../../../asset/figmaLogo.svg'
import bigW from '../../../asset/wBig.svg'
import team from '../../../asset/team.webp'
import Certifcate from '../../../asset/certifIcon.svg'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Dialogue1 from './Dialogue1';
import Dialogue2 from './Dialogue2';
import Dialogue3 from './Dialogue3';


// const Dialogue1 = () => {

//     const theme = useTheme()
//     const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

//     return (
//         <>
//             <Box px={isMobile ? 0 : 6} height={'100%'}>
//                 <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'start' : 'center', justifyContent: 'space-between' }} >

//                     <Box sx={{ width: isMobile ? '100%' : '62%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 7 }}>

//                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4.5 }}>

//                             <Link to="/Branding" style={{ textDecoration: 'none' }}>
//                                 <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem' : '1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>BRANDING & WEBDESIGN</Typography>
//                             </Link>

//                             <Link to="" style={{ textDecoration: 'none' }}>
//                                 <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem' : '1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>WEBFLOW WEBSITE</Typography>
//                             </Link>

//                             <Link to="" style={{ textDecoration: 'none' }}>
//                                 <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem' : '1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>TRAINING</Typography>
//                             </Link>

//                             <Link to="" style={{ textDecoration: 'none' }}>
//                                 <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem' : '1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>MAINTENANCE</Typography>
//                             </Link>

//                             <Link to="" style={{ textDecoration: 'none' }}>
//                                 <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem' : '1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>ENTERPRISE</Typography>
//                             </Link>

//                         </Box>

//                         <Box sx={{ width: isMobile ? '100%' : '23.4rem', mt: 0.8, display: 'flex', flexDirection: 'column', gap: 2 }}>
//                             <Box sx={{ "&:hover": { color: '#fff', '& .arrow1': { color: '#fff' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                 <Typography className='arrow1' sx={{ color: '#bebebe', fontSize: isMobile ? '1rem' : '1.2rem', fontFamily: 'aeonik' }}>All our services</Typography>
//                                 <ArrowForwardIcon className='arrow1' sx={{ color: '#bebebe' }} />
//                             </Box>
//                             <Divider sx={{ bgcolor: '#4c4b49' }} />

//                             <Box sx={{ "&:hover": { color: '#fff', '& .arrow2': { color: '#fff' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                 <Typography className='arrow2' sx={{ "&:hover": { color: '#fff' }, cursor: 'pointer', color: '#bebebe', fontSize: isMobile ? '1rem' : '1.2rem', fontFamily: 'aeonik' }}>La DigiCalidad</Typography>
//                                 <ArrowForwardIcon className='arrow2' sx={{ color: '#bebebe' }} />
//                             </Box>
//                             <Divider sx={{ bgcolor: '#4c4b49' }} />
//                         </Box>

//                     </Box>

//                     <Box sx={{ mt: isMobile ? 2 : 'normal', width: isMobile ? '100%' : '38%', height: '100%' }}>
//                         <Box sx={{ bgcolor: '#4353ff', height: isMobile ? '70%' : '50%', position: 'relative' }}>
//                             <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem', color: '#fff', position: 'absolute', right: 20, top: 15 }} />
//                             <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                                 <img src={bigW} width={isMobile ? '80rem' : '150rem'} alt="" />
//                                 <Typography sx={{ color: '#fff', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1rem' : '1.2rem' }} >Certified Webflow Expert</Typography>
//                             </Box>
//                         </Box>
//                         <Box sx={{ bgcolor: '#f8f8f8', height: isMobile ? '70%' : '50%', position: 'relative' }}>
//                             <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem', color: '#000', position: 'absolute', right: 20, top: 15 }} />
//                             <Box sx={{ gap: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                                 <img src={Certifcate} width={isMobile ? '55rem' : '92rem'} alt="" />
//                                 <Typography sx={{ color: '#000', fontFamily: 'aeonik-reg', fontSize: isMobile ? '1rem' : '1.2rem' }} >Client-First Ambassador</Typography>
//                             </Box>
//                         </Box>
//                     </Box>

//                 </Box>
//             </Box>
//         </>
//     )
// }

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


    // FOR HOVER EFFECT
    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
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
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
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

                        <Button sx={{ mb: isMobile ? 1 : 'normal', color: '#fff', fontSize: isMobile ? '0.9rem' : '1.06rem', fontFamily: 'aeonik-reg', fontWeight: 'bold' }}>
                            EN
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
                                            <Box width={'100%'}>
                                                <Accordion expanded={expanded} onChange={handleExpand} sx={{ bgcolor: '#000' }}>
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
                                                <Accordion expanded={expanded2} onChange={handleExpand2} sx={{ bgcolor: '#000' }}>
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
                                                <Accordion expanded={expanded3} onChange={handleExpand3} sx={{ bgcolor: '#000' }}>
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
