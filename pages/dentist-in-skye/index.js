import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { CommonHero, CommonSidebar, SectionalHeading } from '../../components/components'
import Banner from '../../public/suburb/bg.jpg'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import SkyeClinic from '../../public/suburb/skye/skye.jpg'
import Link from 'next/link'

const Skye = () => {
    const [show, setShow] = useState(false);
    const [width, setWidth] = useState()

    useEffect(() => {
        if (typeof window !== undefined) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [])

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    const breadcrumb = [
        { id: "suburb_skye_breadcrumb_1", link: null, title: "Dentist In Skye" }
    ]

    return (
        <>
            <Head>
                <title>Experienced Dentist in Skye | Carrum Downs Dental Group</title>
                <meta name="description" content="Our dentists in skye offer quality dental care to the patients. Our experienced dentists can meet all your oral care needs. Contact us today!" />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Dentist In Skye" align={width < 600 ? 'center' : 'left'} color="#fff" />
            {
                show ? <><main>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item sx={12} md={10} className="mx-auto">
                                <Box py={5}>
                                    <Grid container spacing={5}>
                                        <Grid item xs={12} lg={8}>
                                            <section>
                                                <Container maxWidth="xxl">
                                                    <Image src={SkyeClinic} alt="Dentist In Skye" />
                                                    <Box>
                                                        <SectionalHeading variant="h2" title="Get Painless Dental Treatment at Skye" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                                        <Typography className='para'>At Carrum Downs Dental, just the moment, you step on our doors; our lovely staff will greet and welcome you with a warm smile. They will help you answer any question you might have and will go above and beyond to serve your needs.</Typography>
                                                        <Typography className='para'>We know that there is nothing worse than visiting a dental clinic and wondering if the professionals you are trusting with your valuable smile are properly qualified and experienced. At <a href="https://goo.gl/maps/qomX2kzjyE91xHiX7">Carrum Downs Dental near Skye</a> you can relax with the knowledge that our dentists are well trained, experienced and certified by the Australian Dental Association. This means that all our dentists have proven their ability to the highest standard.</Typography>
                                                        <Typography className='para'>Everyone hates sitting in a waiting room, going through some old magazine, watching time pass while there are other valuable things to attend to. At Carrum Downs Dental, we understand that your time is important. We never squeeze in appointments; we will always book plenty of time for you. This means that we always run on time and never rush treatment. If something happens meaning that we can’t run on time, you will always be the first to know.</Typography>
                                                        <Typography className='para'>Thankfully, modern technology and the latest techniques ensure that <a href="/dental-treatments-for-top-10-mouth-problems/">dental treatment</a> is always painless and gentle, but to us, comfort is just as important as the absence of pain. At Carrum Downs Dental in Skye we work hard to ensure a painless treatment for you, but also go an extra mile to make sure that your experience with us is as pleasant as possible.</Typography>
                                                        <Typography className='para'>We know that sometimes dental expense can be unexpected, and the smile you have always desired can seem out of reach. To assist you in making it easy to acquire the dental care you want, we offer affordable, simple, clear and convenient payment options.</Typography>
                                                        <Typography className='para'>If you are looking for dental services in Skye, whether it is a broken tooth, toothache, or a lost filling, then we are sure to provide you with the help that you and your family may require.</Typography>
                                                    </Box>
                                                </Container>
                                            </section>
                                        </Grid>
                                        <Grid item xs={12} lg={4}>
                                            <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
                </> : null
            }
        </>
    )
}

export default Skye