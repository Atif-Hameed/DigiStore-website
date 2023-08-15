import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../../InnerLandingPage/index.css'
import figamImg from '../../../asset/figmaLogo.svg'
import notionImg from '../../../asset/notionLogo.svg'
import slackImg from '../../../asset/slackLogo.svg'

const Card = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box bgcolor={'#f8f8f8'} px={isMobile ? 4 : 5} py={ isMobile ? 4.5 : 9}>
                <Box>
                    {props.img}
                </Box>
                <Box mt={isMobile ? 1.5 : 3} sx={{display:'flex', flexDirection:'column', gap:1}}>
                    <Typography sx={{ color: '#181818', fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.1rem':'1.4rem', }}>
                        {props.heading}

                    </Typography>
                    <Typography sx={{ color: '#181818', fontFamily: 'aeonik', fontSize:isMobile ? '1rem': '1.3rem' }}>
                        {props.des}

                    </Typography>
                </Box>
            </Box>
        </>
    )
}
function Collaborate() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box py={isMobile ? 7 : 10} bgcolor={'#f1f1f1'} px={ isMobile ? 2.5 : 6} >
                <Box width={isMobile ? '100%':'40%'}>
                    <Typography sx={{ color: '#000', fontSize: isMobile ? '1.9rem' : '3.8rem', fontFamily: 'aeonik-reg' }}>Collaborate with our design teams.</Typography>
                </Box>

                <Grid container spacing={5} mt={isMobile ? 1 : 8} mb={8}>
                    <Grid item lg={4} sm={12} >
                        <Card
                            img={<img style={{marginLeft:12}} src={figamImg} width={isMobile ? '37rem' :'65rem'} alt="" />}
                            heading='Figma / Figjam'
                            des='Share your comments directly on the model'
                        />
                    </Grid>
                    <Grid item lg={4} sm={12} >
                        <Card
                            img={<img src={notionImg} width={isMobile ? '54rem':'95rem'} alt="" />}
                            heading='Notion'
                            des='Share your design and content inspirations on a custom dashboard'
                        />
                    </Grid>
                    <Grid item lg={4} sm={12} >
                        <Card
                            img={<img src={slackImg} width={isMobile ? '54rem':'95rem'} alt="" />}
                            heading='Slack'
                            des='Communicate in real time with our teams on a dedicated channel'
                        />
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

export default Collaborate
