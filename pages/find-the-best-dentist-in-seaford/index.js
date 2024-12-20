import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { CommonHero, CommonSidebar } from '../../components/components'
import Banner from '../../public/suburb/bg.jpg';
import SeafordClinic from '../../public/suburb/seaford/Seaford.jpg'
import { Box, Container, Grid, Typography } from '@mui/material'

const SeaFord = () => {
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
  }, [])

  const breadcrumb = [
    { id: "seaford_breadcrumb_1", link: null, title: "Find the best dentist in Seaford" }
  ]

  return (
    <>
      <Head>
        <title>Dentist in Seaford | Carrum Downs Dental Group</title>
        <meta name="description" content="Carrum Downs Dental Group is now available for people living in and around Seaford. All the dental service you expect and more are now available in Seaford." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero breadcrumb={breadcrumb} bg={Banner} title="Find the best dentist in Seaford" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <><main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={5}>
                    <Grid item xs={12} lg={8}>
                      <Box>
                        <Image src={SeafordClinic} alt="Dentist in Seaford" />
                        <Box mt={1}>
                          <Typography className="para">A lot of people hear about visiting the dentist and get frightened by the thought. The truth is you don’t have to be. You can go for a lifetime without having any major operation or losing a tooth with a good dentists checking your oral health every once in a while. If you are looking for a good dentist in Seaford, you should look no further. We have the facilities and professional staff to ensure you keep your pearly whites safe from any harm from disease or bacteria.</Typography>
                          <Box className="mt-4">
                            <Typography className="para mb-0"><strong>Feel involved in your dental care</strong></Typography>
                            <Typography className="para">One of the most important aspects of our dental practice is to always make the patient know everything that is going on with them. We will always lay the options for you for any dental procedure you need and offer expert advice on what your best choice is.</Typography>
                          </Box>
                          <Box className="mt-4">
                            <Typography className="para mb-0"><strong>A wide range of dental services</strong></Typography>
                            <Typography className="para">We have dental professionals who have specialized in different types of procedures both in restorative and cosmetic dentistry. You can always depend on us to also provide <a href="/find-the-best-dentist-in-seaford/">emergency dental care</a> and private dentistry as well. This means that you can call us at any time and set an appointment with a doctor and your oral health needs will be tended to.</Typography>
                          </Box>
                          <Box className="mt-4">
                            <Typography className="para mb-0"><strong>Get treatments at prices you can afford</strong></Typography>
                            <Typography className="para">We have a practice that is aimed at providing the best treatment at prices that our patients can afford. You can’t really put a price on a great smile; however, you will find that our range of services is priced very competitively. We want to make sure that no patient who wants to receive our help should be shut out. You can also have cost of your dental care taken care of with a plan that suits your budget.</Typography>
                          </Box>
                          <Box className="mt-4">
                            <Typography className="para mb-0"><strong>We appreciate patient feedback</strong></Typography>
                            <Typography className="para">What our patients say to us and about us is a big part of what defines the practice. We always appreciate it when our patients come to us with problems and suggestions about how we can better the dental care they receive. As for what patients have to say about us, you only need to look at the testimonials sections to get a glimpse of the quality we provide when it comes to oral health.</Typography>
                          </Box>
                          <Box className="mt-4">
                            <Typography className="para mb-0"><strong>Feel free to contact us for any dental health needs</strong></Typography>
                            <Typography className="para">We look forward to hearing from you. New patients are always exciting to work with and we’d also like to think that we are helping our community stay healthier for longer. We would be glad to help if you would like any assistance with your oral health.</Typography>
                          </Box>
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

export default SeaFord;