import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Banner from '../../../public/ToothFillings/teeth-fillings-bg.jpg'
import { CommonHero, CommonSidebar, SectionalHeading, TermsNCondition, InterestFree, BookAndCall, CustomCard } from '../../../components/components'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'

const ToothFillings = ({ data }) => {
  const [show, setShow] = useState(false)
  const [width, setWidth] = useState()
  const [blogs, setBlogs] = useState([])
  // const [category] = data

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
    { id: "DentalFillings_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "DentalFillings_breadcrumb_2", link: null, title: 'Tooth Fillings' }
  ]
  return (
    <>
      <Head>
        <title>Tooth Fillings | Carrum Downs Dentist</title>
        <meta name="description" content="Your teeth will be restored to a natural look and feel. Our experienced dentists in Carrum Downs are specialized in tooth fillings. Call us now!" />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Tooth Fillings" align={width < 600 ? "center" : 'left'} color="#fff" />
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
                            <Typography className='para'>Restorations have changed from years, but many people still have silver/mercury fillings. These fillings are not pleasing to the eye, and also don’t provide the strongest tooth structure. Porcelain and Tooth Coloured Restorations (inlays/onlays) create fillings that are not only beautiful (or unnoticeable) but also add strength to the weakened tooth. Thanks to the new bonding technologies.</Typography>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <Box>
                                <Typography variant='h2' className='fs-2 heading-color'>Silver Filling – Disadvantages</Typography>
                                <Typography className='para'>Drawbacks of Silver fillings are many. The edges of the silver filling can wear down, become weak or break. This results in the tooth not being protected and lets cavities get started once again. With age, the metal of a silver filling expands, contracts, and can split. Silver fillings contain 50 percent mercury. They can corrode, leak and cause stains on your teeth and gums.</Typography>
                                <Typography className='para'>Thankfully, most silver fillings can safely be replaced with Tooth-Coloured Restorations.</Typography>
                              </Box>
                              <Box mt={3}>
                                <Typography variant='h3' className='fs-3 heading-color'>Advantages of Tooth-Coloured Restorations</Typography>
                                <Typography className='para'>Advantages of tooth-coloured restorations are many. Resin inlays/onlays bond to the tooth creating a tight, superior fit to the natural tooth. Such restorations can be used in instances where much of the tooth structure has been lost. The tooth remains intact and stronger.</Typography>
                                <Typography className='para'><strong>Resulting in a Very Beautiful Smile</strong></Typography>
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt'>
                          <Container maxWidth="xxl" className='p-0'>
                            <Typography variant='h2' className='fs-2 heading-color'>Replacing Silver Fillings at Carrum Downs Dental Group</Typography>

                            <Typography className='para'>Have your silver fillings replaced with tooth-coloured restorations. This process requires one appointment.</Typography>
                            <Box mt={2}>
                              <Typography variant='h3' className='fs-3 heading-color'>For a tooth-coloured restoration:</Typography>

                              <Box>
                                <List>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="The old filling is removed along with any additional decay." />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="A conditioning gel is placed on your tooth to prepare it for the new restoration." />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Bonding agent and resin (white filling) is placed on the tooth and a high-intensity light bonds the resin to the tooth." />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="The tooth is then polished" />
                                  </ListItem>
                                </List>
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <Typography variant='h2' className='fs-2 heading-color'>For a porcelain or resin inlay/onlay:</Typography>

                              <Box mt={2}>
                                <Typography variant='h3' className='fs-5 heading-color'>Your first appointment:</Typography>
                                <Box>
                                  <List>
                                    <ListItem className='ps-0'>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary="The old filling is removed along with any additional decay." />
                                    </ListItem>
                                    <ListItem className='ps-0'>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary="An impression is made to create a model of your teeth and sent to a Local Australian Dental Lab." />
                                    </ListItem>
                                    <ListItem className='ps-0'>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary="A temporary inlay/onlay is placed in the tooth." />
                                    </ListItem>
                                  </List>
                                </Box>
                                <Typography className='para'><strong>At the Local Australian Lab:</strong> A resin is carefully placed into the model of your teeth. It is then designed to look natural.</Typography>
                              </Box>
                              <Box mt={2}>
                                <Typography variant='h3' className='fs-5 heading-color'>Your second appointment:</Typography>
                                <Box>
                                  <List>
                                    <ListItem className='ps-0'>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary="The temporary inlay/onlay is removed." />
                                    </ListItem>
                                    <ListItem className='ps-0'>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary="A conditioning gel is placed on your tooth to prepare it for the new inlay/onlay." />
                                    </ListItem>
                                    <ListItem className='ps-0'>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary="Bonding agent is placed on the tooth and a high-intensity light bonds the porcelain/resin to the tooth." />
                                    </ListItem>
                                    <ListItem className='ps-0'>
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary="The tooth is then polished." />
                                    </ListItem>
                                  </List>
                                </Box>
                                <Typography className='para'><strong>Your teeth will be restored to a natural look and feel, more importantly they are now stronger and protects your teeth from further damage.</strong></Typography>
                                <Box mt={2}>
                                  <BookAndCall appointment={true} call={true} />
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
                                        How much does a tooth filling cost?
                                      </button>
                                    </h3>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>The cost of filing will be determined by the extent of damage, materials to be used and the procedures involved in the operation.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Can you eat after tooth filling?
                                      </button>
                                    </h3>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>The fillings do not harden immediately after the procedure, so it’s recommended to wait for at least 24 hours before chewing hard foods.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        How to reduce tooth pain after filling
                                      </button>
                                    </h3>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>There are different ways to relieve pain after tooth filling, such as avoiding extreme temperatures both too hot and too cold. In addition, use a toothpaste that’s designed for sensitive teeth. You can also take painkillers such as ibuprofen and acetaminophen.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingFour">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Is it normal for a tooth to be sensitive after filling?
                                      </button>
                                    </h3>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Most people will experience tooth sensitivity after filling, but this should not last for more than a week. During this time, avoid sensitivity exposing it to triggers such as pressure, sweet foods, air and temperature.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingFive">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Which dental filling is best for the tooth?
                                      </button>
                                    </h3>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Composite fillings are the recommended option because they can be designed to match the appearance of your teeth. They are more expensive than silver fillings but not as durable. Porcelain-based ceramic fillings are also aesthetically pleasing and long-lasting.</p>
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
                        <section className="mt-md-5 mt-4">
                          <Container maxWidth="xxl" className="p-0">
                            <Box mt={3}>
                              <Grid container spacing={3}>
                                {
                                  blogs.map(item => <Grid item key={item.id} xs={12} md={6} >
                                    <CustomCard cardMedia={item._embedded ? item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0] ? item._embedded['wp:featuredmedia'][0].source_url : null : null : null} navlink={true} link={`/${item.slug}/`} cardTitle={item.title.rendered} cardPara={`${item.excerpt.rendered.split(" ").slice(0, 20).join(" ")} [...]`} cardHeight="auto" cardCls="shadow grow m-3" List={null} cardMediaAlt={item ? item._embedded ? item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0] ? item._embedded['wp:featuredmedia'][0].alt_text ? item._embedded['wp:featuredmedia'][0].alt_text : null : null : null : null : null} />
                                  </Grid>)
                                }
                              </Grid>
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

export default ToothFillings