import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

const ServiceSectionNew = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [width]);

    return (
        <>
            <Container
                maxWidth="xxl"
                id="service"
                sx={{ padding: { xs: "40px 24px 40px 24px", sm: "40px 24px 40px 24px", md: "80px 0px 80px 0px" } }}
            >
                <Grid container>
                    <Grid item xs={12} md={10} className="mx-auto">
                        <div className="mb-5">
                            <p className="fs-5 mb-2">Pride in professional service</p>
                            <div className="d-md-flex justify-content-between align-items-center">
                                <h2 className="text-dark-blue" style={{ maxWidth: "460px" }}>
                                    Personalised care that you can depend on
                                </h2>
                                <Box>
                                    <a href="/service/" className="view-button">
                                        VIEW ALL SERVICES
                                    </a>
                                </Box>
                            </div>
                        </div>

                        <div>
                            <div className="row" style={{ margin: "auto" }}>
                                {[
                                    {
                                        imageSrc: "/carrum-new/service_1.jpg",
                                        imageAlt: "Dental Implants",
                                        title: "Wisdom Teeth",
                                        subtitle: "Removal",
                                        description:
                                            "Our dentist can perform wisdom tooth removal in an affordable, pain-free way. Starting from $200*.",
                                    },
                                    {
                                        imageSrc: "/carrum-new/service_2.jpg",
                                        imageAlt: "Dental Implants",
                                        title: "Dental",
                                        subtitle: "Implants",
                                        description:
                                            "Renew your smile and chewing ability. We offer complete implant procedure including implant, abutment, and crown.",
                                        isTxtToImgDir: true,
                                    },
                                    {
                                        imageSrc: "/carrum-new/service_3.jpg",
                                        imageAlt: "Wisdom Teeth Removal",
                                        title: "Child",
                                        subtitle: "Benefit",
                                        description:
                                            "Eligible kids can get up to $1000* worth of free dental services.",
                                    },
                                ].map((service, index) => (
                                    <div className="col-12 col-md-6 col-lg-4 p-0" key={index}>
                                        <ServiceCard {...service} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

const ServiceCard = ({
    imageSrc,
    title,
    subtitle,
    description,
    isTxtToImgDir,
}) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className={`card border-0 border-radius-none ${isTxtToImgDir ? "flex-column flex-md-column-reverse" : ""
                }`}
            style={{
                overflow: "hidden",
                transition: "transform 0.3s",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#E1E8E7",
                height: "100%",
            }}
        >
            <div
                className="h-50 w-100 about-img-height"
                style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    minHeight: 250,
                }}
            />
            <div
                style={{
                    minHeight: "250px",
                    position: "relative",
                    overflow: "hidden",
                    color: hover ? "white" : "black",
                    transition: "color 0.3s ease",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`h-50 card-body text-center p-5 service-card border-radius-none ${isTxtToImgDir ? "custom-color-position" : ""
                    }`}
            >
                {/* Hover color */}
                <div
                    style={{
                        position: "absolute",
                        top: hover
                            ? "0" // Background appears on hover
                            : isTxtToImgDir
                                ? "100%" // Hidden when not hovered (arrow down)
                                : "-100%", // Hidden when not hovered (arrow up)
                        left: "0",
                        width: "100%",
                        height: "100%",
                        background: hover ? "#19beb9" : "transparent", // Color only on hover
                        transition: "top 0.3s ease, background 0.3s ease",
                        zIndex: 0,
                    }}
                    className="custom-transition-bg-color"
                />
                {/* Icon Arrow */}
                <svg
                    width="37"
                    height="25"
                    viewBox="0 0 37 25"
                    style={{
                        position: "absolute",
                        top: isTxtToImgDir ? "auto" : "0",
                        bottom: isTxtToImgDir ? "0" : "auto",
                        left: "50%",
                        transform: `translateX(-50%) rotate(${isTxtToImgDir ? "180deg" : "0deg"
                            })`,
                    }}
                    className={`${isTxtToImgDir ? "custom-icon-position" : ""}`}
                >
                    <path d="M18.5 25L36.5 0H0L18.5 25Z" fill="#19BEB9" />
                </svg>
                {/* content */}
                <h5
                    className="fw-bold heading-color"
                    style={{
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    {title}
                    <br />
                    {subtitle}
                </h5>
                <p
                    className="text-dark"
                    style={{
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceSectionNew;

// return (
//     <div
//         className="card border-0 h-100 w-100 border-radius-none"
//         style={{
//             overflow: "hidden",
//             transition: "transform 0.3s",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//     >
//         {imageFirst ? (
//             <>
//                 <Image
//                     src={imageSrc}
//                     alt={imageAlt}
//                     className="object-cover img-fluid"
//                     width={350}
//                     height={250}
//                 />
//                 <div
//                     className="card-body text-center p-5 service-card border-radius-none"
//                     style={{
//                         minHeight: "250px",
//                         position: "relative",
//                         overflow: "hidden",
//                         color: hover ? "white" : "black",
//                         transition: "color 0.3s ease",
//                     }}
//                     onMouseEnter={() => setHover(true)}
//                     onMouseLeave={() => setHover(false)}
//                 >
//                     <div
//                         style={{
//                             content: '""',
//                             position: "absolute",
//                             top: hover ? "0" : "-100%",
//                             left: "0",
//                             width: "100%",
//                             height: "100%",
//                             background: "#19beb9",
//                             transition: "top 0.3s ease",
//                             zIndex: 0,
//                         }}
//                     ></div>
//                     <div
//                         style={{
//                             position: "absolute",
//                             top: "-15%",
//                             left: "50%",
//                             transform: "translateX(-50%)",
//                             zIndex: 2,
//                             color: hover ? "white" : "#19beb9",
//                             fontSize: "3.5rem",
//                         }}
//                     >
//                         <TiArrowSortedDown />
//                     </div>
//                     <h5
//                         className="fw-bold heading-color"
//                         style={{
//                             position: "relative",
//                             zIndex: 1,
//                         }}
//                     >
//                         {title}
//                         <br />
//                         {subtitle}
//                     </h5>
//                     <p
//                         className="text-dark"
//                         style={{
//                             position: "relative",
//                             zIndex: 1,
//                         }}
//                     >
//                         {description}
//                     </p>
//                 </div>
//             </>
//         ) : (
//             <>
//                 <div
//                     className="card-body text-center p-5 service-card border-radius-none"
//                     style={{
//                         minHeight: "250px",
//                         position: "relative",
//                         overflow: "hidden",
//                         color: hover ? "white" : "black",
//                         transition: "color 0.3s ease",
//                     }}
//                     onMouseEnter={() => setHover(true)}
//                     onMouseLeave={() => setHover(false)}
//                 >
//                     <div
//                         style={{
//                             content: '""',
//                             position: "absolute",
//                             [hoverDirection === "bottom-to-top" ? "bottom" : "top"]: hover
//                                 ? "0"
//                                 : "-100%",
//                             left: "0",
//                             width: "100%",
//                             height: "100%",
//                             background: "#19beb9",
//                             transition:
//                                 hoverDirection === "bottom-to-top"
//                                     ? "bottom 0.3s ease"
//                                     : "top 0.3s ease",
//                             zIndex: 0,
//                         }}
//                     ></div>
//                     <div
//                         style={{
//                             position: "absolute",
//                             bottom: "-13%",
//                             left: "50%",
//                             transform: "translateX(-50%)",
//                             zIndex: 2,
//                             color: hover ? "white" : "#19beb9",
//                             fontSize: "3.5rem",
//                         }}
//                     >
//                         <TiArrowSortedUp />
//                     </div>
//                     <h5
//                         className="fw-bold heading-color"
//                         style={{
//                             position: "relative",
//                             zIndex: 1,
//                         }}
//                     >
//                         {title}
//                         <br />
//                         {subtitle}
//                     </h5>
//                     <p
//                         className="text-dark"
//                         style={{
//                             position: "relative",
//                             zIndex: 1,
//                         }}
//                     >
//                         {description}
//                     </p>
//                 </div>
//                 <Image
//                     src={imageSrc}
//                     alt={imageAlt}
//                     className="object-cover img-fluid"
//                     width={350}
//                     height={250}
//                 />
//             </>
//         )}
//     </div>
// );
