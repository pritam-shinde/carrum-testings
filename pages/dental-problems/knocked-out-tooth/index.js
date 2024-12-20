import React from 'react';
import { Grid, Typography, Button, Paper, Container, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material'
import Image from 'next/image';
import knockedoutTooth1 from '../../../public/dental-problems-img/knocked out tooth/Knocked_Out_Tooth_01.png'
import knockedoutTooth2 from '../../../public/dental-problems-img/knocked out tooth/Knocked_Out_Tooth_02.png'
import bridges from "../../../public/teeth-missing/teeth-missing-dental-bridges.png"
import { BlueFilledBtn, BlueOulinedBtn, CommonHero, IconBtn, SectionalHeading } from '../../../components/components';
import Head from 'next/head';
import BannerKnockedOutTeeth from "../../../public/dental-problems-img/knocked out tooth/Knocked_Out_Tooth_banner.jpg"
import  DentalImplants1 from "../../../public/dental-problems-img/knocked out tooth/Dental_implants1.png"
import  Dentures from "../../../public/dental-problems-img/knocked out tooth/Dentures.png"
import  RootCanal from "../../../public/dental-problems-img/knocked out tooth/Root_canal_treatment.png"

const KnockedOutTeeth = () => {
    return (
        <>
            <Head>
                <title>A Treatment Guide for Knocked-Out Teeth | Carrum Down Dental</title>
                <meta name="description" content="Discover the ultimate treatment guide for knocked-out teeth at Carrum Down Dental. Our expert dentists provide complete solutions to help you restore your smile."/>
                <meta name="robots" content="index" />
            </Head>
            <CommonHero
                bg={BannerKnockedOutTeeth}
                breadcrumb={null}
                title="Knocked Out Tooth"
                align="left"
                color="#fff" />
            <section className='knocked-out-tooth-section1' style={{
                 backgroundColor: "#1ebdb6", marginBottom: "2rem", position: 'relative',
                paddingTop: '100px',
                paddingBottom: '100px',
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className='text-white' gutterBottom>
                                Learn More About Knocked Out Tooth
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                Losing a tooth can be distressing and painful. At Carrum Downs Dental Group, our experienced dentists know how to properly treat knocked-out teeth. We utilize advanced techniques to reimplant and stabilize the tooth so you can smile confidently again. With our skilled care, you can recover your beautiful, healthy smile. Contact us today to schedule an evaluation of your knocked-out tooth.
                                </Typography>
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={knockedoutTooth1} alt="Image" width={450} height={400} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className='lower_clipPath'></div>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                            <Image src={knockedoutTooth2} alt="Image" width={450} height={400} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom  style={{ color: "var(--dark-blue)" }}>
                                Let Us Help Save Your Smile from a Knocked Out Tooth
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                Losing a tooth in an accident can be extremely distressing and painful. The injury damages the tooth's nerves, blood vessels and supporting tissues. This dental emergency requires prompt expert care to give you the best chance of saving your tooth.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                At Carrum Downs Dental Group, we understand how traumatic this experience can be. Our skilled dentists use advanced techniques to try to reimplant and stabilize knocked-out teeth. We work quickly to restore blood flow and prevent further injury. 
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                With our state-of-the-art technology and specialized training, we can help you recover your beautiful, healthy smile. Contact us urgently if you have a knocked-out tooth - the sooner we can see you, the better your chances of a full recovery. We're here to provide compassionate care and get you smiling confidently again.
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
                                Dental Services That Can Address Knocked Out Tooth
                                </Typography>
                                <Typography variant="body1" className='text-white' gutterBottom>
                                Losing a tooth can leave a gap that impacts your smile and oral health. At Carrum Downs Dental Group, our skilled dentists create customized treatment plans to replace knocked-out teeth and restore your smile.
                                Potential solutions include:
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className='d-flex'>
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className='text-white'><strong> Dental bridges   </strong> Natural-looking tooth replacements that use adjacent teeth for support. Bridges can fill the gap left by your missing tooth.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'><Image src={bridges} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong>Root canal treatment </strong> If the knocked-out tooth damaged nerves and blood vessels, a root canal can help prepare the tooth for re-implantation and improve healing.</ListItemText>
                                                </Box> </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'>
                                                <Image src={RootCanal} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong>Dentures </strong> Removable tooth prosthetics that replace missing teeth and restore full mouth function. An option if your tooth cannot be saved.</ListItemText>
                                                </Box> </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'>
                                                <Image src={Dentures} alt="Image" className='img-fluid' />
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
                                                    <ListItemText className='text-white'><strong>Dental implants  </strong> A titanium post is surgically implanted into the jawbone, forming a strong, stable foundation for a replacement tooth. Implants help preserve your smile and prevent bone loss.</ListItemText>
                                                </Box> </Grid>
                                            <Grid item xs={12} md={2} className='d-flex justify-content-center'>
                                                <Image src={DentalImplants1} alt="Image" className='img-fluid' />
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
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Knocked Out Tooth" align="center" />
                            </Box>
                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What happens if my tooth gets knocked out?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>Losing an adult tooth in an accident causes more than just the visible damage. The trauma also harms the nerves, blood vessels and tissues surrounding the missing tooth. Unfortunately, this internal damage cannot be repaired. However, with prompt expert care, there is hope for saving your knocked-out tooth.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What causes a knocked-out tooth?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>The potential for a tooth to be knocked out arises when engaging in contact sports or encountering facial accidents. Despite such incidents, the appropriate immediate action and expert assistance from your dentist can offer a chance to return your dislodged tooth to its socket.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What are the risks if I don't manage my knocked-out tooth?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                            <div className='para'>Losing a tooth in an accident is a serious dental emergency that requires immediate expert care. Without proper treatment, a knocked-out tooth can lead to additional oral health issues:</div>
                                                <div className='para'>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText  ><strong>Risk to Adjacent Teeth</strong>Addressing a knocked-out tooth promptly is crucial to prevent repercussions from affecting neighbouring teeth. The lack of timely intervention can lead to additional harm or even the loss of surrounding dental structures.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong>Disruption of Normal Dental Function </strong> If you've undergone a tooth dislodgment, it's imperative to seek professional dental guidance. Neglecting to do so can result in prolonged discomfort during everyday actions like eating and speaking. Timely dental care minimizes disturbances to regular dental activities.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText   ><strong>Sensitivity to Pressure </strong> When a traumatic incident leads to tooth dislodgment, seeking professional assistance is essential for your dental well-being. Without proper care for the dislodged tooth, you might encounter sensitivity to pressure around the affected area.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>Bacterial Accumulation </strong> Knocked-out teeth present more than just aesthetic concerns. The gaps they leave can establish an environment conducive to bacterial growth, leading to swift infection propagation.
                                                            </ListItemText>
                                                        </ListItem>   
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText ><strong>	Pain and Sensitivity </strong> Failing to manage a knocked-out tooth appropriately places you at risk of enduring ongoing pain and unease. Ignoring the issue can result in heightened sensitivity to temperature extremes in foods and beverages.
                                                            </ListItemText>
                                                        </ListItem>                                                                                         
                                                    </List>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Can my dentist replant my knocked-out tooth?
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='para'>If you knock out a tooth, don't panic. With prompt action, your dentist may be able to reinsert and save it. The key is getting to the dentist as soon as possible after the injury occurs. The chances of tooth survival are best if it is replanted within 5 minutes. After 60 minutes, the survival rate drops significantly as reattachment becomes more difficult.
                                                If you can, gently rinse the tooth with water or milk, handling it only by the chewing surface. Do not scrub it or allow it to dry out. Try to carefully place it back in its socket, or store it in milk until you can see your dentist. The quicker you act, the better the chances of a successful reintegration. Even if time has passed, it is still worthwhile to bring the tooth to your dentist for evaluation.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section style={{ marginBottom: "2rem" }}></section>
                                <Typography variant="body1" className='text-black' gutterBottom><strong style={{ color: "var(--dark-blue)" }}>Experience luxury dental care at Carrum Downs Dental Group</strong><br></br>
                                At Carrum Downs Dental Group, we hold the strong belief that every single person, no matter who they are, should have the chance to feel the wonderful luxury and comfort that comes with top-notch dental care. It's a special feeling that you shouldn't put off any more. Take action now and don't wait any longer to feel like royalty – make sure to set up your appointment at Carrum Downs Dental Group today!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default KnockedOutTeeth;
