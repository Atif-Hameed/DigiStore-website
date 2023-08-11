import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import SvgImg1 from '../../../asset/SvgEdited/EditSvg1.svg'
import SvgImg1Colored from '../../../asset/SvgEdited/EditSvg1Colored.svg'
import SvgImg2 from '../../../asset/SvgEdited/EditSvg2.svg'
import SvgImg2Colored from '../../../asset/SvgEdited/EditSvg2Colored.svg'
import SvgImg3 from '../../../asset/SvgEdited/EditSvg3.svg'
import SvgImg3Colored from '../../../asset/SvgEdited/EditSvg3Colored.svg'
import SvgImg4 from '../../../asset/SvgEdited/EditSvg4.svg'
import SvgImg4Colored from '../../../asset/SvgEdited/EditSvg4Colored.svg'
import SvgImg5 from '../../../asset/SvgEdited/EditSvg5.svg'
import SvgImg5Colored from '../../../asset/SvgEdited/EditSvg5Colored.svg'
import SvgImg6 from '../../../asset/SvgEdited/EditSvg6.svg'
import SvgImg6Colored from '../../../asset/SvgEdited/EditSvg6Colored.svg'


import Accordians from './Accordians';
import NextLvlBox from './NextLvlBox';


const StructServices = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box px={isMobile ? 2.5 :6} py={17} id="scrollTarget">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection:isMobile ? 'column' : 'row', gap:isMobile? 6 : 'normal' }}>
                    <Box width={isMobile ? '100%':'45%'}>
                        <Typography sx={{ fontSize: isMobile ? '2rem': '3.7rem', fontFamily: 'aeonik-reg', color: '#f1f1f1', lineHeight:isMobile ? 'normal': '5rem' }}>
                            {props.UpperHeading}
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2, pr: 3.5, pl:isMobile ? 3:'normal', display: 'flex', alignItems: 'center', alignSelf:isMobile ? 'start':'end', gap: 1 }}>
                        <Typography sx={{ fontSize:isMobile ? '1.1rem': '1.3rem', fontFamily: 'aeonik-reg', color: '#fff' }}>
                            {props.UpperOption}
                        </Typography>
                        <ArrowForwardIcon sx={{ fontSize:isMobile ? '2rem': '2.5rem', color: '#f1f1f1' }} />
                    </Box>
                </Box>

                <Box mt={isMobile ? 6: 12}>
                    <Accordians
                        svgImg1={<img src={SvgImg1} width={'60rem'} />}
                        svgImg2={<img src={SvgImg1Colored} width={'60rem'} />}
                        mainHeading='Sprint Design'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg2} width={'60rem'} />}
                        svgImg2={<img src={SvgImg2Colored} width={'60rem'} />}
                        mainHeading='Corporate identity'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg3} width={'60rem'} />}
                        svgImg2={<img src={SvgImg3Colored} width={'60rem'} />}
                        mainHeading='Wireframing / UX'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg4} width={'60rem'} />}
                        svgImg2={<img src={SvgImg4Colored} width={'60rem'} />}
                        mainHeading='Prototyping / UI'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg5} width={'60rem'} />}
                        svgImg2={<img src={SvgImg5Colored} width={'60rem'} />}
                        mainHeading='Design System'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg6} width={'60rem'} />}
                        svgImg2={<img src={SvgImg6Colored} width={'60rem'} />}
                        mainHeading='Component library'
                    />
                </Box>

                <Box mt={10}>
                    <NextLvlBox/>
                </Box>
                
            </Box>
        </>
    )
}

export default StructServices
