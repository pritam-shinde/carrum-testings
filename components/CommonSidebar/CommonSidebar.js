import { Box, Container, Divider, List, ListItem, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Scan from "../../public/sidebar/scan.png";
import Styles from "../../styles/components-style/CommonSidebar/CommonSidebar.module.css";

const CommonSidebar = ({ isContactAvailable, isServicesAvailable }) => {
    const router = useRouter();
    return (
        <>
            <aside style={{ height: router.pathname == "/service/wisdom-teeth-removal" ? "auto" : "100%" }}>
                <Container maxWidth="xxl" style={{ height: router.pathname == "/service/wisdom-teeth-removal" ? "auto" : "100%" }}>
                    {isContactAvailable ? (
                        <Box p={2} style={{ border: "2px solid #1ebdb6", borderRadius: "1rem" }} className="order-lg-0 order-1">
                            <Box py={1}>
                                <div className="sectional-heading1 text-center" style={{ color: "#1ebdb6", lineHeight: 1.2 }}  >Contact Details</div>
                                <Divider style={{ backgroundColor: "#1ebdb6" }} />
                            </Box>
                            <Box mt={1}>
                                <List className="p-0">
                                    <ListItem>
                                        <ListItemText primary={<strong>Clinic</strong>} secondary="Shop T5, 100 Hall Road, Carrum Downs" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<strong>E-mail</strong>} secondary={<a className='text-dark-blue' href="mailto:carrumdownsdental@gmail.com">carrumdownsdental@gmail.com</a>} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<strong>Phone</strong>} secondary={<a href="tel:03-9782 1200" className='text-dark-blue'>03-9782 1200</a>} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={<strong>Opening hours</strong>}
                                            secondary={
                                                <p style={{ marginBottom: "0 !important" }}>
                                                    Mon - Sat 09 am - 06 pm <br />
                                                    Sunday &nbsp;&nbsp;&nbsp; 09 am - 03 pm
                                                </p>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<strong>We are Open 7 Days.</strong>} />
                                    </ListItem>
                                </List>
                                <Box p={3} mt={2}>
                                    <div className="sectional-heading2">Scan for Direction</div>
                                    {/* <Typography variant="h6">Scan for Direction</Typography> */}
                                    <Box>
                                        <img src={Scan.src} alt="scan" style={{ maxWidth: "60%" }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ) : null}
                    {isServicesAvailable ? (
                        <Box mt={5} className={`${router.pathname !== "/service/wisdom-teeth-removal" ? Styles.fixedService : null} order-lg-1 order-0`}>
                            <Box py={1.8} style={{ backgroundColor: "#115278", borderRadius: "1rem 1rem 0 0" }}>
                                <div className="sectional-heading1 text-white text-center">Services</div>
                                {/* <SectionalHeading variant="h5" align="center" title="Services" color="#fff" /> */}
                            </Box>
                            <Box p={3} style={{ backgroundColor: "#11527826", borderRadius: "0 0 1rem 1rem" }}>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/wisdom-teeth-removal/">Wisdom Teeth Removal</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/child-benefit/">Child Benefit</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/dental-implants/">Dental Implants</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/dentures/">Denture</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/teeth-whitening/">Teeth Whitening</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/crowns-and-bridge/">Crowns and Bridge</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/veneers/">Veneers</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/teeth-aligners/">Invisalign</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/root-canal/">Root Canal</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/teeth-cleaning/">Teeth Cleaning</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/dental-emergency/">Dental Emergency</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/tooth-fillings/">Tooth Fillings</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/smile-design/">Smile Design</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/digital-dentures/">Digital Dentures</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/implant-supported-denture/">Implant Supported Denture</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/denture-technology/">Denture Technology</a>
                                </div>
                                <div className="sectional-heading2 mt-3">
                                    <a href="/service/sleep-dentistry/">Sleep Dentistry</a>
                                </div>
                            </Box>
                        </Box>
                    ) : null}
                </Container>
            </aside>
        </>
    );
};

export default CommonSidebar;