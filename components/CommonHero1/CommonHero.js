import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Container, Grid, Stack } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useState } from "react";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useResponsive from "../../hooks/useResponsive";
import Styles from "../../styles/Home.module.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { KeyboardArrowRight } from "@mui/icons-material";

const navbarMenu = [
  {
    label: "Home",
    href: "/",
    dropdown: null,
  },
  {
    label: "About Us",
    href: "/about-us/",
    dropdown: [
      { label: "Patient Referral Program", href: "/referral-program/" },
      { label: "Payment Plan", href: "/payment-plan/" },
      { label: "New Technologies", href: "/new-technologies/" },
      { label: "Offer", href: "/offer/" },
      { label: "Meet Our Team", href: "/meet-our-team/" },
      {
        label: "Access My Super",
        href: "/superannuation-to-pay-for-dental-treatment/",
      },
      {
        label: "Covid-19",
        href: "/how-we-can-reduce-the-spread-of-corona-virus-together/",
      },
    ],
  },
  {
    label: "Services",
    href: "/service/",
    dropdown: [
      { label: "Missing Teeth", href: "/service/missing-teeth/" },
      { label: "Wisdom Teeth Removal", href: "/service/wisdom-teeth-removal/" },
      { label: "Child Benefit", href: "/service/child-benefit/" },
      { label: "Dental Implants", href: "/service/dental-implants/" },
      { label: "Denture", href: "/service/dentures/" },
      { label: "Teeth Whitening", href: "/service/teeth-whitening/" },
      { label: "Crown And Bridges", href: "/service/crowns-and-bridge/" },
      { label: "Veneers", href: "/service/veneers/" },
      {
        label: "Invisalign",
        href: "/service/invisalign/",
        subDropdown: [
          {
            label: "Invisalign Open Day",
            href: "/service/invisalign-open-day/",
          },
        ],
      },
      { label: "Root Canal", href: "/service/root-canal/" },
      { label: "Teeth Cleaning", href: "/service/teeth-cleaning/" },
      { label: "Dental Emergency", href: "/service/dental-emergency/" },
      { label: "Tooth Filling", href: "/service/tooth-fillings/" },
      { label: "Smile Design", href: "/service/smile-design/" },
      { label: "Digital Dentures", href: "/service/digital-dentures/" },
      {
        label: "Implant Supported Denture",
        href: "/service/implant-supported-denture/",
      },
      { label: "Denture Technology", href: "/service/denture-technology/" },
      { label: "Sleep Dentistry", href: "/service/sleep-dentistry/" },
    ],
  },
  {
    label: "Dental Problems",
    href: "/dental-problems/",
    dropdown: [
      { label: "Bad Breath", href: "/dental-problems/bad-breath" },
      { label: "Bite Problems", href: "/dental-problems/bite-problems" },
      { label: "Bleeding Gums", href: "/dental-problems/bleeding-gums" },
      { label: "Bruxism", href: "/dental-problems/bruxism" },
      {
        label: "Chipped Or Cracked Tooth",
        href: "/dental-problems/chipped-or-cracked-tooth",
      },
      { label: "Crooked Teeth", href: "/dental-problems/crooked-teeth" },
      { label: "Dental Abscess", href: "/dental-problems/dental-abscess" },
      { label: "Dry Socket", href: "/dental-problems/dry-socket" },
      { label: "Gum Disease", href: "/dental-problems/gum-disease" },
      {
        label: "Knocked Out Teeth",
        href: "/dental-problems/knocked-out-tooth",
      },
      { label: "Severe Toothache", href: "/dental-problems/severe-toothache" },
      { label: "Stained Teeth", href: "/dental-problems/stained-teeth" },
      {
        label: "Teeth Sensitivity",
        href: "/dental-problems/teeth-sensitivity",
      },
      { label: "Tooth Gaps", href: "/dental-problems/tooth-gap" },
      {
        label: "Wisdom Tooth Pain",
        href: "/dental-problems/wisdom-tooth-pain",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog/",
    dropdown: [{ label: "Video Gallery", href: "/video-gallery" }],
  },
  {
    label: "Contact Us",
    href: "/contact-us/",
  },
];

const slideContents = [
  {
    title: "Experienced Service",
    description:
      "Our dentists are fully qualified and have  years of Experience in providing quality dental care.",
    buttonText: "KNOW MORE",
    buttonLink: "/about-us/",
  },
  {
    title: "Family Quality Care",
    description:
      "Our team of dentist and staff always ensure patients are treated like family.",
    buttonText: "KNOW MORE",
    buttonLink: "/about-us/",
  },
  {
    title: "Child Dental Benefit Scheme",
    description:
      "Eligible families receive free treatments for up to 1000$. Call us to find out if you are eligible.",
    buttonText: "KNOW MORE",
    buttonLink: "/service/child-benefit/",
  },
];

const CommonHero = ({
  pathName,
  align,
  title,
  color,
  breadcrumb,
  bg,
  desc,
}) => {
  const screenWidth = useResponsive();

  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <Container maxWidth="xxl" id="home_hero" className="p-0 position-relative">
      {/* Banner Images */}
      {pathName === "index" ? (
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          // pagination={{ clickable: true }}
          modules={[
            EffectFade,
            // Pagination,
            Autoplay,
          ]}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => {
            const x = swiper.activeIndex < 4 ? swiper.activeIndex : 1;
            setActiveSlide(x - 1);
          }}
          className="custom-padding-top-hero"
        >
          <SwiperSlide
            className={`slide ${Styles.slider1}`}
            style={{ height: "100%", backgroundRepeat: "no-repeat" }}
          ></SwiperSlide>
          <SwiperSlide
            className={`slide ${Styles.slider2}`}
            style={{ height: "100%", backgroundRepeat: "no-repeat" }}
          ></SwiperSlide>
          <SwiperSlide
            className={`slide ${Styles.slider3}`}
            style={{ height: "100%", backgroundRepeat: "no-repeat" }}
          ></SwiperSlide>
        </Swiper>
      ) : (
        <Box
          sx={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: { xs: "70%", md: "center" },
            // backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="custom-padding-top-hero"
        ></Box>
      )}

      <Box
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          zIndex: 1,
        }}
      >
        <Container
          style={{ marginTop: "auto", marginBottom: "auto" }}
          maxWidth="xxl"
        >
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Stack gap={{ xs: 0, md: 8, lg: 8, xl: 10 }}>
                <Box
                  sx={{ maxWidth: "fit-content" }}
                  className="d-none d-xl-block"
                  paddingTop={{ xs: "60px", sm: 0 }}
                >
                  <ul className="navbar-nav mx-auto">
                    {navbarMenu.map((menu, index) => {
                      const totalColumnCount = menu.dropdown
                        ? Math.ceil(menu.dropdown.length / 6)
                        : 0;
                      return (
                        <li
                          key={index}
                          className={`nav-item ${
                            menu.dropdown ? "dropdown" : ""
                          }`}
                        >
                          <Link href={menu.href}>
                            <a
                              className={`text-white nav-link ${
                                menu.dropdown ? "dropdown-toggle" : ""
                              }`}
                            >
                              {menu.label}
                            </a>
                          </Link>
                          {menu.dropdown && (
                            <ul
                              className="dropdown-menu custom-column-count"
                              style={{
                                columnCount:
                                  totalColumnCount === 1 || screenWidth < 768
                                    ? 1
                                    : screenWidth < 1160
                                    ? 2
                                    : totalColumnCount === 3 ||
                                      screenWidth < 1160
                                    ? 3
                                    : totalColumnCount,
                              }}
                            >
                              {menu.dropdown.map((subMenu, subIndex) => (
                                <li
                                  key={subIndex}
                                  style={{ position: "relative" }}
                                >
                                  <Link href={subMenu.href}>
                                    <a className="dropdown-item text-white fs-15">
                                      {subMenu.label}
                                      {subMenu.subDropdown && (
                                        <KeyboardArrowRight
                                          color="#fff"
                                          fill="#fff"
                                          style={{
                                            marginLeft: "8px",
                                            fontSize: "18px",
                                            transform: "rotate(90deg)",
                                            color: "#fff !important",
                                          }}
                                        />
                                      )}
                                    </a>
                                  </Link>
                                  {subMenu.subDropdown && (
                                    <ul className="dropdown-menu2">
                                      {subMenu.subDropdown.map(
                                        (subSubMenu, subSubIndex) => (
                                          <li key={subSubIndex}>
                                            <Link href={subSubMenu.href}>
                                              <a className="dropdown-item2 text-white fw-normal fs-14">
                                                {subSubMenu.label}
                                              </a>
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </Box>
                {pathName === "index" ? (
                  <>
                    <Box>
                      <div className="row gap-5 gap-xl-0 ">
                        <div className="col-12 col-xl-7 col-xxl-7">
                          <h1 className="fw-bold text-white">
                            {slideContents[activeSlide].title}
                          </h1>
                          <p
                            className="fs-18 text-light mt-3 mb-4"
                            style={{ maxWidth: "600px" }}
                          >
                            {slideContents[activeSlide].description}
                          </p>
                          <Link
                            href={slideContents[activeSlide].buttonLink}
                            passHref
                          >
                            <a className="text-dark fw-bold px-4 py-3 view-hover-btn rounded-2">
                              {slideContents[activeSlide].buttonText}
                            </a>
                          </Link>
                        </div>
                        <div className="col-12 col-xl-5 col-xxl-5">
                          <div className="row g-3 pe-5 pe-md-0">
                            <div className="col-12 col-sm-6">
                              <div
                                className="card text-white p-3 h-100 d-flex justify-content-between align-items-start mob-width-hero"
                                style={{
                                  backgroundColor: "rgba(255,255,255,0.27)",
                                  backdropFilter: "blur(5px)",
                                  borderWidth: "1px",
                                  borderColor: "rgba(255,255,255,0.2)",
                                  borderRadius: "12px",
                                }}
                              >
                                <p className="mb-0 fs-4 d-flex flex-column fw-semibold">
                                  <span>Book Online</span>
                                  <span>Appointment</span>
                                </p>
                                <div
                                  className="d-flex align-items-center justify-content-between mt-0 mt-md-4"
                                  style={{
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    className="rounded-circle d-flex align-items-center justify-content-center ms-auto"
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      backgroundColor: "#115278",
                                      transition: "transform 0.3s ease",
                                    }}
                                  >
                                    <Link href="/book-now/" passHref>
                                      <a className="d-flex align-items-center justify-content-center text-decoration-none text-white p-3">
                                        <ChevronRightIcon
                                          sx={{
                                            fontSize: "2rem",
                                            backgroundColor: "#115278",
                                            borderRadius: "50%",
                                            transition: "transform 0.3s ease",
                                            "&:hover": {
                                              transform: "rotate(-90deg)",
                                            },
                                          }}
                                        />
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 col-sm-6">
                              <div
                                className="card text-white p-3 h-100 d-flex justify-content-between align-items-start mob-width-hero"
                                style={{
                                  backgroundColor: "rgba(255,255,255,0.27)",
                                  backdropFilter: "blur(5px)",
                                  borderWidth: "1px",
                                  borderColor: "rgba(255,255,255,0.2)",
                                  borderRadius: "12px",
                                }}
                              >
                                <p className="mb-0 fs-4 d-flex flex-column fw-semibold">
                                  <span>Or Call</span>
                                  <span>03 - 9782 1200</span>
                                </p>
                                <div
                                  className="d-flex align-items-center justify-content-between mt-0 mt-md-4"
                                  style={{
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    className="rounded-circle d-flex align-items-center justify-content-center ms-auto"
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      backgroundColor: "#115278",
                                      transition: "transform 0.3s ease",
                                    }}
                                  >
                                    <Link href="tel:03-9782-1200" passHref>
                                      <a
                                        className="d-flex align-items-center justify-content-center text-decoration-none text-white"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          transition: "transform 0.3s ease",
                                        }}
                                      >
                                        <ChevronRightIcon
                                          sx={{
                                            fontSize: "2rem",
                                            backgroundColor: "#115278",
                                            borderRadius: "50%",
                                            transition: "transform 0.3s ease",
                                            "&:hover": {
                                              transform: "rotate(-90deg)",
                                            },
                                          }}
                                        />
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                    <Stack direction={"row"} gap={1} marginTop={4}>
                      {[0, 1, 2].map((x) => (
                        <Box
                          key={x}
                          style={{
                            padding: "8px",
                            borderRadius: "4px",
                            backgroundColor:
                              activeSlide === x ? "#19BEB9" : "#949494",
                          }}
                        ></Box>
                      ))}
                    </Stack>
                  </>
                ) : (
                  <>
                    <Box>
                      <div className="row gap-5 gap-xl-0 ">
                        <div className="col-12 col-xl-7 col-xxl-7">
                          {pathName === "index" ? (
                            <>
                              <h1 className="fw-bold text-white">
                                {slideContents[activeSlide].title}
                              </h1>
                              <p
                                className="fs-18 text-light mt-3 mb-4"
                                style={{ maxWidth: "600px" }}
                              >
                                {slideContents[activeSlide].description}
                              </p>
                              <Link
                                href={slideContents[activeSlide].buttonLink}
                                passHref
                              >
                                <a className="text-dark fw-bold px-4 py-3 view-hover-btn rounded-2">
                                  {slideContents[activeSlide].buttonText}
                                </a>
                              </Link>
                            </>
                          ) : (
                            <>
                              <h1 className="fw-bold text-white">{title}</h1>
                              {breadcrumb !== null ? (
                                <nav aria-label="breadcrumb">
                                  <ul className="breadcrumb">
                                    {breadcrumb.map((item, index) => (
                                      <li
                                        key={item.id}
                                        className={`breadcrumb-item ${
                                          item.link === null ? "active" : ""
                                        }`}
                                        aria-current={
                                          item.link === null ? "page" : null
                                        }
                                      >
                                        {item.title !== "Services" &&
                                          index !== 0 && (
                                            <span className="arrow-right">
                                              <KeyboardArrowRight
                                                sx={{
                                                  fill: "#fff !important",
                                                  marginBottom: "0.14rem",
                                                }}
                                              />{" "}
                                            </span>
                                          )}
                                        {item.link !== null ? (
                                          <Link href={item.link}>
                                            <a className="text-white fs-18">
                                              {item.title}
                                            </a>
                                          </Link>
                                        ) : (
                                          <strong className="text-white fs-18-inner">
                                            {item.title}
                                          </strong>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </nav>
                              ) : null}
                              {desc ? (
                                <p
                                  className="fs-18 text-light mt-3 mb-4"
                                  style={{ maxWidth: "600px" }}
                                >
                                  {desc}
                                </p>
                              ) : null}
                            </>
                          )}
                        </div>
                        {/* <div className="col-12 col-xl-5 col-xxl-5">
                          <div className="row g-3 pe-5 pe-md-0">

                          </div>
                        </div> */}
                      </div>
                    </Box>
                  </>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Social */}
      <Stack
        // sx={{ position: "absolute", top: "50%", right: 0, zIndex: 1 }}
        sx={{
          position: "absolute",
          top: { xs: "36%", sm: "36%", md: "50%", lg: "50%" },
          right: { xs: 0, md: 0, lg: 0 },
          zIndex: 1,
        }}
        gap={1.5}
        paddingX={{ xs: 2, md: 4 }}
        className="d-none d-xl-flex"
      >
        <a
          href="https://x.com/CarrumDownsGrp/"
          className="text-white icon-circle text-decoration-none fs-5 d-flex align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 14 14"
          >
            <g fill="none">
              <g clipPath="url(#a)">
                <path
                  fill="white"
                  d="M11.025.656h2.147L8.482 6.03 14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h14v14H0z" />
                </clipPath>
              </defs>
            </g>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/CarrumDownsDental"
          className="text-white icon-circle text-decoration-none fs-5 d-flex align-items-center"
        >
          <svg width="11" height="25" viewBox="0 0 11 25">
            <path
              d="M10.5253 12.7046H7.31337V24.4715H2.4471V12.7046H0.13269V8.56929H2.4471V5.89326C2.4471 3.97961 3.35612 0.983032 7.35669 0.983032L10.9613 0.998113V5.01216H8.34592C7.91692 5.01216 7.31369 5.2265 7.31369 6.13937V8.57314H10.9504L10.5253 12.7046Z"
              fill="white"
            />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UCqG1nDBsBULhWGi00Twe7rg/"
          className="text-white icon-circle text-decoration-none fs-5 d-flex align-items-center"
        >
          <svg width="24" height="18" viewBox="0 0 24 18">
            <path
              d="M23.4553 3.20759C23.1817 2.17079 22.3717 1.35719 21.3421 1.07999C19.4773 0.575989 12.0037 0.575989 12.0037 0.575989C12.0037 0.575989 4.5265 0.575989 2.6653 1.07999C1.6357 1.35719 0.825696 2.17079 0.552096 3.20759C0.0480957 5.08319 0.0480957 8.99999 0.0480957 8.99999C0.0480957 8.99999 0.0480955 12.9168 0.548495 14.7924C0.822095 15.8292 1.6321 16.6428 2.6617 16.92C4.5265 17.424 12.0001 17.424 12.0001 17.424C12.0001 17.424 19.4773 17.424 21.3385 16.92C22.3681 16.6428 23.1781 15.8292 23.4517 14.7924C23.9521 12.9168 23.9521 8.99999 23.9521 8.99999C23.9521 8.99999 23.9521 5.08319 23.4553 3.20759ZM9.5557 12.5532V5.44679L15.8017 8.99999L9.5557 12.5532Z"
              fill="white"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/cddentalgroup/"
          className="text-white icon-circle text-decoration-none fs-5 d-flex align-items-center"
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M9.99996 6.44487C8.03824 6.44487 6.44482 8.03829 6.44482 10C6.44482 11.9617 8.03824 13.559 9.99996 13.559C11.9617 13.559 13.559 11.9617 13.559 10C13.559 8.03829 11.9617 6.44487 9.99996 6.44487Z"
              fill="white"
            />
            <path
              d="M15.3656 0.307693H4.63426C2.24996 0.307693 0.307617 2.25003 0.307617 4.63434V15.3657C0.307617 17.7538 2.24996 19.6923 4.63426 19.6923H15.3656C17.7538 19.6923 19.6922 17.7538 19.6922 15.3657V4.63434C19.6922 2.25003 17.7538 0.307693 15.3656 0.307693ZM9.99993 16.2806C6.53783 16.2806 3.71931 13.4621 3.71931 10C3.71931 6.53791 6.53783 3.72326 9.99993 3.72326C13.462 3.72326 16.2805 6.53791 16.2805 10C16.2805 13.4621 13.462 16.2806 9.99993 16.2806ZM16.4124 4.86308C15.6796 4.86308 15.0826 4.26991 15.0826 3.53717C15.0826 2.80443 15.6796 2.20739 16.4124 2.20739C17.1451 2.20739 17.7421 2.80443 17.7421 3.53717C17.7421 4.26991 17.1451 4.86308 16.4124 4.86308Z"
              fill="white"
            />
          </svg>
        </a>
        <a
          href="https://in.pinterest.com/CarrumDownsGrp/_created/"
          className="text-white icon-circle text-decoration-none fs-5 d-flex align-items-center"
        >
          <svg width="16" height="22" viewBox="0 0 16 22">
            <path
              d="M15.9232 7.14559C15.9232 11.8243 13.4583 15.3201 9.82472 15.3201C8.60332 15.3201 7.45658 14.624 7.06373 13.8324C7.06373 13.8324 6.40775 16.5805 6.26945 17.1112C5.77991 18.985 4.34067 20.8601 4.2293 21.0138C4.15097 21.121 3.97963 21.0874 3.96005 20.9454C3.92946 20.7065 3.5623 18.3419 3.99432 16.4126L5.44825 9.91303C5.44825 9.91303 5.08844 9.15112 5.08844 8.02632C5.08844 6.25841 6.05895 4.93861 7.26811 4.93861C8.29614 4.93861 8.7918 5.75218 8.7918 6.72847C8.7918 7.8197 8.13459 9.45072 7.79436 10.9604C7.51043 12.2259 8.39527 13.2577 9.57873 13.2577C11.7205 13.2577 13.1622 10.3547 13.1622 6.91572C13.1622 4.30196 11.4941 2.3455 8.45891 2.3455C5.03092 2.3455 2.89408 5.04321 2.89408 8.05731C2.89408 9.09688 3.18536 9.83039 3.64063 10.396C3.84868 10.6569 3.87928 10.7615 3.8034 11.0611C3.74833 11.2806 3.62472 11.8088 3.57209 12.018C3.49744 12.3202 3.26491 12.4274 3.00668 12.3163C1.42791 11.6357 0.692383 9.81101 0.692383 7.759C0.692383 4.37169 3.40075 0.307693 8.77099 0.307693C13.0838 0.312859 15.9232 3.60719 15.9232 7.14559Z"
              fill="white"
            />
          </svg>
        </a>
      </Stack>
    </Container>
  );
};

export default CommonHero;
