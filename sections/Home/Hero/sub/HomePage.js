import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Stack } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React from "react";

const slideContents = [
  {
    title: "Experienced Service",
    description:
      "Our dentists are fully qualified and have  years of Experience in providing quality dental care.",
    buttonText: "Know More",
    buttonLink: "/about-us/",
  },
  {
    title: "Family Quality Care",
    description:
      "Our team of dentist and staff always ensure patients are treated like family.",
    buttonText: "know More",
    buttonLink: "/about-us/",
  },
  {
    title: "Child Dental Benefit Scheme",
    description:
      "Eligible families receive free treatments for up to 1000$. Call us to find out if you are eligible.",
    buttonText: "Know More",
    buttonLink: "/service/child-benefit/",
  },
];

const HomePage = ({ activeSlide }) => {
  return (
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
            <Link href={slideContents[activeSlide].buttonLink} passHref>
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
                  <h5 className="mb-0 d-flex flex-column">
                    <span>Book Online</span>
                    <span>Appointment</span>
                  </h5>

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
                  <h5 className="mb-0 d-flex flex-column">
                    <span>Or Call</span>
                    <span>03 - 9782 1200</span>
                  </h5>

                  <div
                    className="d-flex align-items-center justify-content-between mt-4"
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
              backgroundColor: activeSlide === x ? "#19BEB9" : "#949494",
            }}
          ></Box>
        ))}
      </Stack>
    </>
  );
};

export default HomePage;
