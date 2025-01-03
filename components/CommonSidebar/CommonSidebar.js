import { Box, Container, Divider, List, ListItem, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Scan from "../../public/sidebar/scan.png";
import Styles from "../../styles/components-style/CommonSidebar/CommonSidebar.module.css";
import Link from "next/link";

const CommonSidebar = ({ isContactAvailable, isServicesAvailable }) => {
    const router = useRouter();
    const services = [
        { name: "Wisdom Teeth Removal", url: "/service/wisdom-teeth-removal/" },
        { name: "Child Benefit", url: "/service/child-benefit/" },
        { name: "Dental Implants", url: "/service/dental-implants/" },
        { name: "Denture", url: "/service/dentures/" },
        { name: "Teeth Whitening", url: "/service/teeth-whitening/" },
        { name: "Crowns and Bridge", url: "/service/crowns-and-bridge/" },
        { name: "Veneers", url: "/service/veneers/" },
        { name: "Invisalign", url: "/service/teeth-aligners/" },
        { name: "Root Canal", url: "/service/root-canal/" },
        { name: "Teeth Cleaning", url: "/service/teeth-cleaning/" },
        { name: "Dental Emergency", url: "/service/dental-emergency/" },
        { name: "Tooth Fillings", url: "/service/tooth-fillings/" },
        { name: "Smile Design", url: "/service/smile-design/" },
        { name: "Digital Dentures", url: "/service/digital-dentures/" },
        { name: "Implant Supported Denture", url: "/service/implant-supported-denture/" },
        { name: "Denture Technology", url: "/service/denture-technology/" },
        { name: "Sleep Dentistry", url: "/service/sleep-dentistry/" },
    ];
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
                                        <ListItemText primary={<strong>E-mail</strong>} secondary={<a className='fs-15 text-dark-blue' href="mailto:carrumdownsdental@gmail.com">carrumdownsdental@gmail.com</a>} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<strong>Phone</strong>} secondary={
                                            <a href="tel:03-9782 1200" className='text-dark-blue'>03-9782 1200</a>} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={<strong>Opening hours</strong>}
                                            secondary={
                                                <span style={{ marginBottom: "0 !important" }}>
                                                    Mon - Sat 09 am - 06 pm <br />
                                                    Sunday &nbsp;&nbsp;&nbsp; 09 am - 03 pm
                                                </span>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<strong>We are Open 7 Days.</strong>} />
                                    </ListItem>
                                </List>
                                <Box px={2} mt={1}>
                                    <div className="sectional-heading2 text-start">Scan for Direction</div>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: { xs: 'center', md: "flex-start", lg: 'flex-start' },
                                        justifyContent: 'center',
                                        maxWidth: '250px'
                                    }}>
                                        <img src={Scan.src} alt="scan" style={{ maxWidth: "100%" }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ) : null}
                    {isServicesAvailable ? (
                        <Box mt={5} className={`${router.pathname !== "/service/wisdom-teeth-removal" ? Styles.fixedService : null} order-lg-1 order-0`}>
                            <Box py={1.8} style={{ backgroundColor: "#115278", borderRadius: "1rem 1rem 0 0" }}>
                                <div className="sectional-heading1 text-white text-center">Services</div>
                            </Box>
                            <Box p={3} style={{ backgroundColor: "#11527826", borderRadius: "0 0 1rem 1rem" }}>
                                {services.map((service, index) => (
                                    <div key={index} className="sectional-heading2 mt-3">
                                        <Link href={service.url}>
                                            <a className="text-dark-blue" >
                                                {service.name}
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                            </Box>
                        </Box>
                    ) : null}
                </Container>
            </aside>
        </>
    );
};

export default CommonSidebar;