import React from 'react';
import { Grid, Typography, Container, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material'
import Image from 'next/image';
import crookedTeeth1 from '../../../public/dental-problems-img/crooked teeth/Crooked_Teeth_01.png'
import crookedTeeth2 from '../../../public/dental-problems-img/crooked teeth/Crooked_Teeth_02.png' 
import crookedTeeth_banner from "../../../public/dental-problems-img/crooked teeth/Crooked_Teeth_banner.jpg"
import ClearAligners from "../../../public/dental-problems-img/crooked teeth/Clear_aligners.png"
import DentalCrowns from "../../../public/dental-problems-img/crooked teeth/Dental_crowns_02.png"
import DentalVeneers from "../../../public/dental-problems-img/crooked teeth/Dental_veneers.png"
import SmileMakeovers from "../../../public/dental-problems-img/crooked teeth/Smile_makeovers.png"
import { BlueFilledBtn, BlueOulinedBtn, CommonHero, SectionalHeading } from '../../../components/components';
import Head from 'next/head';

const CrookedTeeth = () => {
    return (
        <>
            <Head>
                <title>Get Your Crooked Teeth Straightened l Carrum Down Dental</title>
                <meta name="description" content="Transform Your Smile with Crooked Teeth Treatment at Carrum Downs Dental. Explore our range of solutions designed to straighten teeth and enhance your oral health."/>
                <meta name="robots" content="index" />
            </Head>
            <CommonHero
                bg={crookedTeeth_banner}
                breadcrumb={null}
                title="Crooked Teeth"
                align="left"
                color="#fff"
            />
            <section className='crooked-teeth-section1' style={{
                backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
                paddingTop: '100px',
                paddingBottom: '100px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                Learn More About Crooked Teeth
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                Misaligned teeth aren't solely a cosmetic concern; they can also give rise to significant oral health complications. Pursuing treatment for crooked teeth is crucial to address both aesthetic and dental considerations. We invite you to schedule an appointment at our clinic, where we can develop a customized treatment plan tailored to your specific requirements.
                                </Typography>
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={crookedTeeth1} alt="Image" width={450} height={400} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={crookedTeeth2} alt="Image" width={450} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom style={{ color: "var(--dark-blue)" }}>
                                Straighten Your Crooked Teeth for Better Oral Health
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                Misaligned teeth can cause feelings of embarrassment and hinder your ability to eat and speak comfortably. The impact on self-esteem can be considerable.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                But the concern goes beyond appearance alone; misaligned teeth can pave the way for additional oral health issues such as cavities and gum ailments. 
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                At Carrum Downs Dental Group, we provide cutting-edge technology and advanced tools to tackle your misaligned teeth effectively. Our employment of the latest technology ensures you receive optimal care. Moreover, we extend various payment alternatives to enhance affordability. Take the initiative to book an appointment, and allow us to guide you towards attaining a smile that's not just beautiful but also brimming with health.
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
                                Dental Services That Can Address Crooked Teeth
                                </Typography >
                                <Typography variant="body1" className='text-white' gutterBottom>
                                Carrum Downs Dental Group provides budget-friendly dental solutions tailored to rectifying crooked teeth and reinstating a healthy, radiant smile.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong> Dental Veneers </strong>  Dental veneers offer a transformative solution for crooked teeth by bestowing them with a more aligned appearance. Veneers are placed on the enamel of the front teeth to create a uniform set of aesthetic teeth.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={DentalVeneers} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong> Clear Aligners </strong> Addressing misaligned teeth discreetly, clear aligners offer a convenient and comfortable approach. This method gradually guides your teeth into proper alignment, promoting optimal oral health without drawing attention.
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
                                                    <ListItemText className='text-white'><strong> Dental Crowns </strong> Dental crowns present an avenue for achieving the appearance of straighter teeth. Custom-crafted, they enhance tooth shape and alignment, all while upholding a natural look.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={DentalCrowns} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong> Smile Makeovers </strong> Tailored to correct misaligned teeth through a comprehensive blend of treatments, smile makeovers are devised to grant you your ideal smile, along with enhanced oral health, heightened confidence, and rejuvenated self-assurance.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={SmileMakeovers} alt="Image" className='img-fluid' />
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
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Crooked Teeth" align="center" />
                            </Box>
                            
                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            What causes crooked teeth?
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
                                                            <ListItemText  ><strong>Genetic Factors</strong> Inherited conditions, such as crowded teeth, irregular jaw size or shape, extra teeth, overbites, underbites, and insufficient tooth or palate development, can all be passed down through family generations.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText><strong>Premature Loss of Baby Teeth </strong>An influential contributor to misaligned teeth is the early loss of primary teeth. When a child sheds one or more primary teeth too soon, gaps may emerge, allowing permanent teeth to shift into these spaces, leading to crowding.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong>Inadequate Oral Hygiene </strong> Neglecting dental health can pave the way for gingivitis, which, if unchecked, can escalate into periodontitis—a more severe form of gum disease. This progression could result in teeth becoming loose, shifting, and even eventual tooth loss.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>Tongue Thrusting </strong> A potential culprit for crooked teeth lies in tongue thrusting, a habitual action wherein the tongue exerts pressure against the front teeth during swallowing instead of resting against the roof of the mouth. If not addressed, this behaviour can contribute to gradual misalignment over time.
                                                            </ListItemText>
                                                        </ListItem>   
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>	Thumb Sucking </strong> The seemingly harmless habit of thumb (or object) sucking during childhood can lead to dental issues like tooth misalignment. Hence, it's crucial for parents to discourage this behaviour in their children.
                                                            </ListItemText>
                                                            </ListItem> 
                                                            <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>Nutritional Deficiency </strong> Inadequate nutrition can profoundly impact oral health. Malnutrition deprives the body of vital nutrients necessary for robust teeth, bones, and tissue. Such deficiencies can precipitate crooked teeth and enduring dental complications, underscoring the importance of obtaining all required vitamins and minerals for a captivating smile.
                                                            </ListItemText>
                                                            </ListItem> 
                                                            <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>Traumatic Incidents </strong> Sudden injuries from sports and unforeseen accidents can trigger teeth misalignment. Following any trauma affecting the smile, swift consultation with a professional dentist is advisable.
                                                            </ListItemText>
                                                            </ListItem>
                                                            <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>Mouth Breathing </strong> Crooked teeth can stem from habitual mouth breathing in children. Prolonged periods of breathing through the mouth can disrupt the proper alignment of the upper and lower jaws, leading to uneven tooth positioning.
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
                                            Does having crooked teeth affect my face shape?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Having crooked teeth can significantly alter your facial appearance. In certain instances, misaligned or poorly spaced teeth can adversely affect aesthetics and give rise to health-related issues.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            What are the benefits of addressing crooked teeth?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse  " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Aligning misaligned teeth has the potential to enhance your self-assurance while diminishing the likelihood of oral health complications. A more aligned smile fosters improved oral well-being and encourages better dental hygiene practices, culminating in the enjoyment of a robust, healthy grin.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Will crooked teeth straighten without dental management?
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse  " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Typically, crooked teeth don't correct themselves autonomously. An exception arises when primary teeth shed and are succeeded by adult teeth, leading to natural gap filling. However, when this doesn't suffice to realign the teeth, seeking professional dental intervention becomes crucial to restore their proper alignment.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section style={{ marginBottom: "2rem" }}></section>
                                <Typography variant="body1" className='text-black' gutterBottom><strong style={{ color: "var(--dark-blue)" }}>Experience luxury dental care at Carrum Downs Dental Group</strong><br></br>
                                At Carrum Downs Dental Group, we believe that everyone should get the chance to experience high-quality dental care that feels really fancy and easy. You don't have to wait longer to try this special experience – just book your appointment at Carrum Downs Dental Group right away!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </section>
            
        </>
    )
}

export default CrookedTeeth

 