import { AppBar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../../asset/logo.svg'
import '../index.css'

const InnerNavbar = () => {
    return (
        <>
            <AppBar elevation={0} sx={{ bgcolor: '#101010', pl: 7, pr:5, py: 2.7 }} position={'fixed'} >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
                            <img src={Logo} alt="" width={'24rem'} />
                            <Typography sx={{ fontSize: '2.1rem', fontFamily: 'aeonik' }}>Digidop</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 8.5 }}>
                            <Typography sx={{ fontSize: '1.25rem', fontFamily: 'aeonik-reg' }}>SERVICES</Typography>
                            <Typography sx={{ fontSize: '1.25rem', fontFamily: 'aeonik-reg' }}>AGENCY</Typography>
                            <Typography sx={{ fontSize: '1.25rem', fontFamily: 'aeonik-reg' }}>RESOURCES</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <Typography sx={{ fontSize: '1.25rem', fontFamily: 'aeonik-reg', fontWeight:'bold' }}>Portfolio</Typography>
                            <Button sx={{ fontSize: '1.2rem', fontWeight:'bold', fontFamily: 'aeonik-reg', bgcolor: '#fdd33c', color: '#000', borderRadius: '0', px: 3.8, py: 1.7, textTransform: 'initial' }}>
                                Contact us
                            </Button>
                        </Box>
                        <Button sx={{ color: '#fff', fontSize: '1.06rem', fontFamily: 'aeonik-reg',fontWeight:'bold' }}>
                            EN
                        </Button>
                    </Box>

                </Box>
            </AppBar>
        </>
    )
}

export default InnerNavbar
