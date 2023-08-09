import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import img1 from '../../../asset/tickImg.svg'
import Accordians from './Accordians';


const StructServices = () => {

    const [Expanded, setExpended] = useState(false)

    const handleExpand = () => {
        setExpended((prev) => !prev)
    }

    return (
        <>
            <Box px={6}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box width={'45%'}>
                        <Typography sx={{ fontSize: '3.7rem', fontFamily: 'aeonik-reg', color: '#f1f1f1', lineHeight: '5rem' }}>
                            Our branding and web-design services (figma)
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'end', gap: 1 }}>
                        <Typography sx={{ fontSize: '1.3rem', fontFamily: 'aeonik-reg', color: '#f1f1f1' }}>
                            BACK TO OUR OFFERS
                        </Typography>
                        <ArrowForwardIcon sx={{ fontSize: '2.5rem', color: '#f1f1f1' }} />
                    </Box>
                </Box>

                <Box mt={10}>
                    {/* <Accordion
                        square={true} disableGutters={true} elevation={false} expanded={Expanded} onChange={handleExpand}
                        sx={{ bgcolor: Expanded ? '#181818' : 'transparent', borderTop: '1px solid ', borderColor: Expanded ? '#222' : '#838383',  }}
                    >
                        <AccordionSummary sx={{ pt: 1, pb:3.5, px:0 }}>
                            <Box sx={{ width: '100%', display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                    <img src={img1} style={{fill:'#fff'}} width={'60rem'} alt="" />
                                    <Typography sx={{ fontSize: '3.3rem', fontFamily:'aeonik-reg', color: Expanded ? '#fdd33c' : '#fff' }} >Sprint Design</Typography>
                                </Box>
                                {Expanded ? <ArrowForwardIcon sx={{ color: '#fdd33c', fontSize: '4.8rem', transform: 'rotate(90deg)', transition: 'all 0.3s ease' }} /> : <ArrowForwardIcon sx={{ fontSize: '4.8rem', color: '#fff', transform: 'rotate(45deg)', transition: 'all 0.3s ease' }} />}
                            </Box>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>
                                <Box sx={{ py: 2.5, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderTop: '1px solid #222'}}>
                                    <Box width={'50%'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography sx={{ color: '#fff', fontSize: '1.5rem' }}>01</Typography>
                                        <Typography sx={{ color: '#fff', fontSize: '1.5rem' }}>Understanding of needs</Typography>
                                    </Box>
                                    <Typography width={'50%'} sx={{ color: '#fff', fontSize: '1.3rem' }}>We discuss with your teams to understand your business and commercial issues, the project objectives, the operational means and the constraints.</Typography>
                                </Box>
                                <Box sx={{ py: 2.5, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',borderTop: '1px solid #222'}}>
                                    <Box width={'50%'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography sx={{ color: '#fff', fontSize: '1.5rem' }}>02</Typography>
                                        <Typography sx={{ color: '#fff', fontSize: '1.5rem' }}>Market analysis</Typography>
                                    </Box>
                                    <Typography width={'50%'} sx={{ color: '#fff', fontSize: '1.3rem' }}>We conduct a thorough market analysis to
                                        understand our clients' business and competitive environment. We examine market trends, direct and indirect
                                        competitors, as well as opportunities and threats to the business. This analysis allows us to better
                                        understand user expectations and create a solution that stands out in the market.</Typography>
                                </Box>
                                <Box sx={{ py: 2.5, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderTop: '1px solid #222'}}>
                                    <Box width={'50%'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography sx={{ color: '#fff', fontSize: '1.5rem' }}>03</Typography>
                                        <Typography sx={{ color: '#fff', fontSize: '1.5rem' }}>Search for references and inspirations</Typography>
                                    </Box>
                                    <Typography width={'50%'} sx={{ color: '#fff', fontSize: '1.3rem' }}>We study and explore a variety of sources of
                                    inspiration to create unique and innovative design ideas. Analyzing industry trends, similar industry
                                    designs, and our clients' web references allows us to come up with original and creative ideas for
                                    future branding.</Typography>
                                </Box>
                                <Box sx={{ py: 2.5, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',borderTop: '1px solid #222'}}>
                                    <Box width={'50%'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography sx={{ color: '#fff', fontSize: '1.5rem' }}>04</Typography>
                                        <Typography sx={{ color: '#fff', fontSize: '1.5rem' }}>Information architecture</Typography>
                                    </Box>
                                    <Typography width={'50%'} sx={{ color: '#fff', fontSize: '1.3rem' }}>We define and structure the important pages of
                                    the site on a FigJam, using the information gathered in the previous steps. We work to create a clear, logical
                                    structure that is designed for both SEO and conversion. The use of mind maps and wireframes allows us to organize
                                    the information and define the hierarchy of the website navigation.</Typography>
                                </Box>
                            </Box>
                        </AccordionDetails>
                    </Accordion> */}
                    <Accordians/>
                </Box>
            </Box>
        </>
    )
}

export default StructServices
