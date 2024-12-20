import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import ClearBiteAligner from '../../../public/invisalign/Clear-bite-aligners.jpg'
import ClearBite from '../../../public/invisalign/Clearbite.jpg'
import Banner from '../../../public/invisalign/invisalign-bg.jpg'

const TeethAligner = ({ data }) => {
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
    { id: "Invisalign_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "Invisalign_breadcrumb_2", link: null, title: 'Invisalign' }
  ]

  return (
    <>
      <Head>
        <title>Teeth Aligners by Carrum Downs Dental Group | Dentist in Skye</title>
        <meta name="description" content="Carrum Downs Dental Group has the best dentist in the Carrum Downs that provide high quality teeth aligners which makes you smile more pleasant." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Invisalign" align={width < 600 ? 'center' : 'left'} color="#fff" />
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
                          <Container maxWidth="xxl" className="p-0">
                            <SectionalHeading variant="h2" title="Invisalign- The Most Effective and Affordable way to Straighten your Teeth" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Typography className='para'>Let’s face it; we all would like to own a set of perfect looking teeth. However, due to various reasons, a majority of people never really feel confident with their smiles. The effects can be both psychologically and socially damaging. So, why do most people shy away from seeking treatment to correct crooked, unsightly gaps,or crowding? Well, it turns out that one major reason is the fear of using traditional metal braces.</Typography>
                            <Typography className='para'>Even though the results will be beautiful, traditional metal braces come with their fair share of issues. Regular irritation, hard to maintain good oral hygiene, limits your diet, not to mention that they are unsightly as well. The good news is that due to advancement in dental technology, there is a better alternative to traditional metal braces known as Invisalign.</Typography>
                            <Typography className='para'>At Carrum Downs Dental at Shop T5, 100 Hall Road, we provide affordable and quality Invisalign treatment that can change your smile in just a matter of weeks.</Typography>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className="p-0">
                            <Box p={3}>
                              <Box>
                                <SectionalHeading variant="h2" title="What is Invisalign?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                <Typography className='para'>Invisalign is a modern solution that helps you straighten your teeth without using the traditional metal braces. Your dentist will use clear, smooth,and durable plastic to make a set of nearly invisible aligners. Our dentist at Carrum Downs Dental Clinic will customise the appliances to fit your teeth perfectly. You will then have to wear and replace them after every two weeks for your teeth to slowly get into position.</Typography>
                              </Box>
                              <Box mt={3}>
                                <SectionalHeading variant="h2" title="Benefits of Invisalign:" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                <Box>
                                  <List>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary={<strong>Aesthetics:</strong>} secondary="Invisalignis nearly invisible and more aesthetic appealing compared to traditional metal braces." />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary={<strong>Comfort:</strong>} secondary="With Invisalign, you will not have to endure the agony of sharp corners and wires into your mouth like it is the case with metal braces." />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary={<strong>Speed:</strong>} secondary="Invisalign offers positive results within a concise period of time. This is because they can be able to straighten a number of teeth at once." />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary={<strong>Better Breath:</strong>} secondary="It is almost impossible to clean your teeth around metal braces. This leaves your mouth with bad breath. With Invisalign, you can completely take them off and carry out your normal dental hygiene measures, including brushing and flossing. Also, with conventional braces, there is a high risk of gum disease due to the difficulty in cleaning the teeth." />
                                    </ListItem>
                                  </List>
                                </Box>
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="How does it work?" align='center' color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                  <Image src={ClearBite} alt="clear bite" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Typography className='para'>Invisalign are one of a kind dental treatment since they are custom made to fit your teeth. The appliance will then perfectly fit each of your teeth and will work to reposition your teeth over time. The teeth will virtually move into place depending on the exact movements your dentist will plan for you. Invisalign are made of smooth, comfortable,and nearly invisible material.</Typography>
                                </Grid>
                                <Grid item xs={12} className="pt-1">
                                  <Typography className='para'>Actually, no one can tell if you are wearing them unless you choose to tell. With Invisalign, you will not be a subject of humour or humiliation as it is with the traditional metal braces. The appliances will help you achieve a brighter smile with minimum interference.</Typography>
                                  <Image src={ClearBiteAligner} alt="CLEARBITE – Affordable Clear Aligners!" />
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <SectionalHeading variant="h2" title="Treatment Process" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                              <Typography className='para'>The chances are that you might be familiar with the way Invisalign work. However, we would like to dig a little bit deeper and give you a step by step procedure on the treatment process. Irrespective of if you are considering to undertake the treatment yourself or someone else close to you, knowing exactly what will happen will enhance your confidence as well as ease any of your fears.</Typography>
                              <Box>
                                <List>
                                  <ListItem>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Initial Consultation at Carrum Downs Dental Group at Shop T5, 100 Hall Road</strong>} secondary="During the initial consultation, nothing much will happen when it comes to undertaking the treatment. This is the visit your dentist will discuss with you about the benefits of Invisalign and offer other available treatment alternatives. If you settle on Invisalign, the dentist will make some few check-ups on your teeth to determine if you are a good candidate for the treatment. During this appointment, you will also have the opportunity to ask any question to your dentist at Carrum Downs Dental Clinic;you feel necessary about the treatment." />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Create a 3D Image of Your Teeth</strong>} secondary="Your dentist will then take some pictures, x-rays as well as impressions of your teeth, which will then be used to create a 3-D image. The dentist will use these images to create a precise treatment plan. This will include exactly how the teeth will move and get into the desired position. Moreover, the dentist will use the same technology to show the entire process of how your teeth will move until you achieve what you are looking for." />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Receive Your Custom Invisalign Based On Your Personalised Treatment Plan</strong>} secondary="The dentist will then create a series of custom-made Invisalign for you. As already mentioned above, the aligners will be made out of a comfortable, smooth, nearly invisible material. Therefore, the aligners will not irritate your cheeks or gums. Make sure you wear the appliances throughout the day and only remove them when you want to undertake regular dental hygiene practices such as brushing and flossing." />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Wear New Set of Invisalign Every Two Weeks</strong>} secondary="You will be required to wear a new set of Invisalign after every two weeks. This will help you to advance to the next level of treatment. Also, you will be required to visit your dentist for check-ups every six weeks. You will be able to see some notable difference with your teeth, after every two weeks." />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong>Enjoy Your New Bright Smile</strong>} secondary="The entire treatment will take approximately a year. However, different patients have unique cases,and some might take slightly more time while others might take less time. A patient’s age mostly determines this. Teens achieve their dream much faster compared to older patients. To achieve the best results within the shortest time, make sure that you wear the Invisalign for about 20 to 22 hours a day." />
                                  </ListItem>
                                </List>
                              </Box>
                              <Typography className='para'>If you are looking forward to brightening your smile with Invisalign, Visit us at <strong>Carrum Downs Dental Group at Shop T5, 100 Hall Rd</strong>. We offer quality and affordable services to all our clients. We will also try and ease the burden of treatment fee by offering you staged payment throughout the treatment period. Please call our clinic on 03-9782 1200 to book an appointment today.</Typography>
                            </Box>
                          </Container>
                        </section>
                        <section className="mt-md-5 mt-4">
                          <Container maxWidth="xxl" className="p-0">
                            <Box>
                              <Box>
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions (FAQs)" align="center" />
                              </Box>
                              <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingOne">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How much does Invisalign cost?
                                      </button>
                                    </h3>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>On average, Invisalign costs starts from $4500 and depends on the amount of correction required and the smile you are after.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How long does Invisalign take?
                                      </button>
                                    </h3>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>It takes between 6 months and two years for people who use Invisalign to achieve results, but you start seeing the results in a matter of weeks. The treatment time depends on the complexity of the issue you intend to address.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingFour">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Does Invisalign hurt?
                                      </button>
                                    </h3>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>No, Invisalign is not painful, but some people experience soreness, given the pressure being exerted. However, compared to traditional braces, Invisalign is usually less painful.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        How to clean Invisalign?
                                      </button>
                                    </h3>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Remove your aligners at night and use a soft-bristled brush to scrub them gently. You should also use a clear liquid soap to remove any plaque and trapped food particles. Remember to rinse through with clean water before putting them back.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingFive">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Is Invisalign better than braces?
                                      </button>
                                    </h3>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Both methods are similar in that they exert pressure to align your teeth. However, Invisalign is more comfortable than traditional braces since it exerts pressure on the entire teeth.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Box>
                            </Box>
                          </Container>
                        </section>
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

export default TeethAligner;