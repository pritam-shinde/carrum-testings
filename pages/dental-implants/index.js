import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { BookAndCall, InterestFree, PPCBanner, SectionalHeading, TermsNCondition } from '../../components/components'
import image1 from '../../public/ppcdentalimplants/dental-implants-1.jpg'
import image2 from '../../public/ppcdentalimplants/dental-implants-2.jpg'
import Banner from '../../public/ppcdentalimplants/dental-implants2.jpg'
import { PaymentPlan } from '../../sections/sections'

const DentalImplant = () => {
    return (
        <>
            <Head>
                <title>Dental Implants -</title>
                <meta name="description" content="" />
                <meta name="robots" content="index" />
            </Head>
            <PPCBanner bg={Banner} title="Dental Implant" tagline="Don&apos;t wait, let us help schedule appointment now!" align="end" />
            <main>
                <section>
                    <Container maxWidth="xxl" className='pe-md-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="ms-auto">
                                <Box py={5}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Box>
                                                <SectionalHeading variant="h2" title="What is Dental Implant?" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>Dental Implants with Crown have quickly become a very effective way for patients to deal with tooth loss. The dental Implants along with restoring the functionality of the tooth also increase an individual’s confidence to lead a normal life.</Typography>
                                                <Typography className='para'>Carrum Downs Dental Group’s Dental Implants are made from Titanium, a very strong material that is also compatible with human body. A crown placed on top of it will make it appear and function as a normal tooth and provides up to 90% chewing capacity</Typography>
                                                <List>
                                                    {
                                                        ["Complete Dental Implants with Crown normally $4500* for a limited time only $3900*", "We use high quality State-Of-The-Art Implant kit from MIS Australia.", "15 Years+ experience in performing dental Implants.", "Flexible Payment plans available."].map(item => <ListItem key={item}>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item} />
                                                        </ListItem>)
                                                    }
                                                </List>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box className='square-right p-4 pe-md-0'>
                                                <Image src={image1} alt="Dental Emergency" style={{ borderRadius: "1.2rem 0 0 1.2rem !important" }} />
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
                                        <SectionalHeading variant="h2" title="Dental Implant procedure follows the below steps" align="center" color="var(--dark-blue)" />
                                        <List>
                                            {
                                                ["Insertion of the Implant", "Allowing the gum to heal (Approx. 3 months for the bone to bond to Implant)", "Exposure of the Implant site", "Taking Impression for Crown preparation with Colour matching.", "Insertion of Crown and Bridge or Over-denture."].map(item => <ListItem key={item}>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item} />
                                                </ListItem>)
                                            }
                                        </List>
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
                                                <Image src={image2} alt="Dental Emergency" style={{ borderRadius: "0 1.2rem  1.2rem 0 !important" }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} className="d-flex align-items-center" >
                                            <Box>
                                                <SectionalHeading variant="h2" title="Choose Carrum Downs Dental at Shop T5, 100 Hall Road for all your Dental Implant requirements." align="left" color="var(--dark-blue)" />
                                                <List>
                                                    {
                                                        ["Dental Implants are the best alternative for missing teeth, because they offer permanent solution.", "Dental Implants are very much like your natural teeth. They look and feel just like your real teeth.", "Chew better and Smile better.", "Fell the confidence in your rise again to the top."].map(item => <ListItem key={item}>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                <ListItemText primary={item} />
                                                            </ListItemIcon>
                                                        </ListItem>)
                                                    }
                                                </List>
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
                                    <SectionalHeading variant="h2" title="Payment Plans for Your Dental Treatment" align="center" color="var(--dark-blue)" />
                                    <Typography className='para'>Even if you are tight on budget, our interest free payment plans will allow you to get your Dental treatments done fast and hassle free. Your overall health is dependent on the health of your teeth, therefore it’s important that you attend to the dental needs and not have them postponed due to financial reasons. To help you with this at Carrum Downs Dental Group accept interest free, quick set up payment plans.</Typography>
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
                                    <SectionalHeading variant="h2" title="Advantages of DentiCare" align="center" color="var(--dark-blue)" />
                                    <List>
                                        {
                                            ["Simple one-page Direct Debit form with our Dentist. Simple, fast and easy application which allows you to do treatments on the same day.", "No credit checks and no lengthy approval process is required.", "Start your treatment straight away.", "Interest free", "Plans from 3 months to 12 months", "Finance options to suit every budget (treatment plans over of $1000*)", "Create a better smile today."].map(item => <ListItem key={item}>
                                                <ListItemIcon>
                                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </ListItem>)
                                        }
                                    </List>
                                    <Typography className='para'>DentiCare Payment Solutions 1300 633 472</Typography>
                                    <Typography className='para'>To find out more about payment plans with Carrum Downs Dental Group please do not hesitate to contact us.</Typography>
                                    <Box mt={3} className="d-flex justify-content-center align-items-center">
                                        <BookAndCall appointment={true} call={true} />
                                    </Box>
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
                                        <SectionalHeading variant="h2" title="About our clinic" align="center" color="var(--dark-blue)" />
                                        <Typography className='para'>Our practice provides our patients with comprehensive services under one roof. From Dental Implants to Cosmetic Dentistry and Wisdom tooth extractions to Dentures, our clinics wide range of affordable services will put a big smile On your face.</Typography>
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
                                        <Box mt={3} className="d-flex justify-content-center">
                                            <BookAndCall appointment={true} call={true} />
                                        </Box>
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
            </main>
        </>
    )
}

export default DentalImplant
