import { Box, Divider,Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../index.css'
import linkedLogo from '../../../asset/linkedInLogo.svg'
import instaLogo from '../../../asset/instaLogo.svg'
import tiktokLogo from '../../../asset/tiktokLogo.svg'
import wLogo from '../../../asset/wBig.svg'
import ytLogo from '../../../asset/ytLogo.svg'
import figmaLogo from '../../../asset/figmaLogo.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';



const Dialogue3 = () => {

    const theme = useTheme()
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box pl={isMobile ? 0 :6} height={'100%'}>
                <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection:isMobile?'column':'row', alignItems: 'center', justifyContent: 'space-between' }} >

                    <Box sx={{ width:isMobile?'100%':'56%', display: 'flex', gap: 7 }}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4.5 }}>

                            <Link to="" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize:isMobile ? '1.2rem':'1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>BLOG</Typography>
                            </Link>

                            <Link to="" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize:isMobile ? '1.2rem':'1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>DIGIDOP ACADEMY</Typography>
                            </Link>

                            <Link to="" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize:isMobile ? '1.2rem':'1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>TUTORIALS</Typography>
                            </Link>

                            <Link to="" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize:isMobile ? '1.2rem':'1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>TEMPLATES</Typography>
                            </Link>

                            <Link to="" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize:isMobile ? '1.2rem':'1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>FAVORITE TOOLS</Typography>
                            </Link>

                        </Box>

                    </Box>

                    <Box sx={{ width:isMobile?'100%':'46%', height: '100%' }}>
                        <Box sx={{ width: '100%', height:isMobile?'normal':'100%', bgcolor:isMobile?'initial':'#181818', display: 'flex', flexDirection: 'column', justifyContent:'space-between' }} >
                            
                            <Box sx={{ mt:isMobile?4:12, ml:isMobile?'normal':10, width:isMobile?'100%': "81%", display:'flex', flexDirection: 'column', gap:isMobile?1.2:1.9 }}>
                                <Box sx={{ "&:hover": { color: '#fff', '& .arrow4': { color: '#fff' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography className='arrow4' sx={{ color: '#bebebe', fontSize:isMobile?'0.95rem':'1.2rem', fontFamily: 'aeonik' }}>Webflow documentation</Typography>
                                    <ArrowForwardIcon className='arrow4' sx={{ color: '#bebebe' }} />
                                </Box>
                                <Divider sx={{ bgcolor: '#4c4b49' }} />

                                <Box sx={{ "&:hover": { color: '#fff', '& .arrow5': { color: '#fff' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography className='arrow5' sx={{ color: '#bebebe', fontSize:isMobile?'0.95rem':'1.2rem', fontFamily: 'aeonik' }}>Figma documentation</Typography>
                                    <ArrowForwardIcon className='arrow5' sx={{ color: '#bebebe' }} />
                                </Box>
                                <Divider sx={{ bgcolor: '#4c4b49' }} />

                                <Box sx={{ "&:hover": { color: '#fff', '& .arrow6': { color: '#fff' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography className='arrow6' sx={{ color: '#bebebe', fontSize:isMobile?'0.95rem':'1.2rem', fontFamily: 'aeonik' }}>Client-First Documentation</Typography>
                                    <ArrowForwardIcon className='arrow6' sx={{ color: '#bebebe' }} />
                                </Box>
                                <Divider sx={{ bgcolor: '#4c4b49' }} />
                            </Box>

                            <Box sx={{pt:isMobile?3:'normal', mb:isMobile?'normal':10, ml:isMobile?'normal':10, width:isMobile?'100%':"81%", display: 'flex', flexDirection:'row', alignItems: isMobile ? 'start' : 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 3.2 : 3.8 }}>
                                    <img src={linkedLogo} width={isMobile ? '25rem' : '33rem'} alt="" />
                                    <img src={tiktokLogo} width={isMobile ? '25rem' : '33rem'} alt="" />
                                    <img src={instaLogo} width={isMobile ? '25rem' : '33rem'} alt="" />
                                    <img src={ytLogo} width={isMobile ? '25.5rem' : ''} alt="" />
                                    <img src={wLogo} width={isMobile ? '25rem' : '33rem'} alt="" />
                                    <img src={figmaLogo} width={isMobile ? '18.5rem' : '23rem'} alt="" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Dialogue3