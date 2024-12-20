import React from 'react'
import Head from 'next/head'
import { BlueFilledBtn, CommonHero, SectionalHeading } from '../../components/components'
import Banner from '../../public/thankyou/doctor.jpg'
import Success from '../../public/thankyou/checked.gif'
import { Container, Grid, Box } from '@mui/material'

const index = () => {
  return (
    <>
      <Head>
        <title>Thank you page</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero breadcrumb={null} bg={Banner} />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} sm={10} md={8} lg={6} className="mx-auto">
                <Grid item xs={11} md={10} className="mx-auto d-flex justify-content-center align-items-center" style={{ height: "inherit" }} >
                  <Box py={5}>
                    <Box className='text-center'>
                      <img src={Success.src} alt="success" style={{ maxWidth: "60%" }} />
                    </Box>
                    <Box className='text-center' >
                      <SectionalHeading title={'Thank You'} variant="h1" color={'var(--dark-blue)'} />
                      <Box mt={2}>
                        <SectionalHeading title={'You will receive a call soon.'} variant="h5" color={'var(--dark-blue)'} />
                      </Box>
                      <Box mt={3}>
                        <BlueFilledBtn navlink={true} btnLink="/" btnTitle="Go To Homepage" />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default index