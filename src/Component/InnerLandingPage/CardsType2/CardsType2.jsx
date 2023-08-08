import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../index.css'
import './Card.css'
import capIcon from '../../../asset/capIcon.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CardData } from '../CardsType2/CardType2Data'



const CardStruct = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{height: isMobile ? '80%' : '90%', bgcolor: '#181818', display: 'flex', flexDirection: 'column', p:isMobile ? 4 : 5}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>

                    <Box className="imgContainer">
                        {props.img}
                    </Box>

                    <Box sx={{mt:isMobile ? 2 : 'normal', display: 'flex', flexDirection: 'column', gap: isMobile ? 2 : 3, }}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.6, }}>
                            <Typography variant='h4' sx={{ fontSize: isMobile ? '1.25rem' : '2.5rem', color: '#fff', fontFamily: 'aeonik' }}>
                                {props.name}
                            </Typography>
                            <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.03rem' : '1.2rem', color: '#838383' }}>
                                {props.des}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography sx={{ fontSize: isMobile ? '1rem' : '1.2rem', fontFamily: 'aeonik-reg', color: '#fff', }} >
                                {props.linkName}
                            </Typography>
                            <ArrowForwardIcon sx={{ fontSize:isMobile ? '2rem' : '2.4rem', color: '#fff' }} />
                        </Box>

                    </Box>
                </Box>

            </Box>
        </>
    )
}


const CardsType2 = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{px: isMobile ? '1.2rem':'3.1rem', py: isMobile ? '2rem' : '8.5rem'}}>
                <Box >
                    <Typography sx={{ fontFamily: 'aeonik', color: '#838383', fontSize: isMobile ? '1.3rem' : '2.5rem', mb: 1 }} >02 And much more!</Typography>
                    <Divider sx={{ backgroundColor: '#838383', }} />
                </Box>

                <Grid container spacing={5} mt={isMobile ? 0 : 6} mb={isMobile ? 4 : 'normal'}>
                    {CardData.map((data, index) => (
                        <Grid item xs={12} lg={4} mb={isMobile ? 2 :'normal'}>
                            <CardStruct key={index} img={data.img} name={data.name} des={data.des} linkName={data.linkName} />
                        </Grid>
                    ))}
                </Grid>

                
            </Box>
        </>
    )
}

export default CardsType2
