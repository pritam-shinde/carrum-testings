import Link from "next/link";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HomeButtonCards = () => {
  return (
    <>
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
              <p className="mb-0 fs-4 d-flex flex-column fw-semibold">
                <span>Book Online</span>
                <span>Appointment</span>
              </p>
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
              <p className="mb-0 fs-4 d-flex flex-column fw-semibold">
                <span>Or Call</span>
                <span>03 - 9782 1200</span>
              </p>
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
    </>
  );
};

export default HomeButtonCards;
