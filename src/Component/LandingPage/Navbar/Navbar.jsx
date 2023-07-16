import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Icon from '../../../asset/img2.png'
import '../index.css'

const Navbar = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'end', }}>
                <AppBar sx={{ width: '76.3%', backgroundColor: '#fff', border:'3px solid #fdd33c',borderRight:'none', borderTop:'none' }} position="static">
                    <Box sx={{pl:2,py:1,pr:3, display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.9rem' }}>
                            <Typography variant="h5" component="div" sx={{fontFamily:'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                HOME
                            </Typography>

                            <Typography variant="h4" component="div" sx={{fontFamily:'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                UNISEX CLOTHING
                            </Typography>

                            <Typography variant="h4" component="div" sx={{fontFamily:'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                ACCESSOIRES
                            </Typography>

                            <Typography variant="h4" component="div" sx={{fontFamily:'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                NEWS
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                <Typography variant="h4" component="div" sx={{fontFamily:'aeonik-reg', color: '#000', fontSize: '1.4rem', fontWeight: '500' }}>
                                    BASKET
                                </Typography>
                                <Box component={'img'} src={Icon} sx={{ width: '1.2rem' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor:'#fdd33c', pl:'8px',pr:'2px', py:'6px' }}>
                                <Button disableElevation variant='contained' sx={{fontFamily:'aeonik-reg', backgroundColor: '#fff', color: '#000', fontWeight: '500', fontSize: '1.2rem', pl:'8px', py:'1px', borderRadius:'7px' }}>AGENCY</Button>
                                <ArrowOutwardIcon sx={{ color: '#000', fontSize: '28px' }} />
                            </Box>
                        </Box>
                    </Box>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar
