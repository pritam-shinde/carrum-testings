import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../../public/suburb/bg.jpg'
import FrankstonNorthClinic from '../../public/suburb/frankston-north/frankston-North.jpg'
import { CommonHero, CommonSidebar, SectionalHeading } from '../../components/components'
import { Box, Container, Grid, Typography } from '@mui/material'

const FrankstonNorth = () => {
  const [show, setShow] = useState(false)
  const [width, setWidth] = useState();

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const breadcrumb = [
    { id: "frankson_north_breadcrumb_1", link: null, title: "Dentist In Frankston North" }
  ]

  return (
    <>
      <Head>
        <title>Dentist in Frankston North | Carrum Downs Dental Group</title>
        <meta name="description" content="Carrum Downs Dental Group is now available for people living in and around Frankston North. All the dental service you expect and more are now available in Frankston North." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Dentist In Frankston North" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {show ? <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={5}>
                  <Grid item xs={12} lg={8}>
                    <Box>
                      <Image src={FrankstonNorthClinic} alt="Dentist In Frankston" />
                      <SectionalHeading variant="h2" title="Looking for a dentist in Frankston North?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                      <Typography className='para'>Are you looking for quality and affordable dental options? We have what you need and would love to be your choice of <a href="https://goo.gl/maps/qomX2kzjyE91xHiX7">dentist near Frankston North</a>. Ours is a practice is among the select few offering convenience, competence and compatibility all at costs you can afford. We are able to achieve this thanks to the committed group of dental professionals that we have in our team. We are also happy to inform you that our practice is equipped with cutting-edge technology that allows for the best modern dentistry you can find out there.</Typography>
                    </Box>
                    <Box className='mt-4'>
                      <Typography className='sub-head mb-2' variant='h2'>Dentists who are good with children</Typography>
                      <Typography className='para'>Whether their child feels comfortable during a visit to a clinic of any kind is a major concern among parents. It is one of the main factors that determine whether a family sticks with one dentist or another. We recognise this, and the good news is that you don’t have to be worried about our staff. We have a friendly staff, starting from the support people to the dental practitioners. You child will feel welcome and comfortable all through the visit. We have the gizmos to distract them through the procedure. Our professionals can attend to a wider spectrum of patients because we are always doing our best to bridge the language gap. At our practice, you can find professionals who will offer you assistance in 6 languages other than English, including Hindi, Malayam, Arab, Urdu, and Tamil.</Typography>
                    </Box>
                    <Box className='mt-4'>
                      <Typography className='sub-head mb-2' variant='h2'>All the dental service you expect and more</Typography>
                      <Typography className='para'>We have a an all-round range of dental services that cover all types of preventive, restorative and cosmetic dentistry such as, dentures, dental implants, teeth whitening, wisdom tooth removal, and placing dental veneers among many others.</Typography>
                    </Box>
                    <Box className='mt-4'>
                      <Typography className='sub-head mb-2' variant='h2'>Get a dental plan that suits your needs</Typography>
                      <Typography className='para'>We have a range of dental plans that provide you with the financial flexibility to afford you the best. Our pricing is also very friendly because we want everyone who chooses us to access the services they need. We also accept vouchers for public dental services such as the <a href="/service/child-benefit/">Child Dental Benefits Schedule</a>.</Typography>
                    </Box>
                    <Box className='mt-4'>
                      <Typography className='sub-head mb-2' variant='h2'>We have flexible hours for the busy folk</Typography>
                      <Typography className='para'>We know how busy your weekly schedule can be. Besides, research shows that a lot of work hours are lost on dental visits yearly. That is why we offer our services even after hours. All you have to do is call and set up an appointment and you will find a doctor ready to attend to you. We are also available on Saturdays.</Typography>
                    </Box>
                    <Box className='mt-4'>
                      <Typography className='sub-head-h3 mb-2' variant='h3'>Contact us, we’d love to hear from you</Typography>
                      <Typography className='para'>We have all you can ask for when it comes to the best dental care for you and your family and we look forward to hearing from you. Call or email and we will offer any help or advice you may need.</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container >
      </main > : null}
    </>
  )
}

export default FrankstonNorth