import React, { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = ({ isScrolled }) => {
  const [isMobile, setIsMobile] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 1200;
      setIsMobile((prev) => {
        if (prev !== isNowMobile) {
          return isNowMobile;
        }
        return prev; // Prevent unnecessary state updates
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <NavbarMobile isScrolled={isScrolled} />
  ) : (
    <NavbarDesktop isScrolled={isScrolled} />
  );
};

export default Navbar;
