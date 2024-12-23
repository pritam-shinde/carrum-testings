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
      {/* <a href="/"> */}
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
            <AccessTime
              sx={{
                color: "#115278",
                height: "0.8em !important",
                width: "0.8em !important",
              }}
            />
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
            <Place
              sx={{
                color: "#115278",
                height: "0.9em !important",
                width: "0.9em !important",
              }}
            />
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
          <a href="/" className={`navbar-brand deskNavbarBrandMenu`}>
            <Image src={Logo} alt="carrumdowns dental clinic logo" />
          </a>
          <Box px={2} py={5}>
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
            <Menu className="text-white-icon" sx={{ fontSize: 36 }}
            />
          )}
        </Box>

      </Stack>

    </nav >
  );
};

export default NavbarMobile;
