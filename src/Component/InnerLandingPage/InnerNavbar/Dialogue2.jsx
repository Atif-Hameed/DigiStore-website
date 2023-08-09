import {Box, Divider,Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../index.css'
import team from '../../../asset/team.webp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';


const Dialogue2 = () => {

    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box px={isMobile ? 0 : 6} height={'100%'}>
                <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems:isMobile ? 'normal':'center', justifyContent: 'space-between' }} >

                    <Box sx={{ width:isMobile ? '100%' : '62%', display: 'flex',flexDirection : isMobile ? 'column':'row', gap:isMobile ? 4 : 'normal',justifyContent:isMobile? 'normal':'space-between' }}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap:isMobile ? 3:4.5 }}>

                            <Link to="" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem':'1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>HISTORY</Typography>
                            </Link>

                            <Link to="" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem':'1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>TEAM</Typography>
                            </Link>

                            <Link to="" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem':'1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>STUDIO</Typography>
                            </Link>

                            <Link to="" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem':'1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>JOIN US</Typography>
                            </Link>

                            <Link to="" style={{ textDecoration: 'none' }}>
                                <Typography sx={{ "&:hover": { textDecoration: 'underline', color: '#fdd33c' }, color: '#f8f8f8', fontSize: isMobile ? '1.2rem':'1.9rem', fontFamily: 'aeonik-reg', fontWeight: '500' }}>NEWS</Typography>
                            </Link>

                        </Box>

                        <Box sx={{ mr: 15, width: '23.4rem', mt: 0.8, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ "&:hover": { color: '#fff', '& .arrow1': { color: '#fff' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography className='arrow1' sx={{ color: '#bebebe', fontSize:isMobile ? '0.95rem':'1.2rem', fontFamily: 'aeonik' }}>Why Digidop ?</Typography>
                                <ArrowForwardIcon className='arrow1' sx={{ color: '#bebebe' }} />
                            </Box>
                            <Divider sx={{ bgcolor: '#4c4b49' }} />

                            <Box sx={{ "&:hover": { color: '#fff', '& .arrow1': { color: '#fff' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography className='arrow1' sx={{ color: '#bebebe', fontSize:isMobile ? '0.95rem':'1.2rem', fontFamily: 'aeonik' }}>Why Webflow ?</Typography>
                                <ArrowForwardIcon className='arrow1' sx={{ color: '#bebebe' }} />
                            </Box>
                            <Divider sx={{ bgcolor: '#4c4b49' }} />

                            <Box sx={{ "&:hover": { color: '#fff', '& .arrow2': { color: '#fff' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography className='arrow2' sx={{ "&:hover": { color: '#fff' }, cursor: 'pointer', color: '#bebebe', fontSize:isMobile ? '0.95rem':'1.2rem', fontFamily: 'aeonik' }}>Why Figma?</Typography>
                                <ArrowForwardIcon className='arrow2' sx={{ color: '#bebebe' }} />
                            </Box>
                            <Divider sx={{ bgcolor: '#4c4b49' }} />
                        </Box>

                    </Box>


                    <Box sx={{display:isMobile ? 'none' : 'initial', width: '38%', height: '100%', position: 'relative' }}>
                        <Box height={'100%'} overflow={'hidden'}>
                            <img src={team} width={''} height={'100%'} alt="" />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 0.6, alignItems: 'center', px: 1, py: 1.1, bgcolor: '#fff', position: 'absolute', right: 0, bottom: 0 }}>
                            <Typography sx={{ fontSize: '1.3rem', fontFamily: 'aeonik', color: '#000' }}>Discover the agency</Typography>
                            <ArrowForwardIcon sx={{ color: '#000', fontSize: '1.3rem' }} />
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Dialogue2