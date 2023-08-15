import React from 'react'
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import teampact from '../../../../asset/teampactIcon.svg'
import berthroom from '../../../../asset/berthroomIcon.svg'
import community from '../../../../asset/communityICon.svg'
import streamNativeIcon from '../../../../asset/streamNativeIcon.svg'
import reecallIcon from '../../../../asset/reecallIcon.svg'
import oteriaCyberIcon from '../../../../asset/oteriaCyberIcon.svg'
import droopleIcon from '../../../../asset/droopleIcon.svg'
import greenly from '../../../../asset/greenlyIcon.svg'
import '../../index.css'

const CardStruct = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 3.5 : 5 }}>
                <Box>
                    {props.img}
                </Box>
                <Typography sx={{ color: '#181818', fontFamily:'aeonik', fontSize: isMobile ? '1rem': '1.25rem' }}>
                    {props.des}
                </Typography>
            </Box>
        </>
    )
}

function CardType4() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>

            <Grid container spacing={6.5} mt={1.5}>
                <Grid item mt={ isMobile ? 1 : 5} xs={12} sm={6}  md={4} lg={3}>
                    <CardStruct img={<><img src={teampact} width={isMobile ? '120rem' : '150rem'} alt="" /></>} des='"Excellent work, top notch art direction, responsive team and most importantly, responsive!"' />
                </Grid>
                <Grid item mt={ isMobile ? 1 : 5} xs={12} sm={6} md={4} lg={3}>
                    <CardStruct img={<><img src={berthroom} width={isMobile ? '125rem' :'160rem'} alt="" /></>} des= '"The agency had been recommended to me and they really came through! From the graphic design, to the development on Webflow to the back and forth before going live, everything went very well."' />
                </Grid>
                <Grid item mt={ isMobile ? 1 : 5} xs={12} sm={6} md={4} lg={3}>
                    <CardStruct img={<><img src={oteriaCyberIcon} width={isMobile ? '80rem' :'100rem'} alt="" /></>} des= '"The process is very square and they are super nice - if you want to develop a no-code site quickly and with a great design, dont hesitate!"' />
                </Grid>
                <Grid item mt={ isMobile ? 1 : 5} xs={12} sm={6} md={4} lg={3}>
                    <CardStruct img={<><img src={community} width={isMobile ? '100rem' :'130rem'} alt="" /></>} des= '"The team at Digidop is a great value. They are punctual, professional, communicative, positive and incredibly enthusiastic.' />
                </Grid>
                <Grid item mt={ isMobile ? 1 : 5} xs={12} sm={6} md={4} lg={3}>
                    <CardStruct img={<><img src={droopleIcon} width={isMobile ? '120rem' :'160rem'} alt="" /></>} des= '"From RFP inception to completion (and now continuation), Digidop was so quick to listen to our needs, propose ideas and take the project to much more. An amazing collaboration, always responsive."' />
                </Grid>
                <Grid item mt={ isMobile ? 1 : 5} xs={12} sm={6} md={4} lg={3}>
                    <CardStruct img={<><img src={greenly} width={isMobile ? '120rem' :'160rem'} alt="" /></>} des= '"Digidop helped us successfully launch an MVP for a 100% automated audit system with Webflow and (Make) Integromat. The team is knowledgeable and responsive. Thank you Digidop !"' />
                </Grid>
                <Grid item mt={ isMobile ? 1 : 5} xs={12} sm={6} md={4} lg={3}>
                    <CardStruct img={<><img src={reecallIcon} width={isMobile ? '125rem' :'160rem'} alt="" /></>} des= '"Great collab for the redesign of the Reecall.com website. A serious and fast team!"' />
                </Grid>
                <Grid item mt={ isMobile ? 1 : 5} xs={12} sm={6} md={4} lg={3}>
                    <CardStruct img={<><img src={streamNativeIcon} width={isMobile ? '130rem' :'160rem'} alt="" /></>} des = '"Digidop has real expertise on Webflow and everything that is needed to build a modern website (design system, best development practices, responsiveness, performance, SEO)."' />
                </Grid>
            </Grid>
        </>
    )
}

export default CardType4
