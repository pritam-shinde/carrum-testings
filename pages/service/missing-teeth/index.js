import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { BlueFilledBtn, BlueOulinedBtn, SectionalHeading } from '../../../components/components';
import teethMissing1 from '../../../public/teeth-missing/Demo 01.png';
import bridges from "../../../public/teeth-missing/teeth-missing-dental-bridges.png";
import dentalImplants from "../../../public/teeth-missing/teeth-missing-dental-implants.png";
import denture from "../../../public/teeth-missing/teeth-missing-dentures.png";
import supportedDenture from "../../../public/teeth-missing/teeth-missing-supported-dentures.png";
import teethMissing2 from '../../../public/teeth-missing/teeth-missing3.png';


const index = () => {
    return (
        <>
            <Head>
                <title>Missing Teeth In Carrum Downs | Carrum Downs Dental</title>
                <meta name="description" content="Explore Solutions for Missing Teeth. Don't let missing teeth affect your confidence and oral health. Contact Carrum Downs Dental Group for Dental Problems." />
                <meta name="robots" content="index" />
            </Head>
            <section className='teeth-missing-section1' style={{
                marginTop: "12rem", backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
                paddingTop: '100px',
                paddingBottom: '100px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h1" className='text-white' gutterBottom>
                                    Learn More About Missing Teeth
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    Are you struggling with missing teeth? Not only can it affect your appearance and confidence, but it can also lead to oral problems and impact your overall health. That's why restoring missing teeth is crucial, and Carrum Downs Dental Group is here to help. Our dental clinic offers a range of services that can address missing teeth, improve your oral health, and boost your self-esteem.
                                </Typography>
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={teethMissing1} alt="Image" width={450} height={400} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={teethMissing2} alt="Image" width={450} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom style={{ color: "var(--dark-blue)" }}>
                                    Restore Missing Teeth and Improve Your Overall Health
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Missing teeth can lead to a number of oral problems, including difficulty chewing and speaking. When one or more teeth are missing, it can also cause the surrounding teeth to shift out of place and affect your bite. This misalignment can then lead to issues such as tooth decay, gum disease, and even TMJ disorder.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    It's important to address missing teeth as soon as possible for both aesthetic and health reasons. With advancements in modern dentistry, there are various options available for restoring missing teeth that look natural and function like real teeth.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    At Carrum Downs Dental Group, we offer personalized treatment plans that cater specifically to each patient's needs. Our goal is always to restore our patients' smiles so they feel confident in their appearance while maintaining optimal <a href="https://carrumdownsdental.com.au/7-tips-for-improving-your-oral-health-before-sleep-time/">oral health</a>.
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
                                    Dental Services That Can Address Missing Teeth
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                    At Carrum Downs Dental Group, we understand the importance of addressing missing teeth to maintain oral health and improve overall well-being. Our dental team provides a range of services that can help restore your smile.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong>Dental Implants </strong> Dental implants are one of the most effective ways to replace missing teeth. They are surgically placed into the jawbone to act as artificial tooth roots. This allows for the secure attachment of replacement teeth; such as crowns or bridges. Implants provide a permanent solution that looks and feels like natural teeth. Additionally, they prevent bone loss in the jaw by stimulating bone growth through Osseointegration.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={dentalImplants} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong>Dentures </strong> Dentures are removable appliances customized to fit your mouth. We offer both full and partial dentures depending on the extent of tooth loss. Dentures can help restore your way of life by helping you with day-to-day functions, such as eating and speaking, as well as help restore your confidence by improving your appearance and smile.</ListItemText>
                                                </Box> </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'>
                                                <Image src={denture} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white' ><strong>Dental Bridges </strong>Bridges are one of the most effective ways to restore missing teeth. They consist of one or more artificial teeth anchored between existing natural teeth or dental implants. Bridges are designed to restore the aesthetics of your smile and Bridges help maintain the shape of your face so that cheeks do not sink where teeth are missing. And they can prevent teeth from drifting out of position.</ListItemText>
                                                </Box>

                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'>
                                                <Image src={bridges} alt="Image" className='img-fluid' />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} md={10} >
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong>Implant Supported Dentures. </strong>Often called as ‘Snap on Dentures’, An implant-supported denture is a denture attached to dental implants, with the implants providing improved stability and support. They are unlike regular (conventional) dentures which sit on the gumline without support. An implant-supported overdenture is an ideal solution for those who have experienced issues with unstable or ill-fitting dentures. It attaches to special dental implants that are surgically implanted in the jawbone, providing a reliable and secure closure for the denture.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center' >
                                                <Image src={supportedDenture} alt="Image" className='img-fluid' />
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
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Missing Teeth" align="center" />
                            </Box>
                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                What causes tooth loss?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className='para'>Tooth loss can result from a variety of factors, including decay, <a href="https://carrumdownsdental.com.au/top-five-symptoms-of-gum-disease/">gum disease</a>, injury, or trauma.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Can missing teeth affect my overall health?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className='para'>Yes! Missing teeth can impact your ability to eat and speak properly, which in turn affects your nutrition and confidence. It may also lead to bone loss in the jaw over time.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How long does it take to restore missing teeth?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className='para'>The duration depends on the treatment plan selected by your dentist. In some cases, where there is enough healthy bone available at the site of the gap left behind by the missing tooth/teeth, an implant-supported crown can be completed relatively quickly - sometimes within one day!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                What are the Disadvantages of having a Missing Tooth?
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>Discomfort while eating </strong> Difficulty in chewing hard foods may lead to digestion issues and unhealthy snacking habits. Moreover, the unnatural movement of your mouth while chewing food can also cause jaw pain.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong>Bone density loss </strong> Lack of motion in key areas of the jawbone can cause a reduction in bone mass and strength over time. This can result in weaker bones and significant loss of bone density.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong>Premature facial aging </strong> Progressive bone loss without tooth roots stimulating the jawbone can make a face hollow over time.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>Teeth misalignment </strong> The absence of support from missing teeth can cause the neighbouring teeth to move and shift, leading to misaligned teeth.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>Speech impediments </strong> A missing tooth can result in difficulty communicating with others and create speech impediments.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>Periodontal disease </strong> The space left behind by a missing tooth can become a breeding ground for bacteria, increasing the chances of infection and the potential development of gum disease.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>Compromised facial aesthetics </strong> A missing tooth can impact the aesthetics of your smile, leaving a lasting impression on those around you. It may even cause feelings of embarrassment or unattractiveness.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>Decreased confidence </strong> A missing tooth can result in plummeting self-esteem, preventing new experiences such as meaningful social connections or career opportunities.
                                                            </ListItemText>
                                                        </ListItem>
                                                    </List>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                What happens if I lose a tooth and don't replace it?
                                            </button>
                                        </h3>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className='para'>Although a missing tooth may appear to be insignificant, it can result in various issues beyond just affecting your smile. The absence of support and stability provided by each tooth in your mouth can cause the remaining teeth to shift toward the empty space, resulting in an uneven bite. This can lead to difficulties while flossing and increase the likelihood of plaque build-up, potentially causing gum disease and further tooth loss.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                What are the Benefits of Addressing a Missing Tooth?
                                            </button>
                                        </h3>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'> <List>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                        </ListItemIcon>
                                                        <ListItemText  ><strong>Improved appearance </strong> One of the most significant benefits of addressing a missing tooth is improved appearance. Replacing one or more teeth can boost your self-esteem and make you feel more confident in social or professional settings. You'll look great and feel more confident than ever before.</ListItemText>
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                        </ListItemIcon>
                                                        <ListItemText  ><strong>Restored oral health </strong>Addressing tooth loss can help you achieve optimal oral health. You can return to enjoying good oral hygiene and living without discomfort. Leaving a gap in your mouth can lead to various oral health problems, including gum disease, tooth decay, and bone loss.</ListItemText>
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                        </ListItemIcon>
                                                        <ListItemText ><strong>Restored functionality </strong> Addressing your missing tooth issue can restore the normal function of your mouth. It can give you back dental functions like chewing, biting, and speaking. Managing the problem can help you regain your teeth's original benefits and restore balance and aesthetics to your smile.</ListItemText>
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                        </ListItemIcon>
                                                        <ListItemText><strong>Support for remaining teeth </strong> Filling the gap left behind by that lost tooth can also provide much-needed stability and support to adjacent teeth, supporting the remaining teeth. It can help the adjacent teeth maintain proper alignment while preventing food debris from collecting in the empty gap.
                                                        </ListItemText>
                                                    </ListItem>
                                                </List></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default index


