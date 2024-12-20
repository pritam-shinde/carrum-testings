import React from 'react'
import Head from 'next/head'
import { CommonHero, CommonSidebar, SectionalHeading, CustomCard, InterestFree, TermsNCondition, BookAndCall } from '../../../components/components'
import Banner from '../../../public/Invisalign-Open-Day/invisalign-open-day.webp'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Container, Grid, List, Typography, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'

const InvisalignOpenDay = ({ data }) => {
  const [show, setShow] = useState(false)
  const [width, setWidth] = useState()

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const breadcrumb = [
    { id: "Invisalign_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "Invisalign_breadcrumb_2", link: null, title: 'Invisalign Open Day' }
  ]

  return (
    <>
      <Head>
        <title>Invisalign Open Day 2022 at Carrum Downs Dental Group</title>
        <meta name="description" content=" Our Invisalign Open Day is the perfect opportunity to see yourself with straight teeth. Come to Carrum Downs Dental for free Invisalign Open Day to find out more. " />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Invisalign Open Day" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <>
          <main>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} lg={8}>
                        <section>
                          <Container maxWidth="xxl" className="p-0">
                            <SectionalHeading variant="h2" title="Invisalign Open Day Register your interest" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Typography className='para'>Book your consultation for FREE at our Invisalign open day.</Typography>
                            <Typography className='para'>We&apos;re so excited about our next Open Day! We want you to join us.</Typography>
                            <Typography className='para'>Invisalign is a clear, comfortable alternative to braces. Along with aligning your teeth, it also makes them straighter and more beautiful.</Typography>
                            <Typography className='para'>Would you like to learn more about Invisalign? Well, we are inviting you to our Invisalign Open Day.</Typography>
                            <Typography className='para'>At the Open Day, our dentist will make a complete smile assessment to create an individualised and tailored treatment plan that is uniquely for you. </Typography>
                            <Typography className='para'>Free Invisalign Open Day coming soon….</Typography>
                            <Typography className='para'>We only have a few appointments available, which means that we&apos;re prioritising existing patients, their friends and family. </Typography>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className="p-0">
                            <Box p={3}>
                              <Box>
                                <SectionalHeading variant="h2" title="Why choose us for Invisalign?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                <Typography className='para'>Our dentists have done the special training with Invisalign and have the experience and skills in providing Invisalign to many of our happy patients.</Typography>
                                <Typography className='para'>If you&apos;re a patient looking for Invisalign treatment, you have the assurance of our professional knowledge and skills. We&apos;ll help transform your smile.</Typography>
                              </Box>
                              <Box mt={3}>
                                <SectionalHeading variant="h2" title="Why attend an Invisalign Open Day?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                <Typography className='para'>You will have the benefit of receiving free consultations of up $360 at our Invisalign Open Day. This includes: </Typography>
                                <Box>
                                  <List>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary='Initial scans valued at $200' />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary='Invisalign photos valued at $100' />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary='Initial consultation valued at $60' />
                                    </ListItem>
                                  </List>
                                </Box>
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="What to expect at the Invisalign Open Day?" color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12}>
                                  <Typography className='para'>The 30 minutes&apos; free appointment includes the following:</Typography>
                                  <SectionalHeading variant="h3" title="Bubbles and nibbles on arrival" color="var(--dark-blue)" />
                                  <Typography className='para'>When you come in for your consultation, we&apos;ll make you feel right at home by offering a glass of sparkling and some delicious snacks. We hope this will help you feel relaxed, unwind, and celebrate the potential of a new smile</Typography>
                                  <SectionalHeading variant="h3" title="Free initial consultation with an expert" color="var(--dark-blue)" />
                                  <Box mt={3}>
                                    <Box>
                                      <List>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                          </ListItemIcon>
                                          <ListItemText primary='What is Invisalign?' />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                          </ListItemIcon>
                                          <ListItemText primary='How does it work?' />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                          </ListItemIcon>
                                          <ListItemText primary="Is it the right treatment for me?" />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                          </ListItemIcon>
                                          <ListItemText primary="How long will the treatment take, and how much will it cost?" />
                                        </ListItem>
                                      </List>
                                    </Box>
                                  </Box>
                                  <SectionalHeading variant="h3" title="Free digital Invisalign scan" color="var(--dark-blue)" />
                                  <Box mt={3}>
                                    <Box>
                                      <List>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                          </ListItemIcon>
                                          <ListItemText primary='A full digital 3D scan for both the upper and lower teeth and bite will then be sent to Invisalign.' />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                          </ListItemIcon>
                                          <ListItemText primary='The scan will display how your teeth will look after undergoing the treatment' />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                          </ListItemIcon>
                                          <ListItemText primary="So, you will be in a position to see what your teeth will look like on the same day" />
                                        </ListItem>
                                      </List>
                                    </Box>
                                  </Box>
                                  <SectionalHeading variant="h3" title="Free Invisalign treatment photos" color="var(--dark-blue)" />
                                  <Box mt={3}>
                                    <Box>
                                      <List>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                          </ListItemIcon>
                                          <ListItemText primary='The photos of your smile, teeth and face' />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                          </ListItemIcon>
                                          <ListItemText primary='The photos will be used by the dentist for treatment planning' />
                                        </ListItem>
                                        <ListItem>
                                          <ListItemIcon>
                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                          </ListItemIcon>
                                          <ListItemText primary="Invisalign will use the photos to go ahead and make aligners and start the treatment" />
                                        </ListItem>
                                      </List>
                                    </Box>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <SectionalHeading variant="h2" title="What are Invisalign clear braces?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                              <Typography className='para'>Invisalign are clear braces that use transparent plastic trays to help move your teeth into a better position. These plastic trays help in adjusting the teeth in stages. Based on the moulds that were taken from your mouth, they will exert some pressure on different parts of your teeth to slowly move them in position. </Typography>

                              <Typography className='para'>Register your interest for the Invisalign Open Day by emailing us on <a href="mailto:carrumdownsdental@gmail.com ">carrumdownsdental@gmail.com</a> or Giving us a call on <strong>03-9782 1200.</strong></Typography>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <InterestFree />
                          <TermsNCondition />
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className="p-0">
                            <Box p={2}>
                              <div className='sectional-heading1 text-center' style={{ color: "var(--dark-blue)" }} >Book an appointment with Carrum Downs Dental (100 Hall Road) on 03-9782 1200 for your wisdom tooth extraction.</div>
                              <Box mt={2} className="d-flex justify-content-center">
                                <BookAndCall appointment={true} call={true} />
                              </Box>
                            </Box>
                          </Container>
                        </section>
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </main>
        </> : null
      }
    </>
  )
}

export default InvisalignOpenDay