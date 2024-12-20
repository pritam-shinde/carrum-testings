import { CheckCircleOutline } from "@mui/icons-material";
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from "../../../components/components";
import ClearBiteAligner from "../../../public/invisalign/Clear-bite-aligners.jpg";
import ClearBite from "../../../public/invisalign/Clearbite.jpg";
import Banner from "../../../public/invisalign/invisalign-bg.jpg";

const TeethAligner = ({ data }) => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const breadcrumb = [
    { id: "Invisalign_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "Invisalign_breadcrumb_2", link: null, title: "Invisalign" },
  ];

  return (
    <>
      <Head>
        <title>Invisalign by Carrum Downs Dental Group</title>
        <meta name="description" content="Carrum Downs Dental Group has the best dentist in Carrum Downs that provides high-quality teeth aligners, making your smile more pleasant." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Invisalign" align={width < 600 ? "center" : "left"} color="#fff" />
      {show && (
        <main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                      <section>
                        <Container maxWidth="xxl" className="p-0">
                          <SectionalHeading variant="h2" title="Invisalign - The Most Effective and Affordable Way to Straighten Your Teeth" align={width < 600 ? "center" : "left"} color="var(--dark-blue)" />
                          <Typography className="para">
                            Let’s face it; we all would like to own a set of perfect looking teeth. However, due to various reasons, a majority of people never really feel confident with their smiles. The effects
                            can be both psychologically and socially damaging. So, why do most people shy away from seeking treatment to correct crooked, unsightly gaps, or crowding? Well, it turns out that one
                            major reason is the fear of using traditional metal braces.
                          </Typography>
                          <Typography className="para">
                            Even though the results will be beautiful, traditional metal braces come with their fair share of issues. Regular irritation, hard to maintain good oral hygiene, limits your diet, not
                            to mention that they are unsightly as well. The good news is that due to advancements in dental technology, there is a better alternative to traditional metal braces known as
                            Invisalign.
                          </Typography>
                          <Typography className="para">
                            At Carrum Downs Dental at Shop T5, 100 Hall Road, we provide affordable and quality Invisalign treatment that can change your smile in just a matter of weeks.
                          </Typography>
                        </Container>
                      </section>
                      <section className="mt-md-5 mt-4 bg-grey">
                        <Container maxWidth="xxl" className="p-0">
                          <Box p={3}>
                            <Box>
                              <SectionalHeading variant="h2" title="What is Invisalign?" align={width < 600 ? "center" : "left"} color="var(--dark-blue)" />
                              <Typography className="para">
                                Invisalign is a modern solution that helps you straighten your teeth without using traditional metal braces. Your dentist will use clear, smooth, and durable plastic to make a
                                set of nearly invisible aligners. Our dentist at Carrum Downs Dental Clinic will customize the appliances to fit your teeth perfectly. You will then have to wear and replace
                                them after every two weeks for your teeth to slowly get into position.
                              </Typography>
                            </Box>
                            <Box mt={3}>
                              <SectionalHeading variant="h2" title="Benefits of Invisalign:" align={width < 600 ? "center" : "left"} color="var(--dark-blue)" />
                              <Box>
                                <List>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={<strong>Aesthetics:</strong>}
                                      secondary="Invisalign is nearly invisible and more aesthetically appealing compared to traditional metal braces."
                                    />
                                  </ListItem>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={<strong>Comfort:</strong>}
                                      secondary="With Invisalign, you will not have to endure the agony of sharp corners and wires in your mouth like with metal braces."
                                    />
                                  </ListItem>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={<strong>Speed:</strong>}
                                      secondary="Invisalign offers positive results within a concise period of time. This is because they can straighten a number of teeth at once."
                                    />
                                  </ListItem>
                                  <ListItem className="ps-0">
                                    <ListItemIcon>
                                      <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={<strong>Better Breath:</strong>}
                                      secondary="It is almost impossible to clean your teeth around metal braces, which can lead to bad breath. With Invisalign, you can remove them and perform regular dental hygiene practices, including brushing and flossing. Also, with traditional braces, there is a higher risk of gum disease due to the difficulty in cleaning the teeth."
                                    />
                                  </ListItem>
                                </List>
                              </Box>
                            </Box>
                          </Box>
                        </Container>
                      </section>
                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className="p-0">
                          <SectionalHeading variant="h2" title="How Does It Work?" align="center" color="var(--dark-blue)" />
                          <Box mt={3}>
                            <Grid container spacing={5}>
                              <Grid item xs={12} md={6}>
                                <Image src={ClearBite} alt="Clear Bite" />
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography className="para">
                                  Invisalign is a unique dental treatment as it is custom-made to fit your teeth. The appliance will perfectly fit each of your teeth and will work to reposition your teeth
                                  over time. The teeth will virtually move into place depending on the exact movements your dentist plans for you. Invisalign is made of smooth, comfortable, and nearly
                                  invisible material.
                                </Typography>
                              </Grid>
                              <Grid item xs={12} className="pt-1">
                                <Typography className="para">
                                  Actually, no one can tell if you are wearing them unless you choose to tell. With Invisalign, you will not be a subject of humor or humiliation as with traditional metal
                                  braces. The appliances will help you achieve a brighter smile with minimal interference.
                                </Typography>
                                <Image src={ClearBiteAligner} alt="Clear Bite Aligners" />
                              </Grid>
                            </Grid>
                          </Box>
                        </Container>
                      </section>
                      <section className="mt-md-5 mt-4 bg-grey">
                        <Container maxWidth="xxl" className="p-0">
                          <Box p={3}>
                            <SectionalHeading variant="h2" title="Treatment Process" align={width < 600 ? "center" : "left"} color="var(--dark-blue)" />
                            <Typography className="para">
                              The chances are that you might be familiar with how Invisalign works. However, we would like to provide a step-by-step procedure on the treatment process. Whether you are
                              considering the treatment for yourself or someone close to you, knowing exactly what will happen will enhance your confidence and ease any fears.
                            </Typography>
                            <Box>
                              <List>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Initial Consultation at Carrum Downs Dental Group at Shop T5, 100 Hall Road</strong>}
                                    secondary="During the initial consultation, your dentist will discuss the benefits of Invisalign and offer other treatment alternatives. If you decide on Invisalign, the dentist will check your teeth to determine if you are a good candidate for the treatment. You will also have the opportunity to ask any questions you have about the treatment."
                                  />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Custom-made Aligners</strong>}
                                    secondary="Once your dentist determines you are a good candidate for the treatment, they will take digital impressions of your teeth. The impressions will be used to create custom-made aligners. Each set of aligners will be designed to make precise and gradual adjustments to your teeth. Your dentist will then schedule you for the next visit to fit the aligners."
                                  />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Wear the Aligners</strong>}
                                    secondary="Once you get your aligners, you will need to wear them for about 20 to 22 hours a day. Remove the aligners only when you need to eat or drink. Also, clean the aligners to avoid the build-up of bacteria. Your dentist will schedule regular check-ups to monitor your progress and provide you with new sets of aligners as required."
                                  />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={<strong>Final Results</strong>}
                                    secondary="The treatment process can take from a few months to over a year. The exact duration will depend on your specific case and your adherence to wearing the aligners. Once the treatment is complete, you will be required to wear retainers to help maintain your new smile."
                                  />
                                </ListItem>
                              </List>
                            </Box>
                          </Box>
                        </Container>
                      </section>
                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className="p-0">
                          <SectionalHeading variant="h2" title="Cost of Invisalign" align={width < 600 ? "center" : "left"} color="var(--dark-blue)" />
                          <Typography className="para">
                            The cost of Invisalign can vary depending on the complexity of your case, the duration of the treatment, and the dental clinic you choose. At Carrum Downs Dental Group, we strive to
                            provide affordable treatment options for our patients. We offer various payment plans to make it easier for you to achieve the smile you’ve always wanted.
                          </Typography>
                          <InterestFree />
                        </Container>
                      </section>
                      <section className="mt-md-5 mt-4">
                        <Container maxWidth="xxl" className="p-0">
                          <SectionalHeading variant="h2" title="Book Your Appointment Today!" align={width < 600 ? "center" : "left"} color="var(--dark-blue)" />
                          <Typography className="para">
                            Ready to transform your smile with Invisalign? Book your appointment today with our experienced team at Carrum Downs Dental Group. We look forward to helping you achieve a confident
                            and beautiful smile.
                          </Typography>
                          <BookAndCall />
                        </Container>
                      </section>
                      <TermsNCondition />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </main>
      )}
    </>
  );
};

export default TeethAligner;

