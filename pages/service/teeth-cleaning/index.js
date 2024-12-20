import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import Banner from '../../../public/TeethCleaning/teeth-cleaing-bg.jpg'

const TeethCleaning = ({ data }) => {
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
    { id: "TeethCleaning_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "TeethCleaning_breadcrumb_2", link: null, title: 'Teeth Cleaning' }
  ]

  return (
    <>
      <Head>
        <title>Professional Dental Scale and Clean | Carrum Downs Dentist</title>
        <meta name="description" content="We offer a highly professional dental Scaling & Cleaning service which is tailored to the individual and will ensure the safe treatment and impressive results." />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/service/teeth-cleaning/" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Teeth Cleaning in Carrum Downs" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                      <section>
                        <Container maxWidth="xxl" className="p-0">
                          <SectionalHeading variant="h2" title="Professional Dental Scale and Clean" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                          <Typography className='para'>Oral health plays an important factor in our everyday life. Every year, millions of people go to their dentist for a check-up and Scale & Clean. This is quite important as our overall health is related to our oral health. The build-up of bacteria and/or plaque in the mouth can travel to other parts of the body, causing serious health problems.</Typography>
                          <Typography className='para'>It is important that you see your dentist twice a year for an overall check-up of your dental health as well as having your teeth professionally cleaned. If you don’t already have an appointment for your next visit, feel free to call us here at Carrum Downs Dental Group.</Typography>
                        </Container>
                      </section>
                      <section className='mt-md-5 mt-4 bg-grey'>
                        <Container maxWidth="xxl" className='p-0'>
                          <Box p={3}>
                            <Box>
                              <SectionalHeading variant="h2" title="What is a Professional Clean?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                              <Typography className='para'>Professional cleaning is also called as dental prophylaxis, it’s refers to removal of plaque, calculus and stains from the teeth both above and below the gum line. It also involves scaling and polishing to remove plaque as well as to keep it from attaching itself to the teeth in the future.</Typography>
                            </Box>
                            <Box mt={3}>
                              <SectionalHeading variant="h2" title="What to Expect during your Scale/Clean at Carrum Downs Dental Group" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                              <Typography className='para'>Your dentist will usually do a thorough check-up of your teeth and gums, possibly followed by a taking x-rays (if required) to ensure that you do not have any cavities in your teeth. If the x-ray does show a cavity, your dentist will correct that problem, or any other dental problems he may find, before the cleaning is done.</Typography>
                            </Box>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-md-5 mt-4'>
                        <Container maxWidth="xxl" className='p-0'>
                          <SectionalHeading variant="h2" title="Cleaning the teeth involves the following steps:" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                          <Box>
                            <List>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="Your dentist will inspect your mouth for bleeding or inflamed gums, infections, sores, or any other concerns." />
                              </ListItem>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="Your dentist will then use a cleaning agent that will free any deep level plaque that has grown around your teeth or gums." />
                              </ListItem>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="By scraping along the teeth and gums, your hygienist will remove even more of the plaque that is difficult to remove." />
                              </ListItem>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="Your dentist will floss your teeth to be certain every area has been thoroughly cleaned of all plaque." />
                              </ListItem>
                              <ListItem className='ps-0'>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                </ListItemIcon>
                                <ListItemText primary="A fluoride treatment may be applied at this time if your dentist thinks it’s required." />
                              </ListItem>
                            </List>
                          </Box>
                          <Typography className='para'>At the end of your professional cleaning, your dentist will discuss your oral condition with you if she has not already done so, as well as any other treatments you may need. Before you leave the office, this would be an excellent time to schedule your next professional cleaning and check-up at Carrum Downs Dental group to ensure your smile stays beautiful and healthy.</Typography>
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
                                      How many times a year should you have teeth cleaning?
                                    </button>
                                  </h3>
                                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>If you have good oral hygiene and a healthy mouth, your teeth need professional cleaning twice a year. Many dental insurance policies cover two cleanings per year.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      Does it hurt to get your teeth cleaned?
                                    </button>
                                  </h3>
                                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>It’s evident that most people dread teeth cleanings due to the prodding, the strange noises and jaw discomfort. We use numbing gel if required to reduce any sensitivity and can do it slowly to ensure you are comfortable.</p>
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
        </> : null
      }
    </>
  )
}

export default TeethCleaning;