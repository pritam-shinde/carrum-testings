import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FaqVeneers from "../../../components/VeneersData/FaqVeneers";
import { BeforeAfterData, BlueFilledBtn, BlueOulinedBtn, CommonHero, CompareSlider1, VeneerData, VeneerProcessData, VeneersProcessDataComponent } from "../../../components/components";
import Banner from "../../../public/Veneers/carrumdowns-veneer-page-banner.jpg";

const Veneers = ({ data }) => {
  const [show, setShow] = useState(false)
  const [width, setWidth] = useState()

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const breadcrumb = [
    { id: "Veneers_breadcrumb_1", link: "/service/", title: "Service", },
    {
      id: "Veneers_breadcrumb_2",
      link: null,
      title: "Dental Veneers in Carrum Downs",
    },
  ];

  const desc = "Veneers offer a remarkable solution to achieve the smile you've always envisioned. At Carrum Downs Dental Group, we understand the importance of an investment like this, which is why we've partnered with zipMoney to provide our patients with convenient and affordable payment plan options."

  return (
    <>
      <Head>
        <title>Porcelain Veneers Dentist | Carrum Downs Family Dental Clinic</title>
        <meta name="description" content="Porcelain veneers are the perfect choice for improving your smiles. Carrum Downs Dental has the best dentists that perform smile makeovers at affordable costs." />
        <meta name="robots" content="index,follow" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} desc={desc} title="Transforming Smiles with Veneers" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <>
          <main>
            <section
              className="teeth-missing-section1"
              style={{
                backgroundColor: "#000",
                marginBottom: "2rem",
                position: "relative",
                paddingTop: "60px",
                backgroundImage: `url("/Veneers/dental-veneers-section-bg.jpg")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center left",
                backgroundAttachment: "fixed",
              }}
            >
              <Grid>
                <Grid container spacing={2}>
                  <Grid
                    container
                    spacing={3}
                    className="properties-section justify-content-center"
                    style={{
                      marginTop: "-120px",
                      marginLeft: "32px",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      md={3}
                      style={{
                        border: "1px solid rgb(162 215 245)",
                        background: "#fff",
                        borderRadius: "0.5rem",
                        marginRight: "20px",
                        marginBottom: "20px",
                        padding: "0.5rem",
                      }}
                    >
                      <Box className="text-center">
                        <Typography className="mb-2 veneer-font-color fw-bold">
                          Natural Beauty
                        </Typography>
                        Our ultra-thin, custom-crafted porcelain veneers are meticulously designed to mimic the natural appearance and feel of your enamel, seamlessly blending with your unique smile.
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={3}
                      style={{
                        border: "1px solid rgb(162 215 245)",
                        background: "#fff",
                        borderRadius: "0.5rem",
                        marginRight: "20px",
                        marginBottom: "20px",
                        padding: "0.5rem",
                      }}
                    >
                      <Box className="text-center">
                        <Typography className="mb-2 veneer-font-color fw-bold">
                          Tailored to Your Individuality
                        </Typography>
                        Utilizing advanced digital technology, we map your facial features to create veneers that perfectly complement your one-of-a-kind smile. You'll achieve a radiant, personalized look that enhances your natural beauty.
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={3}
                      style={{
                        border: "1px solid rgb(162 215 245)",
                        background: "#fff",
                        borderRadius: "0.5rem",
                        marginRight: "20px",
                        marginBottom: "20px",
                        padding: "0.5rem",
                      }}
                    >
                      <Box className="text-center">
                        <Typography className="mb-2 veneer-font-color fw-bold">
                          Lasting Confidence
                        </Typography>
                        Crafted from high-quality porcelain, our veneers offer exceptional strength and durability, ensuring your beautiful smile remains vibrant and radiant for years to come.
                      </Box>
                    </Grid>
                  </Grid>
                  <Container maxWidth="xxl">
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ p: 2 }}>
                          <Typography variant="h5" component="h2" gutterBottom className="text-white">
                            What are Porcelain Veneers?
                          </Typography>
                          <Typography variant="body1" gutterBottom className="text-white">
                            Veneers are thin porcelain shells bonded to the front surfaces of your natural teeth. The teeth are carefully prepared by polishing down the enamel, allowing the veneers to blend seamlessly and feel natural.
                          </Typography>
                          <Typography variant="body1" gutterBottom className="text-white">
                            Our skilled dentist, takes great care in selecting the perfect shade, shape, and design for your veneers before permanently bonding them. The porcelain veneers are crafted to look natural, provide strength, and ensure long-lasting results.
                          </Typography>
                          <Box>
                            <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" ariaLabel="book now" />
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
              </Grid>
            </section>
            <section
              className="teeth-missing-section1"
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                position: "relative",
                paddingBottom: "0.5rem",
              }}
            >
              <Container>
                <Grid container spacing={2} py={2}>
                  <Grid item xs={12} md={7}>
                    <Typography variant="h5" component="h2" gutterBottom style={{ color: "#115278" }}>
                      Get your perfect smile with Porcelain Veneers
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Veneer treatments can range from a single tooth transformation to a complete smile makeover. To achieve a beautiful, natural-looking result, you need a dentist with an eye for detail and a commitment to perfection. Our dental staff is passionate about cosmetic dentistry and excels in creating stunning veneer smiles.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      At Carrum Downs Dental Group, we use Emax porcelain veneers, which mimic the appearance of youthful, natural teeth. Ceramic porcelain is aesthetically beautiful and superior in quality, offering you a long-term solution for your new smile.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Emax has been a trusted material in the cosmetic dental industry for decades, and studies have shown that this ceramic porcelain is the highest quality material for producing exceptional results.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      We believe in supporting local, reputable Australian dental technicians and do not outsource our veneers or crowns to overseas labs with potentially compromised quality and regulation standards.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Box>
                      {/* <Image src="/Veneers/slider-images/before-after-section.jpg" alt="Image" width={550} height={450} className="img-fluid rounded-2" /> */}
                      <CompareSlider1 />
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </section>
            <section
              className="teeth-missing-section1 bg-grey"
              style={{
                marginBottom: "2rem",
                position: "relative",
                paddingBottom: "0.5rem",
              }}
            >
              <Container>
                <Box py={2}>
                  <Typography variant="h5" component="h2" gutterBottom className="text-center" style={{ color: "#115278" }}>
                    How about maintenance?
                  </Typography>
                  <Grid container spacing={2}>
                    {VeneerData.map((item, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box sx={{ p: 2 }} style={{ height: "100%" }}>
                          <Card sx={{ maxWidth: 345 }} className="mx-auto shadow-none h-100" style={{ border: "1px solid rgb(162 215 245)" }}>
                            <CardMedia sx={{ height: 140 }} component="img" src={item.imageUrl.src} alt="Card Image" title="Card Image" className="mx-auto img-fluid" />
                            <CardContent>
                              <Typography gutterBottom variant="h3" className="text-center maintainance-title-font veneer-font-color fs-4">
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" className="text-justify">
                                {item.description}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Container>
            </section>
            <section
              className="teeth-missing-section1">
              <Container>
                <Typography variant="h5" component="h2" gutterBottom className="text-center" style={{ color: "#115278" }}>
                  Our Process
                </Typography>
                <Typography className="para mt-2">
                  Achieve a radiant, lasting smile with our comprehensive veneer process. We prioritize meticulous care and precision throughout the seven steps, ensuring a comfortable experience and natural-looking results
                  that perfectly complement your unique smile.
                </Typography>
                <Grid container spacing={2}>
                  {VeneerProcessData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index} className={index === 6 ? "centered-box" : ""}>
                      <VeneersProcessDataComponent image={item.imageUrl} title={item.title} description={item.description} list1={item.list1} desc1={item.desc1} desc2={item.desc2} list2={item.list2} />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </section>
            <section
              className="teeth-missing-section1 mt-4"
              style={{
                backgroundColor: "#000",
                marginBottom: "2rem",
                position: "relative",
                paddingBottom: "0.5rem",
              }}
            >
              <Container>
                <Box py={2}>
                  <Typography variant="h2" component="h2" className="text-white text-center" sx={{ mt: 3 }}>
                    Achieve the smile you’ve always wanted.
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Typography className="text-white text-center ">
                      Everyone is entitled to a smile that radiates confidence. Living life while hiding your smile can mean missing out on crucial relationships, great photo opportunities or experiences and happiness in general.
                    </Typography>
                    <Typography className="text-white text-center  ">
                      At Carrum Downs Dental Group, we meticulously design porcelain veneers that are custom-made for your unique smile, ensuring that you'll be looking forward to sharing your dazzling smile with the world.
                    </Typography>
                    <Grid container spacing={3}>
                      {BeforeAfterData.map((item, index) => (
                        <Grid item xs={12} sm={4} md={4} key={index}>
                          <Box textAlign="center" p={1}>
                            <Image src={item.imageUrl} alt="Image" width={350} height={380} className="img-fluid border border-1" />
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </section>
            <section
              className="teeth-missing-section1 veneer-section"
              style={{
                marginBottom: "2rem",
                position: "relative",
                backgroundImage: `url("/Veneers/group-attractive-young-adult-people-isolated-white (1) (1).jpg")`,
                backgroundSize: "48%",
                backgroundColor: "#fff",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left"
              }}
            >
              <Container>
                <Grid container spacing={3} className="mt-2">
                  <Grid item xs={12} md={6}>
                  </Grid>
                  <Grid item xs={12} md={6} style={{ zIndex: 9, paddingBottom: "15px" }}>
                    <Typography className="para font-white" style={{ color: "#115278" }} variant="h2" sx={{ pb: 2 }}>
                      Our Guarantee
                    </Typography>
                    <Typography className="para font-white" style={{ lineHeight: 2.2 }}>At Carrum Downs Dental Group, we guarantee you will love your smile. We won't stop until you do. Your smile will be designed specifically for you, and our smile makeover team are true artists and perfectionists. We will only design and craft smiles that we would want for ourselves.</Typography>
                    <Box>
                      <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" ariaLabel="book now" />
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </section>
            <section
              className="teeth-missing-section1 mt-4"
              style={{
                marginBottom: "2rem",
                position: "relative",
              }}
            >
              <FaqVeneers />
            </section>
            <section
              className="teeth-missing-section1 bg-grey"
              style={{
                position: "relative",
                paddingBottom: "0.5rem",
              }}
            >
              <Container>
                <Box py={2}>
                  <Typography variant="h5" component="h2" gutterBottom className="text-center mt-2" style={{ color: "#115278" }}>
                    Free Call with A Cosmetic Dentist
                  </Typography>
                  <Box py={2}>
                    <Typography className="para text-center">At Carrum Downs Dental Group, we understand the importance of achieving a dazzling smile and exploring the various cosmetic dental options available. Our team is dedicated to answering all your questions and helping you unlock your perfect smile.</Typography>
                    <Typography className="para  text-center">
                      Schedule a conversation with our leading cosmetic dentist today and take the first step towards a confident, radiant smile.
                      We highly recommend considering Carrum Downs Dental Group for your veneer needs. With their commitment to excellence, personalized approach, and state-of-the-art facilities, you can trust that you'll receive exceptional care and stunning results.
                    </Typography>
                    <Typography className="para text-center">Don't hesitate to book a consultation and experience the transformative power of their porcelain veneers firsthand.</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" ariaLabel="book now" />
                    <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" ariaLabel="call now" />
                  </Box>
                </Box>
              </Container>
            </section>
          </main>
        </> : null
      }
    </>
  )
}

export default Veneers