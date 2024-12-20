import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Banner from '../../public/suburb/bg.jpg';
import CranbourneWestClinic from '../../public/suburb/cranbourne-west/cranbourne-west.jpg'
import { CommonHero, CommonSidebar, SectionalHeading } from '../../components/components'
import { Box, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const CranbourneWest = () => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState()

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const breadcrumb = [
    { id: "cranbourne_west_breadcrumb_1", link: null, title: "Dentist In Cranbourne West" }
  ]

  return (
    <>
      <Head>
        <title>Dentist in Cranbourne West | Carrum Downs Dental Group</title>
        <meta name="description" content="Carrum Downs Dental Group is now available for people living in and around Cranbourne West. All the dental service you expect and more are now available in Cranbourne West." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Dentist In Cranbourne West" align='left' color="#fff" />
      {
        show ? <><main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} lg={8}>
                      <Box>
                        <Image src={CranbourneWestClinic} alt="Dentist in Cranbourne West" />
                      </Box>
                      <SectionalHeading variant="h2" title="We are your go-to Dentist in Cranbourne West" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                      <Typography className='para'>If you have just moved into the area, haven’t been to a dental checkup in a while or are looking to change your dentist, we invite you to try our services. We have a reputation for always delivering the best quality services. Our team of certified professionals together with our sophisticated equipment makes us one of the best dental health care partners for you. Our patients always find a health practitioner who understands their needs and a comfortable space that helps them do away with the nerves.</Typography>
                      <Box className="mt-4">
                        <Typography className='para'><strong>Comprehensive dental care</strong></Typography>
                        <Typography className='para'>We believe in always giving the best and it is one of the aspects about our practice that has allowed us to grow and become one of the most dependable <a href="https://goo.gl/maps/qomX2kzjyE91xHiX7">dental practices in Cranbourne West</a>. Our list of dental services includes a wide range of routine and specific procedures such as implant placement, dentures, wisdom tooth removal, <a href="/service/teeth-whitening/">teeth whitening</a>, and root canals among others. The procedures cover the scope of restorative, preventive and cosmetic dentistry.</Typography>
                      </Box>
                      <Box className='mt-4'>
                        <Typography className='para'><strong>Dentistry for children</strong></Typography>
                        <Typography className='para'>You children’s oral health is as important to us as it is to you. A child who receives proper dental care from an early age should be able to keep their pearly whites in good condition all through. Our children’s dentistry is aimed to be calming so that the young ones are comfortable with visits to the dentist from an early age.</Typography>
                      </Box>
                      <Box className='mt-4'>
                        <Typography className='para'><strong>Get your dental emergency sorted quickly</strong></Typography>
                        <Typography className='para'>Oral injuries can be painful and without prompt action, they may leave permanent wounds. We are here to ensure you get relief from your distress as soon as possible. You can also come to us with any sort of dental emergency. We will fix any anomalies fast and get you back on your day-to-day program.</Typography>
                      </Box>
                      <Box className='mt-4'>
                        <Typography className='para'><strong>Financing your dental care</strong></Typography>
                        <Typography className='para'>We have an assortment of dental plans you can choose from according to your budget. Dental insurance as well as vouchers from the public dental services are a sure way to make sure you get the services you require regardless of charges.</Typography>
                      </Box>
                      <Box className='mt-4'>
                        <Typography className='para'><strong>Learn about the latest offers</strong></Typography>
                        <Typography className='para'>There are always plenty of offers available to our patients. These range from small cosmetic procedures like scale and cleaning and teeth whitening to the more particular services like dental implants. These offers change every now and then and you wouldn’t want to miss a great offer when it is available.</Typography>
                      </Box>
                      <Box className='mt-4'>
                        <Typography className='para'><strong>Contact us for anything you need</strong></Typography>
                        <Typography className='para'>We are waiting to hear from your and assist you in any way we can. You can set up an appointment over the phone or shoot us an email.</Typography>
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

export default CranbourneWest