import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Top from "../../../public/carrum-new/welcome-bg.webp";
// import Top from "../../../public/carrum-new/about-us.jpg";

const AboutNew = () => {
    return (
        <Box
            className="about-content"
            sx={{
                backgroundImage: `url(${Top.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <Container
                style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    height: "100%",
                }}
                maxWidth="xxl"
            >
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        md={10}
                        className="mx-auto"
                        style={{
                            borderTopRightRadius: "24px",
                            borderBottomRightRadius: "24px",
                            padding: "44px",
                            backgroundColor: "rgba(17,82,115,1)",
                            backdropFilter: "blur(34px)",
                            opacity: "90%",
                            marginTop: "60px",
                            marginBottom: "60px",
                        }}
                    >
                        <Stack spacing={1} maxWidth={760} marginLeft={"auto"}>
                            <Box>
                                <Typography component="h2" variant="h1" className="text-white">
                                    Welcome to Carrum Downs Dental at Shop T5, Hall Road!
                                </Typography>
                                <p className="fs-5 fw-bold text-light">
                                    Most Trusted Family Dentist in Carrumdowns
                                </p>
                            </Box>
                            <p className="fs-5 text-light">
                                Our practice provides our patients with comprehensive services
                                under one roof. From{" "}
                                <a className="text-light-green" href="/dental-implants/">
                                    Dental Implants
                                </a>{" "}
                                to Cosmetic Dentistry and{" "}
                                <a
                                    className="text-light-green"
                                    href="/service/wisdom-teeth-removal"
                                >
                                    Wisdom tooth extractions
                                </a>{" "}
                                to Dentures, our clinic's wide range of affordable services will
                                put a big smile on your face. We believe in giving our patients
                                a choice in treatment and will always educate and discuss
                                treatment before a decision is made.
                            </p>
                            <p className="fs-5 text-light">
                                Our staff are very friendly and will receive you with a smile,
                                and our warm and inviting office will provide you a relaxing
                                experience. Our dentist/staff are very good with children and
                                will do whatever it takes to calm them down and distract them
                                with IPAD while the treatment is performed.
                            </p>
                            <p className="fs-5 text-light">
                                We accept dental vouchers from the public dental services
                                (Victorian Dental Scheme and{" "}
                                <a
                                    className="text-light-green"
                                    href="/child-dental-benefit-schedule/"
                                >
                                    Child Dental Benefit Schedule
                                </a>
                                ). Our dentist speaks English, Hindi, Tamil, Arab, Malayalam,
                                and Urdu.
                            </p>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutNew;

// import React from "react";
// import Top from "../../../public/carrum-new/about-us.jpg";
// import { Container, Box, Typography } from "@mui/material";
// import Link from "next/link";

// const AboutNew = () => {
//     return (
//         <>
//             <Container maxWidth="xxl" className="p-0" style={{ marginTop: "5%" }}>
//                 <Box sx={{
//                     backgroundImage: `url(${Top.src})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     height: { xs: "100vh", md: "90vh" },
//                     position: "relative",
//                 }}
//                     className="about-content"
//                 >
//                     <Box
//                         sx={{
//                             zIndex: 2,
//                             color: "white",
//                             textAlign: "left",
//                             maxWidth: { xs: "90%", md: "70%", lg: "50%" },
//                             p: { xs: 2, md: 12 },
//                             borderRadius: "8px",
//                         }}
//                     >
//                         <Typography
//                             variant="h2"
//                             sx={{
//                                 fontWeight: "bold",
//                                 mb: 2,
//                             }}
//                         >
//                             Welcome to Carrum Downs Dental
//                         </Typography>
//                         <Typography
//                             variant="h5"
//                             sx={{
//                                 fontWeight: "light",
//                                 mb: 3,
//                             }}
//                         >
//                             at Shop T5, Hall Road!
//                         </Typography>

//                         <Typography
//                             variant="h6"
//                             sx={{
//                                 mb: 3,
//                             }}
//                         >
//                             Most Trusted Family Dentist in Carrumdowns
//                         </Typography>

//                         <Typography
//                             paragraph
//                             sx={{
//                                 mb: 2,
//                             }}
//                         >
// Our practice provides our patients with comprehensive services
// under one roof. From <a className="text-light-green" href="/dental-implants/"> Dental Implants</a> to Cosmetic Dentistry and <a className="text-light-green" href="/service/wisdom-teeth-removal">Wisdom tooth extractions </a>
// to Dentures, our clinic's wide range of affordable services will
// put a big smile on your face. We believe in giving our patients a
// choice in treatment and will always educate and discuss treatment before a decision is made.
//                         </Typography>
//                         <Typography
//                             paragraph
//                             sx={{
//                                 fontSize: { xs: "0.9rem", md: "1rem" },
//                                 mb: 2,
//                             }}
//                         >
// Our staff are very friendly and will receive you with a smile, and
// our warm and inviting office will provide you a relaxing
// experience. Our dentist/staff are very good with children and will
// do whatever it takes to calm them down and distract them with
// IPAD while the treatment is performed.
//                         </Typography>
//                         <Typography
//                             paragraph
//                             sx={{
//                                 fontSize: { xs: "0.9rem", md: "1rem" },
//                                 mb: 2,
//                             }}
//                         >
// We accept dental vouchers from the public dental services
// (Victorian Dental Scheme and <a className="text-light-green" href="/child-dental-benefit-schedule/">Child Dental Benefit Schedule </a>). Our dentist speaks English, Hindi, Tamil, Arab, Malayalam, and Urdu.
//                         </Typography>
//                     </Box>
//                 </Box>
//             </Container>
//         </>
//     );
// };

// export default AboutNew;
