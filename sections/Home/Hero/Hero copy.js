import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Card, CardActionArea, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "../../../styles/Home.module.css";

const navbarMenu = [
  {
    label: "HOME",
    href: "/",
    dropdown: null,
  },
  {
    label: "ABOUT US",
    href: "/about-us/",
    dropdown: [
      { label: "PATIENT REFERRAL PROGRAM", href: "/referral-program/" },
      { label: "PAYMENT PLAN", href: "/payment-plan/" },
      { label: "NEW TECHNOLOGIES", href: "/new-technologies/" },
      { label: "OFFER", href: "/offer/" },
      { label: "MEET OUR TEAM", href: "/meet-our-team/" },
      { label: "ACCESS MY SUPER", href: "/superannuation-to-pay-for-dental-treatment/" },
      { label: "COVID-19", href: "/how-we-can-reduce-the-spread-of-corona-virus-together/" },
    ],
  },
  {
    label: "SERVICES",
    href: "/service/",
    dropdown: [
      { label: "MISSING TEETH", href: "/service/missing-teeth/" },
      { label: "WISDOM TEETH REMOVAL", href: "/service/wisdom-teeth-removal/" },
      { label: "CHILD BENEFIT", href: "/service/child-benefit/" },
      { label: "DENTAL IMPLANTS", href: "/service/dental-implants/" },
      { label: "DENTURE", href: "/service/dentures/" },
      { label: "TEETH WHITENING", href: "/service/teeth-whitening/" },
      { label: "CROWN AND BRIDGES", href: "/service/crowns-and-bridge/" },
      { label: "VENEERS", href: "/service/veneers/" },
      {
        label: "INVISALIGN",
        href: "/service/invisalign/",
        subDropdown: [{ label: "INVISALIGN OPEN DAY", href: "/service/invisalign-open-day/" }],
      },
      { label: "ROOT CANAL", href: "/service/root-canal/" },
      { label: "TEETH CLEANING", href: "/service/teeth-cleaning/" },
      { label: "DENTAL EMERGENCY", href: "/service/dental-emergency/" },
      { label: "TOOTH FILLING", href: "/service/tooth-fillings/" },
      { label: "SMILE DESIGN", href: "/service/smile-design/" },
      { label: "DIGITAL DENTURES", href: "/service/digital-dentures/" },
      { label: "IMPLANT SUPPORTED DENTURE", href: "/service/implant-supported-denture/" },
      { label: "DENTURE TECHNOLOGY", href: "/service/denture-technology/" },
      { label: "SLEEP DENTISTRY", href: "/service/sleep-dentistry/" },
    ],
  },
  {
    label: "DENTAL PROBLEMS",
    href: "/dental-problems/",
    dropdown: [
      { label: "BAD BREATH", href: "/dental-problems/bad-breath" },
      { label: "BITE PROBLEMS", href: "/dental-problems/bite-problems" },
      { label: "BLEEDING GUMS", href: "/dental-problems/bleeding-gums" },
      { label: "BRUXISM", href: "/dental-problems/bruxism" },
      { label: "CHIPPED OR CRACKED TOOTH", href: "/dental-problems/chipped-or-cracked-tooth" },
      { label: "CROOKED TEETH", href: "/dental-problems/crooked-teeth" },
    ],
  },
  {
    label: "CONTACT US",
    href: "/contact-us/",
  },
];

