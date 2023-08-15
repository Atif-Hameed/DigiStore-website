import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import tradeBoxes from '../../asset/tradeBoxes.svg'
import brushImg from '../../asset/brushImg.svg'
import groupImg from '../../asset/groupImg.svg'
import '../InnerLandingPage/index.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const StructCard = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ py: isMobile ? 4 : 8.8, px: isMobile ? 4 : 5.2, height: isMobile ? '87%' : '360px', bgcolor: '#f8f8f8', display: 'flex', flexDirection: 'column', }}>

                <Box>
                    {props.img}
                </Box>

                <Box mt={isMobile ? 2.8 : 3.4} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                    <Typography sx={{ fontSize: isMobile ? '1.2rem' : '2.45rem', fontFamily: 'aeonik', lineHeight: isMobile ? 'normal' : '3.2rem' }}>
                        {props.heading}
                    </Typography>

                    <Typography sx={{ fontSize: isMobile ? '1rem' : '1.25rem', fontFamily: 'aeonik', color: '#838383' }}>
                        {props.des}
                    </Typography>

                </Box>
            </Box>
        </>
    )
}


const Plateforms = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box bgcolor={'#f1f1f1'} pt={isMobile ? 8 : 18} pb={isMobile ? 8 : 15} px={isMobile ? 2.5 : 6}>

                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: isMobile ? 5 : 'normal' }}>
                    <Box width={isMobile ? '100%' : '50%'}>
                        <Typography sx={{ fontSize: isMobile ? '1.95rem' : '3.6rem', fontFamily: 'aeonik-reg', color: '#181818', lineHeight: isMobile ? 'normal' : '4.8rem' }}>More than a site, let's create a platform that scales.</Typography>
                    </Box>

                    <Box onClick={() => window.location.replace("/#scrollTarget")} sx={{ '&:hover': { '.text': { textDecoration: 'underline' } }, cursor: 'pointer', display: 'flex', alignItems: 'center', alignSelf: isMobile ? 'start' : 'end', gap: 1 }}>
                        <Typography className='text' sx={{ fontSize: isMobile ? '1rem' : '1.3rem', fontFamily: 'aeonik-reg', color: '#101010' }}>Scroll down to learn more</Typography>
                        <ArrowDownwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem' }} />
                    </Box>
                </Box>

                <Box mt={isMobile ? 5 : 13}>
                    <Grid container spacing={isMobile ? 10 : 5}>
                        <Grid item lg={4} sm={12}>
                            <StructCard
                                img={<img src={brushImg} alt='' width={isMobile ? '55rem' : '100rem'} />}
                                heading='Customized design'
                                des='A custom-made Webflow site, adapted to your specific needs and unique brand identity'
                            />
                        </Grid>
                        <Grid item lg={4} sm={12}>
                            <StructCard
                                img={<img src={tradeBoxes} alt='' width={isMobile ? '55rem' : '100rem'} />}
                                heading='A scalable webflow CMS'
                                des='For simplified management and optimal flexibility of your online content.'
                            />
                        </Grid>
                        <Grid item lg={4} sm={12}>
                            <StructCard
                                img={<img src={groupImg} alt='' width={isMobile ? '55rem' : '100rem'} />}
                                heading='Training for your teams.'
                                des='Train your teams with our personalized sessions, for an optimal mastery of Webflow.'
                            />
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </>
    )
}

export default Plateforms
