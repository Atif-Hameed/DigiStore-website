import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import '../index.css'
import logo1 from '../../../asset/logo1.svg'
import logo2 from '../../../asset/logo2.webp'
import logo3 from '../../../asset/logo3.svg'
import logo4 from '../../../asset/logo4.svg'
import logo5 from '../../../asset/logo5.svg'
import logo6 from '../../../asset/logo6.svg'
import logo7 from '../../../asset/logo7.svg'
import logo8 from '../../../asset/logo8.svg'
import logo9 from '../../../asset/logo9.svg'
import logo10 from '../../../asset/logo10.svg'
import logo11 from '../../../asset/logo11.svg'
import logo12 from '../../../asset/logo12.svg'
import logo13 from '../../../asset/logo13.svg'
import logo14 from '../../../asset/logo14.svg'
import logo15 from '../../../asset/logo15.svg'
import logo16 from '../../../asset/logo16.svg'
import logo17 from '../../../asset/logo17.svg'
import logo18 from '../../../asset/logo18.svg'
import logo19 from '../../../asset/logo19.svg'
import logo20 from '../../../asset/logo20.svg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const StyledBox = styled(Box)({
    '&::after': {
        position: 'absolute',
        content: '""',
        bottom: '0',
        left: '0',
        background: 'linear-gradient(to bottom, #4746460e, #101010)',
        width: '100%',
        height: '100%',
        opacity: '0.7'
    }
})

const PortfolioLogos = () => {
    return (
        <>
            <Box sx={{ py: '11rem' }}>
                <Box sx={{ bgcolor: '#fdd33c', py: 7, px: 6.2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ color: '#181818', fontFamily: 'aeonik-reg', fontSize: '3.7rem', fontWeight: '500' }}>See our portfolio</Typography>
                    <ArrowOutwardIcon sx={{ color: '#181818', fontSize: '4.5rem' }} />
                </Box>

                <StyledBox sx={{ px: 7, position: 'relative', display: 'flex', flexWrap: 'wrap', gap: 15, mt: '10rem', justifyContent: 'center', }}>
                    <img src={logo1} height={'40rem'} alt="" />
                    <img src={logo2} height={'40rem'} alt="" />
                    <img src={logo3} height={'40rem'} alt="" />
                    <img src={logo4} height={'40rem'} alt="" />
                    <img src={logo5} height={'40rem'} alt="" />
                    <img src={logo6} height={'40rem'} alt="" />
                    <img src={logo7} height={'40rem'} alt="" />
                    <img src={logo8} height={'40rem'} alt="" />
                    <img src={logo9} height={'40rem'} alt="" />
                    <img src={logo10} height={'40rem'} alt="" />
                    <img src={logo11} height={'40rem'} alt="" />
                    <img src={logo12} height={'40rem'} alt="" />
                    <img src={logo13} height={'40rem'} alt="" />
                    <img src={logo14} height={'35rem'} alt="" />
                    <img src={logo15} height={'35rem'} alt="" />
                    <img src={logo16} height={'35rem'} alt="" />
                    <img src={logo17} height={'35rem'} alt="" />
                    <img src={logo18} height={'35rem'} alt="" />
                    <img src={logo19} height={'35rem'} alt="" />
                    <img src={logo20} height={'40rem'} alt="" />
                </StyledBox>
            </Box>
            <Box sx={{bgcolor:'#fff', px:19, py:18,overflow:'hidden'}}>
                <Box sx={{opacity:0.5, content:'""', position:'absolute', width:'100%', height:'100%', top:0, left:0, backgroundColor:'rgba(0,0,0,0.1)'}} />
                <Typography sx={{fontSize:'4.85rem', lineHeight:1.3, fontFamily:'aeonik',color:'#181818'}}>
                    "At Digidop, we create more than just websites. We craft personalized digital experiences, propelling your success online."
                </Typography>
            </Box>
        </>
    )
}

export default PortfolioLogos
