import { Box, styled, useMediaQuery, useTheme } from '@mui/material'
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

const StructLogos = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))


    return (
        <>
        {/* pt:isMobile ? '7rem' : '11rem', */}
            <Box pt={props.padding} sx={{ pb: isMobile ? '4rem' : '11rem' }}>
                
                {props.hading}

                <StyledBox sx={{ px: isMobile ? 2 : 7, position: 'relative', display: 'flex', flexWrap: 'wrap', gap: isMobile ? 4 : 15, mt: isMobile ? '5rem' : '10rem', justifyContent: 'center', }}>
                    <img src={logo1} style={{height : isMobile ? '2rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo2} style={{height : isMobile ? '1rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo3} style={{height : isMobile ? '1.2rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo4} style={{height : isMobile ? '1.6rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo5} style={{height : isMobile ? '1.8rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo6} style={{height : isMobile ? '2rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo7} style={{height : isMobile ? '1.8rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo8} style={{height : isMobile ? '1.8rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo9} style={{height : isMobile ? '1.2rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo10} style={{height : isMobile ? '1rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo11} style={{height : isMobile ? '1rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo12} style={{height : isMobile ? '1rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo13} style={{height : isMobile ? '1rem' : '2.5rem'}} height={''} alt="" />
                    <img src={logo14} style={{height : isMobile ? '1rem' : '2.2rem'}} height={'35rem'} alt="" />
                    <img src={logo15} style={{height : isMobile ? '1rem' : '2.2rem'}} height={'35rem'} alt="" />
                    <img src={logo16} style={{height : isMobile ? '1rem' : '2.2rem'}} height={'35rem'} alt="" />
                    <img src={logo17} style={{height : isMobile ? '1rem' : '2.2rem'}} height={'35rem'} alt="" />
                    <img src={logo18} style={{height : isMobile ? '0.9rem' : '2.2rem'}} height={'35rem'} alt="" />
                    <img src={logo19} style={{height : isMobile ? '0.9rem' : '2.2rem'}} height={'35rem'} alt="" />
                    <img src={logo20} style={{height : isMobile ? '0.9rem' : '2.5rem'}} height={''} alt="" />
                </StyledBox>
            </Box>

            {props.paragraph}
            
        </>
    )
}

export default StructLogos
