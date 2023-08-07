import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
// import './QA.css'
import '../index.css'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { prettyFormat } from '@testing-library/react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const AccordionStruct = (props) => {

  const [expanded, setExpended] = useState(false)

  const handleExpand = () => {
    setExpended((prevExpande) => !prevExpande);
  }

  const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <>
      <Accordion expanded={expanded} square={true} onChange={handleExpand} sx={{ backgroundColor: 'transparent', pb:isMobile ? '0.4rem' : '1.4rem', pt: '1.5rem', borderBottom: '1.5px solid #838383', borderLeft: 'none', borderBottomLeftRadius: '0', boxShadow: 'none', '&:before': { display: 'none' } }}>
        <AccordionSummary sx={{ p: 0 }}
          expandIcon={expanded ? <AddIcon sx={{ transform: 'rotate(45deg)', transition: 'all 0.3s ease', fontSize:'2.5rem', color: '#181818' }} /> : <AddIcon sx={{ fontSize:isMobile ? '2rem' : '2.5rem', color: '#181818' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontFamily: 'aeonik-reg', fontSize:isMobile ? '1.2rem' : '1.85rem' }} >
            {props.Question}

          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Typography>
            {props.Details}

          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}


const Questions = () => {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <>
      <Box sx={{ bgcolor: '#f8f8f8', pt: isMobile ? 6 : 12, px: isMobile ? 2.5 : 6 }}>

        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', pb: isMobile ? 1.5 : 7, gap: isMobile ? 4 : 'normal' }}>
          <Typography variant='h3' sx={{ lineHeight: 1.3, width: isMobile ? '100%' : '700px', color: '#181818', fontSize: isMobile ? '2rem' : '3.75rem', fontFamily: 'aeonik-reg' }}>Questions about our services?</Typography>
          <Typography sx={{ lineHeight: 1.6, width: isMobile ? '100%' : '460px', color: '#181818', fontFamily: 'aeonik', fontSize: isMobile ? '1.12rem' : '1.38rem' }}>If you have any questions about our Webflow integration services, check out our FAQ or contact us directly. We are here to help you.</Typography>
        </Box>


        {/* ACCORDIANS */}
        <Box pb={ isMobile ? 7 : 12}>

          <AccordionStruct
            Question='Why use a web agency for your website?'
            Details={
              <Box>
                <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem' }} >
                  There are many elements to take into account to achieve a successful site and build
                  a solid e-reputation (graphic design, web design, UX design, UI, template and layout,
                  e-commerce site development, showcase sites, branding, inbound marketing, SEO, etc.).
                  Competition on the Internet is tough, and the rules imposed by search engine
                  algorithms do not simplify the task.
                </Typography>
                <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }} >
                  As you can see, webmarketing is a full-time job and using webdesign
                  and SEO experts like Digidop is a way to optimize your web performance.
                </Typography>
                <ul>
                  <li style={{}}>
                    <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                      A <b>high-performance site</b>: speed optimisation, SEO structure, Client First development, SEO tagging, etc.
                    </Typography>
                  </li>
                  <li>
                    <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                      <b>Optimized SEO</b>: SEO compliance respected, natural referencing strategy, blog strategy, on-page strategy, netlinking strategy, etc.
                    </Typography>
                  </li>
                </ul>
                <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }} >Two possibilities to have a quality website:</Typography>
                <ul>
                  <li style={{}}>
                    <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                      Recruit a web design and web marketing expert
                    </Typography>
                  </li>
                  <li>
                    <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                      Use the best <b>web agency Digidop</b>
                    </Typography>
                  </li>
                </ul>
              </Box>
            }
          />

          <AccordionStruct
            Question='Why trust Digidop ?'
            Details={
              <Box>
                <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                  If you are looking for a web agency that can offer concrete results, Digidop is your ideal partner. As France's number 1 web agency, we have a solid expertise in creating high quality websites. We are committed to providing our clients with more than just websites.
                </Typography>
                <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                  Our reputation for excellence and responsiveness in web project management is widely recognized by our clients.
                </Typography>
                <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                  Our team of web design, development and marketing experts will work closely with you to understand your needs and achieve your goals. We are passionate about our work and are committed to providing our clients with customized solutions that meet their unique needs.
                </Typography>
              </Box>
            }
          />

          <AccordionStruct
            Question='On which web projects can the agency Digidop accompany me?'
            Details={<>
              <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>It depends on many elements such as the size of your site, your graphic design needs, the complexity of the animations, your additional needs (filtering, blog, automation, advanced features, custom code, etc.).</Typography>
              <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>Thanks to our reactive team, we can say that on average it takes <b>1.5 months</b> between the date of signature and the launch of the Webflow site.</Typography>
            </>}
          />

          <AccordionStruct
            Question='What is the price of a service?'
            Details={<>
              <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>There is no fixed price, because each project has specific needs. At Digidop the creation of a website is not only about development.</Typography>
              <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>This is achieved through :</Typography>
              <ul>
                <li style={{}}>
                  <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                    An audit of your current site,
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                    A market analysis (Design Sprint & Ideation Phase),
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                    Thinking about the user experience (UX)
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                    Design and conception,
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                    The development of the model,
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                    The creation of the CMS,
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                    SEO compliance,
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                    Compliance for web accessibility,
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                    Migration of domain names,
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                    Annual management and monitoring,
                  </Typography>
                </li>
                <li>
                  <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }}>
                    Customized needs.
                  </Typography>
                </li>
              </ul>
            </>}
          />

          <AccordionStruct
            Question='How long does a project last?'
            Details={<>
              <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem' }} >
                There are many elements to take into account to achieve a successful site and build
                a solid e-reputation (graphic design, web design, UX design, UI, template and layout,
                e-commerce site development, showcase sites, branding, inbound marketing, SEO, etc.).
                Competition on the Internet is tough, and the rules imposed by search engine
                algorithms do not simplify the task.
              </Typography>
              <Typography sx={{ fontFamily: 'aeonik', fontSize:isMobile ? '1.14rem' : '1.4rem', mt: 3 }} >
                As you can see, webmarketing is a full-time job and using webdesign
                and SEO experts like Digidop is a way to optimize your web performance.
              </Typography>
            </>}
          />

        </Box>

      </Box>


      {/* CONTACT US */}
      <Box sx={{ cursor: 'pointer', display: 'flex', px:isMobile ? 2.5 : 6, alignItems: 'center', justifyContent: 'space-between', py: 6, backgroundColor: '#fdd33c', '&:hover': { '.contact': { textDecoration: 'underline' } } }}>
        <Typography className='contact' sx={{ cursor: 'pointer', fontSize: isMobile ? '2rem' : '3.8rem', fontFamily: 'aeonik-reg-bold' }}>Contact us</Typography>
        <ArrowOutwardIcon sx={{ fontSize: isMobile ? '3.8rem' : '4.5rem' }} />
      </Box>


    </>
  )
}

export default Questions
