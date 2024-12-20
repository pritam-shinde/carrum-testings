import React from "react";
import { Grid, Typography, Button, Paper, Container, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import wisdomTeeth1 from "../../../public/dental-problems-img/wisdom-teeth/Wisdom_teeth_01.png";
import wisdomTeeth2 from "../../../public/dental-problems-img/wisdom-teeth/Wisdom_teeth_02.png";
import denture from "../../../public/dental-problems-img/wisdom-teeth/Wisdom_Teeth_Removal.png";
import wisdomTeeth3 from "../../../public/dental-problems-img/wisdom-teeth/Wisdom_teeth_03.png";
import { BlueFilledBtn, BlueOulinedBtn, CommonHero, IconBtn, SectionalHeading } from "../../../components/components";
import Head from "next/head";
import BannerWisdom from "../../../public/dental-problems-img/wisdom-teeth/Wisdom_teeth_banner.jpg";

const WisdomToothPain = () => {
    return (
        <>
            <Head>
                <title>Handling Wisdom Tooth Pain | Carrum Down Dental</title>
                <meta name="description" content="Wisdom Tooth Pain? Let Carrum Downs Dental Treat It Skillfully. Find out how your wisdom teeth are causing you discomfort and how we can help." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero
                bg={BannerWisdom}
                breadcrumb={null}
                title="Wisdom Tooth Pain"
                align="left"
                // color="#fff"
                color="#ccc"
            />
            <section
                className="teeth-missing-section1"
                style={{
                    // marginTop: "12rem",
                    backgroundColor: "#1ebdb6",
                    marginBottom: "2rem",
                    position: "relative",
                    paddingTop: "100px",
                    paddingBottom: "100px",
                }}
            >
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className="text-white" gutterBottom>
                                    Learn More about Wisdom Teeth Pain
                                </Typography>
                                <Typography variant="body1" className="text-white" gutterBottom>
                                    Wisdom teeth pain can be extremely uncomfortable and disruptive. It's crucial to understand the underlying causes of this discomfort and explore potential solutions. If you are experiencing wisdom tooth
                                    pain, there are solutions. At Carrum Downs Dental Group, our experienced dentists can examine your mouth and determine the best treatment options.
                                </Typography>
                                <Box>
                                    <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className="d-flex justify-content-center">
                            <Image src={wisdomTeeth1} alt="Image" width={450} height={400} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <div className="lower_clipPath"></div>
            <section>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className="d-flex justify-content-center">
                            <Image src={wisdomTeeth2} alt="Image" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom style={{ color: "var(--dark-blue)" }}>
                                    Don't Let Wisdom Teeth Pain Take over Your Life
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Wisdom teeth are the last set of molars to erupt, usually between the late teens and early twenties. When these teeth become impacted or only partially emerge, they can cause significant pain and
                                    problems. The cramped space in the back of the mouth often leaves no room for wisdom teeth to fully come in. Partially emerged teeth end up trapped against the other molars and jawbone, leading to
                                    inflammation, infection risk, and damage to nearby teeth.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Many people try to manage wisdom tooth pain with over-the-counter medication. However, this only masks the symptoms temporarily. The underlying problem remains unaddressed. For lasting relief, it is
                                    important to treat the source of the pain.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    At Carrum Downs Dental Group, we provide exceptional care for impacted wisdom teeth. Our experienced dentists use advanced imaging technology to fully evaluate the position of your wisdom teeth and
                                    determine the best treatment. We develop customized treatment plans to address each patient's specific case. Schedule an appointment to have our team provide you with long-term solutions for your wisdom
                                    tooth pain.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <div className="upper_clipPath"></div>
            <section
                style={{
                    backgroundColor: "#1ebdb6",
                    marginBottom: "2rem",
                    position: "relative",
                    paddingBottom: "6rem",
                }}
            >
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" component="h2" className="text-white" gutterBottom>
                                    Dental Services That Can Address Wisdom Teeth Pain
                                </Typography>
                                <Typography variant="body1" className="text-white" gutterBottom>
                                    Our extensively trained dental professionals provide a range of services dedicated to alleviating wisdom teeth discomfort.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className="d-flex">
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className="text-white">
                                                        <strong> Dental Fillings </strong> For managing wisdom teeth pain, dental fillings are a recommended solution. Our skilled dentists can efficiently address cavities in wisdom teeth,
                                                        providing lasting relief.
                                                    </ListItemText>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} className="d-flex justify-content-center">
                                                <Image src={wisdomTeeth3} alt="Image" className="img-fluid" />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    <ListItem>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={10}>
                                                <Box sx={{ p: 2 }} className="d-flex">
                                                    <ListItemIcon>
                                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                    </ListItemIcon>
                                                    <ListItemText className="text-white">
                                                        <strong> Wisdom Teeth Removal </strong> When wisdom teeth become impacted, they can lead to various problems. Removing them is an effective way to diminish pain while reducing the risk
                                                        of infection and other dental complications.
                                                    </ListItemText>
                                                </Box>{" "}
                                            </Grid>
                                            <Grid item xs={12} md={2} className="d-flex justify-content-center">
                                                <Image src={denture} alt="Image" className="img-fluid" />
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
            <div className="lower_clipPath"></div>
            <section className="mt-4 ">
                <Container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2 }}>
                            <Box>
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions about Wisdom Teeth Pain" align="center" />
                            </Box>
                            <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                When should I have my wisdom teeth removed?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="para">
                                                    {" "}
                                                    Most individuals opt for wisdom teeth removal when these molars start causing issues or when there's insufficient space for proper growth. Removal becomes necessary when wisdom teeth
                                                    become impacted, meaning they are trapped within the jawbone and unable to erupt normally. Signs of impacted wisdom teeth often include symptoms such as pain, gum tenderness, swelling
                                                    around the tooth, gum infections, and bad breath. In more severe cases, an impacted wisdom tooth can lead to the formation of a cyst, potentially harming neighbouring teeth and nerves.
                                                    Furthermore, if you're undergoing orthodontic treatment to correct your bite and your mouth lacks adequate room for all your adult teeth, the removal of your wisdom teeth might be
                                                    considered as a pre-emptive measure before commencing with braces.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What are the symptoms of wisdom teeth pain?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="para"> Wisdom teeth pain can range from mild to severe depending on the individual. Common symptoms associated with erupting wisdom teeth include: </div>
                                                <div className="para">
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText> Discomfort or a dull ache in the jaw, particularly when chewing or biting down. The pain may be localized to the area around the impacted tooth.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText> Tenderness, swelling, or redness of the gums near the emerging wisdom tooth. As the tooth presses against the gums, inflammation often occurs.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText> Difficulty fully opening the mouth due to swelling and inflammation around the impacted tooth.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText> Halitosis or bad breath resulting from food debris and bacteria accumulation around the partially erupted wisdom tooth.</ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                {" "}
                                                                General swelling around the jaw where the wisdom teeth are located as the teeth attempt to break through the gums. This can cause pain or stretching of the jaw muscles.
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
                                                What are the benefits of addressing wisdom teeth pain?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="para">
                                                    Treating wisdom teeth pain in a timely manner can prevent more serious complications from developing. Left untreated, the pain and infection from an impacted wisdom tooth may spread to the
                                                    throat, neck, or surrounding teeth. Additionally, impacted wisdom teeth can sometimes put pressure on adjacent teeth, forcing them out of alignment. This can lead to dental issues like
                                                    overcrowding, bite problems, or gum disease. Extracting the problematic wisdom tooth relieves this pressure and crowding. Removal of the wisdom tooth also eliminates the source of the pain
                                                    and swelling. This results in improved comfort and proper jaw functioning. Allowing wisdom teeth pain to persist can lead to severe and debilitating pain. It's advisable to seek
                                                    professional dental care if you experience prolonged wisdom tooth pain or swelling. The dentists at Carrum Downs Dental Group can assess your situation and determine the best treatment
                                                    options to address your wisdom teeth issues before they become more complex. Tackling problems early can help avoid more invasive procedures down the road.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                What happens when wisdom tooth pain is not managed?
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="para">
                                                    Ignoring persistent wisdom tooth pain can allow minor problems to escalate into more serious dental health issues. Impacted wisdom teeth provide an environment where bacteria from trapped
                                                    food debris can multiply and potentially spread infection to the gums, jawbone, and other areas of the body. Additionally, prolonged impaction stresses adjacent teeth, sometimes worsening
                                                    pre-existing dental problems like decay or gum disease. The pressure from an impacted wisdom tooth trying to erupt can also displace healthy neighbouring teeth, leading to misalignment,
                                                    crowding, or bite issues over time. The dentists at Carrum Downs Dental Group have specialized expertise in assessing and treating any complications related to problematic wisdom teeth.
                                                    They can quickly diagnose potential causes of wisdom tooth pain and recommend appropriate treatment options. Addressing wisdom tooth impaction early provides the best chance to prevent
                                                    infection, tooth damage, and other oral health problems before they become more advanced and difficult to correct. Don't delay in seeking professional care if you have persistent wisdom
                                                    tooth pain or swelling.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                What are the causes of wisdom teeth pain?
                                            </button>
                                        </h3>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="para">Wisdom tooth pain arises from several potential causes that can be grouped into a few key categories:</div>
                                                <div className="para">
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                <strong> Impaction</strong>When a wisdom tooth fails to fully emerge through the gums, it can become pressed up against or entrapped within the jawbone. This impaction exerts
                                                                pressure on surrounding teeth and tissue, leading to pain and swelling.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                <strong> Cysts </strong> Fluid-filled sacs called cysts sometimes form around impacted wisdom teeth. While not always problematic, these cysts can damage neighbouring teeth and
                                                                bone structures.
                                                            </ListItemText>
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                            </ListItemIcon>
                                                            <ListItemText>
                                                                <strong> Infection </strong> Food debris and bacteria can accumulate around an impacted wisdom tooth below the gum line, resulting in infection, inflammation, and severe pain
                                                                in the area.
                                                            </ListItemText>
                                                        </ListItem>
                                                    </List>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                            <section style={{ marginBottom: "2rem" }}></section>
                            <Typography variant="body1" className="text-black" gutterBottom>
                                <strong style={{ color: "var(--dark-blue)" }}>Experience luxury dental care at Carrum Downs Dental Group</strong>
                                <br></br>
                                At Carrum Downs Dental Group, we hold the strong belief that every person should have the chance to feel the wonderful luxury and comfort of receiving the very best dental care. There's no need to delay any
                                further in treating yourself to this special royal treatment. Take action now by scheduling your appointment at Carrum Downs Dental Group today. Your dental well-being is our priority, and we're here to make
                                you feel truly cared for.
                            </Typography>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default WisdomToothPain;
