import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import image1 from '../../../public/digital-denture/digital-denture-1.jpg'
import image2 from '../../../public/digital-denture/digital-denture-2.jpg'
import image3 from '../../../public/digital-denture/digital-denture-3.jpg'
import Banner from '../../../public/digital-denture/digital-denture-banner.jpg'


const DigitalDentures = () => {
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
    { id: "DigitalDentures_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "DigitalDentures_breadcrumb_2", link: null, title: 'Digital Dentures' }
  ]

  return (
    <>
      <Head>
        <title> Digital Dentures in Carrum Downs | Carrum Downs Dental Group</title>
        <meta name="description" content="Carrum Downs Dental Clinic offering digital denture services, a latest innovation in dental care has given people a new way to smile and chew comfortably." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Digital Dentures Carrum Downs Dental Clinic" align={width < 600 ? 'center' : 'left'} color="#fff" />
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
                            <SectionalHeading variant="h2" title="Digital Dentures Carrum Downs Dental Clinic" align='center' color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12}>
                                  <Typography className='para'>As technology continues to advance, so does the field of dentistry. The latest innovation in dental care has given people a new way to smile and chew comfortably – digital dentures! Dentists now use state-of-the-art software, imaging systems, and 3D printing technology to create customized dentures with an improved fit, function, and aesthetics. </Typography>
                                  <Typography className='para'>At Carrum Downs Dental Clinic, we take pride in offering digital denture services. We understand that every patient has their own unique needs. Therefore, we strive to offer individualized services to meet their needs.</Typography>
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>

                        <section>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="What are Digital Dentures?" align='center' color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                  <Typography className='para'>Digital dentures are a recent innovation that uses 3D scanning, design, and printing to fabricate a denture prosthetic. The technology enables the dentist to create more precise, comfortable, and aesthetically pleasing dentures than traditional ones. Digital dentures are designed using specialized software for greater accuracy and customization.</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Image src={image1} alt="girl smiling" />
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className='p-0'>

                            <Box p={3}>
                              <SectionalHeading variant="h2" title="Advantages of Digital Dentures" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />

                              <List>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText><strong>Comfortable than traditional dentures</strong> The denture is designed in a way that they will feel comfortable to wear. This will cause less irritation and sores on the gums.  <a href='https://carrumdownsdental.com.au/service/dentures/'>traditional dentures</a> are often uncomfortable, ill-fitting, and can irritate the gums. </ListItemText>
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong>Aesthetically pleasing than traditional dentures.</strong>} secondary="Digital dentures are designed in a way that they will match the natural color of your teeth. This will make them look more realistic and natural and thus enhance their aesthetic appeal." />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong>The speed at which they can be made</strong>} secondary="It can take up to a week to create traditional dentures. However, digital dentures can be made in a few days. This is because creating digital dentures is much faster than traditional methods since it uses the latest technology." />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong>Easy Adjustments</strong>} secondary="It is quite easy to adjust digital dentures since they have been made using CAD/CAM technology. This means that if your dentures need to be adjusted, your dentist can do so in just a few hours instead of days." />
                                </ListItem>
                              </List>
                            </Box>
                          </Container>
                        </section>

                        <section>
                          <Container maxWidth="xxl" className='p-0 mt-4'>
                            <SectionalHeading variant="h2" title="How is Digital Dentures made?" color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                  <Image src={image2} alt="girl smiling" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Typography className='para'>The dentist will first take a 3D scan of your mouth. The scan will be used to create a digital model of your mouth, which will then be used to design the dentures. The model will help the dentist to customize the dentures in a way that will perfectly fit your mouth. The customization will factor in several factors, such as the shape, size, and position of your teeth and gums. Once the digital model is created, it will then be sent to a 3D printer to create physical dentures. </Typography>
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>

                        <section>
                          <Container maxWidth="xxl" className='p-0 mt-4'>
                            <SectionalHeading variant="h2" title="What are they Made from?" color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                  <Typography className='para'>Digital dentures are made from high-quality, durable, and long-lasting materials. They are made from a PMMA material and designed using 3-shape camera software. The resulting model is actually three times harder than traditional dentures. </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Image src={image3} alt="girl smiling" />
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>

                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className='p-0'>

                            <Box p={3}>
                              <SectionalHeading variant="h2" title="How Much Do Digital Dentures Cost" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                              <Typography className='para'>The cost of digital dentures varies depending on a number of factors, which include the material used and the complexity of the design. Digital dentures tend to have a higher initial cost. However, several long-term benefits can make them a better investment. For example, they are less likely to break and often last longer. They are also easier to clean and maintain, saving you money on dental bills in the long run.</Typography>

                              <SectionalHeading variant="h2" title="Why Choose Carrum Downs Dental Clinic for Digital Dentures?" color="var(--dark-blue)" />
                              <Box mt={3}>
                                <Grid container>
                                  <Grid item xs={12}>
                                    <Typography className='para'>Carrum Downs Dental Clinic is committed to providing our patients the best possible care. Our team of highly trained dental professionals has extensive experience in digital dentures. We use the latest technology to create comfortable, aesthetically pleasing, long-lasting dentures.</Typography>
                                    <Typography className='para'>We understand that getting a new set of dentures can sometimes be quite doubting. Therefore, we take time to explain to our patients the benefits that come with it as well as other alternatives they may want to consider. </Typography>
                                    <Typography className='para'>We are dedicated to providing a comfortable and stress-free experience for all our patients. Our dentists will work hard to ensure you feel confident and happy with their new dentures.</Typography>

                                  </Grid>
                                </Grid>
                              </Box>
                            </Box>

                          </Container>
                        </section>

                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>

                            <Box mt={3}>
                              <Grid container>

                                <Grid item xs={12}>
                                  <Box p={1}><Typography variant="para"><strong>Full digital Accuracy</strong>, this means you receive the highest quality products possible with the technology available. We design using the best dental software and the highest quality printers on the market for a Precise fit every time.</Typography></Box>
                                  <Box p={1}><Typography variant="para"><strong>All Digital Files</strong>, storing all the patients information(scans and designs) we are able to reprint all old cases that patients may either damage or lose over time. We simply take the old files and send them off to our lab to be printed/milled.</Typography></Box>
                                  <Box p={1}><Typography variant="para"><strong>High Quality materials</strong>, All materials pass a durability and quality check resulting in a better and more durable denture. The Base is milled in a high quality dental grade PMMA material and teeth are in a multi-layer PMMA material. </Typography></Box>
                                  <Box p={1}><Typography variant="para"><strong>Faster turnaround times</strong>, traditionally can take weeks but with digital we can receive the scans the same day and have a try in for the patient the next day printed. </Typography></Box>
                                  <Box p={1}><Typography variant="para"><strong>Fewer appointments</strong>, having scans we don't need multiple appointments. We can cut out special trays with a scanner and can go straight to finish on more cases with bites provided.</Typography></Box>
                                  <Box p={1}><Typography variant="para"><strong>Lower the costs</strong>, fewer appointments means saving money and time.</Typography></Box>

                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="Contact Us Today" color="var(--dark-blue)" />
                            <Box mt={3}>
                              <Grid container>
                                <Grid item xs={12}>
                                  <Typography className='para'>If you are considering digital dentures or have any questions about the process, please don't hesitate to contact us at <a href="https://carrumdownsdental.com.au/">Carrum Downs Dental Clinic</a>. Our team of dental professionals would be happy to discuss your options and help you determine the best course of treatment. We look forward to hearing from you soon!</Typography>
                                </Grid>
                              </Grid>
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

export default DigitalDentures
