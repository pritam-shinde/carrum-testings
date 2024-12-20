import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import Banner from '../../../public/CNB/Banner.jpg'
import CNBTeeth from '../../../public/CNB/defective-large-old-fillings.jpg'

const CNB = ({ data }) => {
  const [show, setShow] = useState(false);
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
  }, [])

  const breadcrumb = [
    { id: "CrownsBridges_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "CrownsBridges_breadcrumb_2", link: null, title: 'Crowns and bridge in Carrum Downs' }
  ]

  return (
    <>
      <Head>
        <title>Crown & Bridge in Carrum Downs | Carrum Downs Dental Clinic</title>
        <meta name="description" content="Crowns and Bridges restore damaged and missing teeth. We have the best dentist in Carrum Downs that provide the greatest dental services. Contact us today!" />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Crowns and bridge in Carrum Downs" align={width < 600 ? 'center' : 'left'} color="#fff" />
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
                            <SectionalHeading variant="h2" title="Crowns and Bridges – The Ultimate Tooth Restoration" align='center' color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} className="d-flex justify-content-center align-items-center">
                                  <Image src={CNBTeeth} alt="Crown Bridge Carrum Downs" />
                                </Grid>
                                <Grid item xs={12}>
                                  <Typography className='para'>A dental crown is a tooth-shaped “cap” that fits snuggly over a tooth, completely covering it. Usually a crown is required to restore the size, shape, strength, or appearance of a tooth. Crowns fix these issues by encasing the visible portion of the tooth that lies above the gumline.</Typography>
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className="p-0">
                            <Box p={3}>
                              <SectionalHeading variant="h2" title="A Crown may be needed in the following situations" align='left' color="var(--dark-blue)" />
                              <Box mt={3}>
                                <Box mb={2}>
                                  <SectionalHeading variant="h3" title="Defective Large Old Fillings." align='left' color="var(--dark-blue)" />
                                  <Typography className='para'>If a large, old filling is decayed, leaking, defective, or broken and needs replacement, sometimes the tooth cannot securely hold an even larger filling, and a crown is needed to fill out the tooth’s shape.</Typography>
                                </Box>
                                <Box mb={2}>
                                  <SectionalHeading variant="h3" title="Broken Teeth" align='left' color="var(--dark-blue)" />
                                  <Typography className='para'>If there is insufficient remaining natural tooth structure to hold a filling, a crown is needed.</Typography>
                                </Box>
                                <Box mb={2}>
                                  <SectionalHeading variant="h3" title="Root Canal Treated Teeth" align='left' color="var(--dark-blue)" />
                                  <Typography className='para'>Back teeth that have had a root canal should almost always be capped to prevent the weakened root canal-treated tooth from suffering catastrophic cracks.</Typography>
                                </Box>
                                <Box>
                                  <SectionalHeading variant="h3" title="Mal aligned Teeth" align='left' color="var(--dark-blue)" />
                                  <Typography className='para'>We can sometimes do instant orthodontics by preparing mal aligned front teeth and inserting crowns over top in a more ideal position to give you a beautiful smile.</Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h3" title="What are crowns made from?" align='left' color="var(--dark-blue)" />
                            <Typography className='para'>Crowns can be made from a variety of materials. They can be made from plastic, ceramic or metal alloys. A combination of metal and ceramic is also possible to maximise strength and simulate the appearance of natural teeth.</Typography>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Box p={3}>
                            <Container maxWidth="xxl" className='p-0'>
                              <SectionalHeading variant="h3" title="Procedure followed at Carrum Downs Dental Group for your Crown preparation" align='left' color="var(--dark-blue)" />
                              <Box>
                                <List>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="On your first visit a thorough clinical examination is conducted by the dentist with radiographs. During this time the suitability of the crown is assessed and any preparatory work is undertaken. Your dentist will explain the treatment sequence, material choices and will answer your concerns." />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="On your second visit, the teeth receiving crown is prepared. This involves reduction of the tooth size (usually under local anaesthesia) followed by an impression or mould of the prepared tooth. This trimming of the tooth is required to create space for the crown to be fitted. The mould taken is then sent to a laboratory where skilled technicians will fabricate the crown. In the meantime, a temporary crown is made and fitted onto the trimmed tooth." />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="On the third visit, the temporary crown is removed and the tooth surface is cleaned. The completed crown is tied on to the teeth, checked for correct bite fit and appearance. The crown is strongly cemented to the teeth." />
                                  </ListItem>
                                </List>
                              </Box>
                            </Container>
                          </Box>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="Bridges" align='left' color="var(--dark-blue)" />
                            <Typography className='para'>A bridge is designed to literally bridge a gap between one or more missing teeth. A bridge is cemented to the teeth adjacent to the gap.</Typography>
                            <Box>
                              <List>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Restores your natural beautiful smile. Bridges are designed to restore the aesthetics of your smile and Bridges help maintain the shape of your face so that cheeks do not sink where teeth are missing. And they can prevent teeth from drifting out of position." />
                                </ListItem>
                                <ListItem className='ps-0'>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Restored functionality of your mouth. Bridges help restore the functionality of the mouth, allowing you to eat and speak properly. Bridges can help distribute bite forces by replacing missing teeth" />
                                </ListItem>
                              </List>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="Procedure followed at Carrum Downs Dental Group for your Bridge preparation" align='left' color="var(--dark-blue)" />
                            <Box className="ratio ratio-16x9" mt={3}>
                              <iframe width="560" height="315" src="https://www.youtube.com/embed/cAAq6NWuWQQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <SectionalHeading variant="h2" title="Similar to Crown, Bridge preparation also needs three visits." align='left' color="var(--dark-blue)" />
                              <Box>
                                <List>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="On your first visit a thorough clinical examination is conducted by the dentist with radiographs. During this time the suitability of the bridge is assessed and any preparatory work is undertaken. Your dentist will explain the treatment sequence, material choices and will answer your concerns." />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="On your second visit, the teeth that serve as abutments are prepared for their crown. After the tooth has been reshaped, an impression of the area will be made. These impressions are used to fabricate a custom bridge. Your dentist may make a temporary bridge for you to wear in order to protect the exposed teeth and gums while your bridge is being made." />
                                  </ListItem>
                                  <ListItem className='ps-0'>
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="On the third visit, the temporary bridge is removed and the tooth surface is cleaned. The completed bridge is tied on to the teeth, checked for correct bite fit and appearance. The bridge is strongly cemented to the teeth." />
                                  </ListItem>
                                </List>
                              </Box>
                              <Box>
                                <BookAndCall appointment={true} call={true} />
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
                                        How long do a bridge and crown last?
                                      </button>
                                    </h3>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>A crown or bridge should last between 7 to 8 years. A correctly done crown and bridge could even last for a decade if the person is keen on oral hygiene and checks with the dentist every year for cleaning and follow-up. Although rare, well-maintained crowns and bridges could last a lifetime.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How many types of dental crowns are there?
                                      </button>
                                    </h3>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Dental crowns are of four different types: Ceramic (porcelain-based), Porcelain fused to metal, gold alloys and base metal alloys.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Can we floss the crowns and bridges?
                                      </button>
                                    </h3>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Yes. You should brush and floss your crown and bridge regularly to keep your mouth clean. However, during the first 24 hours after being placed, do not pull the thread through the gumline as this can loosen the crown.</p>
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

export default CNB;