const Hero = () => {
  return (
    <Container maxWidth="xxl" id="home_hero" className="p-0">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{ clickable: true }}
        modules={[EffectFade, Pagination, Autoplay]}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className={`slide ${Styles.slider1}`} id="home-hero-slider1">
          <Box
            sx={{
              position: "relative",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: 2, // Ensures content is on top
              color: "#fff",
            }}
          >
            {/* <Box sx={{ position: "absolute", top: "30%", left: "10%", transform: "translateY(-50%)", }}>
              <ul className="navbar-nav mx-auto">
                {navbarMenu.map((menu, index) => (
                  <li key={index} className={`nav-item ${menu.dropdown ? "dropdown" : ""}`}>
                    <a href={menu.href} className={`nav-link ${menu.dropdown ? "dropdown-toggle" : ""}`} {...(menu.dropdown ? { "data-bs-toggle": "dropdown" } : {})}>
                      {menu.label}
                    </a>
                    {menu.dropdown && (
                      <ul className="dropdown-menu">
                        {menu.dropdown.map((subMenu, subIndex) => (
                          <li key={subIndex}>
                            <a href={subMenu.href} className="dropdown-item">
                              {subMenu.label}
                            </a>
                            {subMenu.subDropdown && (
                              <ul className="dropdown-menu">
                                {subMenu.subDropdown.map((subSubMenu, subSubIndex) => (
                                  <li key={subSubIndex}>
                                    <a href={subSubMenu.href} className="dropdown-item">
                                      {subSubMenu.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </Box> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "20px",
                padding: "20px",
                marginTop: "10vh",
                marginLeft: "10%",
                maxWidth: "40%",
                borderRadius: "12px",
                overflow: "hidden",
                // "&:hover": {
                //   backdropFilter: "blur(10px)",
                //   background: "rgba(255, 255, 255, 0.2)",
                //   border: "1px solid rgba(255, 255, 255, 0.3)",
                //   boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                // },
                "@media (max-width: 768px)": {
                  flexDirection: "column",
                  alignItems: "center",
                  marginLeft: "5%",
                  marginTop: "5vh",
                },
              }}
            >
              <ul
                className="navbar-nav"
                style={{
                  flex: "1 1 auto",
                  listStyleType: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                {navbarMenu.map((menu, index) => (
                  <li
                    key={index}
                    className={`nav-item ${menu.dropdown ? "dropdown" : ""}`}
                    style={{ marginBottom: "10px" }}
                  >
                    <Link
                      href={menu.href}
                      className={`nav-link ${menu.dropdown ? "dropdown-toggle" : ""}`}
                      {...(menu.dropdown ? { "data-bs-toggle": "dropdown" } : {})}
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      {menu.label}
                    </Link>
                    {menu.dropdown && (
                      <ul
                        className="dropdown-menu"
                        style={{
                          marginLeft: "27%",
                          marginTop: "-5%",
                          listStyleType: "none",
                        }}
                      >
                        {menu.dropdown.map((subMenu, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subMenu.href}
                              className="dropdown-item"
                              style={{ textDecoration: "none", color: "#555" }}
                            >
                              {subMenu.label}
                            </a>
                            {subMenu.subDropdown && (
                              <ul
                                className="dropdown-menu"
                                style={{
                                  marginLeft: "20px",
                                  listStyleType: "none",
                                }}
                              >
                                {subMenu.subDropdown.map((subSubMenu, subSubIndex) => (
                                  <li key={subSubIndex}>
                                    <a
                                      href={subSubMenu.href}
                                      className="dropdown-item"
                                      style={{
                                        textDecoration: "none",
                                        color: "#777",
                                      }}
                                    >
                                      {subSubMenu.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

            </Box>

            <Container
              className="mt-5"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2rem",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}>
                    Service
                  </Typography>
                  <Typography sx={{ mb: 3, fontSize: "1.2rem", color: "#ddd" }}>Our dentists are fully qualified and have years of experience in providing quality dental care.</Typography>
                  <Link href="/about-us">
                    <Box
                      component="button"
                      sx={{
                        backgroundColor: "#fff",
                        color: "#000",
                        padding: "10px 20px",
                        fontSize: "1rem",
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#115278",
                          color: "#fff !important",
                        },
                      }}
                    >
                      KNOW MORE
                    </Box>
                  </Link>
                </Grid>
                {/* Cards Section */}
                <Grid item xs={12} md={5}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Card
                        sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          color: "white",
                          p: 2,
                          height: "150px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                          },
                        }}
                      >
                        <CardActionArea>
                          <Link href="/book-appointment">
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                              <Typography variant="h5" textAlign="left">
                                Book Online Appointment
                              </Typography>
                              <ChevronRightIcon
                                sx={{
                                  fontSize: "2rem",
                                  marginLeft: "auto",
                                  backgroundColor: "#115278",
                                  borderRadius: "50%",
                                  transition: "transform 0.3s",
                                  "&:hover": { transform: "rotate(90deg)" },
                                }}
                              />
                            </Box>
                          </Link>
                        </CardActionArea>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Card
                        sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          color: "white",
                          p: 2,
                          height: "150px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                          },
                        }}
                      >
                        <CardActionArea>
                          <Link href="/book-appointment">
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                              <Typography variant="h5" textAlign="left">
                                Or Call 03 - 9782 1200
                              </Typography>
                              <ChevronRightIcon
                                sx={{
                                  fontSize: "2rem",
                                  marginLeft: "auto",
                                  backgroundColor: "#115278",
                                  borderRadius: "50%",
                                  transition: "transform 0.3s",
                                  "&:hover": { transform: "rotate(90deg)" },
                                }}
                              />
                            </Box>
                          </Link>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>

            <Box
              style={{
                position: "absolute",
                top: "50%",
                right: "2%",
                transform: "translateY(-50%)",
              }}
            >
              {["Twi", "Fac", "You", "Ins", "Pin"].map((platform, index) => (
                <div key={index} style={{ margin: "10px 0" }}>
                  <a href="#" style={{ color: "#fff !important", fontSize: "20px" }} className="home-link">
                    {platform}
                  </a>
                </div>
              ))}
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Hero;

