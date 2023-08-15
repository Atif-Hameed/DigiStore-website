import { Box, Divider, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../InnerLandingPage/index.css'
import figmaSmall from '../../asset/figmaSmall.svg'
import wSmall from '../../asset/wSamll.svg'
import webflowImg from '../../asset/webflowImg.webp'
import boxSmall from '../../asset/boxSmall.svg'
import logo1 from '../../asset/logo1.svg'
import logo2 from '../../asset/logo2.webp'
import logo3 from '../../asset/logo3.svg'
import logo4 from '../../asset/logo4.svg'
import logo5 from '../../asset/logo5.svg'
import logo6 from '../../asset/logo6.svg'
import logo7 from '../../asset/logo7.svg'
import logo8 from '../../asset/logo8.svg'
import logo9 from '../../asset/logo9.svg'
import logo10 from '../../asset/logo10.svg'
import logo11 from '../../asset/logo11.svg'
import logo12 from '../../asset/logo12.svg'
import logo13 from '../../asset/logo13.svg'
import logo14 from '../../asset/logo14.svg'
import logo15 from '../../asset/logo15.svg'
import logo16 from '../../asset/logo16.svg'
import logo17 from '../../asset/logo17.svg'
import logo18 from '../../asset/logo18.svg'
import logo19 from '../../asset/logo19.svg'
import logo20 from '../../asset/logo20.svg'

function Logos() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box bgcolor={'#181818'} pt={isMobile ? 0 : 4.5}>

                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column':'row', gap: 0, justifyContent: 'space-between' }}>
                    <Box sx={{ py: isMobile ? 6 : 8, pl: isMobile ? 2.5:6, pr:isMobile ? 2.5 : 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box sx={{ display: isMobile ? 'none':'flex', flexDirection: 'column', alignItems: 'start', gap: 2.4, }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 1.2 : 1.4 }}>
                                <img src={wSmall} width={isMobile ? '17rem' : '20rem'} alt="" />
                                <Typography sx={{ color: '#f8f8f8', fontSize: isMobile ? '0.85rem' : '1.06rem', fontWeight: '', }}>Enterprise Partner</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 1.2 : 1.4 }}>
                                <img src={boxSmall} width={isMobile ? '17rem' : '20rem'} alt="" />
                                <Typography sx={{ color: '#f8f8f8', fontSize: isMobile ? '0.85rem' : '1.06rem', fontWeight: '', }}>Client-First certified</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 1.2 : 1.4 }}>
                                <img src={figmaSmall} width={isMobile ? '17rem' : '20rem'} alt="" />
                                <Typography sx={{ color: '#f8f8f8', fontSize: isMobile ? '0.85rem' : '1.06rem', fontWeight: '', }}>Professional agency</Typography>
                            </Box>
                        </Box>

                        <Box width={ isMobile ? '100%' :'70%'}>
                            <Typography sx={{ color: '#f8f8f8', fontSize: isMobile ? '1.1rem' : '1.4rem', fontWeight: '', }}>Making a customizable weblow site, with all the best practices in webmarketing, is the job of our digital agency.</Typography>
                        </Box>
                    </Box>

                    <Box>
                        <img src={webflowImg} width={'100%'} alt="" />
                    </Box>
                </Box>

                <Box px={isMobile ? 2.5 : 6} pt={isMobile ? 4 : 15} pb={isMobile ? 5 : 8}>
                    <Typography sx={{ color: '#bebebe', fontSize: isMobile ? '1.1rem' : '1.25rem', fontFamily: 'aeonik-reg' }}>THEY TRUSTED DIGIDOP TO CREATE A WEBSITE</Typography>
                    <Divider sx={{ mt: 2.5, bgcolor: '#bebebe' }} />

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? 4 : 15, mt: isMobile ? '1rem' : '5rem', justifyContent: 'center', }}>
                        <img src={logo1} style={{ height: isMobile ? '2rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo2} style={{ height: isMobile ? '1rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo3} style={{ height: isMobile ? '1.2rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo4} style={{ height: isMobile ? '1.6rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo5} style={{ height: isMobile ? '1.8rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo6} style={{ height: isMobile ? '2rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo7} style={{ height: isMobile ? '1.8rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo8} style={{ height: isMobile ? '1.8rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo9} style={{ height: isMobile ? '1.2rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo10} style={{ height: isMobile ? '1rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo11} style={{ height: isMobile ? '1rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo12} style={{ height: isMobile ? '1rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo13} style={{ height: isMobile ? '1rem' : '2.5rem' }} height={''} alt="" />
                        <img src={logo14} style={{ height: isMobile ? '1rem' : '2.2rem' }} height={'35rem'} alt="" />
                        <img src={logo15} style={{ height: isMobile ? '1rem' : '2.2rem' }} height={'35rem'} alt="" />
                        <img src={logo16} style={{ height: isMobile ? '0.9rem' : '2.2rem' }} height={'35rem'} alt="" />
                        <img src={logo17} style={{ height: isMobile ? '0.9rem' : '2.2rem' }} height={'35rem'} alt="" />
                        <img src={logo18} style={{ height: isMobile ? '0.9rem' : '2.2rem' }} height={'35rem'} alt="" />
                        <img src={logo19} style={{ height: isMobile ? '0.9rem' : '2.2rem' }} height={'35rem'} alt="" />
                        <img src={logo20} style={{ height: isMobile ? '0.9rem' : '2.5rem' }} height={''} alt="" />
                    </Box>

                    <Divider sx={{ mt: isMobile ? 2 : 10, height:'1px', bgcolor: '#bebebe' }} />
                </Box>
            </Box>
        </>
    )
}

export default Logos
