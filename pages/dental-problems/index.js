import React, { useState, useEffect } from "react";
import Banner from "../../public/Services/service-bg.jpg";
import { BlueFilledBtn, BlueOulinedBtn, CommonHero, SectionalHeading } from "../../components/components";
import { Grid, Typography, Container, Box, Tab, Tabs, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import DentalProblem1 from "../../public/dental-problems-img/Dental_problem.png";
import DentalProblem2 from "../../public/dental-problems-img/Dental_problem_01.png";
import Head from "next/head";
import PageContent from "../../components/PageContent";
import mobilePageData from "../../components/mobilePageData/index";
import Styles from "../../styles/DentalProblemPage.module.css";

const tabs = ["Bad Breath", "Bite Problems", "Bleeding Gums", "Bruxism", "Chipped Or Cracked Tooth", "Crooked Teeth", "Dental Abscess", "Dry Socket", "Gum Disease", "Knocked Out Teeth", "Severe Toothache", "Stained Teeth", "Teeth Sensitivity", "Tooth Gap", "Wisdom Tooth pain"];

const CustomMobileViewContainer = styled(Container)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const CustomLaptopViewContainer = styled(Container)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const index = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null); // Close the currently open accordion
    } else {
      setOpenAccordion(index); // Open the clicked accordion
    }
  };
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Head>
        <title>Learn About Common Dental Problems | Carrum Downs Dental</title>
        <meta name="description" content="Explore Common Dental Problems and Get Expert Care at Carrum Downs Dental. Discover the causes, symptoms, & treatments for various dental issues to keep a healthy smile." />
        <meta name="robots" content="index" />
        {/* <link rel="canonical" href="/dental-problems/" /> */}
      </Head>
      <CommonHero bg={Banner} breadcrumb={null} title="Dental Problems" align="left" color="#fff" />
      <main>
        <section>
          <section
            className="teeth-missing-section1"
            style={{
              backgroundColor: "#1ebdb6",
              marginBottom: "2rem",
              position: "relative",
              paddingTop: "100px",
              paddingBottom: "100px",
            }}>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h5" component="h2" className="text-white" gutterBottom>
                      Read About Common Dental Problems
                    </Typography>
                    <Typography variant="body1" className="text-white" gutterBottom>
                      At Carrum Downs Dental Group, we provide excellent <a href="/dental-care-ideas-to-prevent-tooth-decay/">dental care</a> through quality services. Our skilled dentists and staff would love to inform you about common dental issues and ensure you know how
                      to avoid them.
                    </Typography>
                    <Typography variant="body1" className="text-white" gutterBottom>
                      <a href='/7-tips-for-improving-your-oral-health-before-sleep-time/'>Oral health </a> issues are remarkably common, but many people don't know how to properly address them. Ignoring dental problems can lead to severe consequences later on. Regular dental exams are
                      crucial for catching problems early before they worsen. The key is being proactive with dental care rather than waiting until you have a crisis situation. With consistent preventative care and
                      good oral hygiene habits, your teeth and gums can stay in excellent shape.
                    </Typography>
                    <Box>
                      <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
                      <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} className="d-flex justify-content-center">
                  <Image src={DentalProblem1} alt="Image" width={450} height={400} />
                </Grid>
              </Grid>
            </Container>
          </section>
          <div className="lower_clipPath"></div>
          <section>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} className="d-flex justify-content-center">
                  <Image src={DentalProblem2} alt="Image" width={450} height={400} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 1 }}>
                    <Typography variant="body1" gutterBottom>
                      At Carrum Downs Dental Group, our expert team goes beyond simply providing excellent dental care - we empower you with the knowledge to maintain a healthy, beautiful smile.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      With decades of experience handling <a href="/the-most-common-dental-issues-experienced-by-seniors-today/">common dental issues</a>, our team wants to ensure you fully understand your oral health. We take time to listen to your concerns, clearly explain treatment
                      options, and answer all your questions.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Our aim is for you to feel informed and confident every step of the way, whether you're in for a routine cleaning or need care for a complex dental problem. Patient education and open
                      communication are central to our approach. Book an appointment today to experience dental care that informs and inspires. We look forward to seeing you soon!
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
              paddingBottom: "6rem"
            }}>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h5" component="h2" className="text-white text-center" gutterBottom>
                      Common dental problems that require treatment.
                    </Typography>
                    <Typography variant="body1" className="text-white text-center" gutterBottom>
                      Common Dental Problems that are important to address. When it comes to your dental well-being, there are many common oral problems you are likely to encounter.
                    </Typography>
                  </Box>
                </Grid>
                {/* medium-large device */}
                <CustomLaptopViewContainer>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={3}
                      md={3}
                      style={{
                        overflowX: "hidden",
                        maxHeight: "60vh",
                        padding: "20px",
                        background: "transparent",
                      }}
                      className="scroll">
                      <Tabs
                        className="show-tabs-hide-accordion"
                        orientation="vertical"
                        variant="scrollable"
                        value={selectedTab}
                        onChange={handleTabChange}
                        TabIndicatorProps={{
                          style: { display: "none" },
                        }}>
                        {tabs.map((tab, index) => (
                          <Tab
                            label={tab}
                            key={index}
                            style={{
                              backgroundColor: selectedTab === index ? "#115278" : "transparent",
                              color: "#fff",
                              borderRadius: selectedTab === index ? "5px" : "0px",
                            }} />
                        ))}
                      </Tabs>
                    </Grid>
                    <Grid item xs={9} md={9}>
                      <Card sx={{
                        minWidth: 275,
                        minHeight: 350,
                        maxHeight: 450,
                        height: "60vh"
                      }}>
                        <PageContent selectedTab={selectedTab} />
                      </Card>
                    </Grid>
                  </Grid>
                </CustomLaptopViewContainer>
                {/* mobile view  */}
                <CustomMobileViewContainer>
                  <Grid item xs={12} md={6}>
                    {mobilePageData.map((data, index) => (
                      <Box className="py-1" key={index}>
                        <div className={`${Styles.mobileAccordion}`}>
                          <div className={`accordion ${openAccordion === index ? "show" : ""}`} id={`accordionExample-${index}`}>
                            <div className="accordion-item d-md-block">
                              <h3 className="accordion-header" id={`heading-${index}`}>
                                <button
                                  className={`accordion-button ${openAccordion === index ? "" : "collapsed"}`}
                                  type="button"
                                  onClick={() => toggleAccordion(index)} // Toggle the accordion on click
                                >
                                  {data.title}
                                </button>
                              </h3>
                              <div
                                id={`collapse-${index}`}
                                className={`accordion-collapse collapse ${openAccordion === index ? "show" : ""}`}
                                aria-labelledby={`heading-${index}`}
                                data-bs-parent={`#accordionExample-${index}`}>
                                <div className="accordion-body">
                                  <p className="para">{data.content}</p>
                                  <Grid item xs={12} md={6} className="d-flex justify-content-center">
                                    <Image src={data.imageSrc} alt="Image" width={450} height={400} className="img-fluid" />
                                  </Grid>
                                  <a href={data.readMoreLink} className="bg-blue">
                                    Read More..
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Box>
                    ))}
                  </Grid>
                </CustomMobileViewContainer>
              </Grid>
            </Container>
          </section>
          <div className="lower_clipPath"></div>
          <section className="mt-4 ">
            <Container>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2 }}>
                  <Box>
                    <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions About Dental Problems" align="center" />
                  </Box>
                  <Box mt={3}>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What are dental problems?
                          </button>
                        </h3>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <div className="para">
                              Dental problems refer to a wide range of issues or conditions that affect the health, appearance, and function of your teeth, gums, and oral cavity. These issues can vary in
                              severity and may require different levels of dental care.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section style={{ marginBottom: "2rem" }}></section>
                    <Typography variant="body1" className="text-black" gutterBottom>
                      <strong style={{ color: "var(--dark-blue)" }}>Experience luxury dental care at Carrum Downs Dental Group</strong>
                      <br></br>
                      Carrum Downs Dental Group firmly believes in extending the richness and ease of premium dental care to all. There's no need to delay any further to achieve a pleasant breath – secure your
                      appointment at Carrum Downs Dental Group without delay!
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Container>
          </section>
        </section>
      </main>
    </>
  );
};
export default index;