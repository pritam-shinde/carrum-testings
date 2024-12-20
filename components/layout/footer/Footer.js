import { Copyright, Home, Mail, Phone } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../../public/footer/logo_new.png'
import { SocialIcons } from '../../components'

const Footer = () => {
  return (
    <>
      <footer>
        <Container maxWidth="xxl" className="px-xl-4">
          <Grid container>
            <Grid item xs={12}>
              <Box py={3} style={{ borderBottom: "2.5px solid rgba(255, 255, 255, 0.1)" }}>
                <Grid container>
                  <Grid item xs={12} xl={10} className="mx-auto">
                    <Box>
                      <Grid container>
                        <Grid item xs={12} sm={6}>
                          <Box className='d-flex justify-content-md-start justify-content-center align-items-center'>
                            <img src={Logo.src} alt="carrumdowns dental clinic logo" style={{ maxWidth: "50%" }} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} className='d-flex justify-content-md-end justify-content-center align-items-center mt-md-0 mt-2'>
                          <Box>
                            <SocialIcons sec="Footer-Social" spacingRight={2} isavatar={true} FontSize="1rem" />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} xl={10} className="mx-auto">
              <Box py={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Typography className="footer-sec-head" gutterBottom>ABOUT US</Typography>
                      <Typography className='text-white'>Carrum Downs Dental at Shop T5, Hall Road we are committed to apply our dental knowledge and skills in a caring and gentle way, you will feel at ease while we work on your smile. Learn more about our <a href="/about-us/">dentist in Carrum Downs</a>.</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Typography className="footer-sec-head" gutterBottom>QUICK LINKS</Typography>
                      <ul className='p-0'>
                        <li>
                          <a href="/" className="nav-link">Home</a>
                        </li>
                        <li>
                          <a href="/about-us/" className="nav-link">About Us</a>
                        </li>
                        <li>
                          <a href="/service/" className="nav-link">Service</a>
                        </li>
                        <li>
                          <a href="/blog/" className="nav-link">Blog</a>
                        </li>
                        <li>
                          <a href="/contact-us/" className="nav-link">Contact Us</a>
                        </li>
                        <li>
                          <a href="/privacy-policy/" className="nav-link">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="/terms-and-conditions/" className="nav-link">Terms & Conditions</a>
                        </li>
                      </ul>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Typography className="footer-sec-head" gutterBottom>OPENING HOURS</Typography>
                      <Box className='d-flex justify-content-between'>
                        <ul className='p-0'>
                          <li className='text-white'>Monday</li>
                          <li className='text-white'>Tuesday</li>
                          <li className='text-white'>Wednesday</li>
                          <li className='text-white'>Thursday</li>
                          <li className='text-white'>Friday</li>
                          <li className='text-white'>Saturday</li>
                          <li className='text-white'>Sunday</li>
                        </ul>
                        <ul className='p-0'>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 3:00pm</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Typography className="footer-sec-head ms-3">CONTACT US</Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <Home style={{ color: 'var(--dark-blue) !important' }} />
                          </ListItemIcon>
                          <ListItemText className="text-white" primary="Shop T5, 100 Hall Road, Carrum Downs VIC 3201, Australia" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Phone style={{ color: 'var(--dark-blue) !important' }} />
                          </ListItemIcon>
                          <a href="tel:03-9782 1200"><ListItemText className="text-white" primary="03-9782 1200" /></a>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Mail style={{ color: 'var(--dark-blue) !important' }} />
                          </ListItemIcon>
                          <a href='mailto:carrumdownsdental@gmail.com'><ListItemText className="text-white" primary="carrumdownsdental@gmail.com" /></a>
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>
                </Grid>
                <Box py={1} mt={3} className='d-flex justify-content-center align-items-center mb-md-0 mb-5' style={{ borderTop: "2.5px solid rgba(255, 255, 255, 0.1)", borderBottom: "2.5px solid rgba(255, 255, 255, 0.1)" }}>
                  <ul className='d-flex p-0 mb-0 flex-wrap'>
                    <li className='mx-2'>
                      <a href="/dentist-in-skye/" className='nav-link'>Skye</a>
                    </li>
                    <li className='mx-2'>
                      <a href="/dentist-in-sandhurst/" className='nav-link'>Sandhurst</a>
                    </li>
                    <li className='mx-2'>
                      <a href="/dentist-in-patterson-lakes/" className='nav-link'>Patterson Lakes</a>
                    </li>
                    <li className='mx-2'>
                      <a href="/dentist-in-cranbourne-west/" className='nav-link'>Cranbourne West</a>
                    </li>
                    <li className='mx-2'>
                      <a href="/dentist-in-frankston-north/" className='nav-link'>Frankston North</a>
                    </li>
                    <li className='mx-2'>
                      <a href="/dentist-in-seaford/" className='nav-link'>Seaford</a>
                    </li>
                    <li className='mx-2'>
                      <a href="/dentist-in-lyndhurst/" className='nav-link'>Lyndhurst</a>
                    </li>
                    <li className='mx-2'>
                      <a href="/dentist-in-langwarrin/" className='nav-link'>Langwarrin</a>
                    </li>
                  </ul>
                </Box>
                <Box pt={2}>
                  <Typography align='center' className="text-white"><Copyright />{new Date().getFullYear()} | carrumdownsdental.com.au</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer >
    </>
  )
}

export default Footer
