import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import Banner from '../../../public/Dental-Implant/dentalimplant.jpg'
import After from '../../../public/Dental-Implant/Implant-after.jpg'
import Before from '../../../public/Dental-Implant/Implant-before.jpg'
import MySmilePlan from '../../../public/Dental-Implant/mysmileplan.png'

const DentalImplants = ({ data }) => {
  const [show, setShow] = useState(false)
  const [width, setWidth] = useState()
  const [blogs, setBlogs] = useState([])

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
    { id: "DentalImplants_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "DentalImplants_breadcrumb_2", link: null, title: 'Dental Implants in Carrum Downs' }
  ]
  return (
    <>
      <Head>
        <title>Dental Implants in Carrum Downs | Dentist in Carrum Downs</title>
        <meta name="description" content="Dental Implants are an effective way to deal with tooth loss. Our dental implants are made from Titanium. Call us today for your dental implants treatment." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Computer Guided Dental Implants in Carrum Downs" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {show ? <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl" className="p-0">
                        <Box>
                          <List>
                            <ListItem className='ps-0'>
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText primary={<strong>Complete Dental Implants with Crown normally $4500* is special on $3900*.</strong>} />
                            </ListItem>
                            <ListItem className='ps-0'>
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText primary="We use high quality State-Of-The-Art Implant kit from MIS Australia." />
                            </ListItem>
                            <ListItem className='ps-0'>
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText primary="15 Years+ experience in performing dental Implants." />
                            </ListItem>
                            <ListItem className='ps-0'>
                              <ListItemIcon>
                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                              </ListItemIcon>
                              <ListItemText primary="Flexible Payment plans available." />
                            </ListItem>
                          </List>
                        </Box>
                        <Typography className="para">Dental Implants with Crown have quickly become a very effective way for patients to deal with tooth loss. The dental Implants along with restoring the functionality of the tooth also increase an individual’s confidence to lead a normal life.</Typography>
                        <Typography className="para">Carrum Downs Dental Group’s Dental Implants are made from Titanium, a very strong material that is also compatible with human body. A crown placed on top of it will make it appear and function as a normal tooth and provides up to 90% chewing capacity.</Typography>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-4 bg-grey'>
                      <Container maxWidth="xxl" className='p-0'>
                        <Box p={3}>
                          <Box>
                            <SectionalHeading variant="h2" title="Choose Carrum Downs Dental at Shop T5, 100 Hall Road for all your Dental Implant requirements." align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                          </Box>
                          <Box mt={3}>
                            <Grid container spacing={5}>
                              <Grid item xs={12} md={6}>
                                <Box p={1} style={{ border: "2px solid #939393", borderRadius: "1rem" }}>
                                  <Image src={Before} alt="Implant Before" style={{ borderRadius: "1rem !important" }} />
                                </Box>
                              </Grid>
                              <Grid item xs={12} lg={6}>
                                <Box p={1} style={{ border: "2px solid #939393", borderRadius: "1rem" }}>
                                  <Image src={After} alt="Implant After" style={{ borderRadius: "1rem !important" }} />
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                          <Box mt={4}>
                            <Box>
                              <SectionalHeading variant="h2" title="Benefits of Dental Implant" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            </Box>
                            <Box>
                              <List>
                                <ListItem className="p-0">
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={
                                    <>
                                      Dental Implants are the best alternative for <a href="https://carrumdownsdental.com.au/service/missing-teeth/">missing teeth</a>,
                                      because they offer a permanent solution.
                                    </>
                                  } />
                                </ListItem>
                                <ListItem className="p-0">
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Dental Implants are very much like your natural teeth. They look and feel just like your real teeth." />
                                </ListItem>
                                <ListItem className="p-0">
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Chew better and Smile better." />
                                </ListItem>
                                <ListItem className="p-0">
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Fell the confidence in your rise again to the top." />
                                </ListItem>
                              </List>
                            </Box>
                          </Box>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-4'>
                      <Container maxWidth="xxl" className="p-0">
                        <Box>
                          <Box>
                            <SectionalHeading variant="h2" title="How does the Dental Implant procedure work in Carrum Downs Dental Group at Shop T5, 100 Hall Rd." align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                          </Box>
                          <Box mt={1}>
                            <SectionalHeading variant="h3" title="Dental Implant procedure follows the below steps" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Box>
                              <List>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Insertion of the Implant" />
                                </ListItem>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Allowing the gum to heal (Approx. 3 months for the bone to bond to Implant)" />
                                </ListItem>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Exposure of the Implant site" />
                                </ListItem>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Taking Impression for Crown preparation with Colour matching." />
                                </ListItem>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Insertion of Crown and Bridge or Over-denture." />
                                </ListItem>
                              </List>
                            </Box>
                            <Box mt={1} className="ratio ratio-16x9">
                              <iframe width="560" height="315" src="https://www.youtube.com/embed/tvXccIIeBeI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </Box>
                            <TermsNCondition />
                            <Box>
                              <Image src={MySmilePlan} alt="My Smile Plan" />
                            </Box>
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
                                    How long do dental implants last?
                                  </button>
                                </h3>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>Dental implants are considered the best alternative for lost teeth because they can last for a lifetime. With regular brushing, flossing and dental check-ups, they can offer a permanent solution. The crown, however, only lasts between 10 to 15 years before needing a replacement.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h3 className="accordion-header" id="headingTwo">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Are dental implants painful?
                                  </button>
                                </h3>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>The procedure of <a href="https://carrumdownsdental.com.au/top-5-common-myths-and-facts-of-dental-implants/">dental implants</a> is not painful since it’s performed with anaesthesia to numb the site of the implant. After the procedure, however, some patients may experience a mild, which can be relieved using painkillers.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h3 className="accordion-header" id="headingThree">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How long does dental implant surgery take?
                                  </button>
                                </h3>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>The time it takes to complete a dental implant surgery varies based on the technique your dentist decides to use and the location of the implant. Generally, it takes about 1 hour to place the implant.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h3 className="accordion-header" id="headingFour">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Is dental implant safe?
                                  </button>
                                </h3>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>Dental implants have been done safely for over 50 years with up to 98% success rate. This means it’s safe for almost anyone so long as your oral health is good.</p>
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
      </main> : null
      }
    </>
  )
}

export default DentalImplants
