import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { BookAndCall, InterestFree, PPCBanner, SectionalHeading, TermsNCondition } from '../../components/components'
import { PaymentPlan } from '../../sections/sections'
import image1 from '../../public/ppcwisdom-teeth-removal/wisdom-teeth-1.jpg'
import image2 from '../../public/ppcwisdom-teeth-removal/wisdom-teeth-2.jpg'
import image3 from '../../public/ppcwisdom-teeth-removal/wisdom-teeth-3.webp'
import Banner from '../../public/ppcwisdom-teeth-removal/wisdom-teeth-removal.jpg'

const WisdomTeethRemoval = () => {
    return (
        <>
            <Head>
                <title>Wisdom Teeth Removal -</title>
                <meta name="description" content="" />
                <meta name="robots" content="index" />
            </Head>
            <PPCBanner bg={Banner} title="DENTAL EMERGENCY" tagline="Don&apos;t wait, let us help schedule appointment now!" align="end" />
            <main>
                <section>
                    <Container maxWidth="xxl" className='pe-md-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="ms-auto">
                                <Box py={5}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <Box>
                                                <SectionalHeading variant="h2" title="Wisdom Tooth and Other Surgical Extractions" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>Carrum Downs Dental Group’s general dentists are specialised in Wisdom tooth, Impacted and Surgical extractions. We can remove your wisdom teeth in a caring way to relieve you of the pain and aches.</Typography>
                                                <Typography className='para'>We only recommend the removal of wisdom teeth if they are impacted or infected. The extraction is straightforward if the Wisdom tooth is straight and is not impacted and the costs for this will be from $200*.</Typography>
                                                <Typography className='para'>A minor surgery (including sectioning the bones) will be required for Impacted and horizontally growing tooth. The cost for this extraction starts from $300* and depends on the Impaction.</Typography>
                                                <Typography className='para'>In a very few circumstances, it may be too difficult to remove the tooth at our practice and in these cases we may refer patients to a specialist oral surgeon who is skilled in dealing with most complex cases. You can email us your OPG/X-Ray and we can advise you if we can remove it and can also provide you with the approximate</Typography>
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
                                        <SectionalHeading variant="h2" title="Symptoms requiring Wisdom tooth extraction." align="center" color="var(--dark-blue)" />
                                        <List>
                                            {
                                                ["The Wisdom teeth dint fully erupt and is causing Impaction or overcrowding.", "Chronic pain in your gums around the wisdom tooth. The pain is caused because of food and bacteria getting trapped in between impacted teeth.", "Wisdom teeth did not come out straight and cause your teeth to shift and move over time.", "Wisdom teeth causing decay of the adjacent tooth. Due to the location of the Wisdom tooth"].map(item => <ListItem key={item}>
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
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={11} className="mx-auto">
                                <Box mt={3}>
                                    <SectionalHeading variant="h2" title="Payment Plans for Your Dental Treatment" align="center" color="var(--dark-blue)" />
                                    <Typography className='para'>Even if you are tight on budget, our interest free payment plans will allow you to get your Dental treatments done fast and hassle free. Your overall health is dependent on the health of your teeth, therefore it’s important that you attend to the dental needs and not have them postponed due to financial reasons. To help you with this at Carrum Downs Dental Group accept interest free, quick set up payment plans.</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className='mt-md-5 mt-4 bg-grey'>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={11} className='mx-auto'>
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
                                    <TermsNCondition />
                                </Box>
                            </Grid>
                        </Grid>
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
                                                <SectionalHeading variant="h2" title="Wisdom & Impacted Teeth Extraction Cost in Melbourne" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>In normal cases, the cost of extracting a single wisdom tooth can range from $200*-$450* each depending on how complex the procedure will be. Some factors that determine the complexity of such a procedure includes removal of the bone, the requirement to raise the flap, time and the number of tooth division required. The dentist can only give you the final cost after carrying out the initial consultation and looking at the x-rays. Complex Wisdom Teeth extraction requires special skills and our Wisdom Tooth dentist has more than 15 years of experience doing it.</Typography>
                                                <Typography className='para'>Our costs for single tooth extractions as per below.</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} className="mt-0 pt-0">
                                            <Box p={2}>
                                                <Box>
                                                    <SectionalHeading variant="h3" title="Simple/Surgical Teeth Extraction Costs" align="left" color="var(--dark-blue)" />
                                                    <List>
                                                        {
                                                            ["Initial consultation fee of $45*", "The cost of tooth extraction depending on the complexity $150*-$200*", "Free Post Treatment Review Appointment valued at $50*"].map(item => <ListItem key={item}>
                                                                <ListItemIcon>
                                                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={item} />
                                                            </ListItem>)
                                                        }
                                                    </List>
                                                </Box>
                                                <Box mt={3}>
                                                    <SectionalHeading variant="h3" title="Simple Wisdom/Impacted Teeth Extraction Cost" align="left" color="var(--dark-blue)" />
                                                    <List>
                                                        {
                                                            ["Initial consultation fee of $45*", "The cost of tooth extraction depending on the complexity $200*-$300*", "Free Post Treatment Review Appointment valued at $50*"].map(item => <ListItem key={item}>
                                                                <ListItemIcon>
                                                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={item} />
                                                            </ListItem>)
                                                        }
                                                    </List>
                                                </Box>
                                                <Box mt={3}>
                                                    <SectionalHeading variant="h3" title="Complex Wisdom/Impacted Teeth Extraction Costs" align="left" color="var(--dark-blue)" />
                                                    <List>
                                                        {
                                                            ["Initial consultation fee of $45*", "The cost of tooth extraction depending on the complexity $300*-$450*", "Free Post Treatment Review Appointment valued at $50*"].map(item => <ListItem key={item}>
                                                                <ListItemIcon>
                                                                    <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={item} />
                                                            </ListItem>)
                                                        }
                                                    </List>
                                                </Box>
                                                <Typography className='para'><strong>Note:</strong> Any invasive or surgical procedures carries some risks. Before proceeding with such a procedure, it is best to first seek advice from a qualified health practitioner. The final cost of the procedure can only be provided after the post review of the patient’s opg x-rays. A very small percentage of cases that are highly complex may be referred to a specialist surgeon.</Typography>
                                                <TermsNCondition />
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

export default WisdomTeethRemoval