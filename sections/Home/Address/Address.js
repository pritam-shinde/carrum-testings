import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { SectionalHeading } from '../../../components/components'
import { Home, Phone, Mail } from '@mui/icons-material'
import Styles from '../../../styles/Home.module.css'
import Scan from '../../../public/sidebar/scan.png'

const Address = () => {
    return (
        <>
            <Container maxWidth="xxl" className='p-0'>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box className='ratio ratio-1x1'>
                            <iframe title="mapFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3139.644073472722!2d145.1847562!3d-38.1019478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60daa0ae475ab%3A0x883cf75f64c0eecb!2sCarrum%20Downs%20Dental%20Group!5e0!3m2!1sen!2sin!4v1665396657093!5m2!1sen!2sin" width="800" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} className={`d-flex justify-content-center align-items-center ${Styles.map}`}>
                        <Box className={`p-2 p-md-0 ${Styles.addressBox}`}>
                            <SectionalHeading variant='h2' align='left' color="var(--dark-blue)" title="Carrum Downs Dental Group" />
                            <Box py={3}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Home style={{ color: 'var(--dark-blue)' }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Shop T5, 100 Hall Road, Carrum Downs" className="font-weight-bold" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Phone style={{ color: 'var(--dark-blue)' }} />
                                        </ListItemIcon>
                                        <a href="tel:03-9782 1200"><ListItemText primary="03-9782 1200" className="font-weight-bold" /></a>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Mail style={{ color: 'var(--dark-blue)' }} />
                                        </ListItemIcon>
                                        <a href="mailto:carrumdownsdental@gmail.com"><ListItemText primary="carrumdownsdental@gmail.com" className="font-weight-bold" /></a>
                                    </ListItem>
                                </List>
                                <Box mt={3}>
                                    <SectionalHeading variant='h3' align='left' color="var(--dark-blue)" title="Scan for Direction" />
                                    <img src={Scan.src} alt="scan" style={{maxWidth:"60%"}} className="mt-3"/>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Address