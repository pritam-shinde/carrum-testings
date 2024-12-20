import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { CommonHero, TermsNCondition } from '../../components/components'
import Banner from '../../public/LateCancellationPolicy/cancelation1.jpg'
import { Box, Container, Grid, Typography } from '@mui/material'

const LateCancellation = () => {
    const [show, setShow] = useState(false)
    const [width, setWidth] = useState()

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
        { id: "Late_Cancellation_and_Fail_to_Attend_Policy_1", link: null, title: "Late Cancellation and Fail to Attend Policy" }
    ]
    return (
        <>
            <Head>
                <title>Late Cancellation and Fail to Attend Policy | Carrum Downs Dental </title>
                <meta name="description" content="Late cancellations or Fail to Attend (FTA) often result in wasted time, preparation, and materials." />
                <meta name="robots" content="noindex" />      
            </Head>
            <CommonHero bg={Banner} breadcrumb={breadcrumb} align={width < 600 ? 'center' : 'left'} color="#fff" title="Late Cancellation and Fail to Attend Policy" />
           <main>
                    <section>
                        <Container maxWidth="xxl">
                            <Grid container>
                                <Grid item xs={12} md={10} className="mx-auto">

                                    <Box mt={5}>
                                        <Typography className='para'>We know that your schedule is packed to the brim. For your convenience, we ensure that we are prompt and are prepared for each and every dental appointment we make with our patients. To do this, we must schedule a dentist and support staff, prepare equipment and materials, and ensure that a treatment room is free and clear for the time of your appointment.</Typography>
                                        <Typography className='para'>Late cancellations or Fail to Attend (FTA) often result in wasted time, preparation, and materials.<strong>That’s why we urge you to give at least 24 hours notice if you need to cancel or reschedule an appointment.</strong>  Late notice or FTA may result in a fee of at least $50 to cover any preparatory work that has already been performed. The dental clinic will confirm the appointment via a phone call or SMS the previous day of the appointment. Please ensure you reply to the call or SMS. Any unconfirmed appointment could be made available to other patients.</Typography>
                                        <TermsNCondition />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </section>
                </main>
        </>
    )
}

export default LateCancellation
