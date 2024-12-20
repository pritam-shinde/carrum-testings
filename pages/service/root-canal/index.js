import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../../../public/RootCanal/root-canal-bg.jpg'
import RootCanalDia from '../../../public/RootCanal/root-canal.jpg'
import { CommonHero, CommonSidebar, SectionalHeading, CustomCard, BookAndCall, InterestFree, TermsNCondition } from '../../../components/components'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'

const RootCanal = ({ data }) => {
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
    { id: "RootCanal_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "RootCanal_breadcrumb_2", link: null, title: 'Root Canal in Carrum Downs' }
  ]

  return (
    <>
      <Head>
        <title>Dental Root Canal Treatment | Carrum Downs Family Dental Clinic</title>
        <meta name="description" content="Carrum Downs Dental Group dentists are experienced and specialized in the root canal treatment. Have a look at the root canal treatment video here." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Root Canal in Carrum Downs" align={width < 600 ? 'center' : 'left'} color="#fff" />
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
                            <SectionalHeading title="Root Canal –Your Teeth has Nerves!" variant="h2" align='center' color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} lg={6}>
                                  <Image src={RootCanalDia} alt="Root Canal Carrum Downs" />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                  <Typography className='para'>Teeth are tough outside due to the strong enamel but on inside they are pulp cavity with a root canal that has nerves. Root Canal treatment is performed on infected or inflamed tooth most likely due to untreated cavity.</Typography>
                                  <Typography className='para'>In Carrum Downs Dental Group at Shop T5, 100 Hall Road, we perform Root Canal treatment to save the tooth by removing the infection and the associated pain.</Typography>
                                </Grid>
                              </Grid>
                              <Typography className='para'>The dentist as part of the treatment will remove the infected tooth pulp, nerves causing the pain and will seal the pulp with a material to prevent any further infection.</Typography>
                              <Typography className='para'>After the root canal procedure is complete the dentist will restore the tooth with a crown to protect the tooth from breaking in future.</Typography>
                            </Box>
                          </Container>
                        </section>
                        <section className="mt-md-5 mt-4 bg-grey">
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <Box>
                                <SectionalHeading title="When do you need a root canal treatment at Carrum Downs Dental?" variant="h2" align='left' color="var(--dark-blue)" />
                                <Box>
                                  <List>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                      </ListItemIcon>
                                      <ListItemText primary="Pain due to hot/cold food that stays after consumption" />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                      </ListItemIcon>
                                      <ListItemText primary="Constant pain" />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                      </ListItemIcon>
                                      <ListItemText primary="Radiating pain, which can radiate to neck and shoulders" />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                      </ListItemIcon>
                                      <ListItemText primary="Swelling" />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                      </ListItemIcon>
                                      <ListItemText primary="Injury or trauma due to an accident" />
                                    </ListItem>
                                    <ListItem className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                      </ListItemIcon>
                                      <ListItemText primary="Large untreated decay on the tooth" />
                                    </ListItem>
                                  </List>
                                </Box>
                              </Box>
                              <Box mt={3}>
                                <SectionalHeading title="Why should you go for root canal treatment?" variant="h2" align='left' color="var(--dark-blue)" />
                                <Typography className='para'>The cheaper option to relieve oneself of pain is to extract the infected tooth but the natural tooth provides much functionality that cannot be fully replaced with artificial tooth. Therefore if possible the tooth needs to be saved by performing root canal.</Typography>
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading title="What is the treatment procedure?" variant="h2" align='left' color="var(--dark-blue)" />
                            <Typography className='para'>The root canal treatment at Carrum Downs Dental is performed under 3 appointments.</Typography>
                            <Box mt={3}>
                              <List>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong>Appointment 1:</strong>} secondary="Under local anaesthesia, the tooth pulp, infection and nerves are removed through a small access hole made on top of the tooth. The tooth is washed with antibacterial solution to prevent further infections; an antibiotic/painkiller is placed into the tooth and filled with a temporary filling to cover the access. Dentist may prescribe some painkillers to keep you pain free for the next day or two." />
                                </ListItem>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong>Appointment 2:</strong>} secondary="The dentist on the second appointment will open the access again to ensure the infections are completely removed. Endodontic files will be used to even the internal surface. This stage may repeat until the dentist is satisfied that the tooth is bacteria free." />
                                </ListItem>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong>Appointment 3:</strong>} secondary="The infection-free root canal is then sealed with long-lasting barrier materials (the root filling). The tooth then undergoes restoration and the biting surfaces need protection – an artificial biting surface for the tooth is fashioned out of regular filling material. In many cases, where there is considerable loss of the tooth structure, there may be a need for an artificial crown made from porcelain or gold alloy or other materials." />
                                </ListItem>
                              </List>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl">
                            <Box p={3}>
                              <SectionalHeading title="What happens after the treatment is complete?" variant="h2" align='left' color="var(--dark-blue)" />
                              <Box my={3}>
                                <List>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="The vast majority of people who undergo root canal treatment can expect a functional tooth after the treatment." />
                                  </ListItem>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="The treated tooth should last as long as you’re other teeth, provided the tooth is kept clean and that you maintain excellent oral hygiene." />
                                  </ListItem>
                                </List>
                              </Box>
                              <Typography className='para'>Please call Carrum Downs Dental Group at Shop T5, Hall Road on 03-9782 1200 for your Root Canal treatment.</Typography>
                              <Typography className='para'>If you are Anxious about getting the dental treatment done, we can also provide Laughing Gas or Happy Gas sedation to help reduce your pain and anxiety during the treatment.</Typography>
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
                                        What is a root canal?
                                      </button>
                                    </h3>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>The root canal procedure involves removing the pulp (soft centre of the tooth), and the inside of the tooth is carefully cleaned, then filled and sealed. It’s designed to relieve pain and save your natural tooth.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How much does a root canal cost?
                                      </button>
                                    </h3>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>The cost varies depending on how the tooth is affected. For the front tooth the cost starts from as little as $1000.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Do root canals hurt?
                                      </button>
                                    </h3>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>No. Patients are given local anaesthesia to make the procedure less painful. However, a root can get sore after the procedure and cause mild discomfort for a few days.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingFour">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How long does a root canal take?
                                      </button>
                                    </h3>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>A root canal is usually a one-and-a-half-hour procedure that can sometimes require a second appointment with your dentist.</p>
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

export default RootCanal
