import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { BlueFilledBtn, BlueOulinedBtn, CommonHero, SectionalHeading } from '../../../components/components';
import bleedingGums1 from '../../../public/dental-problems-img/bleeding gums/Bleeding_Gums_01.png';
import bleedingGums2 from '../../../public/dental-problems-img/bleeding gums/Bleeding_Gums_02.png';
import bleedingGumsBanner from '../../../public/dental-problems-img/bleeding gums/Bleeding_Gums_banner.jpg';
import GumDisaese from '../../../public/dental-problems-img/bleeding gums/Gum_disaese_01.png';
import ScalingNCleaning from '../../../public/dental-problems-img/bleeding gums/Scaling_and_Cleaning.png';

const WisdomToothPain = () => {
    return (
        <>
            <Head>
                <title>Causes, Signs, and Treatment of Bleeding Gums | Carrum Downs Dental</title>
                <meta name="description" content="Learn about the Causes, Signs, and Effective Treatment for Bleeding Gums with Carrum Downs Dental. Investigate the root causes of this common issue and get expert help." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero
                bg={bleedingGumsBanner}
                breadcrumb={null}
                title="Bleeding Gums"
                align="left"
                color="#ccc"
            />
            <section className='bleeding-gums-section1' style={{
                backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
                paddingTop: '100px',
                paddingBottom: '100px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                    Learn More About Bleeding Gums
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    If your gums are experiencing frequent bleeding, this might indicate the presence of gum disease or another dental issue. At Carrum Downs Dental Group, we are dedicated to identifying the underlying cause of the bleeding and providing appropriate dental solutions to tackle the problem effectively.
                                </Typography>
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={bleedingGums1} alt="Image" width={450} height={400} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={bleedingGums2} alt="Image" width={450} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom style={{ color: "var(--dark-blue)" }}>
                                    Don't Let a Simple Case of Bleeding Gums Turn into a Much Bigger Problem
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    It often surprises many people to experience their gums bleeding while brushing or flossing. Although this is a common dental concern, it should not be underestimated.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    If you're consistently encountering gum bleeding, it is crucial to identify the root cause and address the matter proactively to prevent its escalation. Ignoring bleeding gums can potentially lead to the development of other dental issues, such as gum disease.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    At Carrum Downs Dental Group, we are your reliable ally in upholding gum health. Our skilled dental professionals will assist you in pinpointing the underlying cause of the bleeding and suggest strategies to effectively manage the situation and prevent deterioration. Our collaborative efforts aim to maintain the strength of your gums over the long term. Initiate the process by scheduling an appointment with us today.
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
                                    Dental Services That Can Address Bleeding Gums
                                </Typography >
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    At Carrum Downs Dental Group, we present specialised dental solutions crafted to assist you in managing the issue of bleeding gums. Several of these services encompass:
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong> Scaling and Cleaning </strong> Our professional scale and clean procedure effectively eliminates plaque and tartar accumulation on your teeth surfaces. This technique serves to prevent gum disease and minimize instances of bleeding gums.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={ScalingNCleaning} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong> Gum Disease Treatment </strong> Our approach to treating gum disease is all-encompassing. Employing advanced methods, including laser therapy, deep cleaning, and medication, we target the root causes of gum disease to facilitate the restoration of gum health.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={GumDisaese} alt="Image" className='img-fluid' />
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
            <section className="mt-4">
                <Container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2 }}>
                            <Box>
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Bleeding Gums" align="center" />
                            </Box>

                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                What are the signs and symptoms of bleeding gums?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>The symptoms and signs of bleeding gums can vary in intensity, spanning from mild to severe. Among the most prevalent signs are gums that appear red, swollen, or darkened, as well as receding gum lines and sensitivity upon contact. During brushing or flossing, you might observe that your gums bleed more readily than usual, and such bleeding can even occur after consuming foods high in sugar or acidity.
                                                    Accumulated plaque stands as another indicator of bleeding gums, as oral bacteria gather due to inadequate oral hygiene practices. Furthermore, disregarding the issue of bleeding gums could lead to its progression, potentially resulting in the onset of gum disease. This condition, if left untreated, might eventually lead to tooth loss.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                What causes my gums to bleed?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Bleeding in your gums occurs when there's an excessive accumulation of plaque along the gum line. Plaque, which is a sticky and colourless film, forms on your teeth daily as a result of consuming foods and beverages laden with bacteria. If left unchecked, this plaque builds up, providing a conducive environment for bacteria to flourish. This can lead to inflammation and harm to the tissues surrounding your teeth and gums.
                                                    Moreover, it's important to highlight that blood-thinning medications can contribute to gum bleeding as well. Should you encounter bleeding or inflammation in your gums, we recommend arranging a visit to our dental clinic to receive thorough assessment and appropriate treatment.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                Can bleeding gums lead to more serious oral health problems if not managed?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>A majority of people don't know this but failing to address bleeding gums can potentially lead to more intricate oral health complications. The initial phase of gum disease, known as gingivitis, arises when plaque accumulates on or around the gum line. This build-up of bacteria triggers inflammation and irritation in the gums, resulting in swelling and easy bleeding when touched or during brushing.
                                                    If left untreated, this condition can progress to periodontitis, a more severe manifestation of gum disease that harms the bone and connective tissues supporting the teeth. Alongside bone loss, gaps may form between the gums and teeth, creating spaces where further plaque can accumulate. This accumulation can eventually contribute to tooth loss.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Can bleeding gums be managed at home?
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>You can implement several measures at home to aid in managing bleeding gums. These steps encompass:</div>
                                                <div className='para'>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText><strong> Maintain Optimal Oral Hygiene</strong> It's crucial to engage in thorough brushing and flossing twice a day to eliminate food particles and plaque that might irritate your gum tissue, leading to bleeding.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong> Cease Smoking </strong>  Smoking is known to exacerbate bleeding gums. Tobacco smoke narrows the blood vessels within the gums, impeding their proper function.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong> Use Salt Water to Rinse </strong> Rinsing your mouth with a saltwater solution can help diminish inflammation and notably alleviate bleeding.</ListItemText>
                                                        </ListItem>
                                                    </List>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                How do I prevent bleeding gums?
                                            </button>
                                        </h3>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'> Maintaining proper oral hygiene is essential for averting future instances of bleeding gums. This entails brushing your teeth twice daily and flossing at least once daily. Additionally, regular visits to the dentist contribute to decreasing oral bacteria and staving off gum disease, ultimately leading to fewer occurrences of bleeding gums.
                                                    Embracing a balanced diet abundant in fresh fruits and vegetables, while reducing sugary snacks, and ensuring sufficient water consumption, can also greatly contribute to fostering healthy gums.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section style={{ marginBottom: "2rem" }}></section>
                                <Typography variant="body1" className='text-black' gutterBottom><strong style={{ color: "var(--dark-blue)" }}>Experience luxury dental care at Carrum Downs Dental Group.</strong><br></br>
                                    Carrum Downs Dental Group believes that everyone should have the opportunity to enjoy exceptional dental care. There's no need to delay any further your next dental visit – secure your appointment at Carrum Downs Dental Group today!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default WisdomToothPain
