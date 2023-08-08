import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import '../index.css'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StructQuestions from './StructQuestions';


const Questions = () => {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <>
      <StructQuestions
      Mainheading = 'Questions about our services?'
      Deatilheading = 'If you have any questions about our Webflow integration services, check out our FAQ or contact us directly. We are here to help you.'
      Question1 = 'Why use a web agency for your website?'
      Question2 = 'Why trust Digidop ?'
      Question3 = 'On which web projects can the agency Digidop accompany me?'
      Question4 = 'What is the price of a service?'
      Question5 = 'How long does a project last?'

        contactUs={<>
          <Box sx={{ cursor: 'pointer', display: 'flex', px: isMobile ? 2.5 : 6, alignItems: 'center', justifyContent: 'space-between', py: isMobile ? 3 : 6, backgroundColor: '#fdd33c', '&:hover': { '.contact': { textDecoration: 'underline' } } }}>
            <Typography className='contact' sx={{ cursor: 'pointer', fontSize: isMobile ? '2rem' : '3.8rem', fontFamily: 'aeonik-reg-bold' }}>Contact us</Typography>
            <ArrowOutwardIcon sx={{ fontSize: isMobile ? '3.8rem' : '4.5rem' }} />
          </Box>
        </>}
      />
    </>
  )
}

export default Questions
