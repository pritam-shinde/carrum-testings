import React from 'react';
import { Grid, Typography, Button, Paper, Container, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material'
import Image from 'next/image';
import bruxiusm1 from '../../../public/dental-problems-img/bruxism/Bruxism_01.png'
import bruxiusm2 from '../../../public/dental-problems-img/bruxism/Bruxism_02.png'
import bruxiusm3 from "../../../public/dental-problems-img/bruxism/Bruxism_03.png"
import Bruxism_banner from "../../../public/dental-problems-img/bruxism/Bruxism_banner.jpg"
import DentalCrowns from "../../../public/dental-problems-img/bruxism/Dental_crowns_03.png"
import { BlueFilledBtn, BlueOulinedBtn, CommonHero, SectionalHeading } from '../../../components/components';
import Head from 'next/head';

const Bruxism = () => {
    return (
        <>
            <Head>
                <title>Get Your Bruxism Treatment | Carrum Down Dental</title>
                <meta name="description" content="Get Professional Bruxism Treatment at Carrum Downs Dental. Find out how we can relieve your teeth grinding and clenching while preserving the health of your mouth." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero
                bg={Bruxism_banner}
                breadcrumb={null}
                title="Bruxism"
                align="left"
                color="#fff"
            />
            <section className='bruxism-section1' style={{
                backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
                paddingTop: '100px',
                paddingBottom: '100px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                    Learn More About Bruxism
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    Bruxism is the habit of grinding or clenching your teeth, which can cause pain. It can also cause tooth wear and fractures if left unaddressed. Carrum Downs Dental Group offers treatment options to help relieve symptoms from this uncomfortable disorder.
                                </Typography>
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={bruxiusm1} alt="Image" width={450} height={400} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={bruxiusm2} alt="Image" width={450} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom style={{ color: "var(--dark-blue)" }}>
                                    Keep Your Teeth Healthy by Managing Bruxism
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    A majority of individuals endure the effects of bruxism, or teeth grinding, on a daily basis without being aware of it. This habit can result in various issues, such as tooth erosion, headaches, and discomfort in the jaw.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Beyond causing pain and dental damage, teeth grinding can disrupt your sleep and daily routine.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    At Carrum Downs Dental Group, we provide advanced dental solutions aimed at addressing bruxism and rejuvenating oral well-being through cutting-edge technology and state-of-the-art equipment. We encourage you to arrange an appointment with our dental clinic, allowing us to guide you toward enhanced dental health.
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
                                    Dental Services That Can Address Bruxism
                                </Typography >
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    At Carrum Downs Dental Group, we extend dental solutions aimed at effectively addressing the grinding and clenching behaviours that might be resulting in dental damage.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong> Custom Mouthguards </strong> Individually crafted mouthguards are designed to alleviate grinding pressure and encourage ideal jaw alignment, safeguarding your teeth from the effects of bruxism. They can alleviate the discomfort and potential damage linked to tooth grinding.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={bruxiusm3} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong> Dental Crowns </strong> Dental crowns offer comprehensive defence for teeth impacted by bruxism-induced wear. They not only shield against further deterioration but also enhance bite control and comfort. However, even after receiving a crown, the use of a mouthguard is still recommended for continued protection.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={DentalCrowns} alt="Image" className='img-fluid' />
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
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Bruxism" align="center" />
                            </Box>
                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                What causes bruxism?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'> While the precise origin of bruxism (the action of grinding or clenching teeth) remains uncertain, medical professionals posit that it might stem from a blend of physical, psychological, and hereditary factors.</div>
                                                <div className='para'>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>Stress and Anxiety</strong> Occasionally, stress and anxiety can manifest physically. Bruxism, known as teeth grinding, can serve as an indicator of underlying stress and anxiety, potentially leading to lasting dental damage if left unaddressed.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong>Sleep Disturbances </strong> Bruxism during sleep often arises from poor-quality rest. If you experience problems like snoring or obstructive sleep apnoea, these issues likely contribute to your bruxism.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong>Usage of Specific Medications </strong> Selective Serotonin Reuptake Inhibitors (SSRIs) are prevalent medications employed for managing conditions such as anxiety, depression, and other mental health ailments. Unfortunately, an undesirable side effect of using SSRIs can be bruxism, or teeth grinding. While the exact connection between SSRIs and bruxism isn't entirely clear, it's believed that SSRIs influence the activity of proteins that regulate jaw muscle tone, leading to heightened muscle tension and contributing to bruxism.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong> Lifestyle and Habits </strong> Nocturnal teeth grinding might be linked to certain lifestyle habits, including smoking, excessive alcohol or caffeine consumption, and recreational drug use.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>	Genetic Predisposition </strong> Bruxism could have a familial basis and may be hereditary. If you've received a bruxism diagnosis, it's plausible that other family members also contend with this condition.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>	Association with Other Disorders </strong> An additional potential cause could be linked to mental and medical disorders such as Parkinson’s disease, dementia, gastroesophageal reflux disorder (GERD), epilepsy, and attention-deficit/hyperactivity disorder (ADHD).
                                                            </ListItemText>
                                                        </ListItem>
                                                    </List>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                What are the signs that I grind my teeth at night?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Bruxism tends to occur unconsciously; however, signs such as waking up with a mild headache or aching jaw could suggest nighttime teeth grinding. Moreover, you might observe worn tooth enamel, fractured or chipped teeth, teeth that feel loose, as well as tooth pain or sensitivity. Sometimes, family members might even notice the grinding sound. Hence, it's important to remain attentive and openly communicate any concerns with your dentist.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                What are the benefits of addressing bruxism?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Effectively addressing bruxism can play a pivotal role in preventing dental harm and circumventing expensive dental interventions. Additionally, it has the potential to alleviate muscular discomfort, diminish headaches, and facilitate a restful night's sleep, allowing you to awaken in the morning feeling revitalized.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                Can bruxism be managed at home?
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'> For muscle relaxation, experiment with placing one side of your face onto a heated pad. Allow the warm compress to remain for about 15 minutes, then switch to the other side and repeat the process. Equally important is tending to your mental well-being, as stress can underlie bruxism.
                                                    Incorporate relaxation practices into your everyday schedule, like indulging in warm baths and enjoying music. Moreover, it's advisable to steer clear of stimulating substances, such as evening coffee, while fostering healthy sleep practices.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Will bruxism go away on its own?
                                            </button>
                                        </h3>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'> Although the majority of children naturally outgrow this habit without incurring lasting dental harm, those with persistent bruxism might encounter problems such as jaw discomfort, headaches, and even dental damage. While certain instances might ameliorate on their own as time passes, it's advisable to seek expert assistance from your dentist. This step not only safeguards your oral well-being but also helps identify any potential root causes.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section style={{ marginBottom: "2rem" }}></section>
                                <Typography variant="body1" className='text-black' gutterBottom><strong style={{ color: "var(--dark-blue)" }}>Experience luxury dental care at Carrum Downs Dental Group</strong><br></br>
                                    At Carrum Downs Dental Group, our strong belief is that every person should have the chance to enjoy the lavishness and cosiness of the best dental care. Why delay any further? Come and encounter the treatment fit for kings and queens. Take a step today to secure your appointment at Carrum Downs Dental Group and relish in the regal experience that awaits you!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Bruxism;
