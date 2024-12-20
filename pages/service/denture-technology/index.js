import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { CommonHero, CommonSidebar, SectionalHeading, InterestFree, TermsNCondition, BookAndCall } from '../../../components/components'
import Banner from '../../../public/TeethWhitening/Banner.jpg'
import { CheckCircleOutline } from '@mui/icons-material'
import Denture1 from '../../../public/denture/denture1.jpg'
import Denture2 from '../../../public/denture/denture2.jpg'
import implant1 from '../../../public/implant/implant1.jpg'
import image1 from '../../../public/digital-denture/digital-denture-1.jpg'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const DentureTechnology = () => {
    const [value, setValue] = React.useState(0);
    const [hydarate, setHydrate] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        typeof window !== undefined ? setHydrate(true) : setHydrate(false)
    }, [])

    const breadcrumb = [
        { id: "DentureTechnology_breadcrumb_1", link: "/service/", title: "Service" },
        { id: "DentureTechnology_breadcrumb_2", link: null, title: 'Denture Technology in Carrum Downs' }
    ];


    return (
        <>
            <Head>
                <title>Denture Technology in Carrum Downs | Carrum Downs Dentist</title>
                {/* <meta name="description" content="Teeth Whitening is the most effective way to restore the whiteness of your tooth. We use Pola Whitening system to remove the discoloration." /> */}
                <meta name="description" content="Discover the future of dentures at Carrum Downs Dental Group. Our advanced dentures technology ensures a precise fit, natural look, and long-lasting comfort." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Denture Technology in Carrum Downs" align='left' color="#fff" />
            < main >
                {
                    hydarate ?
                        <Container maxWidth="xxl">
                            <Grid container>
                                <Grid item xs={12} md={10} className="mx-auto">
                                    <Box py={5}>
                                        <Grid container spacing={5}>
                                            <Grid item xs={12} lg={8}>
                                                <section>
                                                    <Container maxWidth="xxl">
                                                        <Box mt={2}>
                                                            <Typography className='para'>Have you tried removable false teeth made of acrylic(plastic), nylon, and metal? Well, they are called Dentures. </Typography>
                                                            <Typography className='para'>They fit snugly over your gums and eliminate the problems that happen due to gaps.</Typography>
                                                        </Box>
                                                        <SectionalHeading variant="h2" title="Carrum Downs Dental: We promise to deliver smiles!" align='left' color="var(--dark-blue)" />
                                                        <Box mt={2}>
                                                            <Typography className='para'>Because we are highly comfortable for all those who fear visiting any dentist. We promise to give you a good smile with a painless experience.</Typography>
                                                            <Typography className='para'>Also, our treatment will last longer if you are committed to your appointments and take minor care. Also, getting accustomed to wearing dentures takes time. So, new denture wearers may find it uncomfortable initially.
                                                                But this will automatically settle down. All you need to have is enough patience for dentures to show wonders.
                                                            </Typography>
                                                        </Box>
                                                        <Box my={3}>
                                                            <Typography className='para'>The following dental treatments are available at Carrum Downs Dental:</Typography>
                                                            <List>
                                                                <ListItem className="ps-0">
                                                                    <ListItemIcon>
                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="Traditional Denture, which is made available using various materials." />
                                                                </ListItem>
                                                                <ListItem className="ps-0">
                                                                    <ListItemIcon>
                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={
                                                                        <>
                                                                            <a href="service/digital-dentures" className='bg-blue'>Digital dentures </a> are made available by using the latest technology which is easy to wear.
                                                                        </>
                                                                    } />
                                                                </ListItem>
                                                                <ListItem className="ps-0">
                                                                    <ListItemIcon>
                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="Implant-stabilized overdentures which holds in place by implants." />
                                                                </ListItem>
                                                            </List>
                                                        </Box>
                                                    </Container>
                                                </section>
                                                {/* tab section  */}
                                                <section className='mt-md-5 mt-4'>
                                                    <Container maxWidth="xxl" >
                                                        <Box style={{ color: "var(--dark-blue)" }} xs={12} lg={8} className="border">
                                                            <Box sx={{ width: '100%' }}>
                                                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                                        <Tab label="Denture (Traditional)" {...a11yProps(0)} />
                                                                        <Tab label="Digital Denture" {...a11yProps(1)} />
                                                                        <Tab label="Overdenture" {...a11yProps(2)} />
                                                                    </Tabs>
                                                                </Box>
                                                                <TabPanel value={value} index={0}>
                                                                    <Box p={3}>
                                                                        <Box>
                                                                            <Grid container>
                                                                                <Grid item xs={12} sm={6} className="pe-2">
                                                                                    <Image src={Denture1} alt="Dentures In Carrum Downs" />
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6} className="pe-2">
                                                                                    <Image src={Denture2} alt="Dentures In Carrum Downs" />
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Typography className="para">Carrum Downs Dental Group at Shop T5, 100 Hall Rd Offers a wide range of dentures to satisfy each individual patient’s specific denture needs. We work with you to determine your exact requirements and what is required to meet them. We at Carrum Downs Dental Group take pride in the quality of our Dentures.</Typography>
                                                                            <Typography className="para">Dentures can help restore your way of life by helping you with day-to-day functions, such as eating and speaking, as well as help restore your confidence by improving your appearance and smile.</Typography>
                                                                            <SectionalHeading variant="h2" title="What are Dentures?" color="var(--dark-blue)" />
                                                                            <Typography className="para">Dentures are replacement teeth that are removable. With the technological advancements there are several types of Dentures available to suit individual patient’s needs on comfort, convenience and look. Your Dentist will help you choose the best solution for you.</Typography>
                                                                        </Box>
                                                                        <Box>
                                                                            <List>
                                                                                <ListItem className='ps-0'>
                                                                                    <ListItemIcon>
                                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                                    </ListItemIcon>
                                                                                    <ListItemText primary={<strong>Full dentures</strong>} secondary="If all the teeth are missing, this is a cost-effective way to replace all the teeth." />
                                                                                </ListItem>
                                                                                <ListItem className='ps-0'>
                                                                                    <ListItemIcon>
                                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                                    </ListItemIcon>
                                                                                    <ListItemText primary={<strong>Partial dentures</strong>} secondary="Usually made out of acrylic or a metal framework to replace one or more teeth." />
                                                                                </ListItem>
                                                                                <Box mt={3}>
                                                                                    <Button className='blueFilledBtn' onClick={() => setSelectedTab('Denture (Traditional)')}><a href="https://carrumdownsdental.com.au/service/dentures/" className='text-white'>Learn More..</a></Button>
                                                                                </Box>
                                                                            </List>
                                                                        </Box>
                                                                    </Box>
                                                                </TabPanel>
                                                                <TabPanel value={value} index={1}>
                                                                    <Box p={3}>

                                                                        <section>
                                                                            <Container maxWidth="xxl" className='p-0'>
                                                                                <SectionalHeading variant="h2" title="Digital Dentures Carrum Downs Dental Clinic" align='center' color="var(--dark-blue)" />
                                                                                <Box mt={3}>
                                                                                    <Grid container spacing={5}>
                                                                                        <Grid item xs={12}>
                                                                                            <Typography className='para'>As technology continues to advance, so does the field of dentistry. The latest innovation in dental care has given people a new way to smile and chew comfortably – digital dentures! Dentists now use state-of-the-art software, imaging systems, and 3D printing technology to create customized dentures with an improved fit, function, and aesthetics. </Typography>
                                                                                            <Typography className='para'>At Carrum Downs Dental Clinic, we take pride in offering digital denture services. We understand that every patient has their own unique needs. Therefore, we strive to offer individualized services to meet their needs.</Typography>
                                                                                        </Grid>
                                                                                    </Grid>
                                                                                </Box>
                                                                            </Container>
                                                                        </section>

                                                                        <Container maxWidth="xxl" className='p-0'>
                                                                            <SectionalHeading variant="h2" title="What are Digital Dentures?" align='center' color="var(--dark-blue)" />
                                                                            <Box mt={3}>
                                                                                <Grid container spacing={5}>
                                                                                    <Grid item xs={12} md={6}>
                                                                                        <Typography className='para'>Digital dentures are a recent innovation that uses 3D scanning, design, and printing to fabricate a denture prosthetic. The technology enables the dentist to create more precise, comfortable, and aesthetically pleasing dentures than traditional ones. Digital dentures are designed using specialized software for greater accuracy and customization.</Typography>
                                                                                    </Grid>
                                                                                    <Grid item xs={12} md={6}>
                                                                                        <Image src={image1} alt="girl smiling" />
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Box>
                                                                            <Box mt={3}>
                                                                                <Button style={{ width: "10rem" }} className='blueFilledBtn' onClick={() => setSelectedTab('Digital Denture')}><a href="https://carrumdownsdental.com.au/service/digital-dentures/" className='text-white'>Learn More..</a></Button>
                                                                            </Box>
                                                                        </Container>

                                                                    </Box>
                                                                </TabPanel>

                                                                <TabPanel value={value} index={2}>
                                                                    <section>
                                                                        <Container maxWidth="xxl" className='p-0'>
                                                                            <SectionalHeading variant="h2" title="Did you know that a lot of Individuals with convectional dentures end up not wearing them due to the simple fact that they don’t stay in place?" color="var(--dark-blue)" />
                                                                            <Box mt={3}>
                                                                                <Grid container spacing={5}>
                                                                                    <Grid item xs={12} md={6}>
                                                                                        <Image src={implant1} alt="girl smiling" />
                                                                                    </Grid>
                                                                                    <Grid item xs={12} md={6}>
                                                                                        <Typography className='para'>Dental implants provide you with a means of ensuring that dentures remain firmly in position. It enables you to carry out your daily activities with confidence. An implant-supported overdenture is a denture that is held in place by implants and attached to the Many people have found dental implants procedure to secure their dentures in place to be very successful.
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Box>
                                                                        </Container>
                                                                    </section>
                                                                    <Container maxWidth="xxl" className='p-0'>
                                                                        <Box p={1}>
                                                                            <Typography className='para'>In fact, when compared to other implanted surgical devices, it has been reported that dental implants to support dentures have the highest success rate.
                                                                            </Typography>
                                                                            <Typography className='para'>An implant-supported overdenture uses some special attachments that snap onto the implants. Like regular dentures, an implant-supported overdenture must be taken out at night for cleaning purposes. It would be best if you also cleaned the gums and implant attachments.</Typography>
                                                                            <Typography className='para'>Millions of individuals across the globe are missing enough teeth to necessitate the use of conventional dentures. Therefore, most of them face difficulties keeping themselves securely in place, particularly in the lower jaw. If you struggle with loose dentures, you must be familiar with the embarrassment that comes with slipping dentures and the inability to enjoy your favorite foods.</Typography>
                                                                            <Box mt={3}  >
                                                                                <Button style={{ width: "10rem" }} className='blueFilledBtn' onClick={() => setSelectedTab('Overdenture')}><a href="https://carrumdownsdental.com.au/service/implant-supported-denture/" className='text-white'>Learn More..</a></Button>
                                                                            </Box>
                                                                        </Box>
                                                                    </Container>
                                                                </TabPanel>
                                                            </Box>
                                                        </Box>
                                                    </Container>
                                                </section>

                                                {/*  */}
                                                <section className='mt-md-5 mt-4'>

                                                    <InterestFree />
                                                    <TermsNCondition />

                                                </section>
                                                <section className='mt-md-5 mt-4 bg-grey'>
                                                    <Container maxWidth="xxl" className="p-0">
                                                        <Box p={2}>
                                                            <div className='sectional-heading1 text-center' style={{ color: "var(--dark-blue)" }} >Book an appointment with Carrum Downs Dental (100 Hall Road) on 03-9782 1200 for your wisdom tooth extraction.</div>
                                                            <Box mt={2} className="d-flex justify-content-center">
                                                                <BookAndCall appointment={true} call={true} />
                                                            </Box>
                                                        </Box>
                                                    </Container>
                                                </section>
                                            </Grid>
                                            <Grid item xs={12} lg={4}>
                                                <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                                            </Grid>


                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container> : "Loading..."
                }
            </main>
        </>
    );
}

export default DentureTechnology

