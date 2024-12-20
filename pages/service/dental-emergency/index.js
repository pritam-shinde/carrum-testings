import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import Banner from '../../../public/DentalEmergency/dental-emergency-bg.jpg'

const DentalEmergency = () => {
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
    { id: "DentalEmergency_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "DentalEmergency_breadcrumb_2", link: null, title: 'Dental Emergency in Carrum Downs' }
  ]


  return (
    <>
      <Head>
        <title>Dental Emergency in and around Carrum Downs & other Suburbs</title>
        <meta name="description" content="If you are in a dental emergency and in need of immediate dental care, please call our clinic on 03-9782 1200 to book your dental appointment." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Dental Emergency in Carrum Downs" align={width < 600 ? 'center' : 'left'} color="#fff" />
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
                            <SectionalHeading variant="h2" title="Dental Emergency" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Typography className='para'>Nothing is worse than having an issue with your tooth. The pain which can be experienced can often be excruciating, plus some tooth problems can be quite dangerous, when you’ve got dental emergency, it is extremely important that you look into the problem as soon as you can and seek treatment from a dentist.</Typography>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <SectionalHeading variant="h2" title="Some of the common dental emergencies include:" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                              <Box>
                                <List>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Broken Teeth" />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Knocked Out Teeth" />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Abscess or Swelling" />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Lost or Broken Dentures" />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Lost or Broken Fillings" />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Broken Crown" />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Broken or Loose Implants" />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Impacted or Wisdom tooth" />
                                  </ListItem>
                                </List>
                              </Box>
                              <Typography className='para'>Carrum Downs Dental Group’s policy is to cater for all dental emergencies during our working hours. Our dentists take the best effort to see all dental emergencies with immediate or same day appointments. Carrum Down’s dental emergency service covers wide areas of South Eastern suburbs of Melbourne.</Typography>
                              <Typography className='para'>If you are in a dental emergency and in need of immediate dental care, please call our clinic on <strong><a href="tel:(03) 9782 1200">(03) 9782 1200</a></strong> to book your dental appointment. Carrum Downs Dental is happy to serve on your dental emergency without any extra cost.</Typography>
                              <Typography className='para'>If you have a dental emergency After hours or on Sundays please call the Royal Dental Hospital on <a href='tel:1300 360 054'>1300 360 054</a>.</Typography>
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
                                        When is it a dental emergency?
                                      </button>
                                    </h3>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>It’s any dental problems that require immediate treatment to alleviate severe pain, excessive bleeding or save a tooth. This includes avulsed teeth, damaged filling or crown, loose or cracked teeth and life-threatening infections.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How much is the emergency dental treatment?
                                      </button>
                                    </h3>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>If you don’t have dental insurance, the cost of your emergency dental treatment will depend on the option you choose, including dental crown, filled cavity, tooth extraction and root canal..</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Can you go to the hospital for a dental emergency?
                                      </button>
                                    </h3>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>If you have a dental emergency, maybe your tooth got hit and is loose or has fallen out, you may be in severe pain. A hospital can help you with over-the-counter medications and probably stop bleeding.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingFour">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Does health insurance cover emergency dental?
                                      </button>
                                    </h3>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Yes, most insurances cover emergency dentistry.</p>
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

export default DentalEmergency
