import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Offer1 from '../../public/Offer/scale-clean-offer.jpg'
import Offer2 from '../../public/Offer/kids-offer.jpg'
import Offer3 from '../../public/Offer/teeth-whitening-offer.jpg'
import Offer249 from '../../public/Offer/Image-249.jpg'
import Banner from '../../public/Offer/offer-bg.jpg'
import { CustomCard, CommonHero, SectionalHeading } from '../../components/components'
import { CheckCircleOutlineOutlined } from '@mui/icons-material'
import { CalendarMonth, MobileFriendly, QrCode, SentimentSatisfiedAlt } from '@mui/icons-material'


const Offer = () => {
    const [show, setShow] = useState(false)
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
        { id: "Offer_breadcrumb_1", link: null, title: 'Offer' }
    ]
    return (
        <>
            <Head>
                <title>Offer</title>
                <meta name="description" content="Check out the offers on teeth whitening, scale and clean with full check-up, & kid’s dental service. We accept afterpay dental plan to make dental treatment simple." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero breadcrumb={breadcrumb} color="#fff" align={width < 600 ? 'center' : 'left'} bg={Banner} title="Offer" />
            {
                show ? <main>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={10} className="mx-auto">
                                <Box py={5}>
                                    <section>
                                        <Container maxWidth="xxl" className='p-0'>
                                            <SectionalHeading variant="h2" title="New Patient $249 Offer* Check-Up-Clean-X-Rays-Fluoride. If you don&apos;t have private Insurance." color="var(--dark-blue)" align="center" />
                                            <Grid container spacing={3} className='mt-2'>
                                                {
                                                    [
                                                        { id: "offer-1", image: Offer249, title: "New Patient $249 Offer*", list: ["Comprehensive Dental Examination", "Scale & Clean", "Fluoride", "X-rays"], price: "$249*", alt: "A smiling man showing thumbsup" },

                                                        { id: "offer-2", image: Offer1, alt: "scale and clean offer", title: "*New Patient Offer - Scale & Clean with Full Check-up", list: ["Comprehensive Dental Examination", "Scale & Clean", "Fluoride"], price: "$199*", small: "or 4 equal payments of $49.75*" },

                                                        { id: "offer-3", image: Offer2, alt: "kids offer", title: "Kids Dental Offer", list: ["Comprehensive Dental Examination", "Scale & Clean", "Fluoride"], price: "$179*", small: "or 4 equal payments of $44.75*" },

                                                        { id: "offer-4", image: Offer3, alt: "teeth whitening offer", title: "TakeHome Teeth Whitening Offer", list: ["Whitening Consultation with Dentist", "Whitening trays made to fit you", "Whitening Gel and Demonstration of how to use it"], price: "$399*", small: "or $99.75 per fortnight on Afterpay*" }
                                                    ].map(item => <Grid item key={item.id} xs={12} sm={6} lg={3}>
                                                        <Card className='shadow offerPageOfferCard'>
                                                            <CardMedia component="img" image={item.image.src} alt={item.alt} />
                                                            <CardContent>
                                                                <Box className="manageHeight">
                                                                    <SectionalHeading variant="h5" title={item.title} color="var(--dark-blue)" />
                                                                    <List style={{ marginTop: "auto" }}>
                                                                        {
                                                                            item.list.map(listitem => <ListItem key={`${item}-${listitem}`}>
                                                                                <ListItemIcon>
                                                                                    <CheckCircleOutlineOutlined style={{ color: "var(--dark-blue)" }} />
                                                                                </ListItemIcon>
                                                                                <ListItemText primary={listitem} />
                                                                            </ListItem>)
                                                                        }
                                                                    </List>
                                                                </Box>
                                                                <Box style={{ marginTop: "clamp(1.5rem,4vw,4rem)" }}>
                                                                    <Button fullWidth className='blueFilledBtn text-white font-weight-bold' style={{ fontSize: "1.5rem !important" }}>{item.price}</Button>
                                                                    <Typography align='center' className="para">{item.small}</Typography>
                                                                </Box>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>)
                                                }
                                            </Grid>
                                        </Container>
                                    </section>
                                    <section className='mt-md-5 mt-4'>
                                        <Container maxWidth="xxl">
                                            <SectionalHeading variant="h4" title="How Afterpay works" color="var(--dark-blue)" align="center" />
                                            <Box mt={4}>
                                                <Grid container spacing={3} justifyContent="center">
                                                    {
                                                        [{ id: "work1", title: "Book your visit", icon: <CalendarMonth /> }, { id: "work2", title: "Download the Afterpay app", icon: <MobileFriendly /> }, { id: "work3", title: "Get your barcode in the app to scan at reception", icon: <QrCode /> }, { id: "work4", title: "Enjoy a healthier smile", icon: <SentimentSatisfiedAlt /> }].map(item => <Grid key={item.title} item xs={12} md={4} xl={4}>
                                                            <Card className="shadow">
                                                                <CardContent>
                                                                    <Box style={{ height: "3.8rem" }}>
                                                                        <SectionalHeading variant="h5" title={item.title} align="center" color="var(--dark-blue)" />
                                                                    </Box>
                                                                    <Box className='d-flex justify-content-center align-items-center'>
                                                                        <Box p={2} style={{ border: "1px solid var(--dark-blue)", borderRadius: "50%", height: "4rem", width: "4rem" }} className="d-flex justify-content-center align-items-center">
                                                                            {item.icon}
                                                                        </Box>
                                                                    </Box>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>)
                                                    }
                                                </Grid>
                                            </Box>
                                        </Container>
                                    </section>
                                    <section className='mt-md-5 mt-4'>
                                        <Container maxWidth="xxl">
                                            <Box className="ratio ratio-16x9">
                                                <iframe title="vimeo-player" src="https://player.vimeo.com/video/275962196?h=12531ce500" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                                            </Box>
                                        </Container>
                                    </section>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </main> : null
            }
        </>
    )
}

export default Offer