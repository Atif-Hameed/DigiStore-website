import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import CardType3 from './CardType3/CardType3'

const StructWebPractices = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ bgcolor: '#f8f8f8', pt: isMobile ? 8 : 17.5, px: isMobile ? 2.5 : 6, pb:15}}>
                <Box sx={{gap: isMobile ? 4.5 : 'normal', display: 'flex', alignItems:isMobile ? 'start' : 'center',flexDirection : isMobile ? 'column' : 'row', justifyContent: 'space-between' }}>
                    <Typography variant='h3' sx={{ lineHeight: 1.3, width: isMobile ? '100%' : '700px', color: '#181818', fontSize:isMobile ? '1.9rem' : '3.75rem', fontFamily: 'aeonik-reg' }}>Our sites are developed with the best web practices</Typography>
                    <Typography sx={{ lineHeight: 1.6, width:isMobile ? '100%' :'430px', color: '#181818', fontFamily: 'aeonik', fontSize:isMobile ? '0.95rem' : '1.15rem' }}>Digidop does not only offer you a simple website, but a know-how approved by the market players and our satisfied customers. A guarantee of our professionalism and the quality of our services.</Typography>
                </Box>



                {/* CARDS */}
                <CardType3 />



                {props.des2}
                



                {/* CARDS-2 */}
                {props.card4}

            </Box>
        </>
    )
}

export default StructWebPractices
