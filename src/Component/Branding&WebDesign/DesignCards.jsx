import React from 'react'
import tickImg from '../../asset/tickImg.svg'
import brushImg from '../../asset/brushImg.svg'
import groupImg from '../../asset/groupImg.svg'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import '../InnerLandingPage/index.css'

const StructCard = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{py:isMobile? 4:8.8, px: isMobile ? 4: 5.2, height:isMobile ? '87%':'390px', bgcolor: '#f8f8f8', display: 'flex', flexDirection: 'column',}}>

                <Box>
                    {props.img}
                </Box>

                <Box mt={isMobile? 2.8 :3.4} sx={{height:'100%', display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
                    
                    <Typography sx={{ fontSize:isMobile? '1.2rem':'2.45rem', fontFamily: 'aeonik', lineHeight:isMobile?'normal':'3.2rem' }}>
                        {props.heading}
                    </Typography>

                    <Typography sx={{ fontSize:isMobile? '1rem': '1.25rem', fontFamily: 'aeonik', color: '#838383' }}>
                        {props.des}
                    </Typography>

                </Box>
            </Box>
        </>
    )
}

const DesignCard = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>    
                <Grid container spacing={isMobile ? 10 : 5}>
                    <Grid item lg={4} sm={12}>
                        <StructCard
                            img={<img src={tickImg} width={isMobile ? '55rem':'100rem'} />}
                            heading='Experienced designers'
                            des='Web design has no secrets for us. Our designers work with you to design your graphic identity and branding.'
                        />
                    </Grid>
                    <Grid item lg={4} sm={12}>
                        <StructCard
                            img={<img src={brushImg} width={isMobile ? '55rem':'100rem'} />}
                            heading='Innovative and creative web designs'
                            des='We combine our graphic expertise with our knowledge of web trends, to design unique interfaces and identities.'
                        />
                    </Grid>
                    <Grid item lg={4} sm={12}>
                        <StructCard
                            img={<img src={groupImg} width={isMobile ? '55rem':'100rem'} />}
                            heading='Collaboration with your teams'
                            des='Our web agency transforms your vision into digital reality by promoting collaboration and communication throughout the project.'
                        />
                    </Grid>
                </Grid>
        </>
    )
}

export default DesignCard
