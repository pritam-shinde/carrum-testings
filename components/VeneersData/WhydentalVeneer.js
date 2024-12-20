import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { CompareSlider1 } from '../components'

const WhydentalVeneer = () => {
  return (
    <>
       <Container> 
              <Grid container spacing={2} py={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" component="h2" gutterBottom style={{ color: "#115278" }}>
                    Why dental veneers?
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Dental veneers are a less invasive alternative to dental crowns depending on the defects or damages you are dealing with. Veneers provide a more conservative approach to fixing teeth colour, size, and
                    shape that can also be removed easily in the future if you decide to change them out. Their ability to cover up gaps between teeth and worn-out teeth makes dental veneers a lasting and cost-effective
                    solution. Root canal procedures and the use of tetracycline medication can also permanently stain your teeth, making dental veneers a recommendable fix.
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Over time your teeth might get damaged, chipped, or discoloured, which can make you self-conscious about their appearance. Dental veneers offer a long-term solution to all these cosmetic needs with
                    proven results in restoring beautiful natural smiles.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <CompareSlider1 />
                  </Box>
                </Grid>
              </Grid>
            </Container>
    </>
  )
}

export default WhydentalVeneer
