import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import ImplantBg from '../../../public/Implant-Support/ImplantBg.jpg'
import Gum_ulcer from '../../../public/implant/Gum_ulcer.jpg'
import implant1 from '../../../public/implant/implant1.jpg'

const Implant = () => {
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
    { id: "ImplantSupportedDenture_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "ImplantSupportedDenture_breadcrumb_2", link: null, title: 'Overdentures at Carrum Downs Dental Clinic ' }
  ]

  return (
    <>
      <Head>
        <title> Implant Supported Denture in Carrum Downs | Carrum Downs Dental Group</title>
        <meta name="description" content="Are you looking to achieve the best smile? Carrum Downs Dental offers Smile Design service that uses a digital process to fix your smile. Contact us at 03-9782 1200." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={ImplantBg} breadcrumb={breadcrumb} title="Why Consider Implant Stabilised Overdentures?" color="#fff" />
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
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="Many people with conventional dentures end up not using them for the simple fact that they don't stay in place" color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                  <Image src={implant1} alt="girl smiling" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Typography className='para'><a href="/how-dental-implants-work-and-functions-like-natural-teeth/">Dental implants </a> can greatly enhance your quality of life if you wear dentures. They ensure that your dentures stay put while you talk and eat, leading to increased confidence in social settings and the ability to enjoy your food with ease. An implant-supported overdenture is an ideal solution for those who have experienced issues with unstable or ill-fitting dentures. It attaches to special dental implants that are surgically implanted in the jawbone, providing a reliable and secure closure for the denture.
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>

                        <Container maxWidth="xxl" className='p-0'>
                          <Box>
                            <Typography className='para'>Many people have discovered the advantages of using dental implants to support their dentures. Not only can they eat, speak and smile with greater self-assurance, but the success rate and longevity of implant-supported overdentures are both high. It truly is a life-changing experience. </Typography>
                            <Typography className='para'>As the word spreads about implant-supported overdentures' effectiveness, it has become a popular dental treatment option for many. If you are considering this for yourself, speak to a qualified professional who can assess your situation and help you make the best decision. Proper care and maintenance of your implants can provide you with greater comfort and confidence in life.
                            </Typography>
                            <Typography className='para'>Dental implants are renowned for their high success rate among all implanted surgical devices. If you're considering an implant-supported overdenture, it's worth to note they are equipped with special attachments that attach to the implants.</Typography>
                            <Typography className='para'>It is essential to take an implant-supported overdenture out each night for cleaning. Doing this not only keeps your dentures in top shape but also allows you to properly clean your gums and the implant fixtures.</Typography>
                            <Typography className='para'>Millions of people who are missing teeth turn to  <a href="/the-complete-guideline-for-dentures/">dentures </a> for a replacement. Having loose dentures in the lower jaw area can be an incredibly frustrating and embarrassing experience, as even the simplest tasks, like eating, can become difficult when your dentures slip and cause discomfort.</Typography>
                          </Box>
                        </Container>
                        <Container maxWidth="xxl" className='p-0'>
                          <Box mt={2}>
                            <Grid container>
                              <Grid item xs={12}>
                                <Image src={Gum_ulcer} alt="smile" />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography className='para' mt={1}>Denture adhesives are not always helpful and can lead to painful ulcers on your gums due to the dentures constantly moving around. Additionally, food can become stuck beneath the dentures during meals, which can be especially irritating.</Typography>
                                <Typography className='para'>Fortunately, a dental implant can provide a secure and stable foundation for your dentures, eliminating the discomfort and embarrassment often caused by loose dentures.</Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        </Container>
                        <Container maxWidth="xxl" className='p-0'>
                          <Box>
                            <SectionalHeading variant="h2" title="Advantages of Denture Stabilisation" color="var(--dark-blue)" />
                            <List>
                              {
                                ["Enhancing the ability to chew can lead to a more varied diet, which in turn can contribute to improved total health.", "Strengthens self-assurance and communication skills.", "This minimizes gum irritation, leading to greater comfort.", "No adhesives are needed for dentures, which eliminates the need to spend time and money on them.", "Often involves the utilization of existing dentures.", "The procedure is minimally invasive."].map(item => <ListItem key={item}>
                                  <ListItemIcon>
                                    < ArrowRightIcon style={{ color: "#117295" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={item} />
                                </ListItem>)
                              }
                            </List>
                          </Box>
                        </Container>
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

export default Implant
