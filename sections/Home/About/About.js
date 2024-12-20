import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Top from '../../../public/Home/About/Top.svg'
import Bottom from '../../../public/Home/About/bottom.svg'
import ToothBrush from '../../../public/Home/About/tooth-brush.png'
import Styles from '../../../styles/Home.module.css'
import Link from 'next/link'

const About = () => {
    return (
        <>
            <Container maxWidth="xxl" className={`p-0`}>
                <Box>
                    <img src={Top.src} alt="top curve" className='img-fluid' style={{ position: "relative", zIndex: "-1" }} />
                </Box>
                <Container maxWidth="xxl" className={`${Styles.aboutSec} py-0 mt-n1`}>
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Grid container spacing={5}>
                                <Grid item xs={12} md={6} className={Styles.Home_About_Image}>
                                    <Box>
                                        <Image src={ToothBrush} alt="Tooth Brush" />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box>
                                        <div className='welcome text-dark-blue'>
                                            Welcome to Carrum Downs Dental at Shop T5, Hall Road!
                                        </div>
                                        <Typography variant='h2' className='text-white'>Most Trusted Family Dentist in Carrum Downs</Typography>
                                        <Typography className='text-white para'>Our practice provides our patients with comprehensive services under one roof. From <a href="/dental-implants-procedure/">Dental Implants</a> to Cosmetic Dentistry and <a href="/service/wisdom-teeth-removal/">Wisdom tooth extractions</a> to Dentures, our clinics wide range of affordable services will put a big smile on your face. We believe in giving our patients a choice in treatment and we will always educate and discuss treatment option with patients before a decision is made.</Typography>
                                        <Typography className='text-white para'>Our staff are very friendly and will receive you with a smile and our warm and inviting office will provide you a relaxing experience. Our dentist/staff are very good with children and will do whatever it takes to calm them down and distract them with IPAD while the treatment is performed.</Typography>
                                        <Typography className='text-white para'>We accept dental vouchers from the public dental services (Victorian Dental Scheme and <a href="/service/child-benefit/">Child Dental Benefit Schedule</a>). Our dentist Speak English, Hindi, Tamil, Arab, Malayalam, and Urdu.</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Box>
                    <img src={Bottom.src} alt="bottom curve" className='img-fluid bottomCurve' style={{ position: "relative", zIndex: "-1" }} />
                </Box>
            </Container>
        </>
    )
}

export default About
