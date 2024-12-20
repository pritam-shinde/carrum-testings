import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Banner from '../../public/suburb/bg.jpg';
import SandhurstClinic from '../../public/suburb/sandhurst/sandhurst.jpg'
import { CommonHero, CommonSidebar, SectionalHeading } from '../../components/components'
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Sandhurst = () => {
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
    { id: "suburb_sandhurst_breadcrumb_1", link: null, title: "Dentist In Sandhursts" }
  ]

  return (
    <>
      <Head>
        <title>Top Dentist in Sandhurst  - Quality Dental Care Services</title>
        <meta name="description" content="Skilled & experienced dentists in Sandhurst that provide best quality dental services. Carrum We provides superior dental treatment at an affordable price." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} align={width < 600 ? 'center' : 'left'} title="Dentist In Sandhursts" color="#fff" />
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
                          <Image src={SandhurstClinic} alt="Dentist In Sandhurst" />
                          <Box>
                            <SectionalHeading variant="h2" title="Get the Best Dental Care at Sandhurst" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Typography className='para'>At Carrum Downs Dental, providing care to patients is our top priority. From ensuring that practices have convenient appointment times to educating all our patients about good dental hygiene at home- every single aspect of your dental care is carefully considered.</Typography>
                            <Typography className='para'>We are passionate about providing comprehensive services to our patients ranging from Cosmetic dentistry and <a href="/service/wisdom-teeth-removal/">wisdom tooth extractions</a> to dental implants and dentures. All our services are of high standard. With dental practice near Sandhurst, we only have one goal- to provide the same high quality, affordable dental care that you and your family can rely on at all times.</Typography>
                            <Typography className='para'>Whether you are looking for routine Dentistry in Sandhurst to maintaining a happy and healthy smile or even cosmetic dentistry to transform the look of your smile- then you are at the right place. At Carrum Downs Dental, we are here to help.</Typography>
                            <Typography className='para'>The dentists within our practice are hand-picked based on the depth of their experience and qualifications. Our aim is always to provide individualized dental care of the highest quality so that each of our patients benefit from healthy gums, fresh breath, and a confident smile.</Typography>
                            <Typography className='para'>At <a href="https://goo.gl/maps/qomX2kzjyE91xHiX7">Carrum Downs Dental</a> we do have one key philosophy- to treat all our patients as individuals not as numbers. Visiting a dentist should always be a happy experience, and so at Carrum Downs Dental we do all we can to make sure that you feel comfortable and relaxed as much as possible during your visit. Our dentists always have the time to discuss any questions and concerns that you may have using a caring and friendly approach.</Typography>
                            <Typography className='para'>Our staffs have an exceptional talent when it comes to children. They will do whatever it takes to distract and calm them down while undergoing treatment. Our dentists are also well conversant with Arab, Hindi, English, Malayalam and Tamil, so if you are in Sandhurst, you speak any of these languages and in need of a dentist, feel free to give us a visit.</Typography>
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

export default Sandhurst