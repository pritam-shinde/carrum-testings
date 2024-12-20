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
                                zIndex: 1
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
                                <h6 className="text-dark-blue text-center m-0">
                                    Scan for Direction
                                </h6>
                            </Stack>
                            <Stack justifyContent={"space-between"} spacing={{ xs: 2, sm: 0 }}>
                                <h4 className="text-dark-blue m-0 pt-2">Carrum Downs Dental Group</h4>
                                <Stack spacing={{ xs: 1, md: 2 }}>
                                    <Stack>
                                        <p className="fw-semibold m-0">
                                            Shop T5, 100 Hall Road, Carrum Downs
                                        </p>
                                    </Stack>
                                    <Stack>
                                        <a href="tel:03-9782-1200" className="text-dark">
                                            03 - 9782 1200
                                        </a>
                                    </Stack>
                                    <Stack>
                                        <a
                                            href="mailto:carrumdownsdental@gmail.com"
                                            className="text-dark"
                                        >
                                            carrumdownsdental@gmail.com
                                        </a>
                                    </Stack>

                                    {/* <p className="fw-semibold m-0">
                                        <IoMdHome className="light-color me-3" size={24} />
                                        Shop T5, 100 Hall Road, Carrum Downs
                                    </p>
                                    <p className="m-0">
                                        <FaPhoneAlt className="light-color me-4" size={20} />
                                        <a href="tel:03-9782-1200" className="text-dark">
                                            03 - 9782 1200
                                        </a>
                                    </p>
                                    <p className="m-0">
                                        <FaEnvelope className="light-color me-4" size={20} />
                                        <a
                                            href="mailto:carrumdownsdental@gmail.com"
                                            className="text-dark"
                                        >
                                            carrumdownsdental@gmail.com
                                        </a>
                                    </p> */}
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

// import React from 'react';
// import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
// import { IoMdHome } from "react-icons/io";
// import Scan from '../../../public/sidebar/scan.png';
// import { Container, Grid } from '@mui/material';

// const AddressNew = () => {
//     return (
//         <>
//             <Container
//                 maxWidth="xxl"
//                 sx={{ padding: { xs: "0px 0px 80px 0px", md: "0px 0px 120px 0px" } }}
//             >
//                 <Grid container>
//                     <Grid item xs={12} md={10} className="mx-auto">
//                         <div className="position-relative">
//                             <div className="d-flex flex-column align-items-center">
//                                 <iframe
//                                     title="mapFrame"
//                                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3139.644073472722!2d145.1847562!3d-38.1019478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60daa0ae475ab%3A0x883cf75f64c0eecb!2sCarrum%20Downs%20Dental%20Group!5e0!3m2!1sen!2sin!4v1665396657093!5m2!1sen!2sin"
//                                     className="w-100 map-frame rounded-2"
//                                     style={{ border: 0, width: "100%", height: '600px', maxHeight: "60vh", borderRadius: "24px" }}
//                                     allowFullScreen=""
//                                     loading="lazy"
//                                     referrerPolicy="no-referrer-when-downgrade"
//                                 ></iframe>
//                                 <div
//                                     className="contact-info bg-white shadow-lg p-2 rounded"
//                                     style={{
//                                         width: '90%',
//                                         maxWidth: '860px',
//                                         boxSizing: 'border-box',
//                                     }}
//                                 >
//                                     <div className="d-flex flex-wrap align-items-start justify-content-center gap-5">
//                                         <div className="">
//                                             <img
//                                                 src={Scan.src}
//                                                 alt="QR Code for directions"
//                                                 className="img-fluid"
//                                                 style={{
//                                                     maxWidth: '180px',
//                                                     backgroundColor: '#f2f2f2',
//                                                     borderRadius: '8px',
//                                                     overflow: 'hidden',
//                                                 }}
//                                             />
//                                             <h6 className="text-dark-blue text-center">Scan for Direction</h6>
//                                         </div>
//                                         <div className="d-flex flex-column justify-content-center align-items-start gap-2">
//                                             <h4 className="text-dark-blue">Carrum Downs Dental Group</h4>
//                                             <p className="fw-semibold">
//                                                 <IoMdHome className="light-color me-3" size={24} />
//                                                 Shop T5, 100 Hall Road, Carrum Downs
//                                             </p>
//                                             <p className="">
//                                                 <FaPhoneAlt className="light-color me-4" size={20} />
//                                                 <a href="tel:03-9782-1200" className='text-dark'>03 - 9782 1200</a>
//                                             </p>
//                                             <p>
//                                                 <FaEnvelope className="light-color me-4" size={20} />
//                                                 <a href="mailto:carrumdownsdental@gmail.com" className='text-dark'>carrumdownsdental@gmail.com</a>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Grid>
//                 </Grid>
//             </Container>
//             {/* <style jsx>{`
//             @media (max-width: 768px) {
//                 .map-frame {
//                     height: 300px;
//                 }

//                 .contact-info {
//                     position: static !important;
//                     margin-top: 20px !important;
//                     text-align: center;
//                 }
//             }

//             @media (min-width: 769px) {
//                 .contact-info {
//                     position: absolute;
//                     bottom: clamp(-150px, -5%, -100px) !important;
//                     left: 50%;
//                     transform: translateX(-50%);
//                 }
//             }

//             @media (max-width: 480px) {
//                 .map-frame {
//                     height: 250px;
//                 }

//                 .fw-bold {
//                     font-size: 1rem;
//                 }
//             }
//         `}</style> */}
//         </>
//     );
// };

// export default AddressNew;
