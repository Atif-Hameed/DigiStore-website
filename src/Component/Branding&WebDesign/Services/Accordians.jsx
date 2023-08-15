import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';



const InnerContent = (props) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Box sx={{ py: 2.5, px:isMobile ? 1: 2, display: 'flex', flexDirection:isMobile ? 'column': 'row', gap:isMobile ? 4:'normal', alignItems: 'baseline', justifyContent: 'space-between', borderTop: '1px solid #222' }}>
                <Box width={isMobile ? '100%':'52%'} sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                    <Typography sx={{ color: '#bebebe', fontSize:isMobile ? '1rem': '1.2rem' }}>
                        {props.number}
                    </Typography>
                    <Typography sx={{ color: '#f8f8f8', fontSize:isMobile ? '1.1rem': '1.3rem', fontFamily: 'aeonik-reg' }}>
                        {props.heading}
                    </Typography>
                </Box>
                <Typography width={isMobile ? '100%':'48%'} sx={{ color: '#bebebe', fontSize:isMobile ? '1.15': '1.25rem', fontFamily: 'aeonik' }}>
                    {props.des}
                </Typography>
            </Box>
        </>
    )
}


const Accordians = (props) => {


    const [Expanded, setExpended] = useState(false)

    const handleExpand = () => {
        setExpended((prev) => !prev)
    }

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    // const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            <Accordion
                square={true} disableGutters={true} elevation={false} expanded={Expanded} onChange={handleExpand}
                sx={{ bgcolor: Expanded ? '#181818' : 'transparent', borderTop: '1px solid ', borderColor: Expanded ? '#222' : '#838383', }}
            >
                <AccordionSummary sx={{ pt:isMobile ? 0.3: 1.6, pb:isMobile ? 2.8: 4, pl:isMobile ? 3:4, pr: 1.5 }}>

                    <Box sx={{ width: '100%', display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: 5, alignItems: 'center' }}>

                            <div style={{display: isMobile ? 'none' : 'initial'}}>
                                {Expanded ? props.svgImg2 : props.svgImg1}
                            </div>

                            <Typography sx={{ fontSize:isMobile? '1.5rem':'3.2rem', fontFamily: 'aeonik-reg', color: Expanded ? '#fdd33c' : '#fff' }} >
                                {props.mainHeading}
                            </Typography>
                        </Box>
                        {Expanded ? <ArrowForwardIcon sx={{ color: '#fdd33c', fontSize:isMobile? '2.9rem': '4.8rem', transform: 'rotate(90deg)', transition: 'all 0.3s ease' }} /> : <ArrowForwardIcon sx={{ fontSize:isMobile? '2.9rem': '4.8rem', color: '#fff', transform: 'rotate(45deg)', transition: 'all 0.3s ease' }} />}
                    </Box>

                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <InnerContent
                            number='01'
                            heading='Understanding of needs'
                            des='We discuss with your teams to understand your business and commercial issues, the project objectives, the operational means and the constraints.'
                        />

                        <InnerContent
                            number='02'
                            heading='Market analysis'
                            des="We conduct a thorough market analysis to understand our clients business and competitive environment. We examine market trends, direct and indirect competitors, as well as opportunities and threats to the business. This analysis allows us to better understand user expectations and create a solution that stands out in the market."
                        />

                        <InnerContent
                            number='03'
                            heading='Search for references and inspirations'
                            des='We study and explore a variety of sources of inspiration to create unique and innovative design ideas. Analyzing industry trends, similar industry designs, and our clients web references allows us to come up with original and creative ideas for future branding.'
                        />

                        <InnerContent
                            number='04'
                            heading='Information architecture'
                            des='We define and structure the important pages of the site on a FigJam, using the information gathered in the previous steps. We work to create a clear, logical structure that is designed for both SEO and conversion. The use of mind maps and wireframes allows us to organize the information and define the hierarchy of the website navigation.'
                        />
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default Accordians
