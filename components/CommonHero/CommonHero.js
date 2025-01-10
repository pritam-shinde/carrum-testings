import { Box, Container, Grid, Stack } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "../../styles/Home.module.css";

import { KeyboardArrowRight } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import HomeButtonCards from "./HomeButtonCards";
import NavbarMenu from "./NavbarMenu";
import Social from "./Social";

const slideContents = [
  {
    title: "Experienced Service",
    description:
      "Our dentists are fully qualified and have years of Experience in providing quality dental care.",
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
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null); // Reference for Swiper

  return (
    <Container maxWidth="xxl" id="home_hero" className="p-0 position-relative">
      {/* Banner Images */}
      {pathName === "index" ? (
        <Swiper
          ref={swiperRef} // Attach Swiper reference
          spaceBetween={30}
          effect={"fade"}
          // pagination={{ clickable: true }}
          modules={[EffectFade, Autoplay]}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => {
            const x = swiper.realIndex;
            setActiveSlide(x);
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
                  <NavbarMenu />
                </Box>
                {pathName === "index" ? (
                  <>
                    <Box>
                      <div className="row gap-5 gap-xl-0">
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
                        <HomeButtonCards />
                      </div>
                    </Box>
                    <Stack direction={"row"} gap={1} marginTop={4}>
                      {[0, 1, 2].map((x) => (
                        <Box
                          key={x}
                          onClick={() => {
                            swiperRef.current.swiper.slideTo(x + 1); // +1 due to Swiper's loop indexing
                            setActiveSlide(x);
                          }}
                          style={{
                            padding: "8px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            backgroundColor:
                              activeSlide === x ? "#19BEB9" : "#949494",
                          }}
                        ></Box>
                      ))}
                    </Stack>
                  </>
                ) : (
                  <></>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div>
        <Social />
      </div>
    </Container>
  );
};

export default CommonHero;

// import { Box, Container, Grid, Stack } from "@mui/material";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Link from "next/link";
// import React, { useRef, useState } from "react";
// import { Autoplay, EffectFade, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Styles from "../../styles/Home.module.css";

// import { KeyboardArrowRight } from "@mui/icons-material";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import HomeButtonCards from "./HomeButtonCards";
// import NavbarMenu from "./NavbarMenu";
// import Social from "./Social";

// const slideContents = [
//   {
//     title: "Experienced Service",
//     description:
//       "Our dentists are fully qualified and have  years of Experience in providing quality dental care.",
//     buttonText: "KNOW MORE",
//     buttonLink: "/about-us/",
//   },
//   {
//     title: "Family Quality Care",
//     description:
//       "Our team of dentist and staff always ensure patients are treated like family.",
//     buttonText: "KNOW MORE",
//     buttonLink: "/about-us/",
//   },
//   {
//     title: "Child Dental Benefit Scheme",
//     description:
//       "Eligible families receive free treatments for up to 1000$. Call us to find out if you are eligible.",
//     buttonText: "KNOW MORE",
//     buttonLink: "/service/child-benefit/",
//   },
// ];

// const CommonHero = ({
//   pathName,
//   align,
//   title,
//   color,
//   breadcrumb,
//   bg,
//   desc,
// }) => {
//   const [activeSlide, setActiveSlide] = useState(1);
//   const swiperRef = useRef(null);

//   return (
//     <Container maxWidth="xxl" id="home_hero" className="p-0 position-relative">
//       {/* Banner Images */}
//       {pathName === "index" ? (
//         <Swiper
//           spaceBetween={30}
//           effect={"fade"}
//           pagination={{ clickable: true }}
//           modules={[EffectFade, Pagination, Autoplay]}
//           loop={true}
//           slidesPerView={1}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           onSlideChange={(swiper) => {
//             const x = swiper.activeIndex < 4 ? swiper.activeIndex : 1;
//             setActiveSlide(x - 1);
//           }}
//           className="custom-padding-top-hero"
//         >
//           <SwiperSlide
//             className={`slide ${Styles.slider1}`}
//             style={{ height: "100%", backgroundRepeat: "no-repeat" }}
//           ></SwiperSlide>
//           <SwiperSlide
//             className={`slide ${Styles.slider2}`}
//             style={{ height: "100%", backgroundRepeat: "no-repeat" }}
//           ></SwiperSlide>
//           <SwiperSlide
//             className={`slide ${Styles.slider3}`}
//             style={{ height: "100%", backgroundRepeat: "no-repeat" }}
//           ></SwiperSlide>
//         </Swiper>
//       ) : (
//         <Box
//           sx={{
//             backgroundImage: `url(${bg.src})`,
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: { xs: "70%", md: "center" },
//             // backgroundPosition: "center",
//             backgroundSize: "cover",
//           }}
//           className="custom-padding-top-hero"
//         ></Box>
//       )}

//       <Box
//         style={{
//           display: "flex",
//           height: "100%",
//           width: "100%",
//           position: "absolute",
//           top: 0,
//           zIndex: 1,
//         }}
//       >
//         <Container
//           style={{ marginTop: "auto", marginBottom: "auto" }}
//           maxWidth="xxl"
//         >
//           <Grid container>
//             <Grid item xs={12} md={10} className="mx-auto">
//               <Stack gap={{ xs: 0, md: 8, lg: 8, xl: 10 }}>
//                 <Box
//                   sx={{ maxWidth: "fit-content" }}
//                   className="d-none d-xl-block"
//                   paddingTop={{ xs: "60px", sm: 0 }}
//                 >
//                   <NavbarMenu />
//                 </Box>
//                 {pathName === "index" ? (
//                   <>
//                     <Box>
//                       <div className="row gap-5 gap-xl-0 ">
//                         <div className="col-12 col-xl-7 col-xxl-7">
//                           <h1 className="fw-bold text-white">
//                             {slideContents[activeSlide].title}
//                           </h1>
//                           <p
//                             className="fs-18 text-light mt-3 mb-4"
//                             style={{ maxWidth: "600px" }}
//                           >
//                             {slideContents[activeSlide].description}
//                           </p>
//                           <Link
//                             href={slideContents[activeSlide].buttonLink}
//                             passHref
//                           >
//                             <a className="text-dark fw-bold px-4 py-3 view-hover-btn rounded-2">
//                               {slideContents[activeSlide].buttonText}
//                             </a>
//                           </Link>
//                         </div>
//                         <HomeButtonCards />
//                       </div>
//                     </Box>
//                     <Stack direction={"row"} gap={1} marginTop={4}>
//                       {[0, 1, 2].map((x) => (
//                         <Box
//                           key={x}
//                           onClick={() => {
//                             // Change the active slide programmatically
//                             swiperRef.slideTo(x + 1); // +1 because Swiper indexes slides starting from 1 for loop mode
//                             setActiveSlide(x); // Update the activeSlide state
//                           }}
//                           style={{
//                             padding: "8px",
//                             borderRadius: "4px",
//                             cursor: "pointer", // Add a pointer cursor for better UX
//                             backgroundColor:
//                               activeSlide === x ? "#19BEB9" : "#949494",
//                           }}
//                         ></Box>
//                       ))}
//                     </Stack>

//                     {/* <Stack direction={"row"} gap={1} marginTop={4}>
//                       {[0, 1, 2].map((x) => (
//                         <Box
//                           key={x}
//                           style={{
//                             padding: "8px",
//                             borderRadius: "4px",
//                             backgroundColor:
//                               activeSlide === x ? "#19BEB9" : "#949494",
//                           }}
//                         ></Box>
//                       ))}
//                     </Stack> */}
//                   </>
//                 ) : (
//                   <>
//                     <Box>
//                       <div className="row gap-5 gap-xl-0 ">
//                         <div className="col-12 col-xl-7 col-xxl-7">
//                           {pathName === "index" ? (
//                             <>
//                               <h1 className="fw-bold text-white">
//                                 {slideContents[activeSlide].title}
//                               </h1>
//                               <p
//                                 className="fs-18 text-light mt-3 mb-4"
//                                 style={{ maxWidth: "600px" }}
//                               >
//                                 {slideContents[activeSlide].description}
//                               </p>
//                               <Link
//                                 href={slideContents[activeSlide].buttonLink}
//                                 passHref
//                               >
//                                 <a className="text-dark fw-bold px-4 py-3 view-hover-btn rounded-2">
//                                   {slideContents[activeSlide].buttonText}
//                                 </a>
//                               </Link>
//                             </>
//                           ) : (
//                             <>
//                               <h1 className="fw-bold text-white">{title}</h1>
//                               {breadcrumb !== null ? (
//                                 <nav aria-label="breadcrumb">
//                                   <ul className="breadcrumb">
//                                     {breadcrumb.map((item, index) => (
//                                       <li
//                                         key={item.id}
//                                         className={`breadcrumb-item ${
//                                           item.link === null ? "active" : ""
//                                         }`}
//                                         aria-current={
//                                           item.link === null ? "page" : null
//                                         }
//                                       >
//                                         {item.title !== "Services" &&
//                                           index !== 0 && (
//                                             <span className="arrow-right">
//                                               <KeyboardArrowRight
//                                                 sx={{
//                                                   fill: "#fff !important",
//                                                   marginBottom: "0.14rem",
//                                                 }}
//                                               />{" "}
//                                             </span>
//                                           )}
//                                         {item.link !== null ? (
//                                           <Link href={item.link}>
//                                             <a className="text-white fs-18">
//                                               {item.title}
//                                             </a>
//                                           </Link>
//                                         ) : (
//                                           <strong className="text-white fs-18-inner">
//                                             {item.title}
//                                           </strong>
//                                         )}
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </nav>
//                               ) : null}
//                               {desc ? (
//                                 <p
//                                   className="fs-18 text-light mt-3 mb-4"
//                                   style={{ maxWidth: "600px" }}
//                                 >
//                                   {desc}
//                                 </p>
//                               ) : null}
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </Box>
//                   </>
//                 )}
//               </Stack>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//       <div>
//         <Social />
//       </div>
//     </Container>
//   );
// };

// export default CommonHero;

// import { Box, Container, Grid, Stack } from "@mui/material";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Link from "next/link";
// import React, { useState } from "react";
// import { Autoplay, EffectFade, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Styles from "../../styles/Home.module.css";

// import { KeyboardArrowRight } from "@mui/icons-material";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import HomeButtonCards from "./HomeButtonCards";
// import NavbarMenu from "./NavbarMenu";
// import Social from "./Social";

// const slideContents = [
//   {
//     title: "Experienced Service",
//     description:
//       "Our dentists are fully qualified and have  years of Experience in providing quality dental care.",
//     buttonText: "KNOW MORE",
//     buttonLink: "/about-us/",
//   },
//   {
//     title: "Family Quality Care",
//     description:
//       "Our team of dentist and staff always ensure patients are treated like family.",
//     buttonText: "KNOW MORE",
//     buttonLink: "/about-us/",
//   },
//   {
//     title: "Child Dental Benefit Scheme",
//     description:
//       "Eligible families receive free treatments for up to 1000$. Call us to find out if you are eligible.",
//     buttonText: "KNOW MORE",
//     buttonLink: "/service/child-benefit/",
//   },
// ];

// const CommonHero = ({
//   pathName,
//   align,
//   title,
//   color,
//   breadcrumb,
//   bg,
//   desc,
// }) => {
//   const [activeSlide, setActiveSlide] = useState(1);

//   return (
//     <Container maxWidth="xxl" id="home_hero" className="p-0 position-relative">
//       {/* Banner Images */}
//       {pathName === "index" ? (
//         <Swiper
//           spaceBetween={30}
//           effect={"fade"}
//           pagination={{ clickable: true }}
//           modules={[EffectFade, Pagination, Autoplay]}
//           loop={true}
//           slidesPerView={1}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           onSlideChange={(swiper) => {
//             const x = swiper.activeIndex < 4 ? swiper.activeIndex : 1;
//             setActiveSlide(x - 1);
//           }}
//           className="custom-padding-top-hero"
//         >
//           <SwiperSlide
//             className={`slide ${Styles.slider1}`}
//             style={{ height: "100%", backgroundRepeat: "no-repeat" }}
//           ></SwiperSlide>
//           <SwiperSlide
//             className={`slide ${Styles.slider2}`}
//             style={{ height: "100%", backgroundRepeat: "no-repeat" }}
//           ></SwiperSlide>
//           <SwiperSlide
//             className={`slide ${Styles.slider3}`}
//             style={{ height: "100%", backgroundRepeat: "no-repeat" }}
//           ></SwiperSlide>
//         </Swiper>
//       ) : (
//         <Box
//           sx={{
//             backgroundImage: `url(${bg.src})`,
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: { xs: "70%", md: "center" },
//             // backgroundPosition: "center",
//             backgroundSize: "cover",
//           }}
//           className="custom-padding-top-hero"
//         ></Box>
//       )}

//       <Box
//         style={{
//           display: "flex",
//           height: "100%",
//           width: "100%",
//           position: "absolute",
//           top: 0,
//           zIndex: 1,
//         }}
//       >
//         <Container
//           style={{ marginTop: "auto", marginBottom: "auto" }}
//           maxWidth="xxl"
//         >
//           <Grid container>
//             <Grid item xs={12} md={10} className="mx-auto">
//               <Stack gap={{ xs: 0, md: 8, lg: 8, xl: 10 }}>
//                 <Box
//                   sx={{ maxWidth: "fit-content" }}
//                   className="d-none d-xl-block"
//                   paddingTop={{ xs: "60px", sm: 0 }}
//                 >
//                   <NavbarMenu />
//                 </Box>
//                 {pathName === "index" ? (
//                   <>
//                     <Box>
//                       <div className="row gap-5 gap-xl-0 ">
//                         <div className="col-12 col-xl-7 col-xxl-7">
//                           <h1 className="fw-bold text-white">
//                             {slideContents[activeSlide].title}
//                           </h1>
//                           <p
//                             className="fs-18 text-light mt-3 mb-4"
//                             style={{ maxWidth: "600px" }}
//                           >
//                             {slideContents[activeSlide].description}
//                           </p>
//                           <Link
//                             href={slideContents[activeSlide].buttonLink}
//                             passHref
//                           >
//                             <a className="text-dark fw-bold px-4 py-3 view-hover-btn rounded-2">
//                               {slideContents[activeSlide].buttonText}
//                             </a>
//                           </Link>
//                         </div>
//                         <HomeButtonCards />
//                       </div>
//                     </Box>
//                     <Stack direction={"row"} gap={1} marginTop={4}>
//                       {[0, 1, 2].map((x) => (
//                         <Box
//                           key={x}
//                           style={{
//                             padding: "8px",
//                             borderRadius: "4px",
//                             backgroundColor:
//                               activeSlide === x ? "#19BEB9" : "#949494",
//                           }}
//                         ></Box>
//                       ))}
//                     </Stack>
//                   </>
//                 ) : (
//                   <>
//                     <Box>
//                       <div className="row gap-5 gap-xl-0 ">
//                         <div className="col-12 col-xl-7 col-xxl-7">
//                           {pathName === "index" ? (
//                             <>
//                               <h1 className="fw-bold text-white">
//                                 {slideContents[activeSlide].title}
//                               </h1>
//                               <p
//                                 className="fs-18 text-light mt-3 mb-4"
//                                 style={{ maxWidth: "600px" }}
//                               >
//                                 {slideContents[activeSlide].description}
//                               </p>
//                               <Link
//                                 href={slideContents[activeSlide].buttonLink}
//                                 passHref
//                               >
//                                 <a className="text-dark fw-bold px-4 py-3 view-hover-btn rounded-2">
//                                   {slideContents[activeSlide].buttonText}
//                                 </a>
//                               </Link>
//                             </>
//                           ) : (
//                             <>
//                               <h1 className="fw-bold text-white">{title}</h1>
//                               {breadcrumb !== null ? (
//                                 <nav aria-label="breadcrumb">
//                                   <ul className="breadcrumb">
//                                     {breadcrumb.map((item, index) => (
//                                       <li
//                                         key={item.id}
//                                         className={`breadcrumb-item ${
//                                           item.link === null ? "active" : ""
//                                         }`}
//                                         aria-current={
//                                           item.link === null ? "page" : null
//                                         }
//                                       >
//                                         {item.title !== "Services" &&
//                                           index !== 0 && (
//                                             <span className="arrow-right">
//                                               <KeyboardArrowRight
//                                                 sx={{
//                                                   fill: "#fff !important",
//                                                   marginBottom: "0.14rem",
//                                                 }}
//                                               />{" "}
//                                             </span>
//                                           )}
//                                         {item.link !== null ? (
//                                           <Link href={item.link}>
//                                             <a className="text-white fs-18">
//                                               {item.title}
//                                             </a>
//                                           </Link>
//                                         ) : (
//                                           <strong className="text-white fs-18-inner">
//                                             {item.title}
//                                           </strong>
//                                         )}
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </nav>
//                               ) : null}
//                               {desc ? (
//                                 <p
//                                   className="fs-18 text-light mt-3 mb-4"
//                                   style={{ maxWidth: "600px" }}
//                                 >
//                                   {desc}
//                                 </p>
//                               ) : null}
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </Box>
//                   </>
//                 )}
//               </Stack>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//       <div>
//         <Social />
//       </div>
//     </Container>
//   );
// };

// export default CommonHero;
