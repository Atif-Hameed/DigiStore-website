import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SvgImg1 from '../../asset/SvgEdited/WEditSvg.svg'
import SvgImg1Colored from '../../asset/SvgEdited/WEditSvgColored.svg'
import Accordians from '../Branding&WebDesign/Services/Accordians'
import NextLvlBox from '../Branding&WebDesign/Services/NextLvlBox';


function EnterpriseAccordian() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box px={isMobile ? 2.5 : 6} py={isMobile ? 8 : 17} id="scrollTarget">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 4 : 'normal' }}>
                    <Box width={isMobile ? '100%' : '45%'}>
                        <Typography sx={{ fontSize: isMobile ? '2rem' : '3.7rem', fontFamily: 'aeonik-reg', color: '#f1f1f1', lineHeight: isMobile ? 'normal' : '5rem' }}>
                        Your website, our business.
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2, pr: 3.5, pl: isMobile ? 0 : 'normal', display: 'flex', alignItems: 'center', alignSelf: isMobile ? 'start' : 'end', gap: 1 }}>
                        <Box sx={{ cursor: 'pointer', '&:hover': { bgcolor: '#222' }, py: 2, px: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Typography sx={{ fontSize: isMobile ? '1rem' : '1.3rem', fontFamily: 'aeonik-reg', color: '#fff' }}>
                                BACK TO OUR OFFERS
                            </Typography>
                            <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem', color: '#f1f1f1' }} />
                        </Box>
                    </Box>
                </Box>

                <Box mt={isMobile ? 3.5 : 12}>
                    <Accordians
                        svgImg1={<img src={SvgImg1} alt='' width={'60rem'} />}
                        svgImg2={<img src={SvgImg1Colored} alt='' width={'60rem'} />}
                        mainHeading='Customized design'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg1} alt='' width={'60rem'} />}
                        svgImg2={<img src={SvgImg1Colored} alt='' width={'60rem'} />}
                        mainHeading='Technically impeccable'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg1} alt='' width={'60rem'} />}
                        svgImg2={<img src={SvgImg1Colored} alt='' width={'60rem'} />}
                        mainHeading='Support and maintenance'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg1} alt='' width={'60rem'} />}
                        svgImg2={<img src={SvgImg1Colored} alt='' width={'60rem'} />}
                        mainHeading='Customized training'
                    />

                </Box>

                <Box mt={10}>
                    <NextLvlBox />
                </Box>
            </Box>
        </>
    )
}

export default EnterpriseAccordian
