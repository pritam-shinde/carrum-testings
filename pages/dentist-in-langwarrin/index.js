import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../../public/suburb/bg.jpg'
import LangwarrinClinic from '../../public/suburb/Langwarrin/langwarin.jpg'
import { BlueFilledBtn, CommonHero, CommonSidebar, SectionalHeading } from '../../components/components'
import { Box, Container, Grid, Typography } from '@mui/material'

const Langwarrin = () => {
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
    { id: "langwarrin_breadcrumb_1", link: null, title: "Dentist In Langwarrin" }
  ]

  return (
    <>
      <Head>
        <title>Trusted and Experienced Dentist in Lyndhurst | Dental Services</title>
        <meta name="description" content="We offer a number of dental services to people of all ages ranging from children to adults. Schedule an online appointment with Carrum Downs Dental Group." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Dentist In Langwarrin" align="left" color="#fff" />
      {
        show ? <><main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} lg={8}>
                      <Box>
                        <Image src={LangwarrinClinic} alt="dentist in langwarrin" />
                        <Box>
                          <SectionalHeading variant="h2" title="Affordable Dental Services at Langwarrin" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                          <Typography className='para'><strong>Why People of Langwarrin Suburb Should Visit Carrum Downs Dental</strong></Typography>
                          <Typography className="para">Taking good care of your teeth means more than just brushing and flossing. For a complete care, it is important that you visit a dentist at least every six months. Having a dentist, you can trust means your smile will maintain its perfect whiteness and your teeth will be in ideal condition. The fact that there are thousands of <a href="https://goo.gl/maps/qomX2kzjyE91xHiX7">dental specialists in Langwarrin</a> suburb, we know it can be a difficult task finding that one dentist that will truly understand all your needs. If you are in that position, you can now rest easy. Here are some few reasons why people of Langwarrin suburb should make <a href="/">Carrum Downs Dental</a>, your dental clinic of choice.</Typography>
                        </Box>
                        <Box className='mt-4'>
                          <Typography className='para'><strong>– Our High Reputation</strong></Typography>
                          <Typography className="para">We have managed to build a high reputation over the years, especially among our clients. Most patients that visit our clinics are in most cases referred to us by our previous satisfied patients. We also have received lots of positive online testimonials from our previous happy patients.</Typography>
                        </Box>
                        <Box className='mt-4'>
                          <Typography className='para'><strong>– Expertise and Experience</strong></Typography>
                          <Typography className="para">One thing that you should always factor in before visiting a dentist is the experience and specialisation. We have been providing dental services for years now, and our specialists are well trained, have extensive experience and are experts in what they do. We have in-depth experience of handling different dental complications presented to us.</Typography>
                        </Box>
                        <Box className='mt-4'>
                          <Typography className='para'><strong>– Affordability</strong></Typography>
                          <Typography className="para">One thing that makes our clinic stand out from all the others offering the same services is out pocket-friendly prices. You do not have to spend a fortune for you to get and maintain that beautiful smile. Just visit our clinic, and you will be amazed at how affordable our services are.</Typography>
                        </Box>
                        <Box className='mt-4'>
                          <Typography className='para'><strong>– Personalized Dental Care Services</strong></Typography>
                          <Typography className="para">Apart from experience and expertise, our staffs are friendly and polite. Since giving all our patients a beautiful smile is our top priority, we provide you with personalized dental services. Just from the moment you step on our door, our friendly staff will welcome you, listen to your problems and guide you through the entire process. We ensure that your dental problems have been fixed within the shortest time possible and we also schedule follow-ups to ensure that you maintain superb dental health.</Typography>
                        </Box>
                        <Box className='mt-4'>
                          <Typography className='para'><strong>Are You Looking for a Dental Clinic in Langwarrin?</strong></Typography>
                          <Typography className="para">If you are out there looking for dental services in Langwarrin, feel free to check us out. We offer a number of dental service to people of all ages ranging from children to adults. Our dentists at Carrum Downs Dental have extensive experience in providing different kinds of dental services. Hence, you can be assured that they know what they are doing. Visiting our dental clinic means that you will receive personalized care. We take the time to listen to your needs and know what treatment will best benefit you.</Typography>
                          <Typography className="para">Book an appointment with us and let us handle all your dental needs.</Typography>
                          <BlueFilledBtn btnLink="/book-now/" navlink={true} btnTitle="BOOK NOW" />
                        </Box>
                      </Box>
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
      }</>
  )
}

export default Langwarrin
