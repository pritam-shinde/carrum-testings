import {
  AccessTime,
  ArrowDropDown,
  Close,
  Menu,
  Place,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../../../public/header/logo_new.png";
import Styles from "../../../../../styles/components-style/layout-style/header/Header.module.css";
import DropdownMenu from "./Components/DropdownMenu";
import Link from "next/link";

const NavbarMobile = ({ isScrolled }) => {
  const [menuState, setMenuState] = useState({
    clicked: false,
    aboutDropdown: false,
    servicesDropdown: false,
    dentalProblems: false,
    blogDropdown: false,
  });

  const toggleMenu = () => {
    if (!menuState.clicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    setMenuState((prevState) => ({
      ...prevState,
      clicked: !prevState.clicked,
    }));
  };

  const closeMobileMenu = () =>
    setMenuState({
      clicked: false,
      aboutDropdown: false,
      servicesDropdown: false,
      dentalProblems: false,
      blogDropdown: false,
    });

  const toggleDropdown = (dropdown) =>
    setMenuState((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));

  return (
    <nav className="navbar navbar-expand-xl px-2">

      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <a href="/" className={`navbar-brand ${Styles.deskNavbarBrand}`}>
          <Image src={Logo} alt="carrumdowns dental clinic Logo" />
        </a>
        <Stack className="d-none d-md-block">
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M15 1.33989C16.5083 2.21075 17.7629 3.46042 18.6398 4.96519C19.5167 6.46997 19.9854 8.17766 19.9994 9.91923C20.0135 11.6608 19.5725 13.3758 18.72 14.8946C17.8676 16.4133 16.6332 17.6831 15.1392 18.5782C13.6452 19.4733 11.9434 19.9627 10.2021 19.998C8.46083 20.0332 6.74055 19.6131 5.21155 18.7791C3.68256 17.9452 2.39787 16.7264 1.48467 15.2434C0.571462 13.7604 0.0614093 12.0646 0.00500011 10.3239L0 9.99989L0.00500011 9.67589C0.0610032 7.94888 0.563548 6.26585 1.46364 4.79089C2.36373 3.31592 3.63065 2.09934 5.14089 1.25977C6.65113 0.420205 8.35315 -0.0137108 10.081 0.000330246C11.8089 0.0143713 13.5036 0.47589 15 1.33989ZM10 3.99989C9.75507 3.99992 9.51866 4.08985 9.33563 4.25261C9.15259 4.41537 9.03566 4.63964 9.007 4.88289L9 4.99989V9.99989L9.009 10.1309C9.0318 10.3044 9.09973 10.4689 9.206 10.6079L9.293 10.7079L12.293 13.7079L12.387 13.7899C12.5624 13.926 12.778 13.9998 13 13.9998C13.222 13.9998 13.4376 13.926 13.613 13.7899L13.707 13.7069L13.79 13.6129C13.9261 13.4375 13.9999 13.2219 13.9999 12.9999C13.9999 12.7779 13.9261 12.5623 13.79 12.3869L13.707 12.2929L11 9.58489V4.99989L10.993 4.88289C10.9643 4.63964 10.8474 4.41537 10.6644 4.25261C10.4813 4.08985 10.2449 3.99992 10 3.99989Z" fill="#115278" />
            </svg>
            <Typography variant="body1" sx={{ marginBottom: "0px !important" }}>
              <span className={isScrolled ? "text-black" : "text-white"}>
                Mon to Sat:
              </span>
              <span style={{ color: "#1ebdb6" }}> 9AM – 6PM</span>
              <span className={isScrolled ? "text-black" : "text-white"}>
                , Sun:
              </span>
              <span style={{ color: "#1ebdb6" }}> 9AM – 3PM</span>
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <svg width="18" height="18" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0C11.3869 0 13.6761 1.0344 15.364 2.87564C17.0518 4.71688 18 7.21414 18 9.81805C18 13.1715 16.324 15.9161 14.558 17.8852C13.6757 18.8584 12.7129 19.7406 11.682 20.5208L11.256 20.8372L11.056 20.9823L10.679 21.2441L10.343 21.4677L9.927 21.7317C9.64463 21.9075 9.32513 22 9 22C8.67487 22 8.35537 21.9075 8.073 21.7317L7.657 21.4677L7.137 21.1186L6.945 20.9823L6.535 20.6844C5.42283 19.8636 4.3869 18.926 3.442 17.8852C1.676 15.9151 0 13.1715 0 9.81805C0 7.21414 0.948211 4.71688 2.63604 2.87564C4.32387 1.0344 6.61305 0 9 0ZM9 6.54537C8.60603 6.54537 8.21593 6.63002 7.85195 6.79448C7.48797 6.95895 7.15726 7.20001 6.87868 7.50391C6.6001 7.80781 6.37913 8.16859 6.22836 8.56565C6.0776 8.96271 6 9.38827 6 9.81805C6 10.2478 6.0776 10.6734 6.22836 11.0704C6.37913 11.4675 6.6001 11.8283 6.87868 12.1322C7.15726 12.4361 7.48797 12.6771 7.85195 12.8416C8.21593 13.0061 8.60603 13.0907 9 13.0907C9.79565 13.0907 10.5587 12.7459 11.1213 12.1322C11.6839 11.5184 12 10.686 12 9.81805C12 8.95008 11.6839 8.11766 11.1213 7.50391C10.5587 6.89016 9.79565 6.54537 9 6.54537Z" fill="#115273" />
            </svg>
            <Typography variant="body1" sx={{ marginBottom: "0px !important" }}>
              <span className={isScrolled ? "text-black" : "text-white"}>
                Address:
              </span>
              <span style={{ color: "#1ebdb6" }}>
                {" "}
                Shop T5, 100 Hall Road, Carrum Downs
              </span>
            </Typography>
          </Stack>
        </Stack>
        <Box
          className={`${menuState.clicked ? "nav-menu active" : "nav-menu"
            } overflow-auto`}
        >
          <Link href="/">
            <a className={`navbar-brand deskNavbarBrandMenu`}>
              <Image src={Logo} alt="dental clinic logo" />
            </a>
          </Link>
          <Box px={2} py={0}>
            <ul className="navbar-nav mob">
              <li onClick={closeMobileMenu}>
                <a href="/" className="text-white nav-link">
                  HOME
                </a>
              </li>
              <li className="nav-item dropdownListItem">
                <Box className="d-flex align-items-center">
                  <a
                    href="/about-us/"
                    className="nav-link text-white"
                    onClick={closeMobileMenu}
                    aria-label="about"
                  >
                    ABOUT
                  </a>
                  <IconButton
                    onClick={() => toggleDropdown("aboutDropdown")}
                    aria-label="Toggle About Dropdown"
                  >
                    <ArrowDropDown className="text-white" />
                  </IconButton>
                </Box>
                {menuState.aboutDropdown ? (
                  <DropdownMenu
                    menu="about"
                    closeMobileMenu={closeMobileMenu}
                  />
                ) : null}
              </li>
              <li className="nav-item dropdownListItem">
                <Box className="d-flex align-items-center">
                  <a
                    href="/service/"
                    className="nav-link text-white"
                    onClick={closeMobileMenu}
                    aria-label="services"
                  >
                    SERVICES
                  </a>
                  <IconButton
                    onClick={() => toggleDropdown("servicesDropdown")}
                    aria-label="Toggle Service Dropdown"
                  >
                    <ArrowDropDown className="text-white" />
                  </IconButton>
                </Box>
                {menuState.servicesDropdown ? (
                  <DropdownMenu
                    menu="service"
                    closeMobileMenu={closeMobileMenu}
                  />
                ) : null}
              </li>
              <li className="nav-item dropdownListItem">
                <Box className="d-flex align-items-center">
                  <a
                    href="/dental-problems/"
                    className="nav-link text-white"
                    onClick={closeMobileMenu}
                    aria-label="dental"
                  >
                    DENTAL PROBLEMS
                  </a>
                  <IconButton
                    onClick={() => toggleDropdown("dentalProblems")}
                    aria-label="Toggle Dental Problems Dropdown"
                  >
                    <ArrowDropDown className="text-white" />
                  </IconButton>
                </Box>
                {menuState.dentalProblems ? (
                  <DropdownMenu
                    menu="dentalProblems"
                    closeMobileMenu={closeMobileMenu}
                  />
                ) : null}
              </li>
              <li className="nav-item dropdownListItem">
                <Box className="d-flex align-items-center">
                  <a
                    href="/blog/"
                    className="nav-link text-white"
                    onClick={closeMobileMenu}
                    aria-label="about"
                  >
                    BLOG
                  </a>
                  <IconButton
                    onClick={() => toggleDropdown("blogDropdown")}
                    aria-label="Toggle Blog Dropdown"
                  >
                    <ArrowDropDown className="text-white" />
                  </IconButton>
                </Box>
                {menuState.blogDropdown ? (
                  <DropdownMenu
                    menu="blogDropdown"
                    closeMobileMenu={closeMobileMenu}
                  />
                ) : null}
              </li>
              <li onClick={closeMobileMenu}>
                <a href="/contact-us/" className="text-white nav-link">
                  CONTACT US
                </a>
              </li>
            </ul>
            {/* Social */}
            <Stack
              flexDirection={"row"}
              // sx={{ position: "absolute", top: "50%", right: 0, zIndex: 1 }} 
              gap={1.5}
              paddingY={{ xs: 2, md: 4 }}
            // paddingX={{ xs: 2, md: 4 }}
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
          </Box>
        </Box>

        <Box className="menu-icon" onClick={toggleMenu} aria-label="menu">
          {menuState.clicked ? (
            <Close
              className="text-white-icon"
              sx={{ fontSize: 36 }}
            />
          ) : (
            <Menu className={isScrolled ? "text-dark" : "text-white-icon"} sx={{ fontSize: 36 }}
            />
          )}
        </Box>
      </Stack>
    </nav >
  );
};

export default NavbarMobile;
