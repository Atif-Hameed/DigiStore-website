import { Box,Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../../index.css'
import './Card.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CardType3Data } from './CardType3Data';


const CardStruct = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ '&:hover': { border: '1.7px solid #000' }, cursor: 'pointer',height: isMobile ? '83%' : '87%', bgcolor: '#f1f1f1', display: 'flex', flexDirection: 'column', gap: 4, p:isMobile ? 4 : 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>

                    <Box className="imgContainer">
                        {props.img}
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, }}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.6, }}>
                            <Typography variant='h4' sx={{ fontSize: isMobile ? '1.25rem' : '2.5rem', color: '#000', fontFamily: 'aeonik' }}>
                                {props.name}
                            </Typography>
                            <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.03rem' : '1.2rem', color: '#838383' }}>
                                {props.des}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography sx={{ fontSize: isMobile ? '1rem' : '1.2rem', fontFamily: 'aeonik-reg', color: '#000', }} >
                                Read more
                            </Typography>
                            <ArrowForwardIcon sx={{ fontSize:isMobile ? '2rem' : '2.4rem', color: '#000' }} />
                        </Box>

                    </Box>
                </Box>

            </Box>
        </>
    )
}


function CardType3() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>

            <Grid container spacing={5} sx={{ mt: isMobile ? 1 : 8, mb: isMobile ? 15 : 30 }} >
                {CardType3Data.map((data, index) => (
                    <Grid item sm={6} lg={4} >
                        <CardStruct key={index} img={data.img} name={data.name} des={data.des} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default CardType3
