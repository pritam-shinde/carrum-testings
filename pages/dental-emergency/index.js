import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { BookAndCall, InterestFree, PPCBanner, SectionalHeading, TermsNCondition } from '../../components/components'
import { PaymentPlan } from '../../sections/sections'
import Banner from '../../public/ppc-dental-emergency/Banner.jpg'
import image1 from '../../public/ppc-dental-emergency/dental-emergency-1.jpg'
import image2 from '../../public/ppc-dental-emergency/dental-emergency-2.jpg'
import image3 from '../../public/ppc-dental-emergency/dental-emergency-3.jpg'
import Styles from '../../styles/pages-style/PPCDentalEmergency.module.css'

const index = () => {
  return (
    <>
      <Head>
        <title>Dental Emergency -</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
      </Head>
      <PPCBanner bg={Banner} title="DENTAL EMERGENCY" tagline="Don&apos;t wait, let us help schedule appointment now!" align="end" />
      <main>
        <section className={Styles.section1}>
          <Container maxWidth="xxl" className='pe-md-0'>
            <Grid container>
              <Grid item xs={12} md={11} className="ms-auto">
                <Box py={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Box mb={3}>
                        <SectionalHeading variant="h2" title="Dental Emergency in Melbourne" align="center" color="var(--dark-blue)" />
                      </Box>
                      <Typography className='para'>Nothing is worse than having an issue with your tooth. The pain which can be experienced can often be excruciating, plus some tooth problems can be quite dangerous, when you’ve got dental emergency, it is extremely important that you look into the problem as soon as you can and seek treatment from a dentist.</Typography>
                      <Typography className='para'>Carrum Downs Dental Group’s policy is to cater for all dental emergencies during our working hours. Our dentists take the best effort to see all dental emergencies with immediate or same day appointments. Carrum Down’s dental emergency service covers wide areas of South Eastern suburbs of Melbourne.</Typography>
                      <Typography className='para'>Some of the common dental emergencies include:</Typography>
                      <Box className='d-flex'>
                        <List>
                          <ListItem className="ps-0">
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary="Broken Teeth" />
                          </ListItem>
                          <ListItem className="ps-0">
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary="Knocked Out Teeth" />
                          </ListItem>
                          <ListItem className="ps-0">
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary="Abscess or Swelling" />
                          </ListItem>
                          <ListItem className="ps-0">
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary="Lost or Broken Dentures" />
                          </ListItem>
                        </List>
                        <List>
                          <ListItem className="ps-0">
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary="Lost or Broken Fillings" />
                          </ListItem>
                          <ListItem className="ps-0">
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary="Broken Crown" />
                          </ListItem>
                          <ListItem className="ps-0">
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary="Broken or Loose Implants" />
                          </ListItem>
                          <ListItem className="ps-0">
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary="Impacted or Wisdom tooth" />
                          </ListItem>
                        </List>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box className='square-right p-4 pe-md-0'>
                        <Image src={image1} alt="Dental Emergency" style={{ borderRadius: "1.2rem 0 0 1.2rem !important" }} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-5 mt-4 bg-grey clipPathBgGreyUp'>
          <Container maxWidth="xxl" className="p-0">
            <Box p={3}>
              <Grid container>
                <Grid item xs={10} sm={8} lg={6} className="mx-auto">
                  <SectionalHeading variant="h2" title="Why Choose Us" align="center" color="var(--dark-blue)" />
                  <Box mt={3}>
                    <Typography className='para' align="center">Carrum Downs Dental Group’s policy is to cater for all dental emergencies during our working hours. Our dentists take the best effort to see all dental emergencies with immediate or same day appointments. Carrum Down’s dental emergency service covers wide areas of South Eastern suburbs of Melbourne.</Typography>
                    <Typography className='para' align="center">If you are in a dental emergency and in need of immediate dental care, please call our clinic on (03) 9782 1200 to book your dental appointment. Carrum Downs Dental is happy to serve on your dental emergency without any extra cost</Typography>
                  </Box>
                  <Box mt={3} className="d-flex justify-content-center align-items-center">
                    <BookAndCall appointment={true} call={true} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
        <section className={`mt-3 ${Styles.section2}`}>
          <Container maxWidth="xxl" className='ps-md-0'>
            <Grid container>
              <Grid item xs={12} md={11} className="me-auto">
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                      <Box className='square-left p-4 ps-md-0'>
                        <Image src={image3} alt="Dental Emergency" style={{ borderRadius: "0 1.2rem  1.2rem 0 !important" }} />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box pl={3}>
                        <Box mb={3}>
                          <SectionalHeading variant="h2" title="About Our Clinic" align="center" color="var(--dark-blue)" />
                        </Box>
                        <Typography className='para'>Our practice provides our patients with comprehensive services under one roof. From Dental Implants to Cosmetic Dentistry and Wisdom tooth extractions to Dentures, our clinics wide range of affordable services will put a big smile On your face.</Typography>
                        <Box mt={3}>
                          <List>
                            <ListItem className="ps-0">
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText primary="Modern Dentistry" />
                            </ListItem>
                            <ListItem className="ps-0">
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText primary="After Hour Appointments" />
                            </ListItem>
                            <ListItem className="ps-0">
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText primary="Dental Insurance" />
                            </ListItem>
                            <ListItem className="ps-0">
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText primary="Dental Emergency" />
                            </ListItem>
                          </List>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className='mt-md-5 mt-4 bg-grey clipPathBgGreyDown'>
          <Container maxWidth="xxl">
            <Box py={12}>
              <Grid container>
                <Grid item xs={10} sm={8} lg={6} className="mx-auto">
                  <SectionalHeading variant="h5" title="Book an appointment with Carrum Downs Dental (Dandenong-Frankston Rd) on 03-9782 1200" align="center" color="var(--dark-blue)" />
                  <Box mt={3} className="d-flex justify-content-center align-items-center">
                    <BookAndCall appointment={true} call={true} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
        <section className='mt-md-5 mt-3'>
          <PaymentPlan />
        </section>
        <section className='mt-md-5 mt-4'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={6} className="mx-auto">
                <InterestFree />
                <TermsNCondition />
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default index