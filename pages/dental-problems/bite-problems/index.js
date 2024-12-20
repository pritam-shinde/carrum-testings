import React from 'react';
import { Grid, Typography, Button, Paper, Container, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material'
import Image from 'next/image';
import { BlueFilledBtn, BlueOulinedBtn, CommonHero, IconBtn, SectionalHeading } from '../../../components/components';
import Head from 'next/head';
import BiteProblems1 from "../../../public/dental-problems-img/bite problems/Bite_problems_02.png"
import BiteProblems2 from "../../../public/dental-problems-img/bite problems/Bite_problems_03.png"
import ClearAligners from "../../../public/dental-problems-img/bite problems/Clear_aligners_01.png"
import SmileMakeover from "../../../public/dental-problems-img/bite problems/Smile_makeovers.png"
import Wisdom from "../../../public/dental-problems-img/bite problems/Wisdom_Teeth_Removal_01.png"
import ToothExtraction from "../../../public/dental-problems-img/bite problems/Tooth_Extraction_01.png"
import BiteProblemsBanner from "../../../public/dental-problems-img/bite problems/Bite_problems_banner-main.jpg"
import Link from 'next/link';

const WisdomToothPain = () => {
    return (
        <>
            <Head>
                <title>Dealing with Bite Problems | Carrum Downs Dental</title>
                <meta name="description" content="Carrum Downs Dental Can Help With Bite Problems. Learn the causes of biting problems and look at practical solutions to guarantee a comfortable bite for a happier smile." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero
                bg={BiteProblemsBanner}
                breadcrumb={null}
                title="Bite Problems"
                align="left"
                color="#fff"
            // color="#ccc"
            />
            <section className='bite-problems-section1' style={{
                backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
                paddingTop: '100px',
                paddingBottom: '100px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                    Learn More About Bite Problems
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    A bad bite alignment can lead to oral health problems if left untreated. However, seeking early intervention can prevent minor issues from progressing into more significant dental concerns. At Carrum Downs Dental Group, we provide treatments to help correct bite issues before they negatively impact your oral health and smile. By realigning your bite, we can help you maintain good dental health and an attractive appearance.
                                </Typography>
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={BiteProblems1} alt="Image" width={450} height={400} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={BiteProblems2} alt="Image" width={450} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom style={{ color: "var(--dark-blue)" }}>
                                    Manage Your Bite Problems for a Healthier Smile
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    You may not notice issues with your bite alignment until dental problems start to arise. A poor bite can worsen over time if left untreated, leading to tooth decay,<a href="/to-avoid-gum-disease-its-important-to-keep-up-with-dental-cleanings/"> gum disease</a>, chewing and speaking difficulties, and excessive tooth wear.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    At Carrum Downs Dental Group, we understand the frustrations of a bad bite and provide affordable care to help you brighten your smile. We offer a range of services to address bite issues before they cause further oral health complications. This includes realignment treatments to correct your bite as well as restorative and preventive dentistry to repair any damage and protect your smile.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Don't let bite problems impact your oral health any longer. If you are experiencing concerning dental symptoms, schedule a visit with us to explore your treatment options. During a comprehensive exam, we will fully evaluate your oral health and bite alignment. Together, we will develop a customized plan to resolve any issues detected.
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
                                    Dental Services That Can Address Bite Problems
                                </Typography >
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    At Carrums Downs Dental Group, we provide cost-effective dental solutions to help improve bite alignment using today's most advanced techniques. Some services that can address problematic bites include:
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong> Clear Aligners  </strong> These customized, removable orthodontic devices gradually shift teeth into proper position over time, fixing many alignment issues.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={ClearAligners} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong> Smile Makeovers  </strong> Complete smile transformations can aesthetically enhance your appearance while also fixing functional problems impacting your bite.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={SmileMakeover} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong> Wisdom Teeth Removal   </strong> Extracting wisdom teeth create more space in the mouth, allowing other teeth to shift into better alignment.
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
                                                    <ListItemText className='text-white'><strong> Tooth Extraction    </strong> Removing select teeth provides room for remaining teeth to be repositioned, improving overall bite.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={ToothExtraction} alt="Image" className='img-fluid' />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <Typography variant="body1" className='text-white' gutterBottom>
                                        Our affordable dental treatments use state-of-the-art technology to restore proper bite function. We develop customized plans to discreetly and efficiently correct bite issues for a healthier, more beautiful smile. Schedule a consultation to learn more about how our cost-effective services can help resolve your bite alignment problems.
                                    </Typography>
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
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Bite Problems" align="center" />
                            </Box>

                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How do I know if my bite is correct?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Proper bite alignment is critical for oral health. Ideal occlusion (bite) occurs when the upper teeth slightly overlap the lower teeth, with the molars lining up evenly on both sides. This allows for smooth gliding between the upper and lower teeth when chewing and speaking. When everything fits together properly, the bite is considered healthy and functional.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What causes bite misalignment?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>Commonly hereditary</strong> Bite misalignment frequently has genetic roots and tends to be passed down through families. Therefore, if a family member exhibits misaligned bite, there's a likelihood of its continuation across generations.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong> Tooth loss </strong> Untreated tooth loss can contribute to bite misalignment, representing a prevalent yet potentially harmful oral health concern.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong> Periodontal disease </strong> Unhealthy gums and the accumulation of bacteria along the gum line may result in tooth loss and disturbances in the alignment of the jaw.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong> Trauma or injury </strong> Sudden traumas or injuries can significantly influence teeth alignment. Whether caused by accidents, falls, or even habits like teeth clenching, such occurrences can lead to bite irregularities.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>	Cleft lip or cleft palate </strong> Bite misalignment can stem from congenital conditions like cleft lip or palate, often requiring orthodontic interventions. Dentists possess the expertise to realign teeth for enhanced dental health and aesthetic improvement.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>	Abnormally-shaped teethe </strong> Irregularly shaped or sized teeth are often responsible for bite misalignment. If grappling with bite issues, it's worthwhile to explore whether tooth structure anomalies are at play, enabling your dentist to address the concern.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>	Impacted teeth </strong> Bite problems can originate from factors as straightforward as impacted teeth—when teeth do not erupt properly and remain trapped within the jawbone or encounter growth impediments.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>	Thumb sucking and bottle feeding during childhood</strong> Frequent causes of bite issues encompass childhood behaviors like thumb sucking and bottle feeding. Unchecked, these habits can lead to dental alignment problems in later life.
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
                                                When should I see my doctor about my bite problem?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Should your bite problem begin to affect your dental well-being, manifesting as pain during chewing, it might be an appropriate juncture to schedule a consultation with your dentist. Their expertise can aid in alleviating discomfort and addressing any concurrent dental issues.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                How long will it take to adjust my bite?
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>The timeframe varies based on a range of factors, including the extent of your bite concern and the required treatments for your specific condition. For mild cases, noticeable changes might emerge within a few months, while more complex bite issues could necessitate up to two years or even longer for comprehensive resolution.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Can bite problems be managed at home?
                                            </button>
                                        </h3>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'> Addressing bite problems necessitates the expertise of a dental professional and isn't manageable through at-home measures. While awaiting your dentist's consultation, you can proactively manage your oral health by consistently brushing and flossing your teeth to prevent cavities and maintain overall dental hygiene.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section style={{ marginBottom: "2rem" }}></section>
                                <Typography variant="body1" className='text-black' gutterBottom><strong style={{ color: "var(--dark-blue)" }}>Experience luxury dental care at Carrum Downs Dental Group</strong><br></br>
                                    At Carrum Downs Dental Group, we are committed to providing our patients with premium, comfortable dental care. We believe everyone should feel like royalty while receiving expert treatment in our relaxing, spa-like setting. Our team goes above and beyond to ensure your visit is as stress-free and pleasant as possible.
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
