import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SvgImg1 from '../../asset/SvgEdited/EditSvg1.svg'
import SvgImg1Colored from '../../asset/SvgEdited/EditSvg1Colored.svg'
import SvgImg2 from '../../asset/SvgEdited/EditSvg2.svg'
import SvgImg2Colored from '../../asset/SvgEdited/EditSvg2Colored.svg'
import SvgImg3 from '../../asset/SvgEdited/EditSvg3.svg'
import SvgImg3Colored from '../../asset/SvgEdited/EditSvg3Colored.svg'
import SvgImg4 from '../../asset/SvgEdited/EditSvg4.svg'
import SvgImg4Colored from '../../asset/SvgEdited/EditSvg4Colored.svg'
import SvgImg5 from '../../asset/SvgEdited/EditSvg5.svg'
import SvgImg5Colored from '../../asset/SvgEdited/EditSvg5Colored.svg'
import Accordians from '../Branding&WebDesign/Services/Accordians'
import NextLvlBox from '../Branding&WebDesign/Services/NextLvlBox';


function TrainingAccordians() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box px={isMobile ? 2.5 : 6} py={isMobile ? 8 : 17} id="scrollTarget">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 6 : 'normal' }}>
                    <Box width={isMobile ? '100%' : '45%'}>
                        <Typography sx={{ fontSize: isMobile ? '1.9rem' : '3.7rem', fontFamily: 'aeonik-reg', color: '#f1f1f1', lineHeight: isMobile ? 'normal' : '5rem' }}>
                            What you will learn with our trainings
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 2, pr: 3.5, pl: isMobile ? 0 : 'normal', display: 'flex', alignItems: 'center', alignSelf: isMobile ? 'start' : 'end', gap: 1 }}>
                        <Box sx={{ cursor: 'pointer', '&:hover': { bgcolor: '#222' }, py: 2, px: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Typography sx={{ fontSize: isMobile ? '1.1rem' : '1.3rem', fontFamily: 'aeonik-reg', color: '#fff' }}>
                                BACK TO OUR OFFERS
                            </Typography>
                            <ArrowForwardIcon sx={{ fontSize: isMobile ? '2rem' : '2.5rem', color: '#f1f1f1' }} />
                        </Box>
                    </Box>
                </Box>

                <Box mt={isMobile ? 6 : 12}>
                    <Accordians
                        svgImg1={<img src={SvgImg1} alt='' width={'60rem'} />}
                        svgImg2={<img src={SvgImg1Colored} alt='' width={'60rem'} />}
                        mainHeading='Web design fundamentals'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg2} alt='' width={'60rem'} />}
                        svgImg2={<img src={SvgImg2Colored} alt='' width={'60rem'} />}
                        mainHeading='Developing in Webflow'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg3} alt='' width={'60rem'} />}
                        svgImg2={<img src={SvgImg3Colored} alt='' width={'60rem'} />}
                        mainHeading='Edit in Webflow'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg4} alt='' width={'60rem'} />}
                        svgImg2={<img src={SvgImg4Colored} alt='' width={'60rem'} />}
                        mainHeading='Web SEO best practices'
                    />
                    <Accordians
                        svgImg1={<img src={SvgImg5} alt='' width={'60rem'} />}
                        svgImg2={<img src={SvgImg5Colored} alt='' width={'60rem'} />}
                        mainHeading='Advanced features'
                    />

                </Box>

                <Box mt={10}>
                    <NextLvlBox />
                </Box>
            </Box>
        </>
    )
}

export default TrainingAccordians
