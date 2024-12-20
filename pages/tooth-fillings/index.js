import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@mui/system'
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'
import image1 from '../../public/ppctoothfilings/tooth-fillings-1.webp'
import Banner from '../../public/ppctoothfilings/Banner.jpg'
import { SectionalHeading, BookAndCall, TermsNCondition, InterestFree, PPCBanner } from '../../components/components'
import { PaymentPlan } from '../../sections/sections'

const ToothFillings = () => {
    return (
        <>
            <Head>
                <title>Tooth Fillings -</title>
                <meta name="description" content="" />
                <meta name="robots" content="index" />
            </Head>
            <PPCBanner bg={Banner} title="Tooth Fillings" tagline="" align="end" />
            <main>
                <section>
                    <Container maxWidth="xxl" className='pe-md-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="mx-auto">
                                <Box py={5}>
                                    <SectionalHeading variant="h2" title="About Tooth Fillings" align="center" color="var(--dark-blue)" />
                                    <Typography className='para'>Whenever an individual is faced with a dental cavity, chipped or broken tooth, a vital decision must be made. This decision does not always involve extracting the tooth; there are other alternatives that include dental fillings. A filling help to restore a tooth damaged by decay back to its normal shape and function. It also helps to prevent further decay by eliminating areas where bacteria can enter the tooth. There are some instances where the tooth may be too damaged to the extent that it can only be extracted.</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className='mt-md-5 mt-4'>
                    <Container maxWidth="xxl" className='pe-md-0'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="ms-auto">
                                <Box py={3}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} md={6}>
                                            <SectionalHeading variant="h2" title="Types of Dental Fillings" align="center" color="var(--dark-blue)" />
                                            <Box mt={3}>
                                                <SectionalHeading variant="h3" title="Amalgam Fillings" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>Used by dentists globally for more than a century, dental amalgam is the most common type of dental filling and the most researched. It is an amalgamation of various metals that include Silver, mercury, copper and tin. It is also relatively inexpensive compared to other options.</Typography>
                                            </Box>
                                            <Box mt={3}>
                                                <SectionalHeading variant="h3" title="Composite Filling" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>This type of filling is matched to be the same color with teeth and hence used where a natural appearance is desired. They are made from resin or glass quartz. There are two types, direct and indirect. Direct is takes only one session by a dentist. Indirect can take two sessions. In the first session the dentist analyses the gap to be filled and in the next session he completes the process.</Typography>
                                            </Box>
                                            <Box mt={3}>
                                                <SectionalHeading variant="h3" title="Cast Gold Fillings" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>Just as the name suggest these fillings are made from gold although they contain some other metals. Typically, they consist about 75% gold. It can be used for onlays, inlays, and crowns.</Typography>
                                            </Box>
                                            <Box mt={3}>
                                                <SectionalHeading variant="h3" title="Porcelain" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>They can be used for onlays, inlays, crowns, veneers among others.</Typography>
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

export default ToothFillings