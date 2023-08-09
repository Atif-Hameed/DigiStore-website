import React from 'react'
import DesignbigImg from '../../asset/designBigImg.webp'
import DesignColor from '../../asset/designColorImg.webp'
import { Box, Grid, Typography } from '@mui/material'
import '../InnerLandingPage/index.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DesignCard from './DesignCards'


const Desgins = () => {
    return (
        <>
            <Box bgcolor={'#f1f1f1'} pt={18} px={6}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box width={'45%'}>
                        <Typography sx={{ fontSize: '3.7rem', fontFamily: 'aeonik-reg', color: '#181818', lineHeight: '5rem' }}>Convert with innovative and impactful design</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'end', gap: 1 }}>
                        <Typography sx={{ fontSize: '1.3rem', fontFamily: 'aeonik-reg', color: '#101010' }}>Scroll down to learn more</Typography>
                        <ArrowDownwardIcon sx={{ fontSize: '2.5rem' }} />
                    </Box>
                </Box>

                <Box mt={12}>
                    <DesignCard />
                </Box>

                <Box width={'100%'} height={'89.5vh'}>
                    <Box mt={20} position={'relative'}
                        sx={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${DesignbigImg})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    >
                        <img src={DesignColor} style={{ position: 'absolute', right: '9.35rem', top: '-5rem' }} width={'148rem'} alt="" />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default Desgins
