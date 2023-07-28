import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import '../index.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import figmaLogo from '../../../asset/figmaLogo.svg'
import WLogo from '../../../asset/WLogog.svg'
import webflowLogo from '../../../asset/webflowLogo.svg'
import tickIcon from '../../../asset/tickIcon.svg'


const Card1 = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#181818', pl: 10, pr: 7.5, py: 13, display: 'flex', flexDirection: 'column', gap: 5 }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <img src={figmaLogo} width={'67rem'} alt="" />
                    <Box sx={{ bgcolor: '#222', width: 'fit-content', py: 0.8, px: 1.3 }}>
                        <Typography sx={{ fontFamily: 'aeonik', fontWeight: 'bold', fontSize: '1.2rem', color: '#fff', }}>
                            FIGMA DESIGN
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }} >
                    <Typography sx={{ fontFamily: 'aeonik', lineHeight: 1.3, color: '#fff', fontSize: '2.5rem', width: '80%' }}>
                        Branding and layout Figma
                    </Typography>
                    <ArrowForwardIcon sx={{ color: '#fff', fontSize: '5rem', width: '20%' }} />
                </Box>
            </Box>
        </>
    )
}


const Card2 = () => {
    return (
        <>
            <Box sx={{ bgcolor: '#181818', pl: 10, pr: 7.5, py: 13, display: 'flex', flexDirection: 'column', gap: 5 }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <img src={WLogo} width={'100rem'} alt="" />
                    <Box sx={{ bgcolor: '#222', width: 'fit-content', py: 0.8, px: 1.3 }}>
                        <Typography sx={{ fontFamily: 'aeonik', fontWeight: 'bold', fontSize: '1.2rem', color: '#fff', }}>
                            WEBFLOW DEVELOPMENT
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 11 }} >
                    <Typography sx={{ fontFamily: 'aeonik', lineHeight: 1.3, color: '#fff', fontSize: '2.5rem', width: '80%' }}>
                        Webflow development
                    </Typography>
                    <ArrowForwardIcon sx={{ color: '#fff', fontSize: '5rem', width: '20%' }} />
                </Box>
            </Box>
        </>
    )
}

const Card3 = () => {
    return (
        <>
            <Box sx={{ width: '100%', bgcolor: '#181818', pl: 10, pr: 7.5, justifyContent: 'center', display: 'flex', flexDirection: 'column', gap: 5 }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <img src={webflowLogo} width={'237rem'} alt="" />

                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }} >
                    <Typography sx={{ fontFamily: 'aeonik', lineHeight: 1.3, color: '#fff', fontSize: '2.5rem' }}>
                        Create a Webflow site with advanced features
                    </Typography>
                    <ArrowForwardIcon sx={{ color: '#fff', fontSize: '5rem', width: '20%' }} />
                </Box>
            </Box>
        </>
    )
}


const Card4 = () => {
    return (
        <>
            <Box sx={{ width: '113rem', display: 'flex', flexDirection: 'column', gap: 5 }} >
                <Box>
                    <Typography sx={{ color: '#838383', fontSize: '1.25rem', fontFamily: 'aeonik-reg',fontWeight:'bold' }} >OUR SERVICES INCLUDE</Typography>
                    <Divider sx={{ mt: 1.5, backgroundColor: '#838383' }} />
                </Box>

                <Box sx={{ display: 'flex', flexDirection:'column', gap:8, pb:5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ lineHeight: 1.2, color: '#BEBEBE', fontFamily: 'aeonik-reg', fontSize: '1.38rem' }}>Client-First developed websites</Typography>
                        <img src={tickIcon} alt="" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#BEBEBE', fontFamily: 'aeonik-reg', fontSize: '1.38rem' }}>Easy to scale website (optimized CMS)</Typography>
                        <img src={tickIcon} alt="" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#BEBEBE', fontFamily: 'aeonik-reg', fontSize: '1.38rem' }}>SEO best practices</Typography>
                        <img src={tickIcon} alt="" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#BEBEBE', fontFamily: 'aeonik-reg', fontSize: '1.38rem' }}>Training of your teams</Typography>
                        <img src={tickIcon} alt="" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#BEBEBE', fontFamily: 'aeonik-reg', fontSize: '1.38rem' }}>Expertise on conversion optimization</Typography>
                        <img src={tickIcon} alt="" />
                    </Box>
                </Box>

            </Box>
        </>
    )
}




const CardsType1 = () => {
    return (
        <>
            <Box px={6} sx={{ py: '10rem' }}>

                <Box >
                    <Typography sx={{ color: '#838383', fontSize: '2.5rem', mb:1 }} >01 Your website from A to Z.</Typography>
                    <Divider sx={{ backgroundColor: '#838383',}} />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, mt:10}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 4 }}>
                        <Card1 />
                        <Card2 />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 5.2 }}>
                        <Card3 />
                        <Card4 />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default CardsType1
