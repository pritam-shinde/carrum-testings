import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Data from './Data/Data';
import { BlueFilledBtn, CustomCard } from '../../../components/components'

const ServiceSec = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width]);

  return (
    <>
      <Container maxWidth="xxl" id="service">
        <Grid container>
          <Grid item xs={12} md={10} className="mx-auto">
            <Typography variant='h1' className='text-dark-blue text-center m-2' gutterBottom>We are open 7 days a week for your convenience! </Typography>
            <Grid container spacing={3}>
              {
                Data.map(item => {
                  // console.log("hit=>",item.alt); 
                  return (
                    <Grid key={item.id} item xs={12} sm={6} lg={3}>
                      <CustomCard
                        sec="Home_Service"
                        resizedImage={item.Image}
                        resizedImageWidth="60% !important"
                        alt={item.alt}
                        cardCls="shadow"
                        navlink={true}
                        link={item.link}
                        cardTitle={item.title}
                        cardPara={item.para}
                        headAlign="center"
                        paraAlign="center"
                        cardHeight={(width < 600) ? "auto" : (width > 601 && width < 992) ? "28rem" : "26rem"}
                        List={null}
                      />
                    </Grid>
                  );
                })
              }
            </Grid>
            <Grid item xs={12}>
              <Box my={5} className="d-flex justify-content-center align-items-center">
                <BlueFilledBtn navlink={true} btnLink="/service/" btnTitle="VIEW ALL SERVICES" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ServiceSec;