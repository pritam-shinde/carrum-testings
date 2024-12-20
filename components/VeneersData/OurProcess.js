import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { VeneerProcessData } from '../components'

const OurProcess = () => {
  return (
    <>
      <Container>
              <Typography variant="h5" component="h2" gutterBottom className="text-center" style={{ color: "#115278" }}>
                Our Process
              </Typography>
              <Typography className="para mt-2">
                Achieve a radiant, lasting smile with our comprehensive veneer process. We prioritise meticulous care and precision throughout the seven steps, ensuring a comfortable experience and natural-looking results
                that perfectly complement your unique smile.
              </Typography>
              <Grid container spacing={2}>
                {VeneerProcessData.map((item, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index} className={index === 6 ? "centered-box" : ""}>
                    <Box display="flex" alignItems="center">
                      <Box textAlign="center" p={2}>
                        <Image src={item.imageUrl} alt="Image" width={70} height={70} className="img-fluid object-contain"/>
                      </Box>
                      <Box>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" paragraph>
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
    </>
  )
}

export default OurProcess
