import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import image1 from '../../public/ppccdbs/CDBS-2.jpg'
import image2 from '../../public/ppccdbs/CDBS-1.webp'
import Banner from '../../public/ppccdbs/Banner.jpg'
import { SectionalHeading, BookAndCall, TermsNCondition, InterestFree, PPCBanner } from '../../components/components'
import { PaymentPlan } from '../../sections/sections'
import { CheckCircleOutline } from '@mui/icons-material'
import Styles from '../../styles/pages-style/PPCDentalEmergency.module.css'

const CDBS = () => {
    return (
        <>
            <Head>
                <title>Child Dental Benefit Schedule -</title>
                <meta name="description" content="" />
                <meta name="robots" content="index" />
            </Head>
            <PPCBanner bg={Banner} title="Grow Up Smiling" tagline=" Child Dental Benefit Schedule (CDBS)" align='start' />
            <main>
                <section>
                    <Container maxWidth="xxl" className='p-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="ms-auto">
                                <Box py={5}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} md={6} className="d-flex align-items-center">
                                            <Box>
                                                <SectionalHeading variant="h2" title="Child Dental Benefit Schedule" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>Thanks to the Australian Governments CDBS program. Eligible Kids between 2 – 17 years can get up to $1000* worth of dental services. Carrum Downs Dental Group at Shop T5, 100 Hall Road can BULK BILL treatment costs under this program for eligible kids.</Typography>
                                                <Typography className='para'>If you are not sure if you are eligible just give us a call and provide your medicate number. We will be able to confirm if you are eligible.</Typography>
                                                <Typography className='para'>At Carrum Downs Dental Group we have a play area for kids to engage themselves before the treatment. Also, during the treatment we can provide the child with distraction or entertainment with Kids channels or Movies while we gently complete the dental treatment.</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box className='square-right p-4 pe-md-0'>
                                                <Image src={image1} alt="teeth whitening bayswater" style={{ borderRadius: "1.2rem 0 0 1.2rem !important" }} />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className='mt-4'>
                    <Container maxWidth="xxl" className='p-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="me-auto">
                                <Box py={5}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} md={6}>
                                            <Box className='square-left p-4 ps-md-0'>
                                                <Image src={image2} alt="Dental Emergency" style={{ borderRadius: "0 1.2rem  1.2rem 0 !important" }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} className="d-flex align-items-center">
                                            <Box>
                                                <SectionalHeading variant="h2" title="How to Claim the Child Benefit" align="left" color="var(--dark-blue)" />
                                                <List>
                                                    {
                                                        ["Just book an appointment with us and let us know if you are eligible for claiming this benefit. If you are unsure we can check the eligibility on your behalf with you Medicare card number.", "Bring your medicare card along for your appointment", "After your appointment we will bulk bill your treatment costs and this means you don’t need to pay from your pocket."].map(item => <ListItem key={item}>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item} />
                                                        </ListItem>)
                                                    }
                                                </List>
                                                <TermsNCondition />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className={`mt-3 ${Styles.section2} bg-grey`}>
                    <Container maxWidth="xxl" className='ps-md-0'>
                        <Grid container>
                            <Grid item xs={12} md={10} lg={8} className="mx-auto">
                                <Box py={3}>
                                    <Box mb={3}>
                                        <SectionalHeading variant="h2" title="About Our Clinic" align="center" color="var(--dark-blue)" />
                                    </Box>
                                    <Typography className='para'>Our practice provides our patients with comprehensive services under one roof. From Dental Implants to Cosmetic Dentistry and Wisdom tooth extractions to Dentures, our clinics wide range of affordable services will put a big smile On your face.</Typography>
                                    <Box mt={3}>
                                        <List>
                                            <ListItem className="ps-0">
                                                <ListItemIcon>
                                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Modern Dentistry" />
                                            </ListItem>
                                            <ListItem className="ps-0">
                                                <ListItemIcon>
                                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                </ListItemIcon>
                                                <ListItemText primary="After Hour Appointments" />
                                            </ListItem>
                                            <ListItem className="ps-0">
                                                <ListItemIcon>
                                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Dental Insurance" />
                                            </ListItem>
                                            <ListItem className="ps-0">
                                                <ListItemIcon>
                                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Dental Emergency" />
                                            </ListItem>
                                        </List>
                                        <Box mt={3}>
                                            <BookAndCall appointment={true} call={true} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
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
            </main>
        </>
    )
}

export default CDBS