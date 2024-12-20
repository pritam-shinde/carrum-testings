import { Container, Grid, Box } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Services from "./Data/Data";
import { SleepDentistryCard, SectionalHeading, PageSectionalHeading } from "../components";
// import { CustomCard, SectionalHeading } from "../../components";
import { useEffect, useState } from "react";

const SleepDentistrySlider = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])
    return (
        <>
            {/* <h3>Hello</h3> */}
            <Container maxWidth="xxl">
                <Grid container>
                    <Grid item xs={12} md={9} className="mx-auto"> 
                        <SectionalHeading variant="h2" title="Check out some of the amazing work" align={width > 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                        <Box alignSelf="center">
                        <Swiper
                                    slidesPerView={width > 992 ? 3 : width > 0 && width < 600 ? 1 : 2}
                                    spaceBetween={60}
                                    modules={[Navigation, Autoplay]}
                                    className="mySwiper py-4"
                                    // className="mySwiper py-4 px-md-5"
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={true}
                                    loop={true}
                                >
                                    {
                                        Services.map(item => <SwiperSlide key={item.id}>
                                            <SleepDentistryCard cardMedia={item.image} cardMediaAlt={item.alt} navlink={true} link={item.link} height="24rem" bgColor={false} cardList={null} />
                                        </SwiperSlide>)
                                    }
                                </Swiper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default SleepDentistrySlider
