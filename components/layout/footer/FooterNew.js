import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../../../public/footer/logo_new.png";
import { BlueFilledBtn } from "../../components";

const FooterNew = () => {
  return (
    <>
      <footer
        className="footer-bg"
        style={{
          boxShadow: "0 1rem 2rem rgba(0,0,0,0.5)",

          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1) 50%, transparent 60%), url("/carrum-new/footer-image.png")`,
          backgroundSize: "100% 100%",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          maxWidth="xxl"
          id="service"
        // sx={{ padding: { xs: "40px 0px 40px 0px", md: "80px 0px 80px 0px" } }}
        >
          <Grid container gap={6}>
            <Grid item xs={12} md={10} className="mx-auto">
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <img
                  src={Logo.src}
                  alt="carrumdowns dental clinic logo"
                  style={{ width: "100%", maxWidth: "320px" }}
                />
                <Stack spacing={2}>
                  <Typography component="span" variant="body1" fontWeight={600}>
                    SUBSCRIBE TO NEWSLETTER
                  </Typography>
                  <Box display="flex">
                    <TextField
                      placeholder="Enter email address"
                      variant="outlined"
                      className="bg-transparent"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderTopRightRadius: "0px",
                          borderBottomRightRadius: "0px",
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      className="btn-color"
                      style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                    >
                      Send
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={10} className="mx-auto">
              <Stack direction={{ xs: "column", md: "row" }} spacing={12}>
                <Stack flex={{ xs: 1, md: 0.9, lg: 1 }}>
                  <Typography className="footer-sec-head" gutterBottom>
                    About Us
                  </Typography>
                  <Typography variant="body2">
                    Carrum Downs Dental at Shop T5, Hall Road is committed to
                    applying our dental knowledge and skills in a caring and
                    gentle way. You will feel at ease while we work on your
                    smile. Learn more about our dentist in Carrum Downs.
                  </Typography>
                  <BlueFilledBtn
                    navlink={true}
                    btnTitle="BOOK APPOINTMENT"
                    btnLink="/book-now/"
                    sx={{ width: "fit-content", margin: 0 }}
                  />
                </Stack>
                <Stack
                  flex={{ xs: 1, md: 1.1, lg: 1 }}
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Stack flex={{ xs: 1.2, md: 1 }}>
                    <Typography className="footer-sec-head" gutterBottom>
                      Quick Links
                    </Typography>

                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {[
                        "Home",
                        "About Us",
                        "Services",
                        "Blog",
                        "Contact Us",
                        "Privacy Policy",
                        "Terms & Conditions",
                      ].map((link, index) => (
                        <li key={index}>
                          <a
                            href={`/${link
                              .replace(/\s+/g, "-")
                              .toLowerCase()}/`}
                            className="text-dark"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Stack>
                  <Stack flex={{ xs: 0.8, md: 1 }}>
                    <Typography className="footer-sec-head" gutterBottom>
                      Opening Hours
                    </Typography>
                    {[
                      {
                        // title: "Monday",
                        // timing: "9:00am - 6:00pm" ,
                        title: "MON",
                        timing: "9AM - 6PM",
                      },
                      {
                        // title: "Tuesday",
                        // timing: "9:00am - 6:00pm" ,
                        title: "TUE",
                        timing: "9AM - 6PM",
                      },
                      {
                        // title: "Wednesday",
                        // timing: "9:00am - 6:00pm" ,
                        title: "WED",
                        timing: "9AM - 6PM",
                      },
                      {
                        // title: "Thursday",
                        // timing: "9:00am - 6:00pm" ,
                        title: "THU",
                        timing: "9AM - 6PM",
                      },
                      {
                        // title: "Friday",
                        // timing: "9:00am - 6:00pm" ,
                        title: "FRI",
                        timing: "9AM - 6PM",
                      },
                      {
                        // title: "Saturday",
                        // timing: "9:00am - 6:00pm" ,
                        title: "SAT",
                        timing: "9AM - 6PM",
                      },
                      {
                        // title: "Sunday",
                        // timing: "9:00am - 3:00pm" ,
                        title: "SUN",
                        timing: "9AM - 3PM",
                      },
                    ].map((x, index) => (
                      <Stack
                        key={index}
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        gap={4}
                      >
                        <span>{x.title}</span>
                        <span>{x.timing}</span>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={10} className="mx-auto">
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={4}
                justifyContent={"center"}
                sx={{
                  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  padding: "16px 0 16px 0",
                }}
              >
                <a href="/dentist-in-skye/" className="nav-link">
                  Skye
                </a>

                <a href="/dentist-in-sandhurst/" className="nav-link">
                  Sandhurst
                </a>

                <a href="/dentist-in-patterson-lakes/" className="nav-link">
                  Patterson Lakes
                </a>

                <a href="/dentist-in-cranbourne-west/" className="nav-link">
                  Cranbourne West
                </a>

                <a href="/dentist-in-frankston-north/" className="nav-link">
                  Frankston North
                </a>

                <a href="/dentist-in-seaford/" className="nav-link">
                  Seaford
                </a>

                <a href="/dentist-in-lyndhurst/" className="nav-link">
                  Lyndhurst
                </a>

                <a href="/dentist-in-langwarrin/" className="nav-link">
                  Langwarrin
                </a>
              </Stack>
            </Grid>
            <Grid item xs={12} md={10} className="mx-auto">
              <Typography fontWeight={500} align="center">
                Copy Right {new Date().getFullYear()} | carrumdownsdental.com.au
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default FooterNew;

// import { Copyright, Home, Mail, Phone } from '@mui/icons-material'
// import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material'
// import React from 'react'
// import Logo from '../../../public/footer/logo_new.png'
// import { BlueFilledBtn, SocialIcons } from '../../components'

// const FooterNew = () => {
//   return (
//     <>
//       <footer className='footer-bg' style={{ boxShadow: '0 1rem 2rem rgba(0,0,0,0.5)' }}>
//         <Box sx={{
//           backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1) 50%, transparent 60%), url("/carrum-new/footer-image.png")`,
//           backgroundSize: "100% 100%",
//           backgroundPosition: "top center",
//           backgroundRepeat: "no-repeat",
//           py: 2,
//         }}>
//           <Container maxWidth="xxl" className="px-xl-4">
//             <Grid container>
//               <Grid item xs={12}>
//                 <Box py={0} >
//                   <Grid container>
//                     <Grid item xs={12} xl={10} className="mx-auto">
//                       <Box>
//                         <Grid container>
//                           <Grid item xs={12} sm={6}>
//                             <Box className='d-flex justify-content-md-start justify-content-center align-items-center'>
//                               <img src={Logo.src} alt="carrumdowns dental clinic logo" style={{ maxWidth: "50%" }} />
//                             </Box>
//                           </Grid>
//                           <Grid item xs={12} sm={6} className='d-flex justify-content-md-end justify-content-center align-items-center mt-md-0 mt-2'>
//                             <Box>
//                               <Typography variant="h4" className='text-uppercase'
//                                 style={{ fontSize: 'clamp(18px,4vw,23px) !important' }}
//                               >Subscribe to Newsletter</Typography>
//                               <Box display="flex" mt={1}>
//                                 <TextField
//                                   placeholder="Enter email address"
//                                   variant="outlined"
//                                   size="small"
//                                   className='bg-transparent rounded-2 border border-dark'
//                                 />
//                                 <Button variant="contained" className='p-0 btn-color'>
//                                   Send
//                                 </Button>
//                               </Box>
//                             </Box>
//                           </Grid>
//                         </Grid>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} xl={10} className="mx-auto">
//                 <Box py={3}>
//                   <Grid container spacing={4} style={{ display: "flex", justifyContent: "space-around" }}>
//                     <Grid item xs={12} md={6} style={{ maxWidth: "500px", width: "100%" }}>
//                       <Typography className="footer-sec-head" gutterBottom>About Us</Typography>
//                       <Typography variant="body2">
//                         Carrum Downs Dental at Shop T5, Hall Road is committed to applying our dental knowledge and skills in a caring and gentle way. You will feel at ease while we work on your smile. Learn more about our dentist in Carrum Downs.
//                       </Typography>
//                       <BlueFilledBtn navlink={true} btnTitle="BOOK APPOINTMENT" btnLink="/book-now/" />
//                     </Grid>

//                     <Grid item xs={12} md={6}>
//                       <Grid container justifyContent="flex-end" spacing={4}>

//                         <Grid item xs={12} sm={6}>
//                           <Typography className="footer-sec-head" gutterBottom>Quick Links</Typography>

//                           <ul style={{ listStyle: 'none', padding: 0 }}>
//                             {['Home', 'About Us', 'Services', 'Blog', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
//                               <li key={link}>
//                                 <a href={`/${link.replace(/\s+/g, '-').toLowerCase()}/`} className='text-dark'>
//                                   {link}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                           <Box>
//                             <Typography className="footer-sec-head" gutterBottom>OPENING HOURS</Typography>
//                             <Box className='d-flex justify-content-between'>
//                               <ul className='p-0'>
//                                 <li>Monday</li>
//                                 <li>Tuesday</li>
//                                 <li>Wednesday</li>
//                                 <li>Thursday</li>
//                                 <li>Friday</li>
//                                 <li>Saturday</li>
//                                 <li>Sunday</li>
//                               </ul>
//                               <ul className='p-0'>
//                                 <li>9:00am - 6:00pm</li>
//                                 <li>9:00am - 6:00pm</li>
//                                 <li>9:00am - 6:00pm</li>
//                                 <li>9:00am - 6:00pm</li>
//                                 <li>9:00am - 6:00pm</li>
//                                 <li>9:00am - 6:00pm</li>
//                                 <li>9:00am - 3:00pm</li>
//                               </ul>
//                             </Box>
//                           </Box>
//                         </Grid>

//                       </Grid>
//                     </Grid>
//                   </Grid>

//                   <Box py={1} mt={3} className='d-flex justify-content-center align-items-center mb-md-0 mb-5' style={{ borderTop: "2.5px solid rgba(0, 0, 0, 0.1)", borderBottom: "2.5px solid rgba(0, 0, 0, 0.1)" }}>
//                     <ul className='d-flex p-0 mb-0 flex-wrap'>
//                       <li className='mx-2'>
//                         <a href="/dentist-in-skye/" className='nav-link'>Skye</a>
//                       </li>
//                       <li className='mx-2'>
//                         <a href="/dentist-in-sandhurst/" className='nav-link'>Sandhurst</a>
//                       </li>
//                       <li className='mx-2'>
//                         <a href="/dentist-in-patterson-lakes/" className='nav-link'>Patterson Lakes</a>
//                       </li>
//                       <li className='mx-2'>
//                         <a href="/dentist-in-cranbourne-west/" className='nav-link'>Cranbourne West</a>
//                       </li>
//                       <li className='mx-2'>
//                         <a href="/dentist-in-frankston-north/" className='nav-link'>Frankston North</a>
//                       </li>
//                       <li className='mx-2'>
//                         <a href="/dentist-in-seaford/" className='nav-link'>Seaford</a>
//                       </li>
//                       <li className='mx-2'>
//                         <a href="/dentist-in-lyndhurst/" className='nav-link'>Lyndhurst</a>
//                       </li>
//                       <li className='mx-2'>
//                         <a href="/dentist-in-langwarrin/" className='nav-link'>Langwarrin</a>
//                       </li>
//                     </ul>
//                   </Box>
//                   <Box pt={2}>
//                     <Typography align='center'><Copyright />{new Date().getFullYear()} | carrumdownsdental.com.au</Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box >
//       </footer >
//     </>
//   )
// }

// export default FooterNew
