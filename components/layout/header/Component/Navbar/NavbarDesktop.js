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
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M15 1.33989C16.5083 2.21075 17.7629 3.46042 18.6398 4.96519C19.5167 6.46997 19.9854 8.17766 19.9994 9.91923C20.0135 11.6608 19.5725 13.3758 18.72 14.8946C17.8676 16.4133 16.6332 17.6831 15.1392 18.5782C13.6452 19.4733 11.9434 19.9627 10.2021 19.998C8.46083 20.0332 6.74055 19.6131 5.21155 18.7791C3.68256 17.9452 2.39787 16.7264 1.48467 15.2434C0.571462 13.7604 0.0614093 12.0646 0.00500011 10.3239L0 9.99989L0.00500011 9.67589C0.0610032 7.94888 0.563548 6.26585 1.46364 4.79089C2.36373 3.31592 3.63065 2.09934 5.14089 1.25977C6.65113 0.420205 8.35315 -0.0137108 10.081 0.000330246C11.8089 0.0143713 13.5036 0.47589 15 1.33989ZM10 3.99989C9.75507 3.99992 9.51866 4.08985 9.33563 4.25261C9.15259 4.41537 9.03566 4.63964 9.007 4.88289L9 4.99989V9.99989L9.009 10.1309C9.0318 10.3044 9.09973 10.4689 9.206 10.6079L9.293 10.7079L12.293 13.7079L12.387 13.7899C12.5624 13.926 12.778 13.9998 13 13.9998C13.222 13.9998 13.4376 13.926 13.613 13.7899L13.707 13.7069L13.79 13.6129C13.9261 13.4375 13.9999 13.2219 13.9999 12.9999C13.9999 12.7779 13.9261 12.5623 13.79 12.3869L13.707 12.2929L11 9.58489V4.99989L10.993 4.88289C10.9643 4.63964 10.8474 4.41537 10.6644 4.25261C10.4813 4.08985 10.2449 3.99992 10 3.99989Z" fill="#115278" />
            </svg>
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
            <svg width="18" height="18" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0C11.3869 0 13.6761 1.0344 15.364 2.87564C17.0518 4.71688 18 7.21414 18 9.81805C18 13.1715 16.324 15.9161 14.558 17.8852C13.6757 18.8584 12.7129 19.7406 11.682 20.5208L11.256 20.8372L11.056 20.9823L10.679 21.2441L10.343 21.4677L9.927 21.7317C9.64463 21.9075 9.32513 22 9 22C8.67487 22 8.35537 21.9075 8.073 21.7317L7.657 21.4677L7.137 21.1186L6.945 20.9823L6.535 20.6844C5.42283 19.8636 4.3869 18.926 3.442 17.8852C1.676 15.9151 0 13.1715 0 9.81805C0 7.21414 0.948211 4.71688 2.63604 2.87564C4.32387 1.0344 6.61305 0 9 0ZM9 6.54537C8.60603 6.54537 8.21593 6.63002 7.85195 6.79448C7.48797 6.95895 7.15726 7.20001 6.87868 7.50391C6.6001 7.80781 6.37913 8.16859 6.22836 8.56565C6.0776 8.96271 6 9.38827 6 9.81805C6 10.2478 6.0776 10.6734 6.22836 11.0704C6.37913 11.4675 6.6001 11.8283 6.87868 12.1322C7.15726 12.4361 7.48797 12.6771 7.85195 12.8416C8.21593 13.0061 8.60603 13.0907 9 13.0907C9.79565 13.0907 10.5587 12.7459 11.1213 12.1322C11.6839 11.5184 12 10.686 12 9.81805C12 8.95008 11.6839 8.11766 11.1213 7.50391C10.5587 6.89016 9.79565 6.54537 9 6.54537Z" fill="#115273" />
            </svg>

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
              className="dropdown-menu p-2 border-0 shadow inner-dropdown"
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
            <ul className="dropdown-menu border-0 shadow p-2 inner-dropdown">
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
            <ul className="dropdown-menu border-0 shadow p-2 inner-dropdown">
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
              className="dropdown-menu p-2 border-0 shadow inner-dropdown"
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
