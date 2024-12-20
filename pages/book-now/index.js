import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { CommonHero } from '../../components/components'
import Banner from '../../public/Book_Now/appointment.jpg'
import { Box, Container, Grid } from '@mui/material'

const BookNow = () => {
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
    { id: "book_now_breadcrumb_1", link: null, title: "Book Appointment" }
  ]

  return (
    <>
      <Head>
        <title>Book Now</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Book Appointment" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
      {
        show ? <><main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Box className="ratio ratio-16x9">
                    <div id="he-webplugin-62595"><iframe src="https://healthengine.com.au/webplugin/?id=62595&amp;source=webplugin" width="100%" height="500" className="he-webplugin" name="open-appointments-widget-62595" frameBorder="0" style={{ border: "2px solid #045475" }} title='myIframe' loading='lazy' ></iframe>
                    </div>
                    <Script data-he-id="62595" data-he-width="100%" data-he-height="500" data-he-frame-css="border:2px solid #045475" src="https://healthengine.com.au/webplugin/appointments.js"></Script>
                  </Box>
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
export default BookNow;