import { AccessTime, Menu, Place } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "../../../../../public/header/logo_new.png";
import Styles from "../../../../../styles/components-style/layout-style/header/Header.module.css";
import { BlueFilledBtn, BlueOulinedBtn } from "../../../../components";

const NavbarDesktop = ({ isScrolled }) => {
  const router = useRouter();

  // If pathname is not home page, then used these conditions
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  if (router.pathname === "/") {
    return (
      <nav className="navbar">
        <a href="/" className={`navbar-brand ${Styles.deskNavbarBrand}`}>
          <Image src={Logo} alt="carrumdowns dental clinic logo" />
        </a>

        <Stack className="d-none d-md-block">
          <Stack direction={"row"} alignItems={"center"} justifyContent={"end"} gap={1}>
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
              <span className="theme-main-color"> 9AM – 6PM</span>
              <span className={isScrolled ? "text-black" : "text-white"}>
                , Sun:
              </span>
              <span className="theme-main-color"> 9AM – 3PM</span>
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} justifyContent={"end"} gap={1}>
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
              <span className="theme-main-color">{" "}
                Shop T5, 100 Hall Road, Carrum Downs
              </span>
            </Typography>
          </Stack>
        </Stack>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand-xl">
      <a href="/" className={`navbar-brand ${Styles.deskNavbarBrand}`}>
        <Image src={Logo} alt="carrumdowns dental clinic logo" />
      </a>
      <Button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Menu />
      </Button>
      <Box className="collapse navbar-collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              HOME
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="/about-us/"
              className="nav-link dropdown-toggle"
              id="navbardropdown1"
              aria-labelledby="navbarDropdown"
              aria-haspopup="true"
              role="button"
              aria-pressed="true"
            >
              ABOUT US
            </a>
            <ul
              className="dropdown-menu p-2 border-0 shadow"
              aria-labelledby="navbarDropdown"
            >
              <li className="nav-item">
                <a href="/referral-program/" className="nav-link dropdown-item">
                  PATIENT REFERRAL PROGRAM
                </a>
              </li>
              <li className="nav-item">
                <a href="/payment-plan/" className="nav-link dropdown-item">
                  PAYMENT PLAN
                </a>
              </li>
              <li className="nav-item">
                <a href="/new-technologies/" className="nav-link dropdown-item">
                  NEW TECHNOLOGIES
                </a>
              </li>
              <li className="nav-item">
                <a href="/offer/" className="nav-link dropdown-item">
                  OFFER
                </a>
              </li>
              <li className="nav-item">
                <a href="/meet-our-team/" className="nav-link dropdown-item">
                  MEET OUR TEAM
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/superannuation-to-pay-for-dental-treatment/"
                  className="nav-link dropdown-item"
                >
                  ACCESS MY SUPER
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/how-we-can-reduce-the-spread-of-corona-virus-together/"
                  className="nav-link"
                >
                  COVID-19
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="/service/" className="nav-link dropdown-toggle">
              SERVICES
            </a>
            <ul className="dropdown-menu border-0 shadow p-2">
              <li className="nav-item">
                <a
                  href="/service/missing-teeth/"
                  className="nav-link dropdown-item service-menu"
                >
                  MISSING TEETH
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/wisdom-teeth-removal/"
                  className="nav-link dropdown-item service-menu"
                >
                  WISDOM TEETH REMOVAL
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/child-benefit/"
                  className="nav-link dropdown-item service-menu"
                >
                  CHILD BENEFIT
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/dental-implants/"
                  className="nav-link dropdown-item service-menu"
                >
                  DENTAL IMPLANTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/dentures/"
                  className="nav-link dropdown-item service-menu"
                >
                  DENTURE
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/teeth-whitening/"
                  className="nav-link dropdown-item service-menu"
                >
                  TEETH WHITENING
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/crowns-and-bridge/"
                  className="nav-link dropdown-item service-menu"
                >
                  CROWN AND BRIDGES
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/veneers/"
                  className="nav-link dropdown-item service-menu"
                >
                  VENEERS
                </a>
              </li>
              <li className="nav-item dropdown dropdown2">
                <a
                  href="/service/invisalign/"
                  className="nav-link dropdown-item service-menu"
                >
                  INVISALIGN{" "}
                  <span
                    className={`arrow ${isDropdownOpen ? "open" : ""}`}
                    onClick={handleToggleDropdown}
                  >
                    &#x25BA;
                  </span>
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-2 p-2 border-0"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    {/* <a className="nav-item" href="/invisalign-open-day/"> */}
                    <a
                      href="/service/invisalign-open-day/"
                      className="nav-item nav-link dropdown-item service-menu"
                    >
                      INVISALIGN OPEN DAY
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  href="/service/root-canal/"
                  className="nav-link dropdown-item service-menu"
                >
                  ROOT CANAL
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/teeth-cleaning/"
                  className="nav-link dropdown-item service-menu"
                >
                  TEETH CLEANING
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/dental-emergency/"
                  className="nav-link dropdown-item service-menu"
                >
                  DENTAL EMERGENCY
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/tooth-fillings/"
                  className="nav-link dropdown-item service-menu"
                >
                  TOOTH FILLING
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/smile-design/"
                  className="nav-link dropdown-item service-menu"
                >
                  SMILE DESIGN
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/digital-dentures/"
                  className="nav-link dropdown-item service-menu"
                >
                  DIGITAL DENTURES
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/implant-supported-denture/"
                  className="nav-link dropdown-item service-menu"
                >
                  IMPLANT SUPPORTED DENTURE
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/denture-technology/"
                  className="nav-link dropdown-item service-menu"
                >
                  DENTURE TECHNOLOGY
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/service/sleep-dentistry/"
                  className="nav-link dropdown-item service-menu"
                >
                  SLEEP DENTISTRY
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown dental-problems-section">
            <a href="/dental-problems/" className="nav-link dropdown-toggle">
              DENTAL PROBLEMS
            </a>
            <ul className="dropdown-menu border-0 shadow p-2">
              <ul className="dental-problems-section1">
                <li className="nav-item">
                  <a
                    href="/dental-problems/bad-breath"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    BAD BREATH
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/bite-problems"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    BITE PROBLEMS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/bleeding-gums"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    BLEEDING GUMS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/bruxism"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    BRUXISM
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/chipped-or-cracked-tooth"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    CHIPPED OR CRACKED TOOTH
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/crooked-teeth"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    CROOKED TEETH
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/dental-abscess"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    DENTAL ABSCESS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/dry-socket"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    DRY SOCKET
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/gum-disease"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    GUM DISEASE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/knocked-out-tooth"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    KNOCKED OUT TEETH
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/severe-toothache"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    SEVERE TOOTHACHE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/stained-teeth"
                    className="nav-link dropdown-item dental-problem-menu "
                  >
                    STAINED TEETH
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/teeth-sensitivity"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    TEETH SENSITIVITY
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/tooth-gap"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    TOOTH GAPS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dental-problems/wisdom-tooth-pain"
                    className="nav-link dropdown-item dental-problem-menu"
                  >
                    WISDOM TOOTH PAIN
                  </a>
                </li>
              </ul>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              href="/blog/"
              className="nav-link dropdown-toggle"
              id="navbardropdown1"
              aria-labelledby="navbarDropdown"
              aria-haspopup="true"
              role="button"
              aria-pressed="true"
            >
              BLOG
            </a>
            <ul
              className="dropdown-menu p-2 border-0 shadow"
              aria-labelledby="navbarDropdown"
            >
              <li className="nav-item">
                <a href="/video-gallery/" className="nav-link dropdown-item">
                  VIDEO GALLERY
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/contact-us/" className="nav-link">
              CONTACT US
            </a>
          </li>
        </ul>
        <Stack direction={"row"}>
          <BlueFilledBtn
            navlink={true}
            btnTitle="BOOK NOW"
            btnLink="/book-now/"
            ariaLabel="book now"
          />
          <BlueOulinedBtn
            anchor={true}
            btnTitle="03-9782 1200"
            btnLink="tel:03-9782 1200"
            ariaLabel="call now"
          />
        </Stack>
      </Box>
    </nav>
  );
};

export default NavbarDesktop;

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button, Box } from "@mui/material";
// import { Menu } from "@mui/icons-material";
// import Logo from "../../../../../public/header/logo_new.png";
// import Styles from "../../../../../styles/components-style/layout-style/header/Header.module.css";
// import { BlueFilledBtn, BlueOulinedBtn } from "../../../../components";

// const NavbarDesktop = () => {

//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//     const handleToggleDropdown = () => {
//         setDropdownOpen(!isDropdownOpen);
//     };

// };
// export default NavbarDesktop;
