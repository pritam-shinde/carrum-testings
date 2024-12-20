import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import image1 from '../../../public/SmileDesign/1.jpg'
import image2 from '../../../public/SmileDesign/2.jpg'
import image3 from '../../../public/SmileDesign/3.png'
import Banner from '../../../public/SmileDesign/smile-design-bg.jpg'

const SmileDesign = () => {
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
    { id: "SmileDesign_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "SmileDesign_breadcrumb_2", link: null, title: 'Smile Design' }
  ]

  return (
    <>
      <Head>
        <title>Digital Smile Design in Carrum Downs | Carrum Downs Dental Group</title>
        <meta name="description" content="Are you looking to achieve the best smile? Carrum Downs Dental offers Smile Design service that uses a digital process to fix your smile. Contact us at 03-9782 1200." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Smile Design" align={width < 600 ? 'center' : 'left'} color="#fff" />
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
                            <SectionalHeading variant="h2" title="Smile Design" align='center' color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                  <Image src={image1} alt="girl smiling" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Typography className='para'>Smile Design is a dental procedure that can make your smile more beautiful by rectifying a few things on your dental and facial structures. To achieve the best smile possible, Smile Design uses a digital process to fix your smile. The treatment helps in whitening your teeth, straightening them, and closing unsightly gaps. This will help you feel confident and happy about your new, beautiful smile.</Typography>
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <SectionalHeading variant="h2" title="What is Smile Design?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                              <Typography className='para'>Smile design is a method that lets you analyse a 2D image and then create a 3D prototype.</Typography>
                              <Typography className='para'>The 2D model accurately depicts the placement of your teeth. It gives you an interactive visual representation. The 3D model allows you to see how the look of your teeth will change with smile design treatments.</Typography>
                              <Typography className='para'>The 3D model does not only focus on the colour of your smile but gives you a holistic view of your smile.</Typography>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="Carrum Downs Dental Clinic Digital Smile Design process" align='center' color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container>
                                <Grid item xs={12}>
                                  <Image src={image2} alt="smile" />
                                </Grid>
                                <Grid item xs={12}>
                                  <List>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary={<strong>Visit 1</strong>} secondary="Dental impression, photos of your smile, and an X-Ray of the teeth are taken." />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary={<strong>Visit 2</strong>} secondary="Preparation Day. During this visit, the dentist will take an impression of your teeth and send it to the lab to prepare your new teeth. He will then prepare your teeth to receive the new replacement during your next visit, which will be in two weeks. However, before that, he will give you custom-made crowns to wear before your custom-made teeth are ready." />
                                    </ListItem>
                                    <ListItem>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary={<strong>Visit 3</strong>} secondary="This is finally the day you have been waiting for. The dentist will replace the temporary crown with permanent one. You will now be ready to reveal your new beautiful smile." />
                                    </ListItem>
                                  </List>
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className="p-0">
                            <Box p={3}>
                              <SectionalHeading variant="h2" title="How much does a Carrum Downs Dental Clinic Smile Design cost?" align='center' color="var(--dark-blue)" />
                              <Box mt={3}>
                                <Grid container spacing={5}>
                                  <Grid item xs={12} md={6}>
                                    <Typography className='para'>The total cost of the treatment will depend on the number of teeth that you want to include in the procedure.</Typography>
                                    <Typography className='para'>You may be in a position to claim for the cost of x-rays and dental impressions through your health fund.</Typography>
                                    <Typography className='para'>If you are interested in smile design service, please contact us at Carrum Downs Dental Clinic for more information.</Typography>
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                    <Image src={image3} alt="smile" />
                                  </Grid>
                                </Grid>
                              </Box>
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
                                        What is a Full Smile?
                                      </button>
                                    </h3>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>When someone smiles, they pull their lips from the corners on either side of their mouth to the back of their teeth. For a full smile, you can see about 10 to 12 teeth at most.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do I get a perfect smile?
                                      </button>
                                    </h3>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>It depends on what you want your perfect smile to be.Some people want whiter teeth, and others might want straight teeth that don&apos;t look too conspicuous. It all depends on what you are looking for. Want to know more? Give us a call.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What is Digital Smile Design?
                                      </button>
                                    </h3>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>It is a treatment that analyses the facial as well as a dental structure using the help of advanced technology. It is a patient-centered design that helps a patient achieve a perfect smile.</p>
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

export default SmileDesign