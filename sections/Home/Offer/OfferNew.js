import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import {
  BlueFilledBtn,
  SectionalHeading,
} from "../../../components/components";
// import Offer1 from "../../../public/carrum-new/latest-offer_1.png";
// import Offer2 from "../../../public/carrum-new/latest-offer_2.png";
// import Offer3 from "../../../public/carrum-new/latest-offer_3.png";
// import Offer249 from "../../../public/carrum-new/latest-offer_4.png";
import Offer1 from "../../../public/carrum-new/latest-offer_1.jpg";
import Offer2 from "../../../public/carrum-new/latest-offer_2.jpg";
import Offer3 from "../../../public/carrum-new/latest-offer_3.jpg";
import Offer249 from "../../../public/carrum-new/latest-offer_4.jpg";
import { CheckCircleOutline } from "@mui/icons-material";

const OfferNew = () => {
  const offers = [
    {
      id: "Home_offer_Sec_Offer1",
      image: Offer249,
      title: "New Patient $249 Offer*",
      list: [
        "Comprehensive Dental Examination",
        "Scale & Clean",
        "Fluoride",
        "X-rays",
      ],
      price: "$249*",
      alt: "A smiling man showing thumbsup",
    },
    {
      id: "Home_offer_Sec_Offer2",
      image: Offer1,
      title: "*New Patient Offer - Scale & Clean with Full Check-up",
      list: ["Comprehensive Dental Examination", "Scale & Clean", "Fluoride"],
      price: "$199*",
      small: "or 4 equal payments of $49.75*",
    },
    {
      id: "Home_offer_Sec_Offer3",
      image: Offer2,
      title: "Dental Implant (implant, crown and abutment) Offer",
      list: [
        "At Carrum Down Dental Clinic we use the leading edge implant Kit from MIS Australia for all our Implant treatments.",
      ],
      para: "At Carrum Down Dental Clinic we use the leading edge implant Kit from MIS Australia for all our Implant treatments.",
      price: "$3900*",
    },
    {
      id: "Home_offer_Sec_Offer4",
      image: Offer3,
      title: "Take-Home Teeth Whitening Offer",
      list: [
        "Whitening Consultation with Dentist",
        "Whitening trays made to fit you",
        "Whitening Gel and Demonstration of how to use it",
      ],
      price: "$399*",
      small: "or $99.75 per fortnight on Afterpay*",
    },
  ];

  return (
    <Container maxWidth="xxl" style={{ padding: 0 }}>
      <Grid container>
        <Grid item xs={12} md={12} className="mx-auto">
          <Box py={3}>
            <Typography
              component="div"
              variant="h2"
              className="text-dark-blue text-start text-md-center fw-semibold px-4 pb-0 px-md-0"
              style={{
                fontSize: "clamp(40px,4vw,75px) !important",
                fontFamily: "var(--heading-font) !important",
              }}
            >
              Latest Offer
            </Typography>
          </Box>
          <Box py={3}>
            <Grid container spacing={3} style={{ padding: 0 }}>
              {offers.map((item) => (
                <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="shadow rounded-0"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        backgroundColor: "#115278",
                        color: "#fff",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        zIndex: 99,
                      }}
                    >
                      {item.price}
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          backgroundColor: `#19BEB9`,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "start",
                          opacity: 0,
                          padding: 3,
                          transition: "opacity 0.5s ease",
                          zIndex: 100,
                          "&:hover": {
                            opacity: 1,
                          },
                        }}
                      >
                        <Typography
                          variant="h3"
                          color="#000"
                          align="left"
                          gutterBottom
                          className="fs-3"
                        >
                          {item.title}
                        </Typography>
                        {item.list && (
                          <List>
                            {item.list.map((listItem, idx) => (
                              <ListItem
                                key={idx}
                                style={{
                                  color: "#000",
                                  padding: 0,
                                  paddingBottom: 3,
                                }}
                              >
                                <ListItemIcon>
                                  <CheckCircleOutline
                                    style={{ color: "#000" }}
                                  />
                                </ListItemIcon>
                                <ListItemText className="fs-5">
                                  {listItem}
                                </ListItemText>
                              </ListItem>
                            ))}
                          </List>
                        )}
                        {item.price && (
                          <div className="border-none w-100 px-5 py-2 py-lg-3 d-flex justify-content-center align-items-center bg--blue fw-bold rounded-3 fs-5">
                            {item.price}
                          </div>
                        )}
                        {item.small && (
                          <div className="text-dark fs-14">{item.small}</div>
                        )}
                      </Box>
                      <CardMedia
                        component="img"
                        image={item.image.src}
                        alt={item.alt}
                        sx={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box py={3}>
            <Box className="text-center">
              <BlueFilledBtn
                navlink={true}
                btnLink="/offer/"
                btnTitle="MORE AFTERPAY OFFERS"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OfferNew;
