import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../../InnerLandingPage/index.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))


    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', py: isMobile ? 3: 6, gap: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: '#f8f8f8', fontSize: isMobile ? '1.3rem':'1.8rem', fontFamily: 'aeonik' }}>
                        {props.heading}
                        
                    </Typography>
                    <Typography sx={{ color: '#bebebe', fontSize: isMobile ? '1.2rem': '1.5rem', fontFamily: 'aeonik' }}>
                        {props.number}
                        
                    </Typography>
                </Box>

                <Typography sx={{ color: '#bebebe', fontSize: isMobile ? '1rem': '1.28rem', fontFamily: 'aeonik' }}>
                    {props.des}
                </Typography>
            </Box>
        </>
    )
}

function Agency360() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box pt={20} pb={10} px={isMobile ? 2.5 : 6.2} bgcolor={'#000'}>
                <Grid container spacing={isMobile ? 5 : 'normal'} alignItems={'center'}>
                    <Grid item lg={6} sm={12}>
                        <Box sx={{ width:isMobile ? '75%':'65%', display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Typography sx={{ color: '#f8f8f8', fontSize: isMobile ? '2rem':'3.7rem', lineHeight:isMobile ? 'normal':"4.8rem", fontFamily: 'aeonik-reg' }}>A 360° agency for the whole site</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={6} sm={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Box sx={{ px: isMobile ? 3: 3.7, py: isMobile ? 1.5: 2, width: 'fit-content', bgcolor: '#fdd33c', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography sx={{ fontFamily: 'aeonik-reg', fontSize: isMobile ? '1rem':'1.3rem' }}>Contact us</Typography>
                                <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem': '2.6rem' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container mt={isMobile ? 4 : 'normal'} spacing={isMobile ? 0  : 15}>
                    <Grid item lg={4} sm={12} >
                        <Card
                            heading='Design'
                            number='01'
                            des='The Design phase on Figma allows us to create a model that meets the expectations of the client by offering an optimal user experience.'
                        />
                    </Grid>
                    <Grid item lg={4} sm={12} >
                        <Card
                            heading='Development'
                            number='02'
                            des='We develop the Figma model identically on Webflow while respecting the best practices of the web.'
                        />
                    </Grid>
                    <Grid item lg={4} sm={12} >
                        <Card
                            heading='Training'
                            number='03'
                            des='We train you and your teams to be autonomous in the creation of content on your website.'
                        />
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

export default Agency360
