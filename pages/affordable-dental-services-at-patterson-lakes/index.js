import React, { useEffect, useState } from 'react'
import { CommonHero, CommonSidebar, SectionalHeading } from '../../components/components'
import Head from 'next/head'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Image from 'next/image';
import Banner from '../../public/suburb/bg.jpg'
import PattersonLakeClinic from '../../public/suburb/patterson-lake/Patterson-Lakes.jpg'
import Link from 'next/link';
import { CheckCircleOutline } from '@mui/icons-material'

const PattersonLake = () => {
  const [show, setShow] = useState(false);
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
    { id: "patterson_lake_breadcrumb_1", link: null, title: "Affordable Dental Services at Patterson Lakes" }
  ]

  return (
    <>
      <Head>
        <title>Dental Clinic in Patterson Lakes | Carrum Downs Dental Group</title>
        <meta name="description" content="Carrum Downs Dentist offers a number of dental services to people of all ages ranging from children to adults near Patterson Lakes. Book an online appointment with us." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Affordable Dental Services at Patterson Lakes" align={width < 600 ? 'center' : 'left'} color="#fff" />
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
                          <Image src={PattersonLakeClinic} alt="Dentist In Patterson Lakes" />
                          <Box>
                            <Typography className='para'>Conveniently located on Frankston-Dandenong Road in the Carrum Downs suburbs, our dental practice is one of the reputable Clinics near Patterson-Lakes. Patterson-Lakes boast of clean streets that are also noise-free and secure. Besides getting exceptional dental services, you will definitely enjoy your visit here.</Typography>
                            <Typography className='para'>Here at Carrum Downs Dental Group, we are dedicated to providing superior dental services to our clients. Your smile and good dental health is our top priority. We offer a comprehensive range of dental services; from <a href="/service/dental-implants/">dental implants</a>, orthodontics and wisdom tooth extractions to cosmetic and restorative dentistry. Whether you are looking to have a tooth replacement, teeth whitening or simply want a dental check up, our dedicated team is looking forward to your visit.</Typography>
                            <Typography className='para'>Our dentists and skilled staff are dedicated to providing with high-quality, personalized dental to get your teeth functioning normally again.</Typography>
                            <Typography className='para'>We cater to patients of all ages- from little children to adults. We are dedicated to providing the best dental care for you and your entire family at affordable charges.</Typography>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-4 bg-grey p-2'>
                        <Container maxWidth="xxl">
                          <SectionalHeading variant="h4" title="Why Visit Our Carrum Downs Clinic?" align="left" color="var(--dark-blue)" />
                          <Typography className='para'>When you visit our clinic, expect nothing less than personalized dental care of the highest quality. So, why should you visit our dental clinic? Well here are the reasons;</Typography>
                          <Box>
                            <List>
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                </ListItemIcon>
                                <ListItemText primary={<strong>Experience</strong>} secondary="We have been catering to Patterson Lakes patients’ dental needs and have as a result build ourselves a good reputation around here. We have got in-depth experience in handling any dental complications presented to us." />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                </ListItemIcon>
                                <ListItemText primary={<strong>Personalised Dental Care Services</strong>} secondary="Because giving you a smile is our top priority, we provide all our patients with personalised dental services. We ensure that the dental problem you have is quickly fixed and schedule follow-ups to help you maintain excellent dental health." />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                </ListItemIcon>
                                <ListItemText primary={<strong>Affordable Dental Services</strong>} secondary="Our services are very affordable. You don’t have to break a bank to have a tooth replaced or get any other dental service." />
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                </ListItemIcon>
                                <ListItemText primary={<strong>Flexible Working Schedule</strong>} secondary="Our work schedule is flexible to allow you book an appointment any day." />
                              </ListItem>
                            </List>
                          </Box>
                          <Typography className='para'>Book an appointment with us and let us handle all your dental needs.</Typography>
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

export default PattersonLake;