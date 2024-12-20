import React from 'react';
import { Grid, Typography, Button, Paper, Container, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material'
import Image from 'next/image';
import gumDisease1 from '../../../public/dental-problems-img/gum disease/Gum_Disease_01.png'
import gumDisease2 from '../../../public/dental-problems-img/gum disease/Gum_Disease_02.png'
import { BlueFilledBtn, BlueOulinedBtn, CommonHero, IconBtn, SectionalHeading } from '../../../components/components';
import Head from 'next/head';
import BannerGumDisease from "../../../public/dental-problems-img/gum disease/Gum_Disease_banner.jpg"
import GumDisease from "../../../public/dental-problems-img/gum disease/Gum_Disease_Treatment.png"
import Tooth_Extraction from "../../../public/dental-problems-img/gum disease/Tooth_Extraction_01.png"
import Scaling from "../../../public/dental-problems-img/gum disease/Scaling_and_Cleaning.png"
import Wisdom from "../../../public/dental-problems-img/gum disease/Wisdom_Teeth_Removal.png"

const GumDiseases = () => {
    return (
        <>
            <Head>
                <title>A Guide to Understanding Gum Disease l Carrum Down Dental</title>
                <meta name="description" content="Gum disease is an infection of the gums rather than the teeth. Gum disease might start long before you have any symptoms or signs. Contact Carrum Downs Dental for more." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero
                bg={BannerGumDisease}
                breadcrumb={null}
                title="Gum Disease"
                align="left"
                color="#ccc"
            />
            <section className='gum-disease-tooth-section1' style={{
                backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
                paddingTop: '100px',
                paddingBottom: '100px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                    Learn More About Gum Disease
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    If you're facing issues with gum disease, Carrum Downs Dental Group is here to provide assistance. Our advanced techniques and cutting-edge facilities enable us to deliver effective gum disease treatments. Our primary goal is to enhance your gum health and rejuvenate your confident smile through our exceptional dental care solutions.
                                </Typography>
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={gumDisease1} alt="Image" width={450} height={400} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={gumDisease2} alt="Image" width={450} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom style={{ color: "var(--dark-blue)" }}>
                                    Don't Let Gum Disease Ruin Your Healthy Smile
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Gum disease, a prevalent issue, has the potential to lead to tooth loss, unpleasant breath, and various oral health complications if not properly addressed.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Unfortunately, gum disease is frequently overlooked, impacting both your well-being and self-assurance.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    At Carrum Downs Dental Group, we provide thorough plans for gum disease treatment, aiming to restore your oral health. Our skilled dental team specialises in effectively managing gum disease and revitalizing your oral well-being. Schedule an appointment with us to embark on the journey of reclaiming your vibrant smile.
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
                                    Dental Services That Can Address Gum Disease
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    We extend our dental services to effectively manage issues stemming from gum disease, ensuring a healthier mouth and an enhanced smile.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong> Scaling and Cleaning   </strong> Our scale and clean procedure is designed to thoroughly remove plaque and tartar that prove resistant to regular brushing. This preventive measure can effectively ward off tooth decay and gum disease.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={Scaling} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong>Gum Disease Treatment </strong> Our skilled dentists offer a range of treatments for gum diseases, including deep cleaning, antibiotic therapy, and periodontal surgery. These interventions are tailored to restore the health of your gums and rejuvenate your beautiful smile.</ListItemText>
                                                </Box> </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'>
                                                <Image src={GumDisease} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong>Tooth Extraction </strong> Addressing gum disease often involves tooth extraction, a proactive approach to safeguarding oral health. Removing infected teeth minimizes the risk of further infection due to debris trapped around the tooth.</ListItemText>
                                                </Box> </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'>
                                                <Image src={Tooth_Extraction} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong>Wisdom Teeth Removal  </strong> Wisdom teeth, located at the back of the mouth, can harbor bacteria and contribute to localized gum disease issues. Extraction of these teeth can play a pivotal role in protecting your gums from complex problems such as gum disease.</ListItemText>
                                                </Box> </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'>
                                                <Image src={Wisdom} alt="Image" className='img-fluid' />
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
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Gum Disease" align="center" />
                            </Box>

                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                What causes gum disease?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Gum disease arises due to the build-up of bacteria, which can harm the delicate tissue encircling the teeth, leading to symptoms like redness, swelling, and bleeding.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                What are the signs that I have gum disease?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Gum disease is identified by inflamed, reddened gums that exhibit a tendency to bleed during brushing or flossing. Additionally, discomfort during chewing, sensitivity to touch, foul breath, presence of pus between teeth and gums, emergence of gaps between teeth, and gum recession are also indicative signs.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                How do I manage gum disease at home?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>A daily dental regimen that includes brushing, flossing, and mouthwash can aid in home-based gum disease management. However, complete management might not be achievable at home for more severe cases, making it strongly advisable to consult your dentist.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                Will gum disease go away on its own?
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Gum disease doesn't resolve naturally, and we strongly advise you to schedule a visit to Carrum Downs Dental Group to prevent its progression.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                How do I strengthen my gums to prevent gum disease?
                                            </button>
                                        </h3>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">

                                                <div className='para'>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  >Safeguard your gums against gum disease through regular dentist visits, consistent habits like daily brushing with fluoride toothpaste, flossing, and routine check-ups.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   >Enhancing your diet with fibre-rich fruits and vegetables offers protection against gum disease and cavities. These foods boost saliva production, containing vital minerals like calcium and phosphate that restore tooth enamel, counteracting mineral loss due to bacterial acids.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   >Integrating dairy products into your meals aids in plaque and gum disease prevention. Cheese, milk, plain yogurt, and similar dairy items stimulate saliva production thanks to their calcium and phosphate content. These minerals also contribute to fortifying tooth enamel.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText >Green and black tea consumption serves as a proactive measure against gum disease. Polyphenols in these teas not only counteract plaque bacteria but also hinder their growth.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText >Fortify your oral health against gum disease with fluoride-rich foods. Embrace the advantages of fluoridated water and various products, such as sugar-free powdered juices and dehydrated soups (low in sugar). Poultry, seafood, and cereals also provide additional dental protection.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText >Chewing sugar-free gum triggers saliva production, assisting in the removal of food particles and aiding in gum disease prevention. Embrace the pleasant freshness of sugar-free gum for renewed confidence in your breath.
                                                            </ListItemText>
                                                        </ListItem>
                                                    </List>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section style={{ marginBottom: "2rem" }}></section>
                                <Typography variant="body1" className='text-black' gutterBottom><strong style={{ color: "var(--dark-blue)" }}>Experience luxury dental care at Carrum Downs Dental Group</strong><br></br>
                                    Carrum Downs Dental Group holds the belief that everyone should have access to top-notch dental care. Delay no more in embracing the noble experience – secure your appointment at Carrum Downs Dental Group today!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default GumDiseases;
