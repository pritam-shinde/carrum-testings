import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Banner from '../../public/covid/covid-bg.jpg'
import { CommonHero } from '../../components/components'
import { Box, Container, Grid, List, ListItem, ListItemIcon, Typography, ListItemText } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'

const Covid = () => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState()

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true);
    } else {
      setShow(false)
    }
  }, [])

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const breadcrumb = [
    { id: "covid_breadcrumb_1", link: null, title: "How we can Reduce the Spread of Corona virus Together" }
  ]

  return (
    <>
      <Head>
        <title>How we can Reduce the Spread of Corona virus Together?</title>
        <meta name="description" content="During this COVID-19 our abled and dedicated team has undergone proper training on protocols and safety measures to ensure your safety during your visit." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="How we can Reduce the Spread of Corona virus Together" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <><main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Box>
                    <Typography className='para'>In the recent wake of the coronavirus (COVID-19), our dental team deemed it fit to share with our customers some of the precautions we are taking to ensure your health and wellbeing is taken care of on your next dental visit.</Typography>
                    <Typography className='para'>Being in the health sector, we are keenly monitoring changes and updates as set by both the WHO and Australian Department of health in our establishment to ensure the safety of our patients and our dental team. Be sure to regularly check recommendations as they are updated often.</Typography>
                    <Typography className='para'>Our abled and dedicated team has undergone proper training on protocols and safety measures to ensure your safety during your visit.</Typography>
                  </Box>
                  <Box className="mt-4">
                    <Typography variant='h2' className='sectional-heading5 mb-2'><strong>Sterilization Protocols and hygiene</strong></Typography>
                    <Typography className='para'>Our clinic is keen to observe sterilization protocols and hygiene measures to prevent the spread of pathogens in our premises by disinfection with ADA-approved disinfectants.</Typography>
                    <Box>
                      <List>
                        {
                          ["We use medical-grade cleaners and disinfectants to eliminate 100% of any viruses or bacteria.", "We also use ADA-approved methods for the sterilization of our instruments and carriers use smart technology which indicates temperature during the process.", "Our single-use instruments ensure the safety of each patient.", "Our sterilization equipment also undergoes regular maintenance and certification.", "Outside the treatment room, all surfaces such as furniture and public toilet are sterilized and cleaned regularly to prevent contact infection.", "In the event of exposure to any of our team members or patients, there are safety protocols in place to be followed."].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                  </Box>
                  <Box className='mt-4'>
                    <Typography variant='h2' className='sectional-heading5 mb-2'><strong>Does COVID-19 affect your dental appointment?</strong></Typography>
                    <Typography className='para'>Before any dental appointment, the following information would be useful to our dental team:</Typography>
                    <Box>
                      <List>
                        {
                          ["Have you been out of the country in the last month?", "Do you exhibit any of the flu-like symptoms affiliated with COVID-19?", "Have you had contact, direct or indirect, with anyone exposed to COVID-19?", "If any of these situations apply to you, we’ll be happy to reschedule your appointment until an appropriate time."].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                  </Box>
                  <Box className="mt-4">
                    <Typography variant='h2' className='sectional-heading5 mb-2'><strong>How to help reduce the spread of coronavirus</strong></Typography>
                    <Typography className='para'>It is only sensible to take care of ourselves and help ease the spread of the virus by following recommended guidelines. Here are some guidelines by the WHO that you can follow.</Typography>
                    <Box>
                      <List>
                        {
                          ["Use warm water and soap to thoroughly wash your hands as often as you can for a minimum of 20 seconds.", "In the absence of soap and water, sanitize your hands with at least 60% alcohol-based hand sanitizer.", "Avoid touching your hands, face, mouth, nose, and eyes with unclean hands.", "Maintain at least 6 feet social distance when in a crowded place", "Use a face mask to cover your nose and mouth when going out", "Avoid going out if you are sick", "Sneeze or cough into a tissue or handkerchief", "Dispose of used tissue immediately", "Improvise your own disinfectant if these products are currently unavailable by mixing a gallon of water with a 1/3 cup of bleach. Alternatively, use at least 70% alcohol solutions as a disinfectant."].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                    <Typography className='para'>Our clinic is always open to address any concerns you may have regarding the coronavirus in relation to your appointments. Just contact us or visit any of our clinics and we will be happy to help.</Typography>
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

export default Covid