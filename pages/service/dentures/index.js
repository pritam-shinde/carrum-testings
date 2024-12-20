import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import DentureService from '../../../public/denture/denture-services.jpg'
import Banner from '../../../public/denture/denture.jpg'
import Denture1 from '../../../public/denture/denture1.jpg'
import Denture2 from '../../../public/denture/denture2.jpg'

const Denture = ({ data }) => {
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
    { id: "child_benefit_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "child_benefit_breadcrumb_2", link: null, title: 'Dentures in Carrum Downs' }
  ]

  return (
    <>
      <Head>
        <title>Dentures in Carrum Downs | Carrum Downs Dental Group Clinic</title>
        <meta name="description" content="Dentist in Carrum Downs Dental Group has extensive denture experience that satisfies every patient’s denture needs. We provide high quality of dentures." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Dentures in Carrum Downs" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {show ? <main>
        <Container maxWidth="xxl">
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Box py={5}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={8}>
                    <section>
                      <Container maxWidth="xxl" className='p-0'>
                        <Box>
                          <SectionalHeading variant="h2" title="We offer the best solutions for Dentures." align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                          <Box my={1}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} md={6}>
                                <Image src={Denture1} alt="Dentures In Carrum Downs" />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Image src={Denture2} alt="Denture Dentist with Patient" />
                              </Grid>
                            </Grid>
                          </Box>
                          <Typography className="para">Carrum Downs Dental Group at Shop T5, 100 Hall Rd Offers a wide range of dentures to satisfy each individual patient’s specific denture needs. We work with you to determine your exact requirements and what is required to meet them. We at Carrum Downs Dental Group take pride in the quality of our Dentures.</Typography>
                          <Typography className="para">Dentures can help restore your way of life by helping you with day-to-day functions, such as eating and speaking, as well as help restore your confidence by improving your appearance and smile.</Typography>
                        </Box>
                      </Container>
                    </section>
                    <section className='mt-md-5 mt-4 bg-grey'>
                      <Container maxWidth="xxl" className='p-0'>
                        <Box p={3}>
                          <Box>
                            <SectionalHeading variant="h2" title="What are Dentures?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Typography className="para">Dentures are replacement teeth that are removable. With the technological advancements there are several types of Dentures available to suit individual patient’s needs on comfort, convenience and look. Your Dentist will help you choose the best solution for you.</Typography>
                          </Box>
                          <Box>
                            <List>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary={<strong>Full dentures</strong>} secondary="If all the teeth are missing, this is a cost-effective way to replace all the teeth." />
                              </ListItem>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary={<strong>Partial dentures</strong>} secondary="Usually made out of acrylic or a metal framework to replace one or more teeth." />
                              </ListItem>
                            </List>
                          </Box>
                        </Box>
                        <Box p={3} mt={3}>
                          <Grid container spacing={5}>
                            <Grid item xs={12}>
                              <SectionalHeading variant="h2" title="Advantages of Dentures." align='center' color="var(--dark-blue)" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Image src={DentureService} alt="Denture Carrum Downs" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <List className="p-0 m-0">
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Improved ability to bite and chew" />
                                </ListItem>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Gives your face a fuller appearance" />
                                </ListItem>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Can be removed for proper cleaning and brushing" />
                                </ListItem>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Reduced speeches problems caused by gaps and missing teeth" />
                                </ListItem>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Protects remaining teeth (if any) from excess wear" />
                                </ListItem>
                              </List>
                            </Grid>
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                    <section className="mt-md-5 mt-4">
                      <Container maxWidth="xxl" className='p-0'>
                        <Box>
                          <SectionalHeading variant="h2" title="Denture procedure at Carrum Downs Dental Group:" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                          <Typography className="para">The exact denture procedure needed will vary with the type of denture needed. However the procedure will usually revolve around the following. You have an Initial Consultation with your dentist to assess your mouth for treatment planning.</Typography>
                          <Box>
                            <List>
                              <ListItem className="ps-0">
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="Preliminary impression of your teeth and gums are taken using a high quality impression material." />
                              </ListItem>
                              <ListItem className="ps-0">
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="Accurate impression trays specially made for your mouth are fabricated at the lab. On subsequent visits, more impressions with finer details will be taken. This gives our dentist an exact copy of your mouth that we can build your new dentures from." />
                              </ListItem>
                              <ListItem className="ps-0">
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText>With help from your dentist you can decide which tooth shapes, sizes and colours fit your mouth and look right for you. Your ‘bite’ is also recorded by the dentist. In the case of complete dentures the dentist records where the bite of the <a href="https://carrumdownsdental.com.au/service/digital-dentures/">new dentures</a> needs to be. Our dentist works with you to get this accurately.</ListItemText>
                              </ListItem>
                              <ListItem className="ps-0">
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="A trial denture is made up to check for accuracy of fit and appearance. The trial denture will use the same colour and shape of teeth that will be on the final denture. Any changes are easily made at this stage. If changes are needed, new trial dentures are made up and checked with a ‘re-try’ visit." />
                              </ListItem>
                              <ListItem className="ps-0">
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="Once you and dentist are happy with the trial denture, the final denture is made at the lab." />
                              </ListItem>
                              <ListItem className="ps-0">
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="At least one review appointment is required to check how you and your mouth are adjusting to the denture. Some final adjustments to the denture may be needed." />
                              </ListItem>
                            </List>
                          </Box>
                          <Typography className="para"><strong style={{ color: "var(--dark-blue)" }}>At Carrum Downs Dental we use Australian owned and licensed dental labs in Melbourne. The dental lab technician creates your dentures in the lab. She works closely with our dentist to gain the desired result. Using a local dental lab allows us to provide you with your dentures in a timely manner.</strong></Typography>
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
                                    How much do dentures cost?
                                  </button>
                                </h3>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>Depending on the denture being Acrylic or Chrome (metal), the cost for a single arch can vary from $700 to $1300.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h3 className="accordion-header" id="headingTwo">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How to clean dentures?
                                  </button>
                                </h3>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>Dentures need to be removed for proper cleaning. Soak and brush things using a soft-bristled brush and a denture antibacterial cleaner to remove food, plaque and other debris.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h3 className="accordion-header" id="headingThree">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Can cracked dentures be repaired?
                                  </button>
                                </h3>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>Oftentimes, a broken or chipped denture can be easily repaired. Your dentist removes the damaged tooth, takes proper measurements and replaces it to match the rest of the denture.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h3 className="accordion-header" id="headingFour">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Can I sleep with partial dentures?
                                  </button>
                                </h3>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p className='para'>You can sleep and eat with a partial denture without any problem. However, sometimes it might feel more comfortable to take it off when you sleep, but that’s up to you.</p>
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
        : null
      }
    </>
  )
}

export default Denture; 
