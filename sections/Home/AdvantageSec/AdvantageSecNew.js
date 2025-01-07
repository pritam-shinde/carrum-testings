import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { SectionalHeading } from "../../../components/components";
import Image from "next/image";

const AdvantageSecNew = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      className="advantage-bg"
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 50%, transparent 60%), url("/carrum-new/our-advantage.jpg")`,
        backgroundSize: "100% 55%", // Make the image cover horizontally but only half vertically
        backgroundPosition: "top center", // Align the image to the top
        backgroundRepeat: "no-repeat",
        margin: { xs: "40px 0px 40px 0px", md: "80px 0px 80px 0px" },
      }}
    >
      <Container maxWidth="xxl">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Box py={2}>
              <Typography
                component="div"
                variant="h2"
                className="text-dark text-start text-md-center fw-semibold"
                style={{
                  fontSize: "clamp(40px,4vw,75px) !important",
                  fontFamily: "var(--heading-font) !important",
                }}
              >
                Our Advantage
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            spacing={4}
            // alignItems="center"
            alignItems={{ sm: "start", md: "start" }}
            justifyContent={isSmallScreen ? "flex-start" : "space-around"}
            sx={{ mt: 0 }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h3"
                className="heading-color"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  textAlign: isSmallScreen ? "left" : "left",
                  display: "flex",
                  flexDirection: isSmallScreen ? "row" : "column",
                }}
                style={{ fontSize: "clamp(24px,4vw,40px) !important" }}
              >
                <span className="me-2">We are OPEN</span>
                <span>ALL 7 DAYS</span>
              </Typography>
              <Typography sx={{ textAlign: isSmallScreen ? "left" : "left" }}>
                Providing services every day for your convenience.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h3"
                className="heading-color"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  textAlign: isSmallScreen ? "left" : "right",
                  display: "flex",
                  flexDirection: isSmallScreen ? "row" : "column",
                }}
                style={{ fontSize: "clamp(24px,4vw,40px) !important" }}
              >
                <span className="me-2">Modern</span> <span>Dentistry</span>
              </Typography>
              <Typography sx={{ textAlign: isSmallScreen ? "left" : "right" }}>
                The field of dentistry is constantly evolving. New techniques
                and procedures expand dentists capabilities and deliver more
                comfortable, long-lasting, and effective solutions to dental
                patients.
              </Typography>
            </Grid>
          </Grid>

          {!isSmallScreen && (
            <Box>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 2 }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Image
                    src="/carrum-new/our-advantage.webp"
                    alt="Our Advantage"
                    width={1000}
                    height={600}
                    priority
                    className="img-fluid"
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          <Grid
            container
            spacing={4}
            alignItems={{ sm: "start", md: "center" }}
            justifyContent={isSmallScreen ? "flex-start" : "space-around"}
            sx={{ mt: 0 }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h3"
                className="heading-color"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  textAlign: isSmallScreen ? "left" : "left",
                  display: "flex",
                  flexDirection: isSmallScreen ? "row" : "column",
                }}
                style={{ fontSize: "clamp(24px,4vw,40px) !important" }}
              >
                <span className="me-2">Dental</span> <span>Insurance</span>
              </Typography>
              <Typography sx={{ textAlign: isSmallScreen ? "left" : "left" }}>
                Carrum Downs Dental Group is a HCF and NIB Preferred Provider.
                We accept most Dental Insurance and also public dental vouchers
                (CDBS, CBHS, West Fund, SMILE.COM.AU, VEDS and VGDS.).
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h3"
                className="heading-color"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  textAlign: isSmallScreen ? "left" : "right",
                  display: "flex",
                  flexDirection: isSmallScreen ? "row" : "column",
                }}
                style={{ fontSize: "clamp(24px,4vw,40px) !important" }}
              >
                <span className="me-2">Dental</span> <span>Emergency</span>
              </Typography>
              <Typography sx={{ textAlign: isSmallScreen ? "left" : "right" }}>
                Starting your day with a missing tooth or even worse – extreme
                pain and don’t know where to go? Call us now.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvantageSecNew;
