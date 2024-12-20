import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { BookAndCall, InterestFree, PPCBanner, SectionalHeading, TermsNCondition } from '../../components/components'
import image2 from '../../public/ppccnb/cnb-2.jpg'
import Banner from '../../public/ppccnb/crowns-and-bridges.jpg'
import { PaymentPlan } from '../../sections/sections'

const CNB = () => {
    return (
        <>
            <Head>
                <title>Crowns and Bridges -</title>
                <meta name="description" content="" />
                <meta name="robots" content="index" />
            </Head>
            <PPCBanner bg={Banner} title="Crown And Bridges" tagline="" align="end" />
            <main>
                <section>
                    <Container maxWidth="xxl">
                        <Grid container className='pe-md-0'>
                            <Grid item xs={12} md={11} className="ms-auto">
                                <Box py={5}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} md={6} className="d-flex align-items-center">
                                            <Box>
                                                <SectionalHeading variant="h2" title="Crowns – The Ultimate Tooth Restoration" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>A dental crown is a tooth-shaped “cap” that fits snuggly over a tooth, completely covering it. Usually a crown is required to restore the size, shape, strength, or appearance of a tooth. Crowns fix these issues by encasing the visible portion of the tooth that lies above the gumline.</Typography>
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
                <section className='mt-md-5 mt-4 bg-grey'>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={11} className="mx-auto">
                                <Box mt={3}>
                                    <SectionalHeading variant="h2" title="Procedure followed at Carrum Downs Dental Group for your Crown preparation" align="left" color="var(--dark-blue)" />
                                    <List>
                                        {
                                            ["On your first visit a thorough clinical examination is conducted by the dentist with radiographs. During this time the suitability of the crown is assessed and any preparatory work is undertaken. Your dentist will explain the treatment sequence, material choices and will answer your concerns.", "On your second visit, the teeth receiving crown is prepared. This involves reduction of the tooth size (usually under local anaesthesia) followed by an impression or mould of the prepared tooth. This trimming of the tooth is required to create space for the crown to be fitted. The mould taken is then sent to a laboratory where skilled technicians will fabricate the crown. In the meantime, a temporary crown is made and fitted onto the trimmed tooth.", "On the third visit, the temporary crown is removed and the tooth surface is cleaned. The completed crown is tied on to the teeth, checked for correct bite fit and appearance. The crown is strongly cemented to the teeth."].map(item => <ListItem key={item}>
                                                <ListItemIcon>
                                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </ListItem>)
                                        }
                                    </List>
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
                                                <SectionalHeading variant="h2" title="Bridges" align="left" color="var(--dark-blue)" />
                                                <Typography className='para'>A bridge is designed to literally bridge a gap between one or more missing teeth. A bridge is cemented to the teeth adjacent to the gap.</Typography>
                                                <List>
                                                    {
                                                        ["Restores your natural beautiful smile. Bridges are designed to restore the aesthetics of your smile and Bridges help maintain the shape of your face so that cheeks do not sink where teeth are missing. And they can prevent teeth from drifting out of position.", "Restored functionality of your mouth. Bridges help restore the functionality of the mouth, allowing you to eat and speak properly. Bridges can help distribute bite forces by replacing missing teeth"].map(item => <ListItem key={item.primary}>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={item} />
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
                <section className='mt-md-5 mt-4'>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={8} lg={6} className="mx-auto">
                                <Box className="ratio ratio-16x9">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cAAq6NWuWQQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className='mt-md-5 mt-4 bg-grey'>
                    <Container maxWidth="xxl">
                        <Grid item xs={12} md={11} className="mx-auto">
                            <Box p={3}>
                                <SectionalHeading variant="h2" title="A Crown may be needed in the following situations" align="center" color="var(--dark-blue)" />
                                <Box my={3}>
                                    <Box>
                                        <SectionalHeading variant="h3" title="Defective Large Old Fillings." align="left" color="var(--dark-blue)" />
                                        <Typography className='para'>If a large, old filling is decayed, leaking, defective, or broken and needs replacement, sometimes the tooth cannot securely hold an even larger filling, and a crown is needed to fill out the tooth’s shape.</Typography>
                                    </Box>
                                    <Box mt={2}>
                                        <SectionalHeading variant="h3" title="Broken Teeth" align="left" color="var(--dark-blue)" />
                                        <Typography className='para'>If there is insufficient remaining natural tooth structure to hold a filling, a crown is needed.</Typography>
                                    </Box>
                                    <Box mt={2}>
                                        <SectionalHeading variant="h3" title="Root Canal Treated Teeth" align="left" color="var(--dark-blue)" />
                                        <Typography className='para'>Back teeth that have had a root canal should almost always be capped to prevent the weakened root canal-treated tooth from suffering catastrophic cracks.</Typography>
                                    </Box>
                                    <Box mt={2}>
                                        <SectionalHeading variant="h3" title="Mal aligned Teeth" align="left" color="var(--dark-blue)" />
                                        <Typography className='para'>We can sometimes do instant orthodontics by preparing mal aligned front teeth and inserting crowns over top in a more ideal position to give you a beautiful smile</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Container>
                </section>
                <section className='mt-md-5 mt-4'>
                    <Container maxWidth="xxl">
                        <Box py={3}>
                            <Grid container>
                                <Grid item xs={10} md={11} className="mx-auto">
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
export default CNB