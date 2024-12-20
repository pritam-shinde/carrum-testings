import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import image1 from '../../public/ppcteeth-whitening/teeth-whitening-1.jpg'
import image2 from '../../public/ppcteeth-whitening/teeth-whitening-2.jpg'
import image3 from '../../public/ppcteeth-whitening/teeth-whitening-3.jpg'
import image4 from '../../public/ppcteeth-whitening/poladay.jpg'
import image5 from '../../public/ppcteeth-whitening/polanight.jpg'
import { SectionalHeading, BookAndCall, TermsNCondition, InterestFree } from '../../components/components'
import { PaymentPlan } from '../../sections/sections'
import { CheckCircleOutline } from '@mui/icons-material'


const TeethWhitening = () => {
    return (
        <>
            <Head>
                <title>Teeth Whitening -</title>
                <meta name="description" content="" />
                <meta name="robots" content="index" />
            </Head>
            <main>
                <section>
                    <Container maxWidth="xxl" className='p-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="ms-auto">
                                <Box py={5}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} md={6}>
                                            <SectionalHeading variant="h2" title="Teeth Whitening – Whiter Brighter You" align="left" color="var(--dark-blue)" />
                                            <Typography className='para'>Has your tooth enamel discoloured? Teeth Whitening is one of the most effective ways to remove the discolouration, leaving with a Whiter, Brighter and Fresher looking smile.</Typography>
                                            <Typography className='para'><strong>Our take home Pola Whitening System normally $400* for  $299*</strong></Typography>
                                            <Typography className='para'>At Carrum Downs Dental Group at Shop T5, 100 Hall Road we use Pola Teeth Whitening system which will restore the natural whiteness of your tooth easily, comfortably and with utmost convenience. Treatment is pain free and very often results can be seen from the first application.</Typography>
                                            <Typography className='para'>Tooth whitening is highly safe and suitable for use on the majority of people. Provided it is carried out by a registered, qualified and experienced dentist the risks of damage are minimal. We would always advise that you avoid whitening kits that can be bought online, as these are usually unregulated and therefore illegal. Often it is impossible to tell what is contained in such kits, meaning they could cause serious damage to your teeth and gums.</Typography>
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
                <section className='mt-4 bg-grey'>
                    <Container maxWidth="xxl" className='p-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="me-auto">
                                <Box py={3}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} md={6}>
                                            <Box className='square-left p-4 ps-md-0'>
                                                <Image src={image4} alt="Dental Emergency" style={{ borderRadius: "0 1.2rem  1.2rem 0 !important" }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6} className="d-flex align-items-center">
                                            <Box>
                                                <SectionalHeading variant="h2" title="POLADAY" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>Whiter smile! Our Dentist will make custom fitted trays to allow you to whiten your smile at home during the day. You can wear the trays with Pola Day inside for as little as 30 minutes a day (depending on the concentration your dentist supplies you with). You repeat this procedure for about 5 – 10 days depending on requirements. Whiten your teeth before you go to work, cleaning the house or whilst cooking for the family!</Typography>
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
                            <Grid item xs={12} md={11} className="ms-auto">
                                <Box py={5}>
                                    <Grid container>
                                        <Grid item xs={12} md={6} className="d-flex align-items-center">
                                            <Box>
                                                <SectionalHeading variant="h2" title="POLANIGHT" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>Our Dentist will make custom fitted trays to allow you to whiten your smile at home whilst you sleep. You can wear the trays with Pola Night inside overnight or for as little as 40 minutes a day (depending on the concentration your doctor supplies you with). You repeat this procedure for about 5 – 10 nights depending on requirements</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box className='square-right p-4 pe-md-0'>
                                                <Image src={image5} alt="polanight" style={{ borderRadius: "1.2rem 0 0 1.2rem !important" }} />
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

export default TeethWhitening