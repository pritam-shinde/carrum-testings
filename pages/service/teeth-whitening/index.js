import { CheckCircleOutline } from '@mui/icons-material'
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import Age from '../../../public/TeethWhitening/age.jpg'
import Apply from '../../../public/TeethWhitening/apply.webp'
import NightB from '../../../public/TeethWhitening/b-night.jpg'
import Banner from '../../../public/TeethWhitening/Banner.jpg'
import BDAY from '../../../public/TeethWhitening/day-B.jpg'
import Gen from '../../../public/TeethWhitening/gen.jpg'
import Smoking from '../../../public/TeethWhitening/smoke.jpg'
import TakeHomeCard from '../../../public/TeethWhitening/take-home-philips.webp'
import ZoomCard from '../../../public/TeethWhitening/zoom-teeth-whitening-philips.webp'

const TW = () => {
    const [hydarate, setHydrate] = useState(false);
    const [selectedTab, setSelectedTab] = useState('zoom')

    useEffect(() => {
        typeof window !== undefined ? setHydrate(true) : setHydrate(false)
    }, [])

    const breadcrumb = [
        { id: "TeethWhitening_breadcrumb_1", link: "/service/", title: "Service" },
        { id: "TeethWhitening_breadcrumb_2", link: null, title: 'Teeth Whitening in Carrum Downs' }
    ]
    return (
        <>
            <Head>
                <title>Teeth Whitening in Carrum Downs | Carrum Downs Dentist</title>
                <meta name="description" content="Teeth Whitening is the most effective way to restore the whiteness of your tooth. We use Pola Whitening system to remove the discoloration." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Teeth Whitening in Carrum Downs" align='left' color="#fff" />
            <main>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} lg={8}>
                                        <section>
                                            <Container maxWidth="xxl">
                                                <SectionalHeading variant="h2" title="Teeth Whitening" align='left' color="var(--dark-blue)" />
                                                <Box mt={2}>
                                                    <Typography className='para'>Are your teeth all yellow and dark? This might be time to schedule a teeth-whitening visit with your dentist. This is crucial if routine dental care procedures, such as brushing twice a day, are not yielding the desired results.</Typography>
                                                    <Typography className='para'>Professional teeth whitening is risk-free, efficient, and done under a dentist&apos;s guidance. Most of the time, paying more to see a dentist is worthwhile if it means getting long-lasting, secure results.</Typography>
                                                    <Typography className='para'>At Carrum Downs Dental Group, we provide professional teeth whitening services. These include Take-Home teeth whitening and In-Chair teeth whitening. Here are some of the benefits of each method: </Typography>
                                                </Box>
                                                <Box mt={2}>
                                                    <Grid container spacing={3}>
                                                        <Grid item xs={12} sm={6}>
                                                            <Card className='tWCard shadow'>
                                                                <CardMedia component="img" image={ZoomCard.src} src="Zoom teeth whitening" />
                                                                <CardContent className='cardContentTW' style={{ position: "relative" }}>
                                                                    <Typography variant='h3' className='fs-4' color="var(--dark-blue)">Zoom Teeth Whitening</Typography>
                                                                    <List>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="The results will last longer" />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="You can achieve up to 8 shades of brightness in just 90 minutes" />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Great if your schedule is busy" />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Use the latest dentistry equipment " />
                                                                        </ListItem>
                                                                    </List>
                                                                    <Box mt={2}>
                                                                        <Button className='blueFilledBtn cardBtn' onClick={() => setSelectedTab('zoom')}><a href="#tab" className='text-white'>Read More</a></Button>
                                                                    </Box>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <Card className='tWCard shadow'>
                                                                <CardMedia component="img" image={TakeHomeCard.src} src="Take Home teeth whitening" />
                                                                <CardContent className='cardContentTW'>
                                                                    <Typography variant='h3' className='fs-4' color="var(--dark-blue)">Take Home Teeth Whitening Kit</Typography>
                                                                    <List>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Pocket friendly" />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Custom trays use custom-made for you" />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="User friendly" />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Best for patients with sensitive teeth" />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="We will offer free support and progress review throughout the treatment" />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="You can always top later if you are not satisfied with the results" />
                                                                        </ListItem>
                                                                    </List>
                                                                    <Box mt={2}>
                                                                        <Button className='blueFilledBtn cardBtn' onClick={() => setSelectedTab('boutique')}><a href="#tab" className='text-white'>Read More</a></Button>
                                                                    </Box>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <Box mt={2}>
                                                    <SectionalHeading variant="h2" title="Causes of Teeth Discoloration" align='left' color="var(--dark-blue)" />
                                                    <Typography className='para'>Your teeth could discolour for several reasons, but the main ones are;</Typography>
                                                    <Box my={3}>
                                                        <Grid container spacing={3}>
                                                            <Grid item xs={12} sm={6} md={4} >
                                                                <Typography variant='h3' className='fs-4' gutterBottom style={{ color: "var(--dark-blue)" }}><CheckCircleOutline /> Ageing</Typography>
                                                                <Box p={3} className='rounded' style={{ border: "5px solid var(--dark-blue)" }}>
                                                                    <Image src={Age} alt="age" className='rounded' />
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={12} sm={6} md={4} >
                                                                <Typography variant='h3' className='fs-4' gutterBottom style={{ color: "var(--dark-blue)" }}><CheckCircleOutline /> Genetic</Typography>
                                                                <Box p={3} className='rounded' style={{ border: "5px solid var(--dark-blue)" }}>
                                                                    <Image src={Gen} alt="gen" className='rounded' />
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={12} sm={6} md={4} >
                                                                <Typography variant='h3' className='fs-4' gutterBottom style={{ color: "var(--dark-blue)" }}><CheckCircleOutline /> Smoking</Typography>
                                                                <Box p={3} className='rounded' style={{ border: "5px solid var(--dark-blue)" }}>
                                                                    <Image src={Smoking} alt="smoking" className='rounded' />
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <Typography className='para'>Luckily, our team of professional dentists at Carrum Downs Dental Group will conduct any of the two whitening procedures and restore your caramel white teeth.</Typography>
                                                </Box>
                                            </Container>
                                        </section>
                                        <section className='mt-md-5 mt-4' id="tab">
                                            <Container maxWidth="xxl">
                                                <Box className='border'>
                                                    <Grid container>
                                                        <Grid item xs={6} className="border"><Box onClick={() => setSelectedTab('zoom')} component={Button} py={2} className={`tab ${selectedTab == "zoom" ? 'bg--blue' : 'bg-light'}`} fullWidth><Typography variant='h2' align='center' className={`tab text-dark fs-6 ${selectedTab == "zoom" ? 'text-white' : 'text-dark'}`}>Zoom teeth whitening</Typography></Box></Grid>
                                                        <Grid item xs={6} className="border"><Box onClick={() => setSelectedTab('boutique')} component={Button} py={2} className={`tab ${selectedTab == "boutique" ? 'bg--blue' : 'bg-light'}`} fullWidth><Typography variant='h2' align='center' className={`tab text-dark fs-6 ${selectedTab == "boutique" ? 'text-white' : 'text-dark'}`}>Boutique Teeth Whitening</Typography></Box></Grid>
                                                        <Grid item xs={12}>
                                                            {
                                                                selectedTab == 'zoom' ? <>
                                                                    <Box p={3}>
                                                                        <Box>
                                                                            <Grid container>
                                                                                <Grid item xs={12} sm={6} className="pe-2">
                                                                                    <Image src={Apply} alt="day" className='rounded' />
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6} className="ps-2">
                                                                                    <Typography variant='h3' className="fs-4 tabHead fw-bold m-0" style={{ color: "var(--dark-blue)" }}>Zoom Teeth Whitening</Typography>
                                                                                    <Typography className='para'>Zoom whitening is a type of laser therapy that has grown in popularity due to its ability to deliver long-lasting benefits in the shortest time.</Typography>
                                                                                    <Typography>
                                                                                        It is a method that dentists employ to whiten teeth using cutting-edge therapy. The method combines a unique lamp known as a Zoom light with a whitening cream that contains hydrogen peroxide.
                                                                                    </Typography>
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Typography className='para'>It works better than other tooth whitening solutions that may take weeks or even months to provide noticeable results and lessens the stains or discolouration of tooth enamel.
                                                                                Additionally, Zoom whitening requires much less dedication and gives you a brilliant smile in just 90 minutes.
                                                                            </Typography>
                                                                            <Box mt={3}>
                                                                                <Typography variant='h3' className="fs-4 tabHead fw-bold m-0" style={{ color: "var(--dark-blue)" }}>How does it work</Typography>
                                                                                <Typography className='para'>Zoom Whitening is similar to a chemical bath that has no impact on the physical makeup of your teeth. It is a low-risk teeth whitening procedure.</Typography>
                                                                                <Typography className='para'>The dentist begins by protecting your lips and gums from bleaching during the procedure. A hydrogen peroxide-based whitening gel will then be administered three to four times at intervals of 15 minutes.</Typography>
                                                                                <Typography className='para'>The peroxide decomposes when it comes into contact with the intense light that the lamp emits. After then, it breaks down a thin layer of the enamel&apos;s top layer and allows oxygen to enter the teeth. The oxygen then aids in flushing out and eliminating any tooth discolouration that has occurred.</Typography>
                                                                                <Typography className='para'>Depending on how severe the staining is, the whitening process only takes an hour or less.</Typography>
                                                                                <Typography className='para'>Please be aware that while you may experience some temporary tooth sensitivity following the procedure, this shouldn&apos;t last more than 24 hours. Additionally, until the Zoom teeth whitening procedure is finished, we advise you to abstain from several foods and beverages for up to 72 hours.</Typography>
                                                                                <Typography className='para'>To decrease sensitivity after the whitening is finished, a separate gel is placed on your teeth. Your dentist will give you a touch-up kit and instructions on what foods and liquids you can eat and drink before you leave. </Typography>
                                                                            </Box>
                                                                            <Box mt={3}>
                                                                                <Typography variant='h3' className="fs-4 tabHead fw-bold m-0" style={{ color: "var(--dark-blue)" }}>What to Expect During the Procedure?</Typography>
                                                                                <Typography className='para'>Zoom whitening is a simple process that will take less than an hour. You will be comfortable with the entire process, and no pain is involved. The first thing that our dentist will do during the procedure evaluates the condition of your teeth to ascertain if you are a good candidate. </Typography>
                                                                                <Typography className='para'>Once that is done, your lips and gums will be covered by protective gear to prevent them from coming in contact with the whitening gel. </Typography>
                                                                                <Typography className='para'>A special gel containing whitening peroxide will then be applied to your teeth. This process will be repeated at least 3 to 4 times to achieve optimal results. </Typography>
                                                                                <Typography className='para'>The dentist will then apply some fluoride to your teeth once the process is done. This will help in reducing sensitivity. In addition, you will be given some custom-made trays and some whitening gel that you can use at home. </Typography>
                                                                            </Box>
                                                                            <Box mt={3}>
                                                                                <Typography variant='h3' className="fs-4 tabHead fw-bold m-0" style={{ color: "var(--dark-blue)" }}>Contact Carrum Downs Dental Group for Zoom Whitening</Typography>
                                                                                <Typography className='para'>Once you&apos;ve made up your mind that zoom whitening is the way to go, contact us at Carrum Downs Dental Group. We offer affordable services and never sacrifice quality. The results will also be long-lasting. Call us today to schedule an appointment. </Typography>
                                                                            </Box>
                                                                        </Box>

                                                                    </Box>
                                                                </> : selectedTab == 'boutique' ? <>
                                                                    <Box p={3} style={{ backgroundColor: "#11527826" }}>
                                                                        <Box>
                                                                            <Typography variant='h3' className="fs-4 tabHead fw-bold m-0" style={{ color: "var(--dark-blue)" }}>Boutique Teeth Whitening</Typography>
                                                                            <Typography className='para'>Founded in 2015, Boutique Whitening created its whitening solution to bridge the gap between in-office and at-home treatments, enabling everyone to achieve a dazzling smile safely and effectively without having to pay the exorbitant costs associated with professional teeth whitening procedures.</Typography>
                                                                            <Typography className='para'>Boutique teeth whitening is a practical method of teeth whitening that gives the patient control of what they are looking forward to achieving.</Typography>
                                                                            <Typography className='para'>The two primary alternatives for the whitening regimen are Boutique Whitening by Day and Boutique Whitening by Night. To assist you in choosing the best course of action for you, our dentists will go over both the benefits and limitations of each.</Typography>
                                                                            <Typography className='para'>With this type of treatment, you should start seeing results from the whitening procedure in less than a week!</Typography>
                                                                        </Box>
                                                                        <Box mt={3}>
                                                                            <Typography variant='h3' className="fs-4 tabHead fw-bold m-0" style={{ color: "var(--dark-blue)" }}>How Does It Work?</Typography>
                                                                            <Typography className='para'>Your dentist will examine your teeth after you&apos;ve made up your mind to have Boutique teeth whitening to ensure that your mouth and teeth are healthy enough for the operation.</Typography>
                                                                            <Typography className='para'>Afterwards, your dentist will mould your teeth and bite to make your personalised whitening trays. Advanced teeth-whitening gel, user-friendly syringes, and teeth-whitening trays will all be included in the kit.  The whitening gel is injected into the personalised mouth trays using syringes.</Typography>
                                                                            <Typography className='para'>You can begin gently applying a little amount of whitening gel to each tooth in your customised trays once the syringes have been filled with the gel. After completing this process, place the trays in your mouth, making sure they fit tightly and safely. </Typography>
                                                                            <Typography className='para'>There&apos;s a chance that some gel will leak over the tray&apos;s edges. Do not swallow; simply wipe away the gel with a toothbrush or piece of tissue before rinsing your mouth with water. </Typography>
                                                                            <Typography className='para'>The hydrogen peroxide or carbamide peroxide-based gel will begin to function as you wear the trays; it triggers the release of oxygen into the teeth&apos;s enamel, which causes any stains to gradually go away.</Typography>
                                                                            <Typography className='para'>After removing your whitening trays, give your teeth a light brushing, and then rinse them in cold water. Do this after each procedure.</Typography>
                                                                            <Typography className='para'>This method is extremely comparable to every other expert tooth-whitening treatment. The main distinction is that this treatment can be administered at home and doesn&apos;t call for any annoying follow-up treatments.</Typography>
                                                                            <Typography className='para'>While you wait, prepare your teeth for the whitening procedure at home using specialised extra-sensitive whitening toothpaste.</Typography>
                                                                        </Box>
                                                                        <Box mt={3}>
                                                                            <Typography variant='h3' className="fs-4 tabHead fw-bold m-0" style={{ color: "var(--dark-blue)" }}>Boutique by Day and Boutique by Night</Typography>
                                                                            <Typography className='para'>These two procedures are designed to fit different tastes and preferences. </Typography>
                                                                        </Box>
                                                                        <Box mt={3}>
                                                                            <Grid container>
                                                                                <Grid xs={12} sm={6} className="pe-2">
                                                                                    <Image src={BDAY} alt="day" className='rounded' />
                                                                                </Grid>
                                                                                <Grid xs={12} sm={6} className="ps-2">
                                                                                    <Typography variant='h3' className="fs-4 tabHead fw-bold m-0" style={{ color: "var(--dark-blue)" }}>Boutique Whitening by Day</Typography>
                                                                                    <Typography className='para'>Boutique by day is a whitening method that uses hydrogen peroxide as the main ingredient. You will apply your whitening gel to each tooth on your custom-made trays and then bite on them firmly. </Typography>
                                                                                </Grid>
                                                                            </Grid>

                                                                            <Typography className='para'>Though most of the gel is used up in the first 20 minutes, you are advised to leave your custom trays in place for at least an hour, depending on the specific type of gel you are given.</Typography>
                                                                            <Typography className='para'>The goal is to offer a teeth-whitening procedure that is quick, simple, and effective while also fitting into your schedule and eating routine.</Typography>
                                                                            <Typography className='para'>The gel discharges significant amounts of oxygen free radicals to dissolve stains and ultimately lighten teeth in a quick, safe manner.</Typography>
                                                                            <Typography className='para'>When not in use, kindly store your kit in the refrigerator or a cool, dark cabinet. Syringes should be kept in their box as the gel will activate when they are exposed to light. Only use the syringes to inject gel into the trays; otherwise, keep them away from heat and light.</Typography>
                                                                        </Box>
                                                                        <Box mt={3}>
                                                                            <Grid container>
                                                                                <Grid xs={12} sm={6} className="pe-2">
                                                                                    <Typography variant='h3' className="fs-4 tabHead fw-bold m-0" style={{ color: "var(--dark-blue)" }}>Boutique by Night</Typography>
                                                                                    <Typography className='para'>Boutique by night is a whitening method that uses potassium nitrate and carbamide peroxide as the main ingredients. These compounds have lower whitening gel concertation compared to the one used on boutique by night. </Typography>
                                                                                </Grid>
                                                                                <Grid xs={12} sm={6} className="ps-2">
                                                                                    <Image src={NightB} alt="night" className='rounded' />
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Typography className='para'>The trays should be worn for roughly 4 hours at night, although it is advisable that you wear your trays for at least 6 hours to obtain the maximum benefit. This method is best for people who run a busy schedule and would like to have the treatment done at night. </Typography>
                                                                            <Typography className='para'>If you are not sure which of the two is good for you, get in touch with us at Carrum Downs Dental Group for professional assistance.</Typography>
                                                                        </Box>
                                                                        <Box mt={3}>
                                                                            <Typography variant='h3' className="fs-4 tabHead fw-bold m-0" style={{ color: "var(--dark-blue)" }}>Choosing Boutique by Day or Boutique by Night</Typography>
                                                                            <Typography className='para'>It can be an uphill task to decide which method is best for you, especially since both methods are equally effective. However, our dentist at Carrum Downs Dental Group is here for you. We will walk you through the benefits of each method and settle on one that best suits your needs. Therefore, don&apos;t hesitate to schedule an appointment with us. </Typography>
                                                                        </Box>
                                                                        <Box mt={3}>
                                                                            <Typography variant='h3' className="fs-4 tabHead fw-bold m-0" style={{ color: "var(--dark-blue)" }}>Why Choose Professional Boutique Teeth Whitening over at home Whitening Kit</Typography>
                                                                            <Typography className='para'>Like professional whitening technology, at-home whitening kits use bleaching agents that can remove both surface and deeper stains. While at-home kits employ more concentrated chemicals over a longer length of time, the dentist utilises a greater concentration over a shorter period. At-home whitening aims can take weeks or even months to complete, and the effects only last one to two weeks.</Typography>
                                                                            <Typography className='para'>It is challenging to utilise hydrogen peroxide at home since heat, light, and saliva quickly degrade it before it has a chance to be useful. This whitening agent doesn&apos;t work as well and lasts less than other ones.</Typography>
                                                                            <Typography className='para'>Professional boutique treatment, on the other hand, employ specific light and hydrogen peroxide concentrations. All the whitening agents used in this method are certified by the dentist. This means that you are assured of positive results. Also, the dentist will have a chance to examine your teeth before recommending the treatment. </Typography>
                                                                            <Typography className='para'>Here are the main benefits of using Carrum Downs Dental Group for Boutique Whitening </Typography>
                                                                            <List>
                                                                                <ListItem>
                                                                                    <ListItemIcon>
                                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                                    </ListItemIcon>
                                                                                    <ListItemText primary="You will have a chance for a pre-consultation as well as guidance from the dentist" />
                                                                                </ListItem>
                                                                                <ListItem>
                                                                                    <ListItemIcon>
                                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                                    </ListItemIcon>
                                                                                    <ListItemText primary="The trays will be custom-made specifically for your mouth" />
                                                                                </ListItem>
                                                                                <ListItem>
                                                                                    <ListItemIcon>
                                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                                    </ListItemIcon>
                                                                                    <ListItemText primary="Your dentist will give you a personalised treatment plan" />
                                                                                </ListItem>
                                                                                <ListItem>
                                                                                    <ListItemIcon>
                                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                                    </ListItemIcon>
                                                                                    <ListItemText primary="You will be assured of quality products that will guarantee results" />
                                                                                </ListItem>
                                                                                <ListItem>
                                                                                    <ListItemIcon>
                                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                                    </ListItemIcon>
                                                                                    <ListItemText primary="The dentist will offer aftercare and support throughout the treatment" />
                                                                                </ListItem>
                                                                                <ListItem>
                                                                                    <ListItemIcon>
                                                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                                    </ListItemIcon>
                                                                                    <ListItemText primary="You will also get a 20th Day free appointment to review your progress" />
                                                                                </ListItem>
                                                                            </List>
                                                                        </Box>
                                                                    </Box>
                                                                </> : null
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Container>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <Container maxWidth="xxl">
                                                <SectionalHeading variant="h2" title="Conclusion" align='left' color="var(--dark-blue)" />
                                                <Typography className='para'>Teeth Whitening may be necessary if your teeth are discoloured and do not respond to regular oral hygiene such as brushing. While you can use over-the-counter kits for whitening, we recommend getting professional whitening services for safer, long-lasting, and effective results.
                                                    Get in touch with us at Carrum Downs Dental Group to book your appointment!
                                                </Typography>
                                            </Container>
                                        </section>
                                        <section className="mt-md-5 mt-4">
                                            <Container maxWidth="xxl" className="p-0">
                                                <Box>
                                                    <Box>
                                                        <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions (FAQs)" align="center" />
                                                    </Box>
                                                    <Box mt={3}>
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h3 className="accordion-header" id="headingOne">
                                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                        Are over-the-counter teeth whitening kits the same as take-home teeth whitening?
                                                                    </button>
                                                                </h3>
                                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className='para'>In a nutshell, NO! To ensure optimal results, take-home teeth whitening uses customised whitening kits. The Take-Home Whitening option also comes with gel and usage instructions. This indicates that the information given to you is based on your ultimate objective.</p>
                                                                        <p>On the other hand, over-the-counter kits for whitening teeth can be harmful. First of all, your gum&apos;s condition wasn&apos;t taken into account. You might even sustain harm. Second, unlike many over-the-counter teeth whitening solutions, the gel might not be dentist-recommended.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item">
                                                                <h3 className="accordion-header" id="headingTwo">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                        How long do the teeth whitening effects last?
                                                                    </button>
                                                                </h3>
                                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className='para'>Teeth whitening results are temporary and may need a retouch after three years.
                                                                            Nevertheless, lifestyle habits can speed up the process. People who consume foods and drinks that cause stains, such as wine, citrus, soda, and tea, among others, should anticipate that the whiteness may fade more quickly.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item">
                                                                <h3 className="accordion-header" id="headingFour">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                        What are the side effects of teeth whitening?
                                                                    </button>
                                                                </h3>
                                                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className='para'>The following are some potential side effects of tooth whitening:</p>
                                                                        <ul>
                                                                            <li>Discomfort for those with sensitive teeth </li>
                                                                            <li>Increased sensitivity to heat and cold </li>
                                                                            <li>Tingling sensations </li>
                                                                            <li>Your teeth may develop an infection.</li>
                                                                            <li>irritation</li>
                                                                        </ul>
                                                                        <p>These effects are only temporary and lost for about 24-48 hours. However, should they last longer than that and become more severe, do consult your dentists. </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item">
                                                                <h3 className="accordion-header" id="headingFive">
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                        How much does the Teeth Whitening procedure cost?
                                                                    </button>
                                                                </h3>
                                                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className='para'>The price of professional teeth whitening might vary; bleaching trays can cost as little as $399, and in-chair whitening treatments can cost as much as $499. However, the best course of action for a particular price is to consult your dentist and acquire a price estimate from them. Costs for professional teeth whitening treatments vary depending on the dental location, your dentist, and the shade you want to achieve.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Box>
                                                </Box>
                                            </Container>
                                        </section>
                                        <section className='mt-md-5 mt-4'>
                                            <InterestFree />
                                            <TermsNCondition />
                                        </section>
                                        <section className='mt-md-5 mt-4 bg-grey'>
                                            <Container maxWidth="xxl" className="p-0">
                                                <Box p={2}>
                                                    <div className='sectional-heading1 text-center' style={{ color: "var(--dark-blue" }}>
                                                        Book an appointment with Carrum Downs Dental (100 Hall Road) on 03-9782 1200 for your wisdom tooth extraction.
                                                    </div>
                                                    <Box mt={2} className="d-flex justify-content-center">
                                                        <BookAndCall appointment={true} call={true} />
                                                    </Box>
                                                </Box>
                                            </Container>
                                        </section>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        {
                                            hydarate ? <CommonSidebar isContactAvailable={true} isServicesAvailable={true} /> : "Loading..."
                                        }
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default TW
