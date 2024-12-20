import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import { CommonHero, CommonSidebar, SectionalHeading } from '../../components/components';
import Banner from '../../public/CommonHero/about-bg.jpg';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material'
import Insurance from '../../public/insurance/insurance.jpg';

const About = () => {
  const [width, setWidth] = useState();
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else { 
      setShow(true)
    }
  }, [])

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const breadcrumb = [
    { id: "about_page_breadcrumb_1", link: null, title: "About" }
  ]
  return (
    <>
      <Head>
        <title>Carrum Downs Family Dental | About Us | Carrum Downs Dentist</title>
        <meta name="description" content="Dentists in Carrum Downs Dental Group treat their patients with warm & friendly manner. We provide a treatment plan & cost to our patients before the treatment." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero breadcrumb={breadcrumb} color="#fff" align={width < 600 ? 'center' : 'left'} bg={Banner} title="Who we are" />
      {
        show ? <><main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} lg={8}>
                      <section>
                        <Container maxWidth="xxl">
                          <Typography className='para'>At Carrum Downs Dental at Shop T5, 100 Hall Road we are committed to apply our dental knowledge and skills in a caring and gentle way, you will feel at ease while we work on your smile. You will definitely appreciate the warm and friendly manner in which we treat patients.</Typography>
                          <Typography className='para'>This dental location was previously called Advantage Dental, we wanted to turn things around and provide the best dental experience to all our dental clients. Through excellent preventive, restorative and cosmetic dentistry, along with LATEST in technology we work with you to achieve a smile that can maximise your personal health and appearance.</Typography>
                          <Typography className='para'>We are great with kids; our dentists love working with kids. We know how to make them feel ease and make their dental experience a pleasant one. We even go the extent of playing the kid with his/her favourite channel/movie and give them gifts as an appreciation.</Typography>
                        </Container>
                      </section>
                      <section className='mt-md-5 mt-4 bg-grey'>
                        <Container maxWidth="xxl">
                          <Box p={1}>
                            <Box>
                              <SectionalHeading title="We are different" variant="h2" color='var(--dark-blue)' align={width < 600 ? 'center' : 'left'} />
                            </Box>
                            <Box mt={1}>
                              <List className='p-0'>
                                <ListItem className="ps-0">
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong style={{ color: 'var(--dark-blue)' }}>After Hours:</strong>} secondary="Open 6 days, same day and late afternoon appointments available." />
                                </ListItem>
                                <ListItem className="ps-0">
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong style={{ color: 'var(--dark-blue)' }}>We are affordable:</strong>} secondary="Due to efficient management we have cut down on our overheads and thereby making our treatments very affordable." />
                                </ListItem>
                                <ListItem className="ps-0">
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong style={{ color: 'var(--dark-blue)' }}>No rushing of appointment:</strong>} secondary="We provide each patient with sufficient time for a thorough treatment and answer all your questions. We don’t rush." />
                                </ListItem>
                                <ListItem className="ps-0">
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong style={{ color: 'var(--dark-blue)' }}>Easy Parking:</strong>} secondary="In The Village Carrum downs parking is easy to find throughout the day. They are also free!" />
                                </ListItem>
                                <ListItem className="ps-0">
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong style={{ color: 'var(--dark-blue)' }}>We are Transparent:</strong>} secondary="Our dentists will always provide you with a treatment plan and cost before your treatment. We proceed only after you are satisfied. Therefore, No surprise bills." />
                                </ListItem>
                                <ListItem className="ps-0">
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong style={{ color: 'var(--dark-blue)' }}>Training and Continuing education:</strong>} secondary="Every member of the team fulfils his or her responsibility for continuing education by attending seminars, conventions and lectures. We want to stay up-to-date and informed on new equipment and treatment techniques to better take care of you and your family." />
                                </ListItem>
                                <ListItem className="ps-0">
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong style={{ color: 'var(--dark-blue)' }}>A Clean and Safe practice:</strong>} secondary="We take no shortcuts. We go above and beyond the standards set by Australian Dental Association (ADA)." />
                                </ListItem>
                              </List>
                            </Box>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-md-5 mt-4'>
                        <Container maxWidth="xxl">
                          <Image src={Insurance} alt="insurance" />
                          <Typography><strong>Give our friendly reception a call on 03-9782 1200 to book your appointment.</strong></Typography>
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

export default About