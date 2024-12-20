import React from 'react';
import { Grid, Typography, Button, Paper, Container, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material'
import Image from 'next/image';
import teethSensitivity1 from '../../../public/dental-problems-img/teeth sensitivity/teeth_sensitivity_01.png'
import teethSensitivity2 from '../../../public/dental-problems-img/teeth sensitivity/teeth_sensitivity_02.png'
import { BlueFilledBtn, BlueOulinedBtn, CommonHero, IconBtn, SectionalHeading } from '../../../components/components';
import Head from 'next/head';
import Scaling from "../../../public/dental-problems-img/teeth sensitivity/Scaling_and_Cleaning.png"
import DentalFilling from "../../../public/dental-problems-img/teeth sensitivity/Dental_filling.png"
import Treatment from "../../../public/dental-problems-img/teeth sensitivity/Bite_problems_03.png"
import BannerTeethSensitivity from "../../../public/dental-problems-img/teeth sensitivity/teeth_sensitivity_banner.jpg";

const teethSensitivity = () => {
    return (
        <>
            <Head>
                <title>Carrum Down Dental: Teeth Sensitivity: What You Need to Know</title>
                <meta name="description" content="Taking care of sensitive teeth Do you have a sensitive tooth in particular? At Carrum Downs Dental, we provide a variety of treatments. Visit right now." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero
                bg={BannerTeethSensitivity}
                breadcrumb={null}
                title="Teeth Sensitivity"
                align="left"
                color="#ccc"
            />
            <section className='teeth-missing-section1' style={{
                  backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
                paddingTop: '100px',
                paddingBottom: '100px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                    Learn More About Teeth Sensitivity
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    Have you ever been caught off guard by tooth sensitivity? Finding a resolution for this sensitivity doesn't have to come with unease. At Carrum Downs Dental Group, we skilfully tackle your discomfort, allowing you to relish your preferred foods and beverages without the burden of tooth sensitivity.
                                </Typography>
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={teethSensitivity1} alt="Image" width={450} height={400} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={teethSensitivity2} alt="Image" width={450} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom style={{ color: "var(--dark-blue)" }}>
                                    Understand Tooth Sensitivity and How to Manage It
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Many individuals experience the challenge of tooth sensitivity issues, which can be both highly uncomfortable and exasperating. Unfortunately, many are uncertain about how to tackle this problem.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Perhaps you've found yourself unable to enjoy your preferred foods due to the discomfort they trigger. Additionally, your teeth might consistently exhibit sensitivity to hot or cold beverages.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    At Carrum Downs Dental Group, we provide a range of solutions tailored to address tooth sensitivity concerns. Our skilled dental experts collaborate with you to devise a treatment strategy aligned with your requirements and financial considerations. We invite you to explore our clinic for more information regarding our budget-friendly tooth sensitivity remedies.
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
                                    Dental Services That Can Address Teeth Sensitivity
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    Our array of dental services is designed to alleviate tooth sensitivity, allowing you to relish your meals without concern.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong>	Scaling and Cleaning  </strong> This dental procedure employs specialised tools to manage the build-up of plaque and tartar effectively. It plays a crucial role in preventing tooth decay and gum disease, both of which contribute to tooth sensitivity
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
                                                    <ListItemText className='text-white'><strong>	Dental Fillings </strong> Restoring both form and function, dental fillings are instrumental. They safeguard teeth from sensitivity caused by decay or injury, maintaining their inner surfaces.</ListItemText>
                                                </Box> </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'>
                                                <Image src={DentalFilling} alt="Image" className='img-fluid' />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon >
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white' ><strong>Treatment for Gum Disease </strong>The recession of gums often exposes the vulnerable root, resulting in heightened sensitivity. Our gum disease treatments are geared towards shielding your teeth from exposure and the associated sensitivity.</ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'>
                                                <Image src={Treatment} alt="Image" className='img-fluid' />
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
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Teeth Sensitivity" align="center" />
                            </Box>
                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                What are the signs that my teeth are sensitive?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>Temperature Sensitivity </strong> Have you noticed an increased sensitivity in your teeth when exposed to cold air? This sensation might point to tooth sensitivity. If this issue continues, discussing how you can manage this condition with your dentist is advisable.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong>Hot Food or Drink Discomfort </strong> If consuming hot foods and beverages brings discomfort, your teeth could be sensitive. Should this discomfort persist, seeking advice from your dentist is recommended. They can identify the source of sensitivity and provide suitable relief.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong>	Cold Food or Drink Sensation </strong> Do your teeth react negatively to cold temperatures? Experiencing pain or unease while consuming cold items may indicate a sensitivity problem. Consulting your dentist can help you explore potential solutions.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>Pain While Brushing or Flossing </strong> Do you encounter pain when brushing or flossing? Such discomfort could be indicative of tooth sensitivity. If this sensation occurs, it's essential to consult your dentist for a thorough assessment.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>	Sensitivity to Acidic and Sweet Substances </strong> After consuming something sweet, do you feel toothache? Do acidic foods trigger pain in specific areas of your teeth? These occurrences are common signs of sensitivity, prompting the need to have a conversation about them with your dentist.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>	Pain While Chewing </strong> Are you experiencing sharp pain in your teeth while chewing? This could signify tooth sensitivity. For persistent discomfort, seeking evaluation from your dentist is crucial to address the issue effectively.
                                                            </ListItemText>
                                                        </ListItem>
                                                    </List>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How do I manage teeth sensitivity at home?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'><strong>Tooth Sensitivity Relief Options:</strong></div>
                                                <div className='para'>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>

                                                            <ListItemText  ><strong>Desensitizing Toothpaste </strong> Explicitly formulated for this purpose, this special toothpaste diminishes pain signals and obstructs irritants. With its active component, potassium nitrate, using this formula a few times can effectively decrease teeth sensitivity.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong>	Saltwater Rinse </strong> Harnessing the natural properties of salt as an antiseptic and anti-inflammatory, rinsing with salt water twice daily offers comforting relief from sensitive teeth.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong>	Warm Honey Solution </strong> When used as a mouthwash, warm water and honey can alleviate pain while supporting the healing process. This sweet, antibacterial agent accelerates wound recovery and provides relief from sensitivity.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>Turmeric Application </strong>Turmeric, containing curcumin—an anti-inflammatory compound—can be applied to the affected teeth. Gently massaging ground turmeric onto the area can help mitigate pain and sensitivity.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>	Utilize Green Tea </strong> Unsweetened green tea, employed as a daily mouthwash, contributes to tooth strengthening and inflammation reduction. This routine delivers enhanced relief from discomfort associated with tooth sensitivity.
                                                            </ListItemText>
                                                        </ListItem>
                                                    </List>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How do I prevent teeth sensitivity in the future?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Establishing a reliable and effective oral hygiene regimen, which includes brushing twice daily and flossing after meals, is pivotal in preventing this issue from recurring. Minimizing the intake of acidic foods and considering mouthguards if you have bruxism is also advised. Furthermore, maintaining regular appointments with your dentist for cleanings plays a crucial role in safeguarding sensitive areas and maintaining optimal oral health.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                When should I be worried about sensitive teeth?
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Should your dental discomfort and heightened sensitivity disrupt your daily activities, scheduling an appointment with your dentist promptly is imperative. Avoid delaying treatment and allowing the issue to endure.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Will teeth sensitivity go away on its own?
                                            </button>
                                        </h3>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>In certain instances, tooth sensitivity may naturally resolve over time. It's typically a temporary occurrence when it stems from dental procedures like root canal therapy or dental fillings. Yet, if your sensitivity lingers and doesn't diminish, it's advisable to engage in a discussion with your dentist. They can assess and potentially diagnose underlying factors such as worn enamel or exposed roots that might require further attention.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section style={{
                                    marginBottom: "2rem"
                                }}></section>
                                <Typography variant="body1" className='text-black' gutterBottom><strong style={{ color: "var(--dark-blue)" }}>Experience luxury dental care at Carrum Downs Dental Group</strong><br></br>
                                    Carrum Downs Dental Group firmly upholds the value that top-notch dental care should be accessible to everyone. There's no reason to wait any longer – treat yourself to the luxurious experience by booking your appointment at Carrum Downs Dental Group today and immerse yourself in unparalleled oral care.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </section>

        </>
    )
}

export default teethSensitivity
