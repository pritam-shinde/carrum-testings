import { KeyboardArrowRight } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import useResponsive from "../../hooks/useResponsive";

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

const NavbarMenu = () => {
  const screenWidth = useResponsive();
  return (
    <>
      <ul className="navbar-nav mx-auto">
        {navbarMenu.map((menu, index) => {
          const totalColumnCount = menu.dropdown
            ? Math.ceil(menu.dropdown.length / 6)
            : 0;
          return (
            <li
              key={index}
              className={`nav-item ${menu.dropdown ? "dropdown" : ""}`}
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
                        : totalColumnCount === 3 || screenWidth < 1160
                        ? 3
                        : totalColumnCount,
                  }}
                >
                  {menu.dropdown.map((subMenu, subIndex) => (
                    <li key={subIndex} style={{ position: "relative" }}>
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
    </>
  );
};

export default NavbarMenu;
