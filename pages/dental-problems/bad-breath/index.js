import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BlueFilledBtn, BlueOulinedBtn, CommonHero, SectionalHeading } from '../../../components/components';
import DentalFilling from "../../../public/dental-problems-img/bad breath/Dental_filling.png";
import ScaleAndCleaning from "../../../public/dental-problems-img/bad breath/Scaling_and_Cleaning.png";
import ToothExtraction from "../../../public/dental-problems-img/bad breath/Tooth_Extraction.png";
import Wisdom from "../../../public/dental-problems-img/bad breath/Wisdom_Teeth_Removal.png";
import BadBreath1 from "../../../public/dental-problems-img/bad breath/bad_breath_01.png";
import BadBreath2 from "../../../public/dental-problems-img/bad breath/bad_breath_02.png";
import Treatment from "../../../public/dental-problems-img/bad breath/bad_breath_06.png";
import BannerBadBreath from "../../../public/dental-problems-img/bad breath/bad_breath_banner.jpg";

const BadBreath = () => {
    return (
        <>
            <Head>
                <title>Find Remedies for Your Bad Breath | Carrum Downs Dental</title>
                <meta name="description" content="Banish Bad Breath with Solutions from Carrum Downs Dental. Learn about the causes of bad breath & discover effective remedies to regain your confidence & fresh breath." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero
                bg={BannerBadBreath}
                breadcrumb={null}
                title="Bad Breath"
                align="left"
                color="#fff" />
            <section className='bad-breath-section1' style={{
                backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
                paddingTop: '100px',
                paddingBottom: '100px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                    Learn More About Bad Breath
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    Halitosis, commonly known as <a href="/can-gum-disease-cause-bad-breath/">bad breath</a>, is a prevalent issue that can lead to feelings of embarrassment and unease in some people. At Carrum Downs Dental Group, our range of services is dedicated to tackling bad breath and providing proactive measures to maintain the overall health of your oral cavity.
                                </Typography>
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={BadBreath1} alt="Image" width={450} height={400} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={BadBreath2} alt="Image" width={450} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom style={{ color: "var(--dark-blue)" }}>
                                    Don't Let Your Bad Breath Ruin Your Confidence
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Should you observe individuals distancing themselves or displaying discomfort during conversations, it could indicate the need to rejuvenate your breath's freshness.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    The issue of bad breath pertains to oral hygiene and can significantly impact the quality of your breath. The primary cause of bad breath is inadequate dental care or a specific medical condition.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Don't allow bad breath to hinder how you interact with others or diminish your smile. At Carrum Downs Dental Group, we're dedicated to assisting you in combatting bad breath through a personalized treatment regimen tailored exclusively for your needs. Our all-encompassing approach aims to restore your confidence. Contact or visit us today.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='upper_clipPath'></div>
            <section style={{
                backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
                paddingBottom: '6rem',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                    Dental Services That Can Address Bad Breath
                                </Typography >
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    If you frequently experience unpleasant mouth odours, it's the right time to visit Carrum Downs Dental Group, where our expert dental services are geared towards tackling bad breath.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong> Scale and Cleaning Procedure  </strong> Plaque and tartar stand as the primary culprits behind unpleasant breath. Through our scale and clean procedure, we effectively eliminate the accumulation of plaque and tartar on your teeth, resulting in a more revitalizing breath experience.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={ScaleAndCleaning} alt="Image" className='img-fluid' />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong> Tooth Extraction  </strong> Damaged teeth can become breeding grounds for bacteria, contributing to bad breath. In cases where tooth preservation isn't viable, our recommendation often includes <a href="/facts-you-need-to-know-about-wisdom-tooth-extraction/">tooth extraction </a>to prevent the bacteria from spreading further and potential infections.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={ToothExtraction} alt="Image" className='img-fluid' />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong> Wisdom Teeth Removal   </strong> Wisdom teeth are notoriously challenging to clean, often leading to infections and subsequent bad breath. At Carrum Downs Dental Group, we offer <a href="/know-the-wisdom-teeth-removal-procedure-and-complications/">wisdom teeth removal</a> procedures that significantly mitigate the risk of infections, thereby improving your breath's quality.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={Wisdom} alt="Image" className='img-fluid' />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong> Treatment for Gum Disease   </strong> The root cause of gum disease is typically the accumulation of plaque or tartar, which can give rise to halitosis. Our skilled dentists can accurately diagnose and evaluate your <a href="/replacing-teeth-lost-through-gum-disease/">gum disease</a>, crafting a tailored treatment plan that promotes healthier gums and a more refreshing breath.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={Treatment} alt="Image" className='img-fluid' />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong> Dental Fillings   </strong> Cracks, cavities, or chips in your teeth create pockets where food particles and bacteria can become trapped, leading to tooth decay and bad breath. These issues are effectively addressed through precise dental filling techniques at Carrum Downs Dental Group, reducing your susceptibility to unpleasant breath odours.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={DentalFilling} alt="Image" className='img-fluid' />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box>
                                <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section className="mt-4 ">
                <Container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2 }}>
                            <Box>
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Bad Breath" align="center" />
                            </Box>
                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                What causes bad breath?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'> Halitosis, also known as bad breath, can result from various factors. Among these, inadequate oral hygiene and dry mouth stand as the most prevalent. Nonetheless, alternative potential triggers include the consumption of strong-smelling foods such as garlic and onions, which can leave an undesirable lingering odour in the mouth.
                                                    Furthermore, the consumption of alcohol, smoking tobacco, and chewing tobacco are additional culprits behind bad breath. In exceptional instances, a connection may exist between bad breath and illnesses originating in other parts of the body.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How do I know if I have bad breath?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>If you suspect the presence of bad breath, a few self-tests can provide insights. One technique involves enclosing your hands around your mouth and nose and then taking a deep breath. If the resulting odour is unpleasant, then it is likely that you have bad breath. Licking your wrist and detecting any unpleasant scent upon smelling it could suggest the same issue.
                                                    For a more precise evaluation, consulting with Carrum Downs Dental Group professionals is recommended. Our dentists have specialised tools that can gauge the odour of your breath, facilitating an accurate diagnosis and appropriate guidance.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Can I manage my bad breath at home?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse  " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>
                                                    Absolutely, effective management of bad breath can be achieved in the comfort of your own home. Adopt proper oral hygiene practices, which include brushing your teeth with fluoride-infused toothpaste and regular flossing. Establishing a routine of brushing your teeth twice daily and flossing once daily is pivotal to diminishing bad breath and upholding oral health. Doing so effectively eliminates food particles, bacteria, and plaque that can lead to undesirable odours.
                                                    Furthermore, incorporating the use of a tongue scraper or brushing your tongue aids in reducing the accumulation of bacteria on its surface, a contributing factor to halitosis. Alongside brushing and flossing, integrating a mouthwash into your regimen can be beneficial, as it combats the bacteria responsible for bad breath. Staying well-hydrated by drinking ample water also plays a role in rinsing away food particles and bacteria, contributing to the maintenance of a pleasantly fresh breath.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                How do I prevent bad breath?
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'> Maintaining proper oral hygiene serves as the fundamental approach to thwarting bad breath. Equally significant are routine dental examinations, crucial for identifying and promptly addressing any underlying issues or conditions that might be contributing to bad breath, such as gum disease or cavities.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                What are the benefits of addressing bad breath?
                                            </button>
                                        </h3>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'> Tackling bad breath not only boosts your self-assurance and emotional balance but also enhances your overall dental well-being. Often overlooked, the significance of having fresh breath for leaving a positive impact cannot be understated. Taking steps to address bad breath enhances your day-to-day life and yields lasting health advantages, including a lowered susceptibility to gingivitis and gum disease.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section style={{ marginBottom: "2rem" }}></section>
                                <Typography variant="body1" className='text-black' gutterBottom><strong style={{ color: "var(--dark-blue)" }}>Experience luxury dental care at Carrum Downs Dental Group</strong><br></br>
                                    Carrum Downs Dental Group firmly believes in extending the richness and ease of premium dental care to all. There's no need to delay any further to achieve a pleasant breath – secure your appointment at Carrum Downs Dental Group without delay!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default BadBreath
