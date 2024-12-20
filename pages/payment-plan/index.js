import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { BlueFilledBtn, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../components/components';
import Banner from '../../public/payment-plan/payment-options.jpg'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AfterPay from '../../public/payment-plan/afterpay.png';
import MySmileLogo from '../../public/payment-plan/mysmileLogo.jpg';
import MySmile from '../../public/payment-plan/mysmileplan.png';
import Denticare from '../../public/payment-plan/Denticare-badge.jpg'
import { CheckCircleOutline } from '@mui/icons-material';


const PaymentPlan = () => {
  const [show, setShow] = useState();
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
    { id: "payment_plan_breadcrumb_1", link: null, title: "Payment Plan" }
  ]

  return (
    <>
      
          <Head>
            <title>Various Payment Plans for Dental Treatment | Carrum Downs Dental</title>
            <meta name="description" content="Find the suitable Dental Plans which is completely automated system, convenient & affordable way to pay your dental bills. Call or Visit Carrum Downs Dental Clinic" />
            <meta name="robots" content="index" />
          </Head>
          <CommonHero bg={Banner} breadcrumb={breadcrumb} align={width < 600 ? 'center' : 'left'} title="Payment Plans for Your Dental Treatment" color="#fff" />
          {
        show ? <><main>
            <section>
              <Container maxWidth="xxl">
                <Grid container>
                  <Grid item xs={12} md={10} className="mx-auto">
                    <Box py={5}>
                      <Grid container spacing={5}>
                        <Grid item xs={12} lg={8}>
                          <section>
                            <Container maxWidth="xxl">
                              <InterestFree />
                            </Container>
                          </section>
                          <section className='mt-md-5 mt-4'>
                            <Container maxWidth="xxl">
                              <Image src={AfterPay} alt="afterPay" />
                              <Typography className='para'>*Subject to Afterpay approval and transaction limits. Late fees may apply if you fail to make a payment on time. For Afterpay Terms please visit: <a href='https://www.afterpay.com/en-AU/terms-of-service'>https://www.afterpay.com/en-AU/terms-of-service</a></Typography>
                            </Container>
                          </section>
                          <section className='mt-md-5 mt-4'>
                            <Container maxWidth="xxl">
                              <Box className='d-flex justify-content-center align-items-center'>
                                <Image src={MySmileLogo} alt="my smile logo"></Image>
                              </Box>
                              <Image src={MySmile} alt="my smile plan"></Image>
                            </Container>
                          </section>
                          <section className='mt-md-5 mt-4'>
                            <Container maxWidth="xxl" className='shadow py-3'>
                              <Grid container spacing={3}>
                                <Grid item xs={12} md={4} className="d-flex justify-content-center align-items-center">
                                  <Image src={Denticare} alt="denticare badge" />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                  <Box>
                                    <SectionalHeading title="Your Plan For A Better You" variant="h2" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                    <Typography className='para'>We care about making sure you get the best dental treatment you deserve which is why we offer DentiCare Payment Plans as a convenient and easy way to budget and pay for your dental care. DentiCare Payment Plans are simple, flexible and are tailored to suit you. There are no complicated finance contracts, no credit checks or any interest to pay.</Typography>
                                  </Box>
                                </Grid>
                                <Grid item xs={12}>
                                  <List>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{color:"var(--dark-blue)"}} />
                                      </ListItemIcon>
                                      <ListItemText primary="A simple, interest free direct debit plan for your treatment" />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{color:"var(--dark-blue)"}}  />
                                      </ListItemIcon>
                                      <ListItemText primary="No credit checks or complicated finance contracts" />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{color:"var(--dark-blue)"}}  />
                                      </ListItemIcon>
                                      <ListItemText primary="Start your plan for a better you today" />
                                    </ListItem>
                                  </List>
                                  <BlueFilledBtn btnLink="https://denticarepaymentplans.com.au/" anchor={true} btnTitle="FIND OUT MORE" />
                                </Grid>
                              </Grid>
                            </Container>
                          </section>
                          <section className='mt-md-5 mt-4'>
                            <Container maxWidth="xxl">
                              <Typography className='para'>Even if you are tight on budget, our interest free payment plans will allow you to get your Dental treatments done fast and hassle free. Your overall health is dependent on the health of your teeth, therefore it’s important that you attend to the dental needs and not have them postponed due to financial reasons. To help you with this at Carrum Downs Dental Group accept interest free, quick set up payment plans.</Typography>
                            </Container>
                          </section>
                          <section className='mt-md-5 mt-4'>
                            <Container maxWidth="xxl">
                              <SectionalHeading variant="h2" title="Interest Free Patient Payment Plans available:" color="var(--dark-blue)" align="left" />
                              <Box mt={1}>
                                <SectionalHeading variant='h5' title="Specifically designated for clients having Dental & Orthodontic related treatments" align="left" color="var(--dark-blue)" />
                                <Typography className='para'>At Carrum Downs Dental Group we want to put the smile back on our patients and therefore would like to offer best payment plan options so you can receive the high quality dental care needed without worrying about cost. We are excited to bring you DentiCare: a completely automated payment plan system which is a convenient and affordable way to pay the cost of the dental treatment over time. And what’s more <strong>you won’t pay any interest or go through any complicated finance contracts</strong>. Now there’s no reason for you to delay your treatment. Ask our Dentist about how a no interest DentiCare payment plan can get you into treatment straight away.</Typography>
                                <Typography className='para'>The DentiCare Payment Plan can be used for a wide range of general dentistry, cosmetic dentistry and orthodontic treatments. You can use a payment plan for teeth whitening, dental implants, crowns and veneers and most other dental procedures. You can also use a payment plan to cover the cost of your Orthodontic treatment (Invisalign)</Typography>
                                <Typography className='para'>Speak to our friendly dental staff to help set up a DentiCare Payment Plan. All you pay is a minimum of 20%* of your treatment cost directly and $35* payment plan set up fees, after which you can make either weekly, fortnightly or monthly payments!</Typography>
                                <Typography className='para'>We are great with kids; our dentists love working with kids. We know how to make them feel ease and make their dental experience a pleasant one. We even go the extent of playing the kid with his/her favourite channel/movie and give them gifts as an appreciation.</Typography>
                              </Box>
                              <Box>
                                <SectionalHeading variant='h5' title="Advantages of DentiCare:" align="left" color="var(--dark-blue)"  />
                                <Box>
                                  <List className="p-0">
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{color:"var(--dark-blue)"}}  />
                                      </ListItemIcon>
                                      <ListItemText primary="Simple one-page Direct Debit form with our Dentist. Simple, fast and easy application which allows you to do treatments on the same day." />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{color:"var(--dark-blue)"}}  />
                                      </ListItemIcon>
                                      <ListItemText primary="No credit checks and no lengthy approval process is required." />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{color:"var(--dark-blue)"}}  />
                                      </ListItemIcon>
                                      <ListItemText primary="Start your treatment straight away." />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{color:"var(--dark-blue)"}}  />
                                      </ListItemIcon>
                                      <ListItemText primary="Interest free" />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{color:"var(--dark-blue)"}}  />
                                      </ListItemIcon>
                                      <ListItemText primary="Plans from 3 months to 12 months" />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{color:"var(--dark-blue)"}}  />
                                      </ListItemIcon>
                                      <ListItemText primary="Finance options to suit every budget (treatment plans over of $1000*)" />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{color:"var(--dark-blue)"}}  />
                                      </ListItemIcon>
                                      <ListItemText primary="Create a better smile today." />
                                    </ListItem>
                                  </List>
                                </Box>
                              </Box>
                            </Container>
                          </section>
                          <section className='mt-md-5 mt-4'>
                            <Container maxWidth="xxl">
                              <SectionalHeading variant='h5' title="DentiCare Payment Solutions 1300 633 472" align="left" color="var(--dark-blue)"  />
                              <Typography className='para'>To find out more about payment plans with Carrum Downs Dental Group please do not hesitate to contact us.</Typography>
                              <BlueFilledBtn btnLink="/offer/" btnTitle="MORE AFTERPAY OFFERS" navlink={true} />
                              <TermsNCondition />
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
            </section>
          </main>
        </> : null
      }
    </>
  )
}

export default PaymentPlan