import React, { useState } from 'react'
import Head from 'next/head'
import { CommonHero, SectionalHeading, InterestFree } from '../../components/components'
import Banner from '../../public/OpenDay/open-day.jpg'
import { useEffect } from 'react'
import { Container, Grid, Box, Typography, List, ListItemIcon, ListItemText, ListItem } from '@mui/material'
import Image from 'next/image'
import { CheckCircleOutline } from '@mui/icons-material'
import Link from 'next/link'
import Register from '../../public/OpenDay/register-interest.jpg'
import WhyChoose from '../../public/OpenDay/whyChoose.jpg'

const OpenDay = () => {
    const [width, setWidth] = useState();
    const [show, setShow] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    useEffect(() => {
        if (typeof window !== undefined) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [])

    const breadcrumb = [
        { id: "openday_1", link: null, title: "Open day" }
    ]
    return (
        <>
            <Head>
                <title> Invisalign Open Day | Carrum Downs Dental</title>
                <meta name="description" content="" />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero bg={Banner} breadcrumb={breadcrumb} align={width < 600 ? 'center' : 'left'} title="Invisalign Open Day 30th of March" color="#fff" />
            {
                show ? <><main>
                    <section>
                        <Container maxWidth="xxl">
                            <Grid container>
                                <Grid item xs={12} md={10} className="mx-auto">
                                    <section>
                                        <Box p={4} >
                                            <Grid container spacing={5}>
                                                <Grid item xs={12} md={6}>
                                                    <SectionalHeading variant="h2" title="Invisalign Open Day .. Register your interest" align="left" color="var(--dark-blue)" />
                                                    <Typography className='para' mt={2}>Book your consultation for FREE at our Invisalign open day.</Typography>
                                                    <Typography className='para'>We&apos;re so excited about our next Open Day! We want you to join us.</Typography>
                                                    <Typography className='para'>Invisalign is a clear, comfortable alternative to braces. Along with aligning your teeth, it also makes them straighter and more beautiful.</Typography>
                                                    <Typography className='para'>Would you like to learn more about Invisalign? Well, we are inviting you to our Invisalign Open Day.</Typography>
                                                    <Typography className='para'>At the Open Day, our dentist will make a complete smile assessment to create an individualised and tailored treatment plan that is uniquely for you.</Typography>
                                                    <Typography className='para'>Free Invisalign Open Day coming soon….</Typography>
                                                    <Typography className='para'>We only have a few appointments available, which means that we&apos;re prioritising existing patients, their friends and family.</Typography>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Box className='square-right p-4 pe-md-0'>
                                                        <Image src={Register} alt="teeth whitening bayswater" style={{ borderRadius: "1.2rem 0 0 1.2rem !important" }} />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </section>
                                    <section>
                                        <Box p={4}>
                                            <Grid container spacing={5}>
                                                <Grid item xs={12} md={6}>
                                                    <Box className='square-right p-4 pe-md-0'>
                                                        <Image src={WhyChoose} alt="teeth whitening bayswater" style={{ borderRadius: "1.2rem 0 0 1.2rem !important" }} />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <SectionalHeading variant="h2" title="Why choose us for Invisalign?" align="left" color="var(--dark-blue)" />
                                                    <Typography className='para'>Our dentists have done the special training with Invisalign and have the experience and skills in providing Invisalign to many of our happy patients.</Typography>
                                                    <Typography className='para'>If you&apos;re a patient looking for Invisalign treatment, you have the assurance of our professional knowledge and skills. We&apos;ll help transform your smile.</Typography>
                                                    <SectionalHeading variant="h2" title="Why attend an Invisalign Open Day?" align="left" color="var(--dark-blue)" />
                                                    <Typography className='para'>You will have the benefit of receiving free consultations of up $360 at our Invisalign Open Day. This includes:</Typography>
                                                    <List>
                                                        {
                                                            ["Initial scans valued at $200", "Invisalign photos valued at $100", "Initial consultation valued at $60"].map(item => <ListItem key={item}>
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
                                    </section>
                                    <section className='bg-grey'>
                                        <Box p={4}>
                                            <Grid container spacing={5}>
                                                <Grid item xs={12}>
                                                    <SectionalHeading variant="h3" title="What to expect at the Invisalign Open Day?" align="left" color="var(--dark-blue)" />
                                                    <Typography className='para'>The 30 minutes&apos; free appointment includes the following:</Typography>
                                                    <SectionalHeading variant="h3" title="Bubbles and nibbles on arrival" align="left" color="var(--dark-blue)" />
                                                    <Typography className='para'>When you come in for your consultation, we&apos;ll make you feel right at home by offering a glass of sparkling and some delicious snacks. We hope this will help you feel relaxed, unwind, and celebrate the potential of a new smile.</Typography>
                                                    <SectionalHeading variant="h3" title="Free initial consultation with an expert" align="left" color="var(--dark-blue)" />
                                                    <List>
                                                        {
                                                            ["What is Invisalign?", "How does it work?", "Is it the right treatment for me?", "How long will the treatment take, and how much will it cost?"].map(item => <ListItem key={item}>
                                                                <ListItemIcon>
                                                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={item} />
                                                            </ListItem>)
                                                        }
                                                    </List>
                                                    <SectionalHeading variant="h3" title="Free digital Invisalign scan" align="left" color="var(--dark-blue)" />
                                                    <List>
                                                        {
                                                            ["A full digital 3D scan for both the upper and lower teeth and bite will then be sent to Invisalign.", "The scan will display how your teeth will look after undergoing the treatment", "So, you will be in a position to see what your teeth will look like on the same day"].map(item => <ListItem key={item}>
                                                                <ListItemIcon>
                                                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={item} />
                                                            </ListItem>)
                                                        }
                                                    </List>
                                                    <SectionalHeading variant="h3" title="Free Invisalign treatment photos" align="left" color="var(--dark-blue)" />
                                                    <List>
                                                        {
                                                            ["The photos of your smile, teeth and face", "The photos will be used by the dentist for treatment planning", "Invisalign will use the photos to go ahead and make aligners and start the treatment"].map(item => <ListItem key={item}>
                                                                <ListItemIcon>
                                                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={item} />
                                                            </ListItem>)
                                                        }
                                                    </List>
                                                    <SectionalHeading variant="h3" title="What are Invisalign clear braces?" align="left" color="var(--dark-blue)" />
                                                    <Typography className='para'>Invisalign are clear braces that use transparent plastic trays to help move your teeth into a better position. These plastic trays help in adjusting the teeth in stages. Based on the moulds that were taken from your mouth, they will exert some pressure on different parts of your teeth to slowly move them in position.</Typography>
                                                    <Typography className='para'>Register your interest for the Invisalign Open Day by emailing us on <a href="mailto:carrumdownsdental@gmail.com">carrumdownsdental@gmail.com</a> or Giving us a call on <strong>03-9782 1200</strong></Typography>
                                                    <a href="https://carrumdownsdental.com.au/terms-and-conditions/">* Terms and Conditions apply.</a>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </section>
                                    <section>
                                        <Grid item xs={12} md={8} mt={5} className="mx-auto">
                                            <Box p={4}>
                                                <Grid container spacing={5}>
                                                    <InterestFree />
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </section>
                                </Grid>
                            </Grid>
                        </Container>
                    </section>
                </main></> : null
            }
        </>
    )
}

export default OpenDay