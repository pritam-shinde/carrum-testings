import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { CommonHero, TermsNCondition } from '../../components/components'
import Banner from '../../public/patient-referral-program/referral-bg.jpg'
import PRF1 from '../../public/patient-referral-program/prp-1.jpg'
import PRF2 from '../../public/patient-referral-program/prp-2.jpg'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const ReferralProgram = () => {
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
    { id: "patient_referral_program_breadcrumb_1", link: null, title: "Referral Program" }
  ]

  return (
    <>
      <Head>
        <title>Patient Referral Program By Carrum Downs Dental Group</title>
        <meta name="description" content="A referral is the greatest compliment we can receive from our patients. Get $25 credit towards your next dental visit. Check out our referral program in detail." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} align={width < 600 ? 'center' : 'left'} color="#fff" title="Referral Program" />
      {
        show ? <><main>
          <section>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Box className='d-flex justify-content-center align-items-center'>
                      <Image src={PRF1} alt="referral program" />
                    </Box>
                    <Box my={1}>
                      <Typography className='para'>Dental health is a very important part of our well being. We are delighted that you are helping to spread this message to others in the community.</Typography>
                      <Typography className='para'>Your confidence and trust in us to look after people you refer to our practice is much appreciated.</Typography>
                      <Typography className='para'>We would like to thank you by giving you a <strong>$25.00</strong> credit* towards your next dental visit.</Typography>
                      <Typography className='para'>The person you refer must be seen at our practice for initial examination or any other dental services, for you to receive the credit.</Typography>
                      <Typography className='para'>We will credit your account and will notify you via SMS. On your next visit please just tell us about Referral credit and you can use it against your treatments/checkup.</Typography>
                    </Box>
                    <Box className='d-flex justify-content-center align-items-center'>
                      <Image src={PRF2} alt="gift" />
                    </Box>
                    <Box>
                      <Typography className='para'><strong>A referral is the greatest compliment we can receive from our patients!</strong></Typography>
                      <Typography className='para'>*This credit is only valid at our dental clinic. The credit can be used for any treatment required, including regular examinations and cleans. It cannot be redeemed as cash.</Typography>
                      <TermsNCondition />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>
        </main>
        </> : null
      }
    </>
  )
}

export default ReferralProgram