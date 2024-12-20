import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { BookAndCall, InterestFree, PPCBanner, SectionalHeading, TermsNCondition } from '../../components/components'
import { PaymentPlan } from '../../sections/sections'
import image1 from '../../public/ppcrootcanal/root-canal-1.jpg'
import image2 from '../../public/ppcrootcanal/root-canal-2.jpg'
import image3 from '../../public/ppcrootcanal/root-canal-3.jpg'
import image4 from '../../public/ppcrootcanal/root-canal-4.jpg'
import Banner from '../../public/ppcrootcanal/root-canal.jpg'

const RootCanal = () => {
    return (
        <>
            <Head>
                <title>Root Canal -</title>
                <meta name="description" content="" />
                <meta name="robots" content="index" />
            </Head>
            <PPCBanner bg={Banner} title="Root Canal" tagline="Don&apos;t wait, let us help schedule appointment now!" align="end" />
            <main>
                <section>
                    <Container maxWidth="xxl">
                        <Grid container className='pe-md-0'>
                            <Grid item xs={12} md={11} className="ms-auto">
                                <Box py={5}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} md={6} className="d-flex align-items-center">
                                            <Box>
                                                <SectionalHeading variant="h2" title="Root Canal –Your Teeth has Nerves!" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>Teeth are tough outside due to the strong enamel but on inside they are pulp cavity with a root canal that has nerves. Root Canal treatment is performed on infected or inflamed tooth most likely due to untreated cavity.</Typography>
                                                <Typography className='para'>In Carrum Downs Dental Group on Frankston-Dandenong Road, we perform Root Canal treatment to save the tooth by removing the infection and the associated pain. The dentist as part of the treatment will remove the infected tooth pulp, nerves causing the pain and will seal the pulp with a material to prevent any further infection.</Typography>
                                                <Typography className='para'>After the root canal procedure is complete the dentist will restore the tooth with a crown to protect the tooth from breaking in future</Typography>
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
                                        <SectionalHeading variant="h2" title="When do you need a root canal treatment at Carrum Downs Dental?" align="center" color="var(--dark-blue)" />
                                        <List>
                                            {
                                                ["Pain due to hot/cold food that stays after consumption", "Constant pain", "Radiating pain, which can radiate to neck and shoulders", "Swelling", "Injury or trauma due to an accident", "Large untreated decay on the tooth"].map(item => <ListItem key={item}>
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
                                                <Box>
                                                    <SectionalHeading variant="h2" title="What is the treatment procedure?" align="left" color="var(--dark-blue)" />
                                                    <Typography className='para'>The root canal treatment at Carrum Downs Dental is performed under 3 appointments.</Typography>
                                                </Box>
                                                <Box mt={3}>
                                                    <SectionalHeading variant="h2" title="Payment Plans for Your Dental Treatment" align="left" color="var(--dark-blue)" />
                                                    <List>
                                                        {
                                                            [
                                                                { primary: "Appointment 1", secondary: "Under local anaesthesia, the tooth pulp, infection and nerves are removed through a small access hole made on top of the tooth. The tooth is washed with antibacterial solution to prevent further infections; an antibiotic/painkiller is placed into the tooth and filled with a temporary filling to cover the access. Dentist may prescribe some painkillers to keep you pain free for the next day or two." },
                                                                { primary: "Appointment 2", secondary: "The dentist on the second appointment will open the access again to ensure the infections are completely removed. Endodontic files will be used to even the internal surface. This stage may repeat until the dentist is satisfied that the tooth is bacteria free." },
                                                            ].map(item => <ListItem key={item.primary}>
                                                                <ListItemIcon>
                                                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={item.primary} secondary={item.secondary} />
                                                            </ListItem>)
                                                        }
                                                    </List>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} className="mt-0 pt-0">
                                            <List>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Appointment 3" secondary="The infection-free root canal is then sealed with long-lasting barrier materials (the root filling). The tooth then undergoes restoration and the biting surfaces need protection – an artificial biting surface for the tooth is fashioned out of regular filling material. In many cases, where there is considerable loss of the tooth structure, there may be a need for an artificial crown made from porcelain or gold alloy or other materials." />
                                                </ListItem>
                                            </List>
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

export default RootCanal