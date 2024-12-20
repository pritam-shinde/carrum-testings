import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../../public/suburb/bg.jpg';
import LyndhurstClinic from '../../public/suburb/Lyndhurst/lyndhurst.jpg'
import { CommonHero, CommonSidebar } from '../../components/components'
import { Box, Container, Grid, Typography } from '@mui/material';

const Lyndhurst = () => {
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
    { id: "lyndhurst_breadcrumb_1", link: null, title: "Get all your dental needs handled in Lyndhurst" }
  ]

  return (
    <>

      <Head>
        <title>Dental Care and Dentist in Lyndhurst | Carrum Downs Dental Group</title>
        <meta name="description" content="Carrum Downs Dental Group is now available for people living in and around Lyndhurst. All the dental service you expect and more are now available in Lyndhurst." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Get all your dental needs handled in Lyndhurst" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <><main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} lg={8}>
                      <Box>
                        <Image src={LyndhurstClinic} alt="dentist in lyndhurst" />
                        <Box>
                          <Typography className='para'>Your health is not something you can easily make decisions over. You have to look around and find the best you can before settling for a medical practitioner. We understand these concerns and are here to abate them. Our dental practice has been going from strength to strength, always bringing something new to the table. We have some of the best dental practitioners you can find in Lyndhurst and they have an amazing support staff rallying behind them to make our practice the number one choice in Lyndhurst. This, coupled with the high-tech equipment we use here ensures your smile will never be in jeopardy.</Typography>
                        </Box>
                        <Box className='mt-4'>
                          <Typography className="para"><strong>Get any type of dental procedure you need</strong></Typography>
                          <Typography className="para">Our team of doctors is diversified such that we have professionals who are good at dealing with different aspects of the dental practice. Some of the <a href="/service/">services</a> you can expect from us include dental implants, dentures, teeth whitening, wisdom tooth removal, crowns and root canals among others.</Typography>
                        </Box>
                        <Box className='mt-4'>
                          <Typography className="para"><strong>Have a say in the type of treatment you receive</strong></Typography>
                          <Typography className="para">It is your right to know what kind of treatment you receive and what options you have. We don’t assume to know what you want and will always run the decisions by you so that you can decide what to go with. All we can do is give you our professional recommendations and offer the best services.</Typography>
                        </Box>
                        <Box className='mt-4'>
                          <Typography className="para"><strong>Call us for any dental emergencies</strong></Typography>
                          <Typography className="para">Emergencies can happen at any time and you need the reliability we offer when such a time comes. If you have a dental emergency that you fear may disrupt your schedule, come to us before you start cancelling important engagements. We can get you back to your normal routine minus the pain and appearance that a dental emergency usually comes with.</Typography>
                        </Box>
                        <Box className='mt-4'>
                          <Typography className="para"><strong>Our practice always has time for you</strong></Typography>
                          <Typography className="para">Even though there are places where the staff is stretched thin and the patients do not get proper attention, we are proud to say ours is a different case. Apart from having a full team of professionals who are always available, our dentists can also communicate to you in Hindi, Malayalam, Arab, Urdu, and Tamil.</Typography>
                          <Typography className="para">We have a convenient approach that affords you time with your dentist even after work hours as long as you set an appointment and our dentists are also available on Saturdays. We would love to be your choice of dental health partner. Contact us through telephone and email and let us know how we can help you today.</Typography>
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
      }
    </>
  )
}

export default Lyndhurst