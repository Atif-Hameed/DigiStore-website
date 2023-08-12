import React from 'react'
import tradeBoxes from '../../asset/tradeBoxes.svg'
import brushImg from '../../asset/brushImg.svg'
import tradeArrow from '../../asset/tradeArrow.svg'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import '../InnerLandingPage/index.css'

const StructCard = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{py:isMobile? 4:8.8, px: isMobile ? 4: 5.2, height:isMobile ? '87%':'300px', bgcolor: '#f8f8f8', display: 'flex', flexDirection: 'column',}}>

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

const RealizationCard = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>    
                <Grid container spacing={isMobile ? 10 : 5}>
                    <Grid item lg={4} sm={12}>
                        <StructCard
                            img={<img src={brushImg} width={isMobile ? '55rem':'100rem'} />}
                            heading='100% Customized'
                            des='The sites we develop are unique, adapted to your activity and manageable by your teams.'
                        />
                    </Grid>
                    <Grid item lg={4} sm={12}>
                        <StructCard
                            img={<img src={tradeArrow} width={isMobile ? '55rem':'100rem'} />}
                            heading='100% Optimized'
                            des='We propose websites that respect the best web practices for a good natural referencing.'
                        />
                    </Grid>
                    <Grid item lg={4} sm={12}>
                        <StructCard
                            img={<img src={tradeBoxes} width={isMobile ? '55rem':'100rem'} />}
                            heading='100% Scalable'
                            des='The creation of website, with our web agency, aims to scale your business and find new customers.'
                        />
                    </Grid>
                </Grid>
        </>
    )
}

export default RealizationCard
