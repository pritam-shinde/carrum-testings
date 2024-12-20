import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { BookAndCall, PPCBanner, SectionalHeading, InterestFree, TermsNCondition,  } from '../../components/components'
import {PaymentPlan} from '../../sections/sections'
import Banner from '../../public/ppcDentures/Banner.jpg'
import { CheckCircleOutline } from '@mui/icons-material'
import image1 from '../../public/ppcDentures/denture-3.jpg'
import image2 from '../../public/ppcDentures/denture-2.jpg'
import image3 from '../../public/ppcDentures/denture-1.jpg'

const Dentures = () => {
    return (
        <>
            <Head>
                <title>Dentures -</title>
                <meta name="description" content="" />
                <meta name="robots" content="noindex" />         
            </Head>
            <PPCBanner bg={Banner} title="Dentures" tagline="We offer the best solutions for dentures and have affordable denture options." align="end" />
            <main>
                <section>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={11} className="mx-auto">
                                <Box py={5}>
                                    <SectionalHeading variant="h2" title="What are Dentures?" align="center" color="var(--dark-blue)" />
                                    <Typography className='para'>Dentures are replacement teeth that are removable. With the technological advancements there are several types of Dentures available to suit individual patient’s needs on comfort, convenience and look. Your Dentist will help you choose the best solution for you.</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className='mt-4' >
                    <Grid container>
                        <Grid item xs={12} md={11} className="ms-auto">
                            <Box>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} md={6} className="pt-0 d-flex align-items-center justify-content-center">
                                        <Box>
                                            <SectionalHeading variant="h2" title="Advantages of Dentures" align="left" color="var(--dark-blue)" />
                                            <List>
                                                {
                                                    ["Improved ability to bite and chew", "Gives your face a fuller appearance", "Can be removed for proper cleaning and brushing", "Reduced speeches problems caused by gaps and missing teeth", "Protects remaining teeth (if any) from excess wear"].map(item => <ListItem key={item} className="ps-0">
                                                        <ListItemIcon>
                                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item} />
                                                    </ListItem>)
                                                }
                                            </List>
                                            <Box mt={3}>
                                                <BookAndCall appointment={true} call={true} />
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="pt-0">
                                        <Box className='square-right p-4 pe-md-0'>
                                            <Image src={image1} alt="Dental Emergency" style={{ borderRadius: "1.2rem 0 0 1.2rem !important" }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </section>
                <section className='mt-md-5 mt-4 bg-grey clipPathBgGreyUp'>
                    <Container maxWidth="xxl" className="p-0">
                        <Box p={3}>
                            <Grid container>
                                <Grid item xs={10} sm={8} lg={6} className="mx-auto">
                                    <SectionalHeading variant="h2" title="Our Advantages" align="center" color="var(--dark-blue)" />
                                    <Box mt={3}>
                                        <List>
                                            {
                                                ["Modern Dentistry", "After Hour Appointments", "Dental Insurance", "Dental Emergency"].map(item => <ListItem key={item}>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item} />
                                                </ListItem>)
                                            }
                                        </List>
                                    </Box>
                                    <Box mt={3} className="d-flex justify-content-center align-items-center">
                                        <BookAndCall appointment={true} call={true} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </section>
                <section className='mt-4'>
                    <Container maxWidth="xxl" className='p-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="me-auto">
                                <Box py={3}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} md={6}>
                                            <Box className='square-left p-4 ps-md-0'>
                                                <Image src={image3} alt="Dental Emergency" style={{ borderRadius: "0 1.2rem  1.2rem 0 !important" }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box>
                                                <SectionalHeading variant="h2" title="Denture procedure at Carrum Downs Dental Group" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'><strong>The exact denture procedure needed will vary with the type of denture needed. However the procedure will usually revolve around the following. You have an Initial Consultation with your dentist to assess your mouth for treatment planning.</strong></Typography>
                                                <List>
                                                    {
                                                        ["Preliminary impression of your teeth and gums are taken using a high quality impression material.", "Accurate impression trays specially made for your mouth are fabricated at the lab. On subsequent visits, more impressions with finer details will be taken. This gives our dentist an exact copy of your mouth that we can build your new dentures from.", "With help from your dentist you can decide which tooth shapes, sizes and colours fit your mouth and look right for you. Your ‘bite’ is also recorded by the dentist. In the case of complete dentures the dentist records where the bite of the new dentures needs to be. Our dentist works with you to get this accurately."].map(item => <ListItem key={item}>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item} />
                                                        </ListItem>)
                                                    }
                                                </List>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} className="pt-0">
                                            <List>
                                                {
                                                    ["A trial denture is made up to check for accuracy of fit and appearance. The trial denture will use the same colour and shape of teeth that will be on the final denture. Any changes are easily made at this stage. If changes are needed, new trial dentures are made up and checked with a ‘re-try’ visit.", "Once you and dentist are happy with the trial denture, the final denture is made at the lab.", "At least one review appointment is required to check how you and your mouth are adjusting to the denture. Some final adjustments to the denture may be needed."].map(item => <ListItem key={item}>
                                                        <ListItemIcon>
                                                            <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item} />
                                                    </ListItem>)
                                                }
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className='mt-3 bg-grey clipPathBgGreyDown'>
                    <Container maxWidth="xxl">
                        <Box py={12}>
                            <Grid container>
                                <Grid item xs={10} sm={8} lg={6} className="mx-auto">
                                    <SectionalHeading variant="h5" title="Book an appointment with Carrum Downs Dental (Shop T5, 100 Hall Road) on 03-9782 1200" align="center" color="var(--dark-blue)" />
                                    <Box mt={3} className="d-flex justify-content-center align-items-center">
                                        <BookAndCall appointment={true} call={true} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </section>
                <section className='mt-md-5 mt-3'>
          <PaymentPlan />
        </section>
        <section className='mt-md-5 mt-4'>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={6} className="mx-auto">
                <InterestFree />
                <TermsNCondition />
              </Grid>
            </Grid>
          </Container>
        </section>
            </main >
        </>
    )
}

export default Dentures;