import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import Scan from "../../../public/sidebar/scan.png";

const AddressNew = () => {
  return (
    <>
      <Container
        maxWidth="xxl"
        sx={{ padding: { xs: "0px 0px 80px 0px", md: "0px 0px 100px 0px" } }}
      >
        <Grid container>
          <Grid item xs={12} md={10} className="mx-auto position-relative">
            <Box>
              <iframe
                title="mapFrame"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3139.644073472722!2d145.1847562!3d-38.1019478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60daa0ae475ab%3A0x883cf75f64c0eecb!2sCarrum%20Downs%20Dental%20Group!5e0!3m2!1sen!2sin!4v1665396657093!5m2!1sen!2sin"
                className="w-100 map-frame rounded-2"
                style={{
                  border: 0,
                  width: "100%",
                  height: "600px",
                  maxHeight: "60vh",
                  borderRadius: "24px",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
            {/* Scanner */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "12px",
                width: "100%",
                maxWidth: { xs: "90%", md: "80%", lg: "70%" },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                padding: "16px",
                alignItems: { xs: "center", sm: "unset" },
                justifyContent: "center",
                gap: 3,
                margin: "auto",
                marginTop: "-80px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Stack>
                <img
                  src={Scan.src}
                  alt="QR Code for directions"
                  className="img-fluid"
                  style={{
                    maxWidth: "180px",
                    backgroundColor: "#f2f2f2",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                />
                <h3 className="text-dark-blue text-center m-0 fs-6">
                  Scan for Direction
                </h3>
              </Stack>
              <Stack
                justifyContent={{
                  xs: "space-evenly",
                  md: "space-evenly",
                  lg: "space-between",
                }}
                spacing={{ xs: 2, sm: 0 }}
              >
                <h3 className="text-dark-blue m-0 pt-2 fs-2">
                  Carrum Downs Dental Group
                </h3>
                <Stack spacing={{ xs: 1, md: 2 }}>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"between"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Box>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.4093 9.46884L14.1107 0.847608C12.8921 -0.282536 11.1158 -0.282536 9.89721 0.847608L0.593885 9.46884C-0.587192 10.5627 0.111143 12.6882 1.65311 12.6882H2.49673V22.1855C2.49673 23.1861 3.23256 24 4.13712 24H8.83799V17.8672C8.83799 15.9335 10.2534 14.3679 12.0016 14.3679C13.7498 14.3679 15.1652 15.9335 15.1652 17.8672V24H19.8661C20.7706 24 21.5065 23.1861 21.5065 22.1855V12.6882H22.3501C23.8874 12.6882 24.5857 10.5627 23.4093 9.46884Z"
                          fill="#19BEB9"
                        />
                      </svg>
                    </Box>
                    <p className="fw-semibold m-0">
                      Shop T5, 100 Hall Road, Carrum Downs
                    </p>
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"between"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Box>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.3707 17.6136L20.0143 14.2643C18.8157 13.0681 16.7779 13.5466 16.2984 15.1016C15.9388 16.1782 14.7401 16.7763 13.6613 16.537C11.2639 15.9389 8.02748 12.8289 7.42814 10.3169C7.06853 9.24034 7.78775 8.04418 8.86656 7.68537C10.4249 7.20691 10.9043 5.17342 9.70564 3.97726L6.34932 0.627988C5.39038 -0.209329 3.95195 -0.209329 3.11287 0.627988L0.835372 2.90071C-1.44213 5.29304 1.07511 11.6327 6.70893 17.2547C12.3428 22.8767 18.6958 25.5083 21.0932 23.1159L23.3707 20.8432C24.2098 19.8863 24.2098 18.4509 23.3707 17.6136Z"
                          fill="#19BEB9"
                        />
                      </svg>
                    </Box>
                    <a href="tel:03-9782-1200" className="text-dark">
                      03 - 9782 1200
                    </a>
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"between"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Box>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 5.76V15.9375C24.0001 16.9752 23.6189 17.9735 22.9348 18.7278C22.2507 19.482 21.3154 19.935 20.3208 19.9938L20.1 20H3.9C2.90384 20.0001 1.94541 19.6031 1.22132 18.8904C0.49724 18.1778 0.0623984 17.2035 0.00600014 16.1675L0 15.9375V5.76L11.5824 12.08C11.7113 12.1503 11.8545 12.187 12 12.187C12.1455 12.187 12.2887 12.1503 12.4176 12.08L24 5.76ZM3.9 2.95064e-08H20.1C21.0667 -0.000121268 21.999 0.373744 22.716 1.04908C23.4331 1.72442 23.8838 2.6531 23.9808 3.655L12 10.1925L0.0192 3.655C0.112228 2.69289 0.53166 1.7969 1.2021 1.12808C1.87254 0.459261 2.75002 0.0614837 3.6768 0.00625017L3.9 2.95064e-08Z"
                          fill="#19BEB9"
                        />
                      </svg>
                    </Box>
                    <a
                      href="mailto:carrumdownsdental@gmail.com"
                      className="text-dark"
                    >
                      carrumdownsdental@gmail.com
                    </a>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddressNew;
