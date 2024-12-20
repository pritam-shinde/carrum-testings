import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { BookAndCall, InterestFree, PPCBanner, SectionalHeading, TermsNCondition } from '../../components/components'
import { PaymentPlan } from '../../sections/sections'
import Banner from '../../public/ppcveneers/VENEERS.jpg'
import image1 from '../../public/ppcveneers/Veneers-1.jpg'
import image2 from '../../public/ppcveneers/Veneers-2.webp'

const Veneers = () => {
    return (
        <>
            <Head>
                <title>Veneers -</title>
                <meta name="description" content="" />
                <meta name="robots" content="index" />
            </Head>
            <PPCBanner bg={Banner} title="Veneers" tagline="" align="start" />
            <main>
                <section>
                    <Container maxWidth="xxl" className='pe-md-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="ms-auto">
                                <Box py={5}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} md={6} className="d-flex align-items-center">
                                            <Box>
                                                <SectionalHeading variant="h2" title="When you look at pictures do you ever wish your teeth were whiter, straighter, more aligned?" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>At Carrum Downs Dental Group on Shop T5, 100 Hall Road our dentists perform porcelain veneer ‘smile makeovers’ which can address all of these issues. We are delighted to be able to offer this “Hollywood” technique to our patients.</Typography>
                                                <Typography className='para'>Porcelain veneers are thin shells of ceramic that bond directly to the front surfaces of the teeth. They are an ideal choice for improving your smile and have become increasingly popular due to their simplicity and versatility.
                                                    Placing custom teeth veneers requires a high degree of technical skill as well as attention to cosmetic detail. We place dental veneers routinely, and design each case individually to match and enhance the characteristics of each patient’s smile.</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box className='square-right p-4 pe-md-0'>
                                                <Image src={image2} alt="Dental Emergency" style={{ borderRadius: "1.2rem 0 0 1.2rem !important" }} />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className='mt-md-5 mt-4 bg-grey clipPathBgGreyUp'>
                    <Container maxWidth="xxl" className="p-0">
                        <Box p={3}>
                            <Grid container>
                                <Grid item xs={10} sm={8} lg={6} className="mx-auto">
                                    <Box py={3}>
                                        <SectionalHeading variant="h2" title="Will they look like normal teeth?" align="center" color="var(--dark-blue)" />
                                        <Typography className='para'>When bonded to the teeth, the ultra-thin porcelain veneers are virtually undetectable. They are also highly resistant to coffee, tea, or even cigarette stains. For strength and appearance, their resemblance to healthy, white tooth enamel is unsurpassed by other restorative options.</Typography>
                                        <Box mt={3} className="d-flex justify-content-center">
                                            <BookAndCall appointment={true} call={true} />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </section>
                <section className='mt-md-5 mt-4'>
                    <Container maxWidth="xxl" className='ps-md-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="me-auto">
                                <Box>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} md={6}>
                                            <Box className='square-left p-4 ps-md-0'>
                                                <Image src={image1} alt="Dental Emergency" style={{ borderRadius: "0 1.2rem  1.2rem 0 !important" }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} className="d-flex align-items-center" >
                                            <Box>
                                                <Box>
                                                    <SectionalHeading variant="h2" title="How durable are porcelain veneers?" align="left" color="var(--dark-blue)" />
                                                    <Typography className='para'>With proper care, porcelain veneers will brighten your smile for well over a decade. At Carrum Downs Dental Group on Frankston-Dandenong Road we ensure that your teeth veneers are crafted from the highest quality porcelains and are bonded with the most advanced and proven materials available.</Typography>
                                                    <Typography className='para'>Refraining from using your veneers as tools to open and cut things will prolong their life, and if accidental breakage or damage occurs, it is usually possible to replace only the veneer involved.</Typography>
                                                </Box>
                                                <Box mt={3}>
                                                    <SectionalHeading variant="h2" title="Payment Plans for Your Dental Treatment" align="left" color="var(--dark-blue)" />
                                                    <Typography className='para'>Even if you are tight on budget, our interest free payment plans will allow you to get your Dental treatments done fast and hassle free. Your overall health is dependent on the health of your teeth, therefore it’s important that you attend to the dental needs and not have them postponed due to financial reasons. To help you with this at Carrum Downs Dental Group accept interest free, quick set up payment plans.</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className='mt-md-5 mt-4 bg-grey clipPathBgGreyDown'>
                    <Container maxWidth="xxl">
                        <Box py={3}>
                            <Grid container>
                                <Grid item xs={10} sm={8} lg={6} className="mx-auto">
                                    <SectionalHeading variant="h2" title="Will they look like normal teeth?" align="center" color="var(--dark-blue)" />
                                    <List>
                                        {
                                            ["Simple one-page Direct Debit form with our Dentist. Simple, fast and easy application which allows you to do treatments on the same day.", "No credit checks and no lengthy approval process is required.", "Start your treatment straight away.", "Interest free", "Plans from 3 months to 12 months", "Finance options to suit every budget (treatment plans over of $1000*)", "Create a better smile today."].map(item => <ListItem key={item} className="ps-0">
                                                <ListItemIcon>
                                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </ListItem>)
                                        }
                                    </List>
                                    <Typography className='para'>DentiCare Payment Solutions 1300 633 472</Typography>
                                    <Typography className='para'>To find out more about payment plans with Carrum Downs Dental Group please do not hesitate to contact us.</Typography>
                                    <TermsNCondition />
                                    <Box mt={3} className="d-flex justify-content-center align-items-center">
                                        <BookAndCall appointment={true} call={true} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </section>
                <section className='mt-md-5 mt-4'>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={11} className="mx-auto">
                                <Box py={3}>
                                    <SectionalHeading variant="h2" title="About our clinic" align="center" color="var(--dark-blue)" />
                                    <Typography className='para'>Our practice provides our patients with comprehensive services under one roof. From Dental Implants to Cosmetic Dentistry and Wisdom tooth extractions to Dentures, our clinics wide range of affordable services will put a big smile On your face.</Typography>
                                    <List>
                                        {
                                            ["Modern Dentistry", "After Hour Appointments", "Dental Insurance", "Dental Emergency"].map(item => <ListItem key={item} className="ps-0">
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

export default Veneers