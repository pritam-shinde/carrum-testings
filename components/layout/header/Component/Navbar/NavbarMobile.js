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
          </Box>
        </Box>

        <Box className="menu-icon" onClick={toggleMenu} aria-label="menu">
          {menuState.clicked ? (
            <Close
              className="text-white-icon"
              sx={{ fontSize: 36 }}
            />
          ) : (
            <Menu sx={{ fontSize: 36 }}
            />
          )}
        </Box>
      </Stack>
    </nav>
  );
};

export default NavbarMobile;
