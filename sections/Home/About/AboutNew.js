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
        backgroundPosition: "center",
      }}
    >
      <Container
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          minHeight: "100%",
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
              // borderTopRightRadius: "24px",
              // borderBottomRightRadius: "24px",
              borderRadius: "24px",
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
                <Typography component="h2" className="text-white">
                  Welcome to Carrum Downs Dental at Shop T5, Hall Road!
                </Typography>
                <p className="fs-18 fw-bold text-light">
                  Most Trusted Family Dentist in Carrum downs
                </p>
              </Box>
              <p className="fs-18 text-light line-spacing">
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
              <p className="fs-18 text-light">
                Our staff are very friendly and will receive you with a smile,
                and our warm and inviting office will provide you a relaxing
                experience. Our dentist/staff are very good with children and
                will do whatever it takes to calm them down and distract them
                with IPAD while the treatment is performed.
              </p>
              <p className="fs-18 text-light">
                We accept dental vouchers from the public dental services
                (Victorian Dental Scheme and{" "}
                <a className="text-light-green" href="/service/child-benefit/">
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
