import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { SectionalHeading, PPCBanner, BookAndCall, InterestFree, TermsNCondition } from '../../components/components'
import { PaymentPlan } from '../../sections/sections'
import Image1 from '../../public/ppcscalenclaen/cleaning.jpg'
import Image2 from '../../public/ppcscalenclaen/scale-and-clean.jpg'
import Banner from '../../public/ppcscalenclaen/Banner.jpg'
import { CheckCircleOutline } from '@mui/icons-material'

const ScaleNClean = () => {
    return (
        <>
            <Head>
                <title>Scale and Clean -</title>
                <meta name="description" content="" />
                <meta name="robots" content="noindex" />
            </Head>
            <PPCBanner bg={Banner} title="Scale and Clean" tagline="" align='start' />
            <main>
                <section>
                    <Container maxWidth="xxl" className='pe-md-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="ms-auto">
                                <Box py={5}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} md={6}>
                                            <Box mb={3}>
                                                <SectionalHeading variant="h2" title="What is a Professional Clean?" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>Professional cleaning is also called as dental prophylaxis, it’s refers to removal of plaque, calculus and stains from the teeth both above and below the gum line. It also involves scaling and polishing to remove plaque as well as to keep it from attaching itself to the teeth in the future.</Typography>
                                                <Typography className='para'>Your dentist will usually do a thorough check-up of your teeth and gums, possibly followed by a taking x-rays (if required) to ensure that you do not have any cavities in your teeth. If the x-ray does show a cavity, your dentist will correct that problem, or any other dental problems he may find, before the cleaning is done.</Typography>
                                                <List>
                                                    {
                                                        ["Your dentist will inspect your mouth for bleeding or inflamed gums, infections, sores, or any other concerns.", "Your dentist will then use a cleaning agent that will free any deep level plaque that has grown around your teeth or gums.", "By scraping along the teeth and gums, your hygienist will remove even more of the plaque that is difficult to remove."].map(item => <ListItem key={item}>
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
                                                <Image src={Image1} alt="cleaning and scaling teeth" style={{ borderRadius: "1.2rem 0 0 1.2rem !important" }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} className="pt-0 mt-0">
                                            <List>
                                                {
                                                    ["Your dentist will floss your teeth to be certain every area has been thoroughly cleaned of all plaque.", "A fluoride treatment may be applied at this time if your dentist thinks it’s required."].map(item => <ListItem key={item}>
                                                        <ListItemIcon>
                                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
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
                <section className='mt-md-5 mt-4 bg-grey clipPathBgGreyUp'>
                    <Container maxWidth="xxl" className="p-0">
                        <Box p={3}>
                            <Grid container>
                                <Grid item xs={10} sm={8} lg={6} className="mx-auto">
                                    <SectionalHeading variant="h2" title="About Our Clinic" align="center" color="var(--dark-blue)" />
                                    <Box mt={3}>
                                        <Typography className='para' align="center">Our practice provides our patients with comprehensive services under one roof. From Dental Implants to Cosmetic Dentistry and Wisdom tooth extractions to Dentures, our clinics wide range of affordable services will put a big smile On your face.</Typography>
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

export default ScaleNClean